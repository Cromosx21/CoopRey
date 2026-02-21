import React, { useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { Tag, Calendar, User, ArrowRight } from "lucide-react";
import { noticias } from "../data/noticias.js";

export default function Noticias() {
	const [currentPage, setCurrentPage] = useState(1);
	const pageSize = 6;

	const noticiasOrdenadas = [...noticias].sort((a, b) => b.id - a.id);
	const totalPages = Math.ceil(noticiasOrdenadas.length / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const paginatedNoticias = noticiasOrdenadas.slice(
		startIndex,
		startIndex + pageSize,
	);

	const handlePageChange = (page) => {
		if (page < 1 || page > totalPages) return;
		setCurrentPage(page);
		window.scrollTo({ top: 0, behavior: "smooth" });
	};

	return (
		<>
			<div className="pt-32 pb-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-12 text-center">
						<SectionHeading
							badge="Noticias"
							title="Noticias"
							subtitle="Comunicados y actualizaciones"
						/>
						<p className="mt-4 text-gray-600 max-w-2xl mx-auto">
							Consulta las últimas novedades y comunicados de
							CoopRey, ordenados de más recientes a más antiguos.
						</p>
					</div>

					{paginatedNoticias.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{paginatedNoticias.map((noticia, idx) => (
								<motion.article
									key={noticia.id}
									className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.05,
									}}
									whileHover={{ y: -8 }}
								>
									{/* Imagen con efecto */}
									<div className="relative h-48 overflow-hidden bg-gray-200">
										<img
											src={noticia.imagen}
											alt={noticia.titulo}
											className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
									</div>

									<div className="p-6">
										{/* Categoría y etiqueta */}
										<div className="flex items-center space-x-2 mb-3">
											<Tag className="w-4 h-4 text-emerald-600" />
											<span className="text-xs font-semibold text-emerald-600 uppercase">
												{noticia.categoria}
											</span>
										</div>

										{/* Título */}
										<h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
											{noticia.titulo}
										</h3>

										{/* Resumen */}
										<p className="text-gray-600 text-sm mb-4 line-clamp-2">
											{noticia.resumen}
										</p>

										{/* Metadatos */}
										<div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-600">
											<div className="flex items-center space-x-2">
												<Calendar className="w-3.5 h-3.5 text-emerald-600" />
												<span>{noticia.fecha}</span>
											</div>
											<div className="flex items-center space-x-2">
												<User className="w-3.5 h-3.5 text-emerald-600" />
												<span>{noticia.autor}</span>
											</div>
										</div>

										{/* Botón */}
										<button className="w-full mt-4 px-4 py-2.5 bg-linear-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all font-medium inline-flex items-center justify-center space-x-2 group/btn">
											<span>Leer más</span>
											<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
										</button>
									</div>
								</motion.article>
							))}
						</div>
					) : (
						<motion.div
							className="text-center py-12"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							<p className="text-gray-600 text-lg">
								No se encontraron noticias con esos criterios
							</p>
						</motion.div>
					)}

					{totalPages > 1 && (
						<div className="mt-10 flex items-center justify-center space-x-2">
							<button
								onClick={() =>
									handlePageChange(currentPage - 1)
								}
								disabled={currentPage === 1}
								className={`px-3 py-2 rounded-full text-sm font-medium border transition-colors ${
									currentPage === 1
										? "border-gray-200 text-gray-400 cursor-default"
										: "border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600"
								}`}
							>
								Anterior
							</button>
							{Array.from({ length: totalPages }).map(
								(_, index) => {
									const page = index + 1;
									return (
										<button
											key={page}
											onClick={() =>
												handlePageChange(page)
											}
											className={`w-9 h-9 rounded-full text-sm font-medium flex items-center justify-center transition-colors ${
												currentPage === page
													? "bg-emerald-600 text-white"
													: "bg-white border border-gray-200 text-gray-700 hover:border-emerald-500 hover:text-emerald-600"
											}`}
										>
											{page}
										</button>
									);
								},
							)}
							<button
								onClick={() =>
									handlePageChange(currentPage + 1)
								}
								disabled={currentPage === totalPages}
								className={`px-3 py-2 rounded-full text-sm font-medium border transition-colors ${
									currentPage === totalPages
										? "border-gray-200 text-gray-400 cursor-default"
										: "border-gray-300 text-gray-700 hover:border-emerald-500 hover:text-emerald-600"
								}`}
							>
								Siguiente
							</button>
						</div>
					)}
				</div>
			</div>
		</>
	);
}
