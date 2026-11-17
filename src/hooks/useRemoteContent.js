import { useEffect, useState } from "react";
import {
	CONTENT_CACHE_TTL,
	getInitialContent,
	isContentData,
	saveContentCache
} from "../utils/contentCache.js";

export function useRemoteContent(key, url, fallback, generatedAt) {
	const [initial] = useState(() => getInitialContent(key, fallback, generatedAt));
	const [data, setData] = useState(initial.data);
	const [loading, setLoading] = useState(initial.data.length === 0);
	const [error, setError] = useState(false);

	useEffect(() => {
		if (Date.now() - initial.updatedAt < CONTENT_CACHE_TTL) {
			setLoading(false);
			return;
		}

		const controller = new AbortController();
		const timeout = window.setTimeout(() => controller.abort(), 15000);
		let active = true;

		const refreshContent = async () => {
			try {
				const response = await fetch(url, { signal: controller.signal });
				if (!response.ok) throw new Error(`HTTP ${response.status}`);

				const nextData = await response.json();
				if (!isContentData(nextData)) throw new Error("Contenido inválido");
				if (!active) return;

				saveContentCache(key, nextData);
				setData(nextData);
				setError(false);
			} catch (err) {
				if (!active) return;
				console.error(`Error actualizando ${key}:`, err);
				setError(initial.data.length === 0);
			} finally {
				window.clearTimeout(timeout);
				if (active) setLoading(false);
			}
		};

		refreshContent();

		return () => {
			active = false;
			window.clearTimeout(timeout);
			controller.abort();
		};
	}, [initial, key, url]);

	return { data, loading, error };
}
