import React, { useEffect, useMemo, useState } from "react";
import { CTASection } from "../../components/sections/CTASection.jsx";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import {
	BarChart3,
	PieChart,
	Download,
	Eye,
	X,
	ChevronDown,
} from "lucide-react";
import { estadosFinancieros } from "../../data/estadosFinancieros";

export default function EstadosFinancieros() {
	const [selectedYear, setSelectedYear] = useState(
		estadosFinancieros?.[0]?.año || 2025,
	);
	const [expandedSectionId, setExpandedSectionId] = useState(null);
	const [activeDoc, setActiveDoc] = useState(null);

	const selectedYearData = useMemo(
		() => estadosFinancieros.find((item) => item.año === selectedYear),
		[selectedYear],
	);

	useEffect(() => {
		setExpandedSectionId(null);
	}, [selectedYear]);

	useEffect(() => {
		if (!activeDoc) return;

		const handleKeyDown = (e) => {
			if (e.key === "Escape") setActiveDoc(null);
		};

		const prevOverflow = document.body.style.overflow;
		document.body.style.overflow = "hidden";
		window.addEventListener("keydown", handleKeyDown);

		return () => {
			document.body.style.overflow = prevOverflow;
			window.removeEventListener("keydown", handleKeyDown);
		};
	}, [activeDoc]);

	return (
		<>
			<div className="py-20 lg:mt-8 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Reportes"
							title="Reportes Disponibles"
							subtitle="Estados auditados"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Descarga los estados financieros completos y
							auditados
						</p>
					</div>

					<div className="flex justify-center gap-4 mb-12">
						{estadosFinancieros.map((item) => (
							<motion.button
								key={item.año}
								onClick={() => setSelectedYear(item.año)}
								className={`px-6 py-3 rounded-lg font-semibold transition-all ${
									selectedYear === item.año
										? "bg-emerald-600 text-white shadow-lg"
										: "bg-white text-gray-900 border border-gray-200 hover:border-emerald-200"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.año}
							</motion.button>
						))}
					</div>

					<div className="space-y-4">
						{selectedYearData?.secciones?.map((seccion, idx) => {
							const isOpen = expandedSectionId === seccion.id;
							const Icon =
								seccion.id === "balance-general"
									? BarChart3
									: PieChart;

							return (
								<motion.div
									key={seccion.id}
									className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
									initial={{ opacity: 0, y: 16 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.35,
										delay: idx * 0.05,
									}}
								>
									<button
										type="button"
										onClick={() =>
											setExpandedSectionId(
												isOpen ? null : seccion.id,
											)
										}
										className="w-full px-6 sm:px-8 py-6 flex items-start justify-between gap-6 hover:bg-gray-50 transition-colors"
									>
										<div className="flex items-start gap-4">
											<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-xl shrink-0">
												<Icon className="w-6 h-6 text-emerald-700" />
											</div>
											<div className="text-left">
												<div className="text-xl font-bold text-gray-900">
													{seccion.titulo}
												</div>
												<div className="text-sm text-gray-600 mt-1">
													{seccion.descripcion}
												</div>
											</div>
										</div>

										<ChevronDown
											className={`w-6 h-6 text-gray-600 transition-transform mt-3 ${
												isOpen ? "rotate-180" : ""
											}`}
										/>
									</button>

									<AnimatePresence>
										{isOpen && (
											<motion.div
												initial={{
													height: 0,
													opacity: 0,
												}}
												animate={{
													height: "auto",
													opacity: 1,
												}}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="px-6 sm:px-8 pb-6 border-t border-gray-200"
											>
												<div className="pt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
													{seccion.documentos.map(
														(doc) => (
															<div
																key={
																	doc.periodo
																}
																className="bg-gray-50 rounded-xl p-4 border border-gray-100"
															>
																<div className="flex items-start justify-between gap-4">
																	<div>
																		<div className="font-semibold text-gray-900">
																			{
																				doc.periodo
																			}
																		</div>
																		<div className="text-sm text-gray-500 mt-1">
																			{
																				doc.tamaño
																			}
																		</div>
																	</div>

																	<div className="flex items-center gap-2">
																		<motion.button
																			type="button"
																			onClick={() =>
																				setActiveDoc(
																					{
																						...doc,
																						año: selectedYear,
																						seccion:
																							seccion.titulo,
																					},
																				)
																			}
																			className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-white border border-gray-200 hover:border-emerald-200 text-gray-900 transition-colors"
																			whileHover={{
																				scale: 1.02,
																			}}
																			whileTap={{
																				scale: 0.98,
																			}}
																		>
																			<Eye className="w-4 h-4" />
																			<span className="text-sm font-medium">
																				Ver
																			</span>
																		</motion.button>

																		<motion.a
																			href={
																				doc.url
																			}
																			target="_blank"
																			rel="noreferrer"
																			className="inline-flex items-center gap-2 px-3 py-2 rounded-lg bg-linear-to-r from-emerald-600 to-emerald-700 text-white"
																			whileHover={{
																				scale: 1.02,
																			}}
																			whileTap={{
																				scale: 0.98,
																			}}
																		>
																			<Download className="w-4 h-4" />
																			<span className="text-sm font-medium">
																				Descargar
																			</span>
																		</motion.a>
																	</div>
																</div>
															</div>
														),
													)}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			<AnimatePresence>
				{activeDoc && (
					<motion.div
						className="fixed inset-0 z-50 flex items-center justify-center p-4"
						initial={{ opacity: 0 }}
						animate={{ opacity: 1 }}
						exit={{ opacity: 0 }}
					>
						<button
							type="button"
							className="absolute inset-0 bg-black/60"
							onClick={() => setActiveDoc(null)}
						/>

						<motion.div
							className="relative w-full max-w-5xl bg-white rounded-3xl overflow-hidden shadow-2xl border border-gray-100"
							initial={{ scale: 0.98, y: 10, opacity: 0 }}
							animate={{ scale: 1, y: 0, opacity: 1 }}
							exit={{ scale: 0.98, y: 10, opacity: 0 }}
							transition={{ duration: 0.2 }}
						>
							<div className="flex items-start justify-between gap-4 p-5 sm:p-6 border-b border-gray-100">
								<div>
									<div className="text-sm text-gray-500">
										{activeDoc.año} • {activeDoc.seccion}
									</div>
									<div className="text-lg font-bold text-gray-900">
										{activeDoc.periodo}
									</div>
								</div>

								<div className="flex items-center gap-2">
									<a
										href={activeDoc.url}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-primary text-white font-medium hover:bg-primary/90 transition-colors"
									>
										<Download className="w-4 h-4" />
										<span>Descargar</span>
									</a>
									<button
										type="button"
										onClick={() => setActiveDoc(null)}
										className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-gray-100 hover:bg-gray-200 transition-colors text-gray-700"
										aria-label="Cerrar"
									>
										<X className="w-5 h-5" />
									</button>
								</div>
							</div>

							<div className="bg-gray-50">
								<iframe
									title={`${activeDoc.seccion} ${activeDoc.periodo} ${activeDoc.año}`}
									src={activeDoc.url}
									className="w-full h-[72vh]"
								/>
							</div>
						</motion.div>
					</motion.div>
				)}
			</AnimatePresence>
		</>
	);
}
