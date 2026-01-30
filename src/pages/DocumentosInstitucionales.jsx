import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../components/SectionHeading.jsx";
import {
	FileText,
	Download,
	ChevronDown,
	Folder,
	Calendar,
	CheckCircle,
	Shield,
	Briefcase,
	Users,
	Lock,
	Eye,
} from "lucide-react";

export default function DocumentosInstitucionales() {
	const [expandedCategory, setExpandedCategory] = useState(null);

	const documentosCategorias = [
		{
			id: 1,
			categoria: "Documentos de Gobernanza",
			icono: Users,
			color: "emerald",
			documentos: [
				{
					titulo: "Actas de Asambleas Generales",
					descripcion:
						"Registro de decisiones y acuerdos de asambleas",
					fecha: "Actualizado 2024",
					tamaño: "3.2 MB",
					acceso: "Público",
				},
				{
					titulo: "Políticas del Consejo Directivo",
					descripcion:
						"Normativas de funcionamiento y responsabilidades",
					fecha: "Vigente 2023",
					tamaño: "1.8 MB",
					acceso: "Público",
				},
				{
					titulo: "Reglamento de Junta de Vigilancia",
					descripcion: "Funciones y procedimientos de supervisión",
					fecha: "Vigente 2022",
					tamaño: "1.2 MB",
					acceso: "Público",
				},
				{
					titulo: "Política de Remuneraciones",
					descripcion:
						"Criterios para compensación de directivos y empleados",
					fecha: "Actualizado 2024",
					tamaño: "0.9 MB",
					acceso: "Restringido",
				},
			],
		},
		{
			id: 2,
			categoria: "Políticas y Procedimientos",
			icono: Shield,
			color: "blue",
			documentos: [
				{
					titulo: "Política de Riesgos",
					descripcion:
						"Gestión de riesgos crediticio, operativo y de mercado",
					fecha: "Actualizado 2024",
					tamaño: "2.5 MB",
					acceso: "Público",
				},
				{
					titulo: "Política de Cumplimiento Normativo",
					descripcion:
						"Procedimientos antilavado de dinero y cumplimiento legal",
					fecha: "Vigente 2024",
					tamaño: "2.1 MB",
					acceso: "Público",
				},
				{
					titulo: "Manual de Procedimientos Crediticios",
					descripcion:
						"Guía para evaluación y otorgamiento de créditos",
					fecha: "Actualizado 2023",
					tamaño: "3.8 MB",
					acceso: "Restringido",
				},
				{
					titulo: "Política de Atención al Socio",
					descripcion:
						"Estándares de servicio y resolución de reclamos",
					fecha: "Vigente 2024",
					tamaño: "1.5 MB",
					acceso: "Público",
				},
			],
		},
		{
			id: 3,
			categoria: "Informes y Reportes",
			icono: Briefcase,
			color: "yellow",
			documentos: [
				{
					titulo: "Informe de Gestión Anual",
					descripcion: "Resumen de actividades y logros del año",
					fecha: "2024",
					tamaño: "4.2 MB",
					acceso: "Público",
				},
				{
					titulo: "Informe de Responsabilidad Social",
					descripcion: "Iniciativas comunitarias y sostenibilidad",
					fecha: "2024",
					tamaño: "2.8 MB",
					acceso: "Público",
				},
				{
					titulo: "Reporte de Cumplimiento Regulatorio",
					descripcion:
						"Cumplimiento de normativas y regulaciones aplicables",
					fecha: "2024",
					tamaño: "1.6 MB",
					acceso: "Público",
				},
				{
					titulo: "Informe de Auditoría Interna",
					descripcion: "Evaluación de controles y conformidad",
					fecha: "2024",
					tamaño: "2.3 MB",
					acceso: "Restringido",
				},
			],
		},
		{
			id: 4,
			categoria: "Legislación y Normativas",
			icono: Lock,
			color: "green",
			documentos: [
				{
					titulo: "Ley General de Cooperativas",
					descripcion:
						"Marco legal que rige el movimiento cooperativista",
					fecha: "Vigente",
					tamaño: "0.6 MB",
					acceso: "Público",
				},
				{
					titulo: "Normativa de Superintendencia",
					descripcion:
						"Regulaciones específicas para cooperativas financieras",
					fecha: "Actualizado 2023",
					tamaño: "1.3 MB",
					acceso: "Público",
				},
				{
					titulo: "Normas de Seguridad Bancaria",
					descripcion: "Estándares técnicos de operación y seguridad",
					fecha: "Vigente 2024",
					tamaño: "1.9 MB",
					acceso: "Público",
				},
				{
					titulo: "Regulación de Protección de Datos",
					descripcion:
						"Cumplimiento de leyes de privacidad de información",
					fecha: "Vigente 2024",
					tamaño: "0.8 MB",
					acceso: "Público",
				},
			],
		},
		{
			id: 5,
			categoria: "Transparencia e Integridad",
			icono: Eye,
			color: "purple",
			documentos: [
				{
					titulo: "Política Anticorrupción",
					descripcion: "Medidas contra fraude y prácticas corruptas",
					fecha: "Vigente 2024",
					tamaño: "1.4 MB",
					acceso: "Público",
				},
				{
					titulo: "Código de Conducta para Empleados",
					descripcion: "Normas éticas de comportamiento laboral",
					fecha: "Actualizado 2024",
					tamaño: "1.7 MB",
					acceso: "Público",
				},
				{
					titulo: "Política de Conflicto de Intereses",
					descripcion:
						"Procedimientos para evitar conflictos de intereses",
					fecha: "Vigente 2023",
					tamaño: "1.1 MB",
					acceso: "Público",
				},
				{
					titulo: "Política de Denuncias y Whistleblowing",
					descripcion: "Canal seguro para reportar irregularidades",
					fecha: "Vigente 2024",
					tamaño: "0.9 MB",
					acceso: "Público",
				},
			],
		},
	];

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
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<div className="relative overflow-hidden pt-32 pb-20 md:pb-24">
				{/* Background Image */}
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop')`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundAttachment: "fixed",
					}}
				/>

				{/* Gradient Overlay */}
				<div
					className="absolute inset-0 z-1"
					style={{
						background:
							"linear-gradient(135deg, rgba(16, 185, 129, 0.85) 0%, rgba(234, 179, 8, 0.75) 100%)",
						mixBlendMode: "multiply",
					}}
				/>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<motion.div
							className="inline-flex items-center space-x-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Folder className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								Centro de Documentos
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Documentos{" "}
							<span className="text-yellow-200">
								Institucionales
							</span>
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Acceso a información oficial, políticas y normativas
							de la cooperativa
						</motion.p>
					</div>
				</div>
			</div>

			{/* Información de Acceso */}
			<div className="py-12 bg-emerald-50 border-b border-emerald-200">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
						<div className="flex items-start space-x-3">
							<CheckCircle className="w-6 h-6 text-emerald-600 flex-shrink-0 mt-1" />
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
							<Lock className="w-6 h-6 text-yellow-600 flex-shrink-0 mt-1" />
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
										className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors group"
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
																		className="ml-4 inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all flex-shrink-0"
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
					<div className="bg-gradient-to-r from-emerald-50 to-yellow-50 rounded-2xl p-8 border border-emerald-200">
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

			<Footer />
		</div>
	);
}
