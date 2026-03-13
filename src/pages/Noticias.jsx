import React, { useState, useEffect } from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { Tag, Calendar, User, ArrowRight } from "lucide-react";

export default function Noticias() {
	const [noticias, setNoticias] = useState([]);
	const [loading, setLoading] = useState(true);
	const [currentPage, setCurrentPage] = useState(1);

	const pageSize = 6;

	const API_URL =
		"https://script.googleusercontent.com/macros/echo?user_content_key=AY5xjrRa25mQJYyOflS_OI5Bpi2tqoBY-TFUWDuvGysdLowvxf_8EDzO8NMd_Uvrrv0Cf15MpCJi-UsIdlzZ-ZuzPTIOofeLUYvMXS4eEXDzvEbxXGE5OXoa923MmgTuejg28NOyIMgu3Uxp0oXs_Wpm3y01_yYDKzm_MsnJXNOaUp7cQ8daqMvLCxBzsk788V2T6CmbiHe0UUw6vz3am6CyUBOIEO5ksQUlkF-43sE1dQ7xryVBopSUWYfTcUzF0uDR1zujRGBSYR2NXD33ZyIU9N_tHoiHyw&lib=Ma_88Mbdc7D-9Cl8M5z3wFYj4Nwys6H1M";

	useEffect(() => {
		fetch(API_URL)
			.then((res) => res.json())
			.then((data) => {
				const formatted = data.map((item, index) => ({
					id: index + 1,
					titulo: item["Título"],
					categoria: item["Categoría"],
					resumen: item["Descripción"],
					fecha: new Date(item["Fecha"]).toLocaleDateString("es-PE"),
					autor: "CoopRey",
					imagen: convertDriveLink(item["Linck Imagen"]),
				}));

				// ordenar por más reciente
				formatted.sort((a, b) => new Date(b.fecha) - new Date(a.fecha));

				setNoticias(formatted);
				setLoading(false);
			})
			.catch((error) => {
				console.error("Error cargando noticias:", error);
				setLoading(false);
			});
	}, []);

	const convertDriveLink = (url) => {
	if (!url) return "";

	try {
		const id = url.split("/d/")[1].split("/")[0];
		return `https://drive.google.com/thumbnail?id=${id}&sz=w1000`;
	} catch (e) {
		return "";
	}
};

	const totalPages = Math.ceil(noticias.length / pageSize);
	const startIndex = (currentPage - 1) * pageSize;
	const paginatedNoticias = noticias.slice(
		startIndex,
		startIndex + pageSize
	);

	const handlePageChange = (page) => {
		if (page < 1 || page > totalPages) return;

		setCurrentPage(page);

		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	return (
		<div className="pt-32 pb-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

				{/* Heading */}

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

				{/* Loading */}

				{loading && (
					<div className="text-center py-16">
						<p className="text-gray-500">Cargando noticias...</p>
					</div>
				)}

				{/* Noticias */}

				{!loading && paginatedNoticias.length > 0 && (
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

								{/* Imagen */}

								<div className="relative h-48 overflow-hidden bg-gray-200">
									<img
										src={noticia.imagen}
										alt={noticia.titulo}
										className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
									/>

									<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
								</div>

								<div className="p-6">

									{/* Categoria */}

									<div className="flex items-center space-x-2 mb-3">
										<Tag className="w-4 h-4 text-emerald-600" />

										<span className="text-xs font-semibold text-emerald-600 uppercase">
											{noticia.categoria}
										</span>
									</div>

									{/* Titulo */}

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

									<button className="w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all font-medium inline-flex items-center justify-center space-x-2 group/btn">

										<span>Leer más</span>

										<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />

									</button>

								</div>

							</motion.article>
						))}

					</div>
				)}

				{/* Sin noticias */}

				{!loading && noticias.length === 0 && (
					<div className="text-center py-16">
						<p className="text-gray-500">
							No hay noticias disponibles
						</p>
					</div>
				)}

				{/* Paginación */}

				{totalPages > 1 && (
					<div className="mt-10 flex items-center justify-center space-x-2">

						<button
							onClick={() =>
								handlePageChange(currentPage - 1)
							}
							disabled={currentPage === 1}
							className="px-3 py-2 rounded-full text-sm border"
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
										className={`w-9 h-9 rounded-full text-sm flex items-center justify-center ${
											currentPage === page
												? "bg-emerald-600 text-white"
												: "border"
										}`}
									>
										{page}
									</button>
								);
							}
						)}

						<button
							onClick={() =>
								handlePageChange(currentPage + 1)
							}
							disabled={currentPage === totalPages}
							className="px-3 py-2 rounded-full text-sm border"
						>
							Siguiente
						</button>

					</div>
				)}

			</div>
		</div>
	);
}