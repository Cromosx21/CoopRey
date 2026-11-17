import snapshot from "../data/contentSnapshot.json";

export function getDriveId(url) {
	try {
		const parsed = new URL(url);
		if (parsed.hostname !== "drive.google.com") return "";

		const id = parsed.pathname.match(/\/d\/([^/]+)/)?.[1] || parsed.searchParams.get("id");
		return /^[\w-]+$/.test(id || "") ? id : "";
	} catch {
		return "";
	}
}

export function getDriveImage(url, width = 1280) {
	const id = getDriveId(url);
	if (!id) return "";

	return snapshot.images[id]?.[width]?.src
		|| `https://drive.google.com/thumbnail?id=${id}&sz=w${width}`;
}

export function getDriveImageSet(url, widths) {
	const id = getDriveId(url);
	if (!id) return undefined;

	const sources = new Map(widths.map((width) => [
		snapshot.images[id]?.[width]?.width || width,
		getDriveImage(url, width)
	]));

	return [...sources].map(([width, src]) => `${src} ${width}w`).join(", ");
}
