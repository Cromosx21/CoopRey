import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";
import { heroContentUrl, newsContentUrl } from "../src/data/contentSources.js";
import { isContentData } from "../src/utils/contentCache.js";

const projectDir = fileURLToPath(new URL("../", import.meta.url));
const snapshotPath = path.join(projectDir, "src/data/contentSnapshot.json");
const outputDir = path.join(projectDir, "public/images/content");
const widths = [480, 768, 1280, 1920];

const fetchJson = async (url) => {
	const response = await fetch(url, { signal: AbortSignal.timeout(30000) });
	if (!response.ok) throw new Error(`HTTP ${response.status}`);

	const data = await response.json();
	if (!isContentData(data)) throw new Error("La respuesta debe ser una lista de registros");
	return data;
};

const previous = JSON.parse(await fs.readFile(snapshotPath, "utf8"));
const [hero, news] = await Promise.allSettled([
	fetchJson(heroContentUrl),
	fetchJson(newsContentUrl)
]);

for (const result of [hero, news]) {
	if (result.status === "rejected") console.warn("Se conserva la copia local:", result.reason.message);
}

const snapshot = {
	generatedAt: hero.status === "fulfilled" && news.status === "fulfilled"
		? new Date().toISOString() : previous.generatedAt,
	hero: hero.status === "fulfilled" ? hero.value : previous.hero,
	news: news.status === "fulfilled" ? news.value : previous.news,
	images: { ...previous.images }
};

const urls = [
	...snapshot.hero.flatMap((item) => [item.web, item.celular]),
	...snapshot.news.map((item) => item["Linck Imagen"])
];
const ids = [...new Set(urls.map((url) => url?.match(/\/d\/([\w-]+)/)?.[1]).filter(Boolean))];
await fs.mkdir(outputDir, { recursive: true });

let totalBytes = 0;

for (const id of ids) {
	try {
		const response = await fetch(`https://drive.google.com/thumbnail?id=${id}&sz=w1920`, {
			signal: AbortSignal.timeout(30000)
		});
		if (!response.ok) throw new Error(`HTTP ${response.status}`);

		const input = Buffer.from(await response.arrayBuffer());
		const images = {};
		for (const width of widths) {
			const filename = `${id}-${width}.webp`;
			const { data: output, info } = await sharp(input)
				.rotate()
				.resize({ width, withoutEnlargement: true })
				.webp({ quality: 82, effort: 6 })
				.toBuffer({ resolveWithObject: true });
			await fs.writeFile(path.join(outputDir, filename), output);
			images[width] = { src: `/images/content/${filename}`, width: info.width };
			totalBytes += output.length;
		}
		snapshot.images[id] = images;
	} catch (error) {
		console.warn(`No se pudo optimizar ${id}:`, error.message);
	}
}

if (!snapshot.hero.length && !snapshot.news.length) {
	throw new Error("No hay contenido disponible para la copia local");
}

await fs.writeFile(snapshotPath, `${JSON.stringify(snapshot, null, "\t")}\n`);
console.log(JSON.stringify({
	hero: snapshot.hero.length,
	news: snapshot.news.length,
	images: Object.keys(snapshot.images).length,
	optimizedKB: Math.round(totalBytes / 1024)
}));
