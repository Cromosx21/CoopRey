import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { motion, AnimatePresence } from "motion/react";
import {
	FileText,
	Download,
	ChevronDown,
	Book,
	Users,
	Shield,
	CheckCircle,
	Clock,
} from "lucide-react";

export default function Estatutos() {
	const [expandedSection, setExpandedSection] = useState(null);

	const documentosDescargables = [
		{
			id: 1,
			titulo: "Estatutos Sociales Completos",
			descripcion:
				"Documento oficial que regula el funcionamiento de la cooperativa",
			fecha: "Vigente desde 2020",
			tamaño: "2.4 MB",
			icono: FileText,
			link: "#descargar",
		},
		{
			id: 2,
			titulo: "Reglamento Interno",
			descripcion: "Normas y procedimientos internos de operación",
			fecha: "Actualizado 2023",
			tamaño: "1.8 MB",
			icono: Book,
			link: "#descargar",
		},
		{
			id: 3,
			titulo: "Código de Ética y Conducta",
			descripcion:
				"Principios éticos y de buen comportamiento para socios y empleados",
			fecha: "Vigente desde 2021",
			tamaño: "1.2 MB",
			icono: Shield,
			link: "#descargar",
		},
		{
			id: 4,
			titulo: "Política de Privacidad",
			descripcion: "Protección de datos personales de nuestros socios",
			fecha: "Actualizado 2024",
			tamaño: "0.8 MB",
			icono: Users,
			link: "#descargar",
		},
	];

	const capitulos = [
		{
			id: 1,
			numero: "I",
			titulo: "Naturaleza, Denominación y Domicilio",
			contenido: [
				"La cooperativa es una asociación autónoma de personas",
				"Se rige por los principios y valores cooperativistas",
				"Su domicilio principal se establece en la ciudad capital",
				"Puede establecer sucursales y agencias en otros territorios",
				"Su duración es indefinida",
			],
			seccionesDetalladas: [
				{
					titulo: "Definición Legal",
					descripcion: "Cooperativa de servicios financieros",
				},
				{
					titulo: "Ámbito de Cobertura",
					descripcion: "Nacional e internacional",
				},
				{
					titulo: "Personalidad Jurídica",
					descripcion: "Persona jurídica de derecho privado",
				},
			],
		},
		{
			id: 2,
			numero: "II",
			titulo: "Objeto Social",
			contenido: [
				"Prestar servicios financieros a sus socios",
				"Captar depósitos y otorgar créditos",
				"Promover el ahorro y la inclusión financiera",
				"Facilitar transacciones y servicios complementarios",
				"Impulsar educación financiera y cooperativismo",
			],
			seccionesDetalladas: [
				{
					titulo: "Servicios Principales",
					descripcion: "Ahorros, créditos y servicios financieros",
				},
				{
					titulo: "Responsabilidad Social",
					descripcion: "Desarrollo comunitario y sostenibilidad",
				},
				{
					titulo: "Alcance del Negocio",
					descripcion: "Servicios financieros integrales",
				},
			],
		},
		{
			id: 3,
			numero: "III",
			titulo: "Socios y Derechos",
			contenido: [
				"Pueden ser socios personas naturales mayores de edad",
				"Deben cumplir con requisitos de admisión establecidos",
				"Cada socio tiene derecho a un voto independientemente del capital",
				"Participación en asambleas y decisiones cooperativas",
				"Derecho a recibir información financiera periódica",
			],
			seccionesDetalladas: [
				{
					titulo: "Requisitos de Ingreso",
					descripcion: "Documentación y capital mínimo",
				},
				{
					titulo: "Derechos Fundamentales",
					descripcion: "Voto, información y participación",
				},
				{
					titulo: "Obligaciones de Socios",
					descripcion: "Cumplimiento de normas cooperativas",
				},
			],
		},
		{
			id: 4,
			numero: "IV",
			titulo: "Órganos de Administración",
			contenido: [
				"Asamblea General de Socios: máximo órgano de decisión",
				"Consejo Directivo: administración y representación",
				"Junta de Vigilancia: supervisión y control",
				"Gerencia General: ejecución de políticas",
				"Comités especializados: apoyo en áreas específicas",
			],
			seccionesDetalladas: [
				{
					titulo: "Funciones de la Asamblea",
					descripcion:
						"Decisiones estratégicas y revisión de resultados",
				},
				{
					titulo: "Estructura Directiva",
					descripcion: "Presidente, directores y gerente general",
				},
				{
					titulo: "Comités de Apoyo",
					descripcion: "Auditoría, riesgos, crédito y otras áreas",
				},
			],
		},
		{
			id: 5,
			numero: "V",
			titulo: "Patrimonio y Excedentes",
			contenido: [
				"Capital social aportado por socios",
				"Fondos de reserva obligatoria",
				"Fondos de educación cooperativa",
				"Excedentes distribuidos según políticas aprobadas",
				"Incremento de patrimonio anual mediante retenciones",
			],
			seccionesDetalladas: [
				{
					titulo: "Composición Patrimonial",
					descripcion: "Capital, fondos y reservas",
				},
				{
					titulo: "Distribución de Excedentes",
					descripcion: "Criterios y porcentajes establecidos",
				},
				{
					titulo: "Fondos de Destino Específico",
					descripcion: "Educación, seguridad social y expansión",
				},
			],
		},
		{
			id: 6,
			numero: "VI",
			titulo: "Disolución y Liquidación",
			contenido: [
				"La cooperativa se disuelve por decisión de asamblea",
				"Cumplimiento de obligaciones antes de liquidación",
				"Distribución del patrimonio según normas",
				"Liquidador designado por asamblea",
				"Procedimiento transparente y documentado",
			],
			seccionesDetalladas: [
				{
					titulo: "Causales de Disolución",
					descripcion: "Decisión de socios y causas legales",
				},
				{
					titulo: "Proceso de Liquidación",
					descripcion: "Cierre ordenado de operaciones",
				},
				{
					titulo: "Distribución de Bienes",
					descripcion: "Criterios legales y equitativos",
				},
			],
		},
	];

	const principiosCooperativistas = [
		{
			numero: "1",
			titulo: "Adhesión Voluntaria",
			descripcion:
				"Asociación abierta a todas las personas sin restricciones",
		},
		{
			numero: "2",
			titulo: "Gestión Democrática",
			descripcion:
				"Los miembros participan activamente en la toma de decisiones",
		},
		{
			numero: "3",
			titulo: "Participación Económica",
			descripcion: "Los miembros aportan equitativamente al capital",
		},
		{
			numero: "4",
			titulo: "Autonomía e Independencia",
			descripcion: "Autogobierno con responsabilidad ante los miembros",
		},
		{
			numero: "5",
			titulo: "Educación y Formación",
			descripcion: "Compromiso con la educación cooperativista",
		},
		{
			numero: "6",
			titulo: "Cooperación entre Cooperativas",
			descripcion:
				"Trabajo conjunto para fortalecer el movimiento cooperativista",
		},
	];

	const toggleSection = (id) => {
		setExpandedSection(expandedSection === id ? null : id);
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
						backgroundImage: `url('https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=1200&h=600&fit=crop')`,
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
							<Book className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								Marco Legal y Normativo
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Nuestros{" "}
							<span className="text-yellow-200">
								Estatutos Sociales
							</span>
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Documentos que rigen el funcionamiento y la
							gobernanza de nuestra cooperativa
						</motion.p>
					</div>
				</div>
			</div>

			{/* Documents Download Section */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Documentos para Descargar
						</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Accede a los documentos oficiales de nuestra
							cooperativa
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{documentosDescargables.map((doc, idx) => {
							const IconComponent = doc.icono;
							return (
								<motion.div
									key={doc.id}
									className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all duration-300"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.1,
									}}
									whileHover={{ y: -5 }}
								>
									<div className="flex items-start justify-between mb-4">
										<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg">
											<IconComponent className="w-6 h-6 text-emerald-600" />
										</div>
										<span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
											{doc.tamaño}
										</span>
									</div>

									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{doc.titulo}
									</h3>

									<p className="text-gray-600 mb-4">
										{doc.descripcion}
									</p>

									<div className="flex items-center justify-between pt-4 border-t border-gray-100">
										<span className="text-sm text-gray-500">
											{doc.fecha}
										</span>
										<motion.a
											href={doc.link}
											className="inline-flex items-center space-x-2 px-4 py-2 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all"
											whileHover={{ scale: 1.05 }}
											whileTap={{ scale: 0.95 }}
										>
											<Download className="w-4 h-4" />
											<span>Descargar</span>
										</motion.a>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Principios Cooperativistas */}
			<div className="py-20 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Principios Cooperativistas
						</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Los valores fundamentales que guían nuestra
							operación
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{principiosCooperativistas.map((principio, idx) => (
							<motion.div
								key={idx}
								className="bg-white rounded-2xl p-8 border border-gray-200 text-center hover:border-emerald-200 hover:shadow-lg transition-all"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: idx * 0.05,
								}}
								whileHover={{ y: -5 }}
							>
								<div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-to-br from-emerald-100 to-yellow-50 rounded-full mb-4">
									<span className="text-2xl font-bold text-emerald-600">
										{principio.numero}
									</span>
								</div>

								<h3 className="text-lg font-bold text-gray-900 mb-3">
									{principio.titulo}
								</h3>

								<p className="text-gray-600">
									{principio.descripcion}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Capítulos de los Estatutos */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
							Capítulos de los Estatutos
						</h2>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Estructura legal y normativa de la cooperativa
						</p>
					</div>

					<div className="space-y-4">
						{capitulos.map((capitulo, idx) => (
							<motion.div
								key={capitulo.id}
								className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: idx * 0.05,
								}}
							>
								<button
									onClick={() => toggleSection(capitulo.id)}
									className="w-full px-8 py-6 flex items-center justify-between hover:bg-emerald-50 transition-colors group"
								>
									<div className="flex items-center space-x-4 text-left">
										<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg group-hover:bg-emerald-200 transition-colors">
											<span className="text-lg font-bold text-emerald-600">
												{capitulo.numero}
											</span>
										</div>
										<div>
											<h3 className="text-lg font-bold text-gray-900">
												{capitulo.titulo}
											</h3>
											<p className="text-sm text-gray-600 mt-1">
												{capitulo.contenido.length}{" "}
												puntos principales
											</p>
										</div>
									</div>

									<ChevronDown
										className={`w-6 h-6 text-gray-600 transition-transform ${
											expandedSection === capitulo.id
												? "rotate-180"
												: ""
										}`}
									/>
								</button>

								<AnimatePresence>
									{expandedSection === capitulo.id && (
										<motion.div
											className="px-8 pb-6 border-t border-gray-200"
											initial={{ opacity: 0, height: 0 }}
											animate={{
												opacity: 1,
												height: "auto",
											}}
											exit={{ opacity: 0, height: 0 }}
											transition={{ duration: 0.3 }}
										>
											<div className="pt-6 space-y-6">
												{/* Puntos Principales */}
												<div>
													<h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
														<CheckCircle className="w-5 h-5 text-emerald-600" />
														<span>
															Puntos Principales
														</span>
													</h4>
													<ul className="space-y-3">
														{capitulo.contenido.map(
															(punto, i) => (
																<li
																	key={i}
																	className="flex items-start space-x-3 text-gray-700"
																>
																	<span className="text-emerald-600 font-bold mt-1">
																		•
																	</span>
																	<span>
																		{punto}
																	</span>
																</li>
															),
														)}
													</ul>
												</div>

												{/* Secciones Detalladas */}
												<div>
													<h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
														<Book className="w-5 h-5 text-emerald-600" />
														<span>
															Secciones Detalladas
														</span>
													</h4>
													<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
														{capitulo.seccionesDetalladas.map(
															(seccion, i) => (
																<div
																	key={i}
																	className="bg-emerald-50 rounded-lg p-4 border border-emerald-100"
																>
																	<h5 className="font-semibold text-gray-900 text-sm mb-2">
																		{
																			seccion.titulo
																		}
																	</h5>
																	<p className="text-sm text-gray-600">
																		{
																			seccion.descripcion
																		}
																	</p>
																</div>
															),
														)}
													</div>
												</div>
											</div>
										</motion.div>
									)}
								</AnimatePresence>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<CTASection />

			<Footer />
		</div>
	);
}
