import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import sharp from "sharp";

const imagesDir = fileURLToPath(new URL("../public/images/", import.meta.url));
const files = await fs.readdir(imagesDir, { recursive: true, withFileTypes: true });
let beforeBytes = 0;
let afterBytes = 0;
let optimized = 0;

for (const entry of files) {
	if (!entry.isFile() || !entry.name.endsWith(".webp")) continue;

	const filename = path.join(entry.parentPath, entry.name);
	if (filename.startsWith(`${path.join(imagesDir, "content")}${path.sep}`)) continue;

	const input = await fs.readFile(filename);
	if (input.length < 200 * 1024) continue;

	const isPortrait = filename.includes(`${path.sep}Personal${path.sep}`);
	const width = isPortrait ? 768 : 1600;
	const height = isPortrait ? 1024 : 1600;
	const metadata = await sharp(input).metadata();
	if (metadata.width <= width && metadata.height <= height) continue;

	const output = await sharp(input)
		.rotate()
		.resize({
			width,
			height,
			fit: "inside",
			withoutEnlargement: true
		})
		.webp({ quality: 82, effort: 6 })
		.toBuffer();
	if (output.length >= input.length) continue;

	await fs.writeFile(filename, output);
	beforeBytes += input.length;
	afterBytes += output.length;
	optimized += 1;
	console.log(`${path.relative(imagesDir, filename)}: ${Math.round(input.length / 1024)} → ${Math.round(output.length / 1024)} KB`);
}

console.log(JSON.stringify({ optimized, beforeBytes, afterBytes }));
