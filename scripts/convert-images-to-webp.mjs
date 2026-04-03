import fs from "node:fs/promises";
import path from "node:path";
import sharp from "sharp";

const supportedExtensions = new Set([".jpg", ".jpeg", ".png"]);

const toWebpPath = (filePath) => {
	const ext = path.extname(filePath);
	return filePath.slice(0, -ext.length) + ".webp";
};

const walk = async (dirPath) => {
	const entries = await fs.readdir(dirPath, { withFileTypes: true });
	const results = [];

	for (const entry of entries) {
		const fullPath = path.join(dirPath, entry.name);
		if (entry.isDirectory()) {
			results.push(...(await walk(fullPath)));
			continue;
		}
		results.push(fullPath);
	}

	return results;
};

const fileExists = async (filePath) => {
	try {
		await fs.access(filePath);
		return true;
	} catch {
		return false;
	}
};

const main = async () => {
	const imagesDir = path.join(process.cwd(), "public", "images");
	const files = await walk(imagesDir);

	let converted = 0;
	let skipped = 0;
	let failed = 0;

	for (const filePath of files) {
		const ext = path.extname(filePath).toLowerCase();
		if (!supportedExtensions.has(ext)) continue;

		const outputPath = toWebpPath(filePath);
		if (await fileExists(outputPath)) {
			skipped += 1;
			continue;
		}

		try {
			await sharp(filePath)
				.toFormat("webp", { quality: 80, effort: 6 })
				.toFile(outputPath);
			converted += 1;
		} catch (error) {
			failed += 1;
			console.error(`Failed: ${filePath}`);
			console.error(error);
		}
	}

	console.log(
		JSON.stringify(
			{
				converted,
				skipped,
				failed,
				outputDir: "public/images",
			},
			null,
			2,
		),
	);

	if (failed) process.exitCode = 1;
};

await main();
