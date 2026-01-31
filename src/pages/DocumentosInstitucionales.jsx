import React, { useState } from "react";
import { CTASection } from "../components/sections/CTASection.jsx";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import {
	FileText,
	Download,
	ChevronDown,
	Folder,
	Calendar,
	CheckCircle,
	Lock,
} from "lucide-react";
import {
	documentosCategorias,
	documentosHeroData,
} from "../data/documentosInstitucionales";

export default function DocumentosInstitucionales() {
	const [expandedCategory, setExpandedCategory] = useState(null);

	const toggleCategory = (id) => {
		setExpandedCategory(expandedCategory === id ? null : id);
	};

	const getIconColor = (color) => {
		const colors = {
			emerald: "text-emerald-600 bg-emerald-50",
			blue: "text-blue-600 bg-blue-50",
			yellow: "text-yellow-600 bg-yellow-50",
			green: "text-green-600 bg-green-50",
			purple: "text-purple-600 bg-purple-50",
		};
		return colors[color] || colors.emerald;
	};

	const getAccessColor = (acceso) => {
		return acceso === "Público"
			? "bg-green-50 text-green-700 border-green-200"
			: "bg-yellow-50 text-yellow-700 border-yellow-200";
	};

	return (
		<>
			{/* Hero Section */}
			<div className="relative overflow-hidden pt-32 pb-20 md:pb-24">
				{/* Background Image */}
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url('${documentosHeroData.image}')`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundAttachment: "fixed",
					}}
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 z-1 bg-linear-to-br from-emerald-500/85 to-yellow-500/75 mix-blend-multiply" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<motion.div
							className="inline-flex items-center space-x-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<documentosHeroData.badgeIcon className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								{documentosHeroData.badge}
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{documentosHeroData.title}{" "}
							<span className="text-yellow-200">
								{documentosHeroData.titleHighlight}
							</span>
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							{documentosHeroData.description}
						</motion.p>
					</div>
				</div>
			</div>

			{/* Información de Acceso */}
			<div className="py-12 bg-emerald-50 border-b border-emerald-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex items-start space-x-3">
							<CheckCircle className="w-6 h-6 text-emerald-600 shrink-0 mt-1" />
							<div>
								<h3 className="font-semibold text-gray-900">
									Documentos Públicos
								</h3>
								<p className="text-sm text-gray-600 mt-1">
									Descargables para cualquier persona
									interesada
								</p>
							</div>
						</div>
						<div className="flex items-start space-x-3">
							<Lock className="w-6 h-6 text-yellow-600 shrink-0 mt-1" />
							<div>
								<h3 className="font-semibold text-gray-900">
									Documentos Restringidos
								</h3>
								<p className="text-sm text-gray-600 mt-1">
									Requieren autenticación de usuario
									autorizado
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Categorías de Documentos */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Documentos"
							title="Centro de Documentos"
							subtitle="Políticas y reportes"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Encuentra todos los documentos institucionales
							organizados por categoría
						</p>
					</div>

					<div className="space-y-4">
						{documentosCategorias.map((categoria, idx) => {
							const IconComponent = categoria.icono;
							return (
								<motion.div
									key={categoria.id}
									className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.05,
									}}
								>
									<button
										onClick={() =>
											toggleCategory(categoria.id)
										}
										className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer group"
									>
										<div className="flex items-center space-x-4 text-left">
											<div
												className={`inline-flex items-center justify-center w-12 h-12 rounded-lg ${getIconColor(
													categoria.color,
												)}`}
											>
												<IconComponent className="w-6 h-6" />
											</div>
											<div>
												<h3 className="text-lg font-bold text-gray-900">
													{categoria.categoria}
												</h3>
												<p className="text-sm text-gray-600 mt-1">
													{
														categoria.documentos
															.length
													}{" "}
													documentos disponibles
												</p>
											</div>
										</div>

										<ChevronDown
											className={`w-6 h-6 text-gray-600 transition-transform ${
												expandedCategory ===
												categoria.id
													? "rotate-180"
													: ""
											}`}
										/>
									</button>

									<AnimatePresence>
										{expandedCategory === categoria.id && (
											<motion.div
												className="px-8 pb-6 border-t border-gray-200 space-y-4"
												initial={{
													opacity: 0,
													height: 0,
												}}
												animate={{
													opacity: 1,
													height: "auto",
												}}
												exit={{
													opacity: 0,
													height: 0,
												}}
												transition={{ duration: 0.3 }}
											>
												<div className="pt-6">
													{categoria.documentos.map(
														(doc, docIdx) => (
															<motion.div
																key={docIdx}
																className="mb-4 last:mb-0 bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors"
																initial={{
																	opacity: 0,
																	y: 10,
																}}
																animate={{
																	opacity: 1,
																	y: 0,
																}}
																transition={{
																	delay:
																		docIdx *
																		0.05,
																}}
															>
																<div className="flex items-start justify-between">
																	<div className="flex-1">
																		<h4 className="font-semibold text-gray-900 flex items-center space-x-2">
																			<FileText className="w-4 h-4 text-emerald-600" />
																			<span>
																				{
																					doc.titulo
																				}
																			</span>
																		</h4>
																		<p className="text-sm text-gray-600 mt-1">
																			{
																				doc.descripcion
																			}
																		</p>
																		<div className="flex items-center space-x-4 mt-3">
																			<span className="text-xs text-gray-500 flex items-center space-x-1">
																				<Calendar className="w-3 h-3" />
																				<span>
																					{
																						doc.fecha
																					}
																				</span>
																			</span>
																			<span className="text-xs text-gray-500">
																				{
																					doc.tamaño
																				}
																			</span>
																			<span
																				className={`text-xs font-semibold px-2 py-1 rounded border ${getAccessColor(
																					doc.acceso,
																				)}`}
																			>
																				{
																					doc.acceso
																				}
																			</span>
																		</div>
																	</div>
																	<motion.a
																		href="#descargar"
																		className="ml-4 inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all shrink-0"
																		whileHover={{
																			scale: 1.05,
																		}}
																		whileTap={{
																			scale: 0.95,
																		}}
																	>
																		<Download className="w-4 h-4" />
																		<span className="text-sm">
																			Descargar
																		</span>
																	</motion.a>
																</div>
															</motion.div>
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

			{/* Información Importante */}
			<div className="py-20 md:py-24 bg-gray-50">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-2xl p-8 border border-gray-200">
						<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
							<CheckCircle className="w-6 h-6 text-emerald-600" />
							<span>Política de Acceso a Documentos</span>
						</h3>

						<div className="space-y-4 text-gray-700">
							<p>
								<span className="font-semibold">
									Documentos Públicos:
								</span>{" "}
								Disponibles sin restricciones para consulta,
								descarga e impresión. No requieren autenticación
								y pueden ser compartidos libremente.
							</p>

							<p>
								<span className="font-semibold">
									Documentos Restringidos:
								</span>{" "}
								Requieren autenticación de usuario. Los socios
								pueden solicitar acceso contactando a nuestro
								departamento de atención.
							</p>

							<p>
								<span className="font-semibold">
									Confidencialidad:
								</span>{" "}
								Los documentos marcados como restringidos
								contienen información sensible que debe ser
								protegida conforme a nuestras políticas de
								confidencialidad y regulaciones aplicables.
							</p>

							<p>
								<span className="font-semibold">
									Actualización:
								</span>{" "}
								Los documentos son actualizados regularmente. La
								fecha de última actualización se indica en cada
								documento.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Contacto para Solicitudes */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-linear-to-r from-emerald-50 to-yellow-50 rounded-2xl p-8 border border-emerald-200">
						<h3 className="text-2xl font-bold text-gray-900 mb-4">
							¿Necesitas acceso a documentos restringidos?
						</h3>

						<p className="text-gray-700 mb-6">
							Si eres socio de la cooperativa y requieres acceso a
							documentos restringidos, contáctanos a través de
							nuestros canales de atención.
						</p>

						<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
							<a
								href="mailto:documentos@coopreysa.coop"
								className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors font-semibold"
							>
								<span>Enviar Email</span>
							</a>

							<a
								href="#contacto"
								className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
							>
								<span>Formulario de Contacto</span>
							</a>

							<a
								href="tel:+1234567890"
								className="inline-flex items-center space-x-2 px-6 py-3 bg-white text-emerald-600 border-2 border-emerald-600 rounded-lg hover:bg-emerald-50 transition-colors font-semibold"
							>
								<span>Llamar Ahora</span>
							</a>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<CTASection />
		</>
	);
}
