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
	Shield,
	RefreshCw,
	Mail,
	Phone,
	MessageSquare,
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

			{/* Información Importante - Rediseñado */}
			<div className="py-20 md:py-24 bg-gray-50 relative overflow-hidden">
				{/* Decorative Pattern */}
				<div className="absolute inset-0 opacity-5 bg-[radial-gradient(#059669_1px,transparent_1px)] background-size[20px_20px]" />
				
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-12">
						<SectionHeading
							badge="Políticas"
							title="Política de Acceso"
							subtitle="Transparencia y seguridad"
						/>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{[
							{
								icon: Folder,
								title: "Documentos Públicos",
								desc: "Disponibles sin restricciones para consulta, descarga e impresión. Acceso libre.",
								color: "emerald"
							},
							{
								icon: Lock,
								title: "Restringidos",
								desc: "Requieren autenticación de usuario. Solicita acceso en atención al cliente.",
								color: "yellow"
							},
							{
								icon: Shield,
								title: "Confidencialidad",
								desc: "Información sensible protegida bajo estrictas políticas de privacidad.",
								color: "blue"
							},
							{
								icon: RefreshCw,
								title: "Actualización",
								desc: "Revisión periódica. La fecha de última versión se indica en cada archivo.",
								color: "purple"
							}
						].map((item, idx) => {
							const Icon = item.icon;
							const colors = {
								emerald: "bg-emerald-100 text-emerald-600 group-hover:bg-emerald-600 group-hover:text-white",
								yellow: "bg-yellow-100 text-yellow-600 group-hover:bg-yellow-500 group-hover:text-white",
								blue: "bg-blue-100 text-blue-600 group-hover:bg-blue-600 group-hover:text-white",
								purple: "bg-purple-100 text-purple-600 group-hover:bg-purple-600 group-hover:text-white"
							};

							return (
								<motion.div
									key={idx}
									className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-xl transition-all duration-300 group"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ delay: idx * 0.1 }}
									viewport={{ once: true }}
								>
									<div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 transition-colors duration-300 ${colors[item.color]}`}>
										<Icon className="w-7 h-7" />
									</div>
									<h4 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-700 transition-colors">
										{item.title}
									</h4>
									<p className="text-gray-600 text-sm leading-relaxed">
										{item.desc}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Contacto para Solicitudes - Rediseñado */}
			<div className="py-20 md:py-24 bg-white relative">
				<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div 
						className="relative rounded-3xl overflow-hidden bg-linear-to-r from-emerald-900 to-emerald-800 text-white shadow-2xl"
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
					>
						{/* Background Decor */}
						<div className="absolute top-0 right-0 w-96 h-96 bg-white/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

						<div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12">
							<div className="flex-1 text-center md:text-left">
								<h3 className="text-3xl md:text-4xl font-bold mb-4">
									¿Necesitas acceso restringido?
								</h3>
								<p className="text-emerald-100 text-lg max-w-xl leading-relaxed">
									Si eres socio activo y requieres consultar documentos protegidos, nuestro equipo está listo para asistirte.
								</p>
							</div>

							<div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto">
								<motion.a
									href="mailto:documentos@coopreysa.coop"
									className="inline-flex items-center justify-center space-x-2 px-6 py-4 bg-white text-emerald-900 rounded-xl hover:bg-emerald-50 transition-colors font-bold shadow-lg"
									whileHover={{ scale: 1.05 }}
									whileTap={{ scale: 0.95 }}
								>
									<Mail className="w-5 h-5" />
									<span>Enviar Email</span>
								</motion.a>
								
								<div className="flex gap-4">
									<motion.a
										href="#contacto"
										className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-800/50 backdrop-blur-sm border border-emerald-600 rounded-xl hover:bg-emerald-700/50 transition-colors font-semibold"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<MessageSquare className="w-5 h-5" />
										<span>Chat</span>
									</motion.a>
									<motion.a
										href="tel:+1234567890"
										className="flex-1 inline-flex items-center justify-center space-x-2 px-6 py-4 bg-emerald-800/50 backdrop-blur-sm border border-emerald-600 rounded-xl hover:bg-emerald-700/50 transition-colors font-semibold"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Phone className="w-5 h-5" />
										<span>Llamar</span>
									</motion.a>
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Call to Action */}
			<CTASection />
		</>
	);
}
