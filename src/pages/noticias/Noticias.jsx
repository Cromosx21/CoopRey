import React, { useState, useEffect, useMemo } from "react";
import { motion, AnimatePresence } from "motion/react";
import {
	Tag,
	Calendar,
	User,
	ArrowRight,
	X,
	Sparkles,
	ImageOff,
	ChevronLeft,
	ChevronRight,
} from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import snapshot from "../../data/contentSnapshot.json";
import { newsContentUrl } from "../../data/contentSources.js";
import { useRemoteContent } from "../../hooks/useRemoteContent.js";
import { getDriveImage, getDriveImageSet } from "../../utils/driveImages.js";

// Paleta de acentos por categoría: da variedad visual sin depender del azar.
// Se elige de forma determinística según el texto de la categoría.
const CATEGORY_STYLES = [
	{ chip: "bg-emerald-600", text: "text-emerald-700", soft: "bg-emerald-50", ring: "ring-emerald-200" },
	{ chip: "bg-amber-500", text: "text-amber-700", soft: "bg-amber-50", ring: "ring-amber-200" },
	{ chip: "bg-sky-600", text: "text-sky-700", soft: "bg-sky-50", ring: "ring-sky-200" },
	{ chip: "bg-rose-500", text: "text-rose-700", soft: "bg-rose-50", ring: "ring-rose-200" },
	{ chip: "bg-violet-600", text: "text-violet-700", soft: "bg-violet-50", ring: "ring-violet-200" },
];

function getCategoryStyle(categoria = "") {
	let hash = 0;
	for (let i = 0; i < categoria.length; i++) {
		hash = categoria.charCodeAt(i) + ((hash << 5) - hash);
	}
	const index = Math.abs(hash) % CATEGORY_STYLES.length;
	return CATEGORY_STYLES[index];
}

// Genera la lista de páginas a mostrar, con "..." cuando hay muchas
function getPageNumbers(current, total) {
	if (total <= 5) {
		return Array.from({ length: total }, (_, i) => i + 1);
	}

	const pages = new Set([1, total, current, current - 1, current + 1]);
	const sorted = Array.from(pages)
		.filter((p) => p >= 1 && p <= total)
		.sort((a, b) => a - b);

	const withGaps = [];
	sorted.forEach((page, idx) => {
		if (idx > 0 && page - sorted[idx - 1] > 1) {
			withGaps.push("...");
		}
		withGaps.push(page);
	});

	return withGaps;
}

function NewsImage({ src, alt, className, priority = false, sizes }) {
	const [failedSrc, setFailedSrc] = useState(null);

	if (!src || failedSrc === src) {
		return (
			<div className={`flex items-center justify-center bg-gradient-to-br from-emerald-50 to-emerald-100 ${className}`}>
				<ImageOff className="w-8 h-8 text-emerald-300" />
			</div>
		);
	}

	return (
		<img
			src={getDriveImage(src, 1280)}
			srcSet={getDriveImageSet(src, [480, 768, 1280])}
			sizes={sizes || "(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"}
			alt={alt}
			onError={() => setFailedSrc(src)}
			className={className}
			loading={priority ? "eager" : "lazy"}
			fetchPriority={priority ? "high" : "auto"}
			decoding="async"
		/>
	);
}

function SkeletonCard() {
	return (
		<div className="rounded-2xl overflow-hidden border border-gray-200 bg-white animate-pulse">
			<div className="h-48 bg-gray-200" />
			<div className="p-6 space-y-3">
				<div className="h-3 w-20 bg-gray-200 rounded" />
				<div className="h-4 w-full bg-gray-200 rounded" />
				<div className="h-4 w-2/3 bg-gray-200 rounded" />
				<div className="h-3 w-full bg-gray-100 rounded mt-4" />
				<div className="h-3 w-3/4 bg-gray-100 rounded" />
				<div className="h-10 w-full bg-gray-100 rounded-lg mt-4" />
			</div>
		</div>
	);
}

