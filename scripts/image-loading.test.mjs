import assert from "node:assert/strict";
import fs from "node:fs";
import { afterEach, test } from "node:test";
import {
	getInitialContent,
	isContentData,
	saveContentCache
} from "../src/utils/contentCache.js";

const originalStorage = Object.getOwnPropertyDescriptor(globalThis, "localStorage");
const fallback = [{ Nombre: "Copia local" }];
const generatedAt = new Date(Date.now() - 60000).toISOString();

function mockStorage(value) {
	Object.defineProperty(globalThis, "localStorage", {
		configurable: true,
		value: {
			getItem: () => value,
			setItem: (_key, next) => { value = next; }
		}
	});
}

afterEach(() => {
	if (originalStorage) Object.defineProperty(globalThis, "localStorage", originalStorage);
	else delete globalThis.localStorage;
});

test("muestra la copia local cuando no hay caché o está dañada", () => {
	for (const value of [null, "{", '{"data":{}}']) {
		mockStorage(value);
		assert.deepEqual(getInitialContent("hero", fallback, generatedAt).data, fallback);
	}
});

test("descarta caché antigua, futura o anterior a la copia publicada", () => {
	for (const updatedAt of [Date.now() - 25 * 3600000, Date.now() + 60000, 0]) {
		mockStorage(JSON.stringify({ data: [{ Nombre: "Antigua" }], updatedAt }));
		assert.deepEqual(getInitialContent("hero", fallback, generatedAt).data, fallback);
	}
});

test("guarda y recupera contenido reciente, incluyendo listas vacías", () => {
	mockStorage(null);
	for (const data of [[{ Nombre: "Actualizada" }], []]) {
		saveContentCache("hero", data);
		assert.deepEqual(getInitialContent("hero", fallback, generatedAt).data, data);
	}
});

test("funciona cuando el navegador bloquea el almacenamiento", () => {
	Object.defineProperty(globalThis, "localStorage", {
		configurable: true,
		get() { throw new Error("Almacenamiento bloqueado"); }
	});
	assert.deepEqual(getInitialContent("hero", fallback, generatedAt).data, fallback);
	assert.doesNotThrow(() => saveContentCache("hero", fallback));
});

test("rechaza respuestas que no son listas de registros", () => {
	for (const data of [null, {}, [null], ["Error"], [[]]]) {
		assert.equal(isContentData(data), false);
	}
	assert.equal(isContentData([]), true);
	assert.equal(isContentData(fallback), true);
});

test("la copia publicada incluye sus variantes locales de imagen", () => {
	const snapshot = JSON.parse(fs.readFileSync(
		new URL("../src/data/contentSnapshot.json", import.meta.url), "utf8"
	));
	assert(snapshot.hero.length > 0);
	assert(snapshot.news.length > 0);

	for (const variants of Object.values(snapshot.images)) {
		for (const width of [480, 768, 1280, 1920]) {
			const image = variants[width];
			assert(image.width > 0 && image.width <= width);
			assert(fs.existsSync(new URL(`../public${image.src}`, import.meta.url)));
		}
	}
});
