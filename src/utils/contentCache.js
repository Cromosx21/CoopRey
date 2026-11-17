export const CONTENT_CACHE_TTL = 5 * 60 * 1000;
const MAX_CACHE_AGE = 24 * 60 * 60 * 1000;

export function isContentData(data) {
	return Array.isArray(data) && data.every(
		(item) => item !== null && typeof item === "object" && !Array.isArray(item)
	);
}

export function getInitialContent(key, fallback, generatedAt) {
	const initial = { data: fallback, updatedAt: 0 };

	try {
		const cached = JSON.parse(localStorage.getItem(key));
		const now = Date.now();

		if (!cached || !isContentData(cached.data)) return initial;
		if (!Number.isFinite(cached.updatedAt) || cached.updatedAt > now) return initial;
		if (now - cached.updatedAt > MAX_CACHE_AGE) return initial;
		if (cached.updatedAt < Date.parse(generatedAt)) return initial;

		return cached;
	} catch {
		return initial;
	}
}

export function saveContentCache(key, data) {
	try {
		localStorage.setItem(key, JSON.stringify({ data, updatedAt: Date.now() }));
	} catch {
		// La página sigue funcionando cuando el navegador bloquea el almacenamiento.
	}
}