export default function Noticias() {
	const { data, loading, error } = useRemoteContent(
		"cooprey:news:v1",
		newsContentUrl,
		snapshot.news,
		snapshot.generatedAt
	);
	const noticias = useMemo(() => [...data]
		.sort((a, b) => new Date(b.Fecha) - new Date(a.Fecha))
		.map((item, index) => ({
			id: index + 1,
			titulo: item["Título"],
			categoria: item["Categoría"],
			resumen: item["Descripción"],
			fecha: new Date(item.Fecha).toLocaleDateString("es-PE"),
			autor: "CoopRey",
			imagen: item["Linck Imagen"]
		})), [data]);
	const [currentPage, setCurrentPage] = useState(1);

	// Noticia seleccionada para el modal
	const [selectedNoticia, setSelectedNoticia] = useState(null);

	const pageSize = 6;

	const totalPages = Math.ceil(noticias.length / pageSize);

	const startIndex = (currentPage - 1) * pageSize;

	const paginatedNoticias = noticias.slice(
		startIndex,
		startIndex + pageSize
	);

	// En la primera página, la noticia más reciente se muestra como destacada
	const featuredNoticia =
		currentPage === 1 && paginatedNoticias.length > 0
			? paginatedNoticias[0]
			: null;

	const gridNoticias = featuredNoticia
		? paginatedNoticias.slice(1)
		: paginatedNoticias;

	const handlePageChange = (page) => {
		if (page < 1 || page > totalPages || page === currentPage) return;

		setCurrentPage(page);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	// Abrir modal
	const handleOpenModal = (noticia) => {
		setSelectedNoticia(noticia);
		document.body.style.overflow = "hidden";
	};

	// Cerrar modal
	const handleCloseModal = () => {
		setSelectedNoticia(null);
		document.body.style.overflow = "auto";
	};

	// Cerrar con tecla ESC
	useEffect(() => {
		const handleKeyDown = (event) => {
			if (event.key === "Escape") {
				handleCloseModal();
			}
		};

		window.addEventListener("keydown", handleKeyDown);

		return () => {
			window.removeEventListener("keydown", handleKeyDown);
			document.body.style.overflow = "auto";
		};
	}, []);

	const pageNumbers = getPageNumbers(currentPage, totalPages);

	return (
		<div className="pt-24 sm:pt-28 lg:pt-32 pb-16 sm:pb-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Heading */}
				<div className="mb-10 sm:mb-12 text-center">
					<SectionHeading
						badge="Noticias"
						title="Noticias"
						subtitle="Comunicados y actualizaciones"
					/>

					<p className="mt-4 text-gray-600 max-w-2xl mx-auto text-sm sm:text-base">
						Consulta las últimas novedades y comunicados de
						CoopRey, ordenados de más recientes a más antiguos.
					</p>
				</div>

				{/* Loading */}
				{loading && (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
						{Array.from({ length: 6 }).map((_, i) => (
							<SkeletonCard key={i} />
						))}
					</div>
				)}

				{/* Error */}
				{!loading && error && (
					<div className="text-center py-16 px-4">
						<div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-red-50 mb-4">
							<ImageOff className="w-6 h-6 text-red-400" />
						</div>
						<p className="text-gray-700 font-medium">
							No se pudieron cargar las noticias
						</p>
						<p className="text-gray-500 text-sm mt-1">
							Intenta recargar la página en unos momentos.
						</p>
					</div>
				)}

				{/* Noticia destacada */}
				{!loading && !error && featuredNoticia && (
					<motion.article
						className="mb-8 sm:mb-10 group cursor-pointer"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						onClick={() => handleOpenModal(featuredNoticia)}
					>
						<div className="rounded-2xl sm:rounded-3xl overflow-hidden border border-gray-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300 bg-white flex flex-col lg:flex-row">

							{/* Imagen */}
							<div className="relative w-full lg:w-1/2 h-56 sm:h-72 lg:h-auto overflow-hidden">
								<NewsImage
									src={featuredNoticia.imagen}
									alt={featuredNoticia.titulo}
									priority
									sizes="(min-width: 1024px) 50vw, 100vw"
									className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
								/>
								<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/0 to-transparent lg:bg-gradient-to-r lg:from-black/10 lg:via-transparent lg:to-transparent" />

								<div className="absolute top-4 left-4 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-white/95 backdrop-blur text-xs font-semibold text-amber-600 shadow-sm">
									<Sparkles className="w-3.5 h-3.5" />
									Última noticia
								</div>
							</div>

							{/* Contenido */}
							<div className="w-full lg:w-1/2 p-6 sm:p-8 lg:p-10 flex flex-col justify-center">
								<span
									className={`inline-flex w-fit items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-semibold uppercase mb-4 ${getCategoryStyle(featuredNoticia.categoria).soft} ${getCategoryStyle(featuredNoticia.categoria).text}`}
								>
									<Tag className="w-3 h-3" />
									{featuredNoticia.categoria}
								</span>

								<h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight group-hover:text-emerald-700 transition-colors">
									{featuredNoticia.titulo}
								</h3>

								<p className="text-gray-600 mt-3 sm:mt-4 text-sm sm:text-base line-clamp-3">
									{featuredNoticia.resumen}
								</p>

								<div className="flex items-center gap-4 mt-5 sm:mt-6 text-xs sm:text-sm text-gray-500">
									<div className="flex items-center gap-1.5">
										<Calendar className="w-4 h-4 text-emerald-600" />
										<span>{featuredNoticia.fecha}</span>
									</div>
									<div className="flex items-center gap-1.5">
										<User className="w-4 h-4 text-emerald-600" />
										<span>{featuredNoticia.autor}</span>
									</div>
								</div>

								<button
									onClick={(e) => {
										e.stopPropagation();
										handleOpenModal(featuredNoticia);
									}}
									className="mt-6 sm:mt-7 w-fit px-5 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all font-medium inline-flex items-center gap-2 shadow-sm"
								>
									<span>Leer más</span>
									<ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
								</button>
							</div>
						</div>
					</motion.article>
				)}

				{/* Noticias */}
				{!loading && !error && gridNoticias.length > 0 && (
					<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">

						{gridNoticias.map((noticia, idx) => {
							const style = getCategoryStyle(noticia.categoria);

							return (
								<motion.article
									key={noticia.id}
									className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group flex flex-col cursor-pointer"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: Math.min(idx * 0.05, 0.3),
									}}
									whileHover={{ y: -6 }}
									onClick={() => handleOpenModal(noticia)}
								>

									{/* Imagen */}
									<div className="relative h-44 sm:h-48 overflow-hidden">
										<NewsImage
											src={noticia.imagen}
											alt={noticia.titulo}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>

										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors" />

										<span
											className={`absolute top-3 left-3 inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[11px] font-semibold uppercase text-white shadow-sm ${style.chip}`}
										>
											<Tag className="w-3 h-3" />
											{noticia.categoria}
										</span>
									</div>

									<div className="p-5 sm:p-6 flex flex-col flex-1">

										{/* Titulo */}
										<h3 className="text-base sm:text-lg font-bold text-gray-900 mb-2.5 group-hover:text-emerald-600 transition-colors line-clamp-2">
											{noticia.titulo}
										</h3>

										{/* Resumen */}
										<p className="text-gray-600 text-sm mb-4 line-clamp-2 flex-1">
											{noticia.resumen}
										</p>

										{/* Metadatos */}
										<div className="flex items-center justify-between gap-2 pt-4 border-t border-gray-100 text-xs text-gray-500">
											<div className="flex items-center gap-1.5">
												<Calendar className="w-3.5 h-3.5 text-emerald-600" />
												<span>{noticia.fecha}</span>
											</div>

											<div className="flex items-center gap-1.5">
												<User className="w-3.5 h-3.5 text-emerald-600" />
												<span>{noticia.autor}</span>
											</div>
										</div>

										{/* Botón Leer más */}
										<button
											onClick={(e) => {
												e.stopPropagation();
												handleOpenModal(noticia);
											}}
											className="w-full mt-4 px-4 py-2.5 bg-emerald-50 text-emerald-700 rounded-lg hover:bg-emerald-600 hover:text-white transition-all font-medium inline-flex items-center justify-center gap-2 group/btn"
										>
											<span>Leer más</span>
											<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
										</button>

									</div>
								</motion.article>
							);
						})}

					</div>
				)}

				{/* Sin noticias */}
				{!loading && !error && noticias.length === 0 && (
					<div className="text-center py-16 px-4">
						<div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-emerald-50 mb-4">
							<Tag className="w-6 h-6 text-emerald-400" />
						</div>
						<p className="text-gray-700 font-medium">
							No hay noticias disponibles
						</p>
						<p className="text-gray-500 text-sm mt-1">
							Vuelve pronto para ver nuevos comunicados.
						</p>
					</div>
				)}

				{/* Paginación */}
				{!loading && !error && totalPages > 1 && (
					<div className="mt-10 sm:mt-12 flex items-center justify-center gap-1.5 sm:gap-2">

						<button
							onClick={() => handlePageChange(currentPage - 1)}
							disabled={currentPage === 1}
							aria-label="Página anterior"
							className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm border border-gray-200 flex items-center justify-center hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-inherit transition-colors"
						>
							<ChevronLeft className="w-4 h-4" />
						</button>

						{pageNumbers.map((page, index) =>
							page === "..." ? (
								<span
									key={`gap-${index}`}
									className="w-9 h-9 sm:w-10 sm:h-10 flex items-center justify-center text-sm text-gray-400"
								>
									…
								</span>
							) : (
								<button
									key={page}
									onClick={() => handlePageChange(page)}
									aria-current={currentPage === page ? "page" : undefined}
									className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm flex items-center justify-center transition-colors ${
										currentPage === page
											? "bg-emerald-600 text-white shadow-sm"
											: "border border-gray-200 hover:border-emerald-300 hover:text-emerald-600"
									}`}
								>
									{page}
								</button>
							)
						)}

						<button
							onClick={() => handlePageChange(currentPage + 1)}
							disabled={currentPage === totalPages}
							aria-label="Página siguiente"
							className="w-9 h-9 sm:w-10 sm:h-10 rounded-full text-sm border border-gray-200 flex items-center justify-center hover:border-emerald-300 hover:text-emerald-600 disabled:opacity-40 disabled:hover:border-gray-200 disabled:hover:text-inherit transition-colors"
						>
							<ChevronRight className="w-4 h-4" />
						</button>

					</div>
				)}

			</div>

			{/* =====================================================
			    MODAL DE NOTICIA
			===================================================== */}

			<AnimatePresence>
				{selectedNoticia && (
					<motion.div
						className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:p-6"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
						role="dialog"
						aria-modal="true"
					>

						{/* Fondo oscuro */}
						<motion.div
							className="absolute inset-0 bg-black/70 backdrop-blur-sm"
							onClick={handleCloseModal}
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							exit={{ opacity: 0 }}
						/>

						{/* Contenedor: hoja completa en móvil, diálogo centrado en desktop */}
						<motion.div
							className="relative w-full sm:max-w-3xl lg:max-w-4xl max-h-[92vh] sm:max-h-[90vh] bg-white rounded-t-2xl sm:rounded-2xl shadow-2xl overflow-hidden flex flex-col"
							initial={{ opacity: 0, y: 40 }}
							animate={{ opacity: 1, y: 0 }}
							exit={{ opacity: 0, y: 40 }}
							transition={{ duration: 0.25 }}
						>

							{/* Botón cerrar */}
							<button
								onClick={handleCloseModal}
								className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-black/50 hover:bg-black/70 text-white flex items-center justify-center transition-colors"
								aria-label="Cerrar"
							>
								<X className="w-5 h-5" />
							</button>

							{/* Imagen principal */}
							<div className="relative h-48 sm:h-72 lg:h-80 bg-gray-100 shrink-0">
								<NewsImage
									src={selectedNoticia.imagen}
									alt={selectedNoticia.titulo}
									priority
									sizes="(min-width: 1024px) 896px, 100vw"
									className="w-full h-full object-cover"
								/>

								{/* Degradado */}
								<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />

								{/* Categoría sobre imagen */}
								<div className="absolute bottom-4 sm:bottom-5 left-4 sm:left-5">
									<div
										className={`inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-white text-xs font-semibold uppercase shadow-sm ${getCategoryStyle(selectedNoticia.categoria).chip}`}
									>
										<Tag className="w-3.5 h-3.5" />
										{selectedNoticia.categoria}
									</div>
								</div>
							</div>

							{/* Contenido */}
							<div className="overflow-y-auto">

								<div className="p-5 sm:p-8">

									{/* Título */}
									<h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900 leading-tight">
										{selectedNoticia.titulo}
									</h2>

									{/* Metadatos */}
									<div className="flex flex-wrap items-center gap-4 sm:gap-6 mt-4 sm:mt-5 pb-5 border-b border-gray-200">

										<div className="flex items-center gap-2 text-sm text-gray-600">
											<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
												<Calendar className="w-4 h-4 text-emerald-600" />
											</div>

											<div>
												<p className="text-xs text-gray-400">
													Fecha
												</p>

												<p className="font-medium text-gray-700">
													{selectedNoticia.fecha}
												</p>
											</div>
										</div>

										<div className="flex items-center gap-2 text-sm text-gray-600">
											<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center shrink-0">
												<User className="w-4 h-4 text-emerald-600" />
											</div>

											<div>
												<p className="text-xs text-gray-400">
													Publicado por
												</p>

												<p className="font-medium text-gray-700">
													{selectedNoticia.autor}
												</p>
											</div>
										</div>

									</div>

									{/* Descripción */}
									<div className="mt-6">

										<h3 className="text-base sm:text-lg font-bold text-gray-900 mb-3">
											Información
										</h3>

										<div className="text-gray-600 leading-7 whitespace-pre-line text-sm sm:text-base">
											{selectedNoticia.resumen}
										</div>

									</div>

									{/* Pie del modal */}
									<div className="mt-8 pt-5 border-t border-gray-200 flex justify-end">

										<button
											onClick={handleCloseModal}
											className="px-5 py-2.5 rounded-lg border border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors font-medium"
										>
											Cerrar
										</button>

									</div>

								</div>

							</div>

						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}
