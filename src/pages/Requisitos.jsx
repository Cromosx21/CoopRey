import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../components/SectionHeading.jsx";
import {
	FileText,
	CheckCircle,
	ChevronDown,
	Users,
	Briefcase,
	DollarSign,
	Shield,
	ClipboardList,
	Clock,
} from "lucide-react";

export default function Requisitos() {
	const [expandedSection, setExpandedSection] = useState(null);

	const requisitosCorporativos = [
		{
			id: 1,
			titulo: "Documentos Personales",
			items: [
				"Cédula de identidad vigente (frente y reverso)",
				"Cédula de identidad original para verificación",
				"Fotocopia de pasaporte (si es extranjero)",
				"Comprobante de domicilio reciente (últimos 3 meses)",
			],
		},
		{
			id: 2,
			titulo: "Documentos de Ingresos",
			items: [
				"Último recibo de salario o pensión",
				"Certificado de ingresos del empleador",
				"Declaración de impuestos (últimos 2 años)",
				"Estados de cuenta bancarios (últimos 3 meses)",
			],
		},
		{
			id: 3,
			titulo: "Documentos de Patrimonio",
			items: [
				"Comprobante de propiedad inmueble",
				"Póliza de vehículo (si aplica)",
				"Estados de inversiones o acciones",
				"Declaración de bienes",
			],
		},
	];

	const requisitosPorProducto = [
		{
			id: 1,
			producto: "Crédito Personal",
			requisitos: [
				"Ser mayor de edad (18 años)",
				"Tener cédula vigente",
				"Comprobante de ingresos",
				"Referencias personales o laborales",
				"Comprobante de domicilio",
				"No tener deudas vencidas",
				"Pago de cuota de ingreso",
			],
			documentos: [
				"2 fotocopias de cédula",
				"Comprobante de ingresos (último mes)",
				"Comprobante de servicios (agua, luz, internet)",
				"Formulario de solicitud completado",
			],
			plazo: "3-5 días hábiles",
		},
		{
			id: 2,
			producto: "Crédito Hipotecario",
			requisitos: [
				"Ser mayor de edad",
				"Ciudadanía comprobada",
				"Ingresos estables comprobables",
				"Aval o garantía hipotecaria",
				"Estar al día con obligaciones financieras",
				"Crédito limpio sin moras",
				"Antigüedad mínima de 2 años como socio",
			],
			documentos: [
				"Cédula de identidad",
				"Escritura o promesa de compra del inmueble",
				"Avalúo fiscal del inmueble",
				"Últimos 3 meses de comprobantes de ingresos",
				"Últimos 3 meses de estados de cuenta",
				"Comprobante de patrimonio",
				"Declaración de impuestos (últimos 2 años)",
			],
			plazo: "15-30 días",
		},
		{
			id: 3,
			producto: "Crédito Empresarial",
			requisitos: [
				"Ser dueño o representante legal de la empresa",
				"Empresa registrada y formal",
				"Mínimo 2 años de operación",
				"Estados financieros auditados",
				"Plan de inversión documentado",
				"Garantías empresariales o personales",
				"Buen historial crediticio",
			],
			documentos: [
				"Cédula del representante legal",
				"Cédula de la empresa",
				"Últimos 3 años de balances",
				"Declaración de impuestos empresarial",
				"Presupuesto de inversión",
				"Descripción del proyecto",
				"Estados de cuenta del negocio",
			],
			plazo: "10-20 días",
		},
		{
			id: 4,
			producto: "Cuenta de Ahorros",
			requisitos: [
				"Ser mayor de edad",
				"Tener cédula vigente",
				"Depósito inicial mínimo",
				"Completar formulario de solicitud",
				"Comprobante de identidad",
			],
			documentos: [
				"Cédula de identidad",
				"Comprobante de domicilio",
				"Formulario de solicitud",
				"Comprobante de depósito inicial",
			],
			plazo: "1 día",
		},
	];

	const procesoPasos = [
		{
			numero: "01",
			titulo: "Pre-solicitud",
			descripcion:
				"Reúne todos los documentos requeridos e agenda una cita con nuestro equipo",
			detalles: [
				"Revisa la lista de documentos",
				"Verifica que estén vigentes",
				"Llama para agendar",
				"Prepara originales y copias",
			],
		},
		{
			numero: "02",
			titulo: "Solicitud",
			descripcion:
				"Presenta tus documentos y completa el formulario de solicitud oficial",
			detalles: [
				"Entrega documentación",
				"Llena formularios",
				"Firma documentos",
				"Recibe número de seguimiento",
			],
		},
		{
			numero: "03",
			titulo: "Evaluación",
			descripcion:
				"Nuestro equipo analiza tu solicitud y documentación en detalle",
			detalles: [
				"Revisión de documentos",
				"Análisis crediticio",
				"Verificación de referencias",
				"Evaluación de capacidad de pago",
			],
		},
		{
			numero: "04",
			titulo: "Aprobación",
			descripcion:
				"Recibirás notificación sobre el estado de tu solicitud",
			detalles: [
				"Comunicado oficial",
				"Términos y condiciones",
				"Firma de documentos finales",
				"Desembolso del crédito",
			],
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
						backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop')`,
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
							<FileText className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								Requisitos y Proceso
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							¿Qué necesitas para{" "}
							<span className="text-yellow-200">ser socio?</span>
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Te guiamos paso a paso en el proceso de
							incorporación a nuestra cooperativa
						</motion.p>
					</div>
				</div>
			</div>

			{/* Process Steps */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Proceso"
							title="Proceso de Incorporación"
							subtitle="Pasos claros y rápidos"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Un proceso sencillo y transparente para que te
							conviertas en socio
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
						{procesoPasos.map((paso, idx) => (
							<motion.div
								key={idx}
								className="relative"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
							>
								{/* Connector Line */}
								{idx < procesoPasos.length - 1 && (
									<div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-gradient-to-r from-emerald-500 to-yellow-400 z-0" />
								)}

								<div className="relative z-10 bg-white">
									<div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-gradient-to-br from-emerald-50 to-yellow-50 border-4 border-emerald-500 mx-auto mb-6 font-bold text-4xl text-emerald-600">
										{paso.numero}
									</div>

									<div className="text-center">
										<h3 className="text-xl font-bold text-gray-900 mb-2">
											{paso.titulo}
										</h3>
										<p className="text-gray-600 mb-4 text-sm">
											{paso.descripcion}
										</p>

										<ul className="text-left text-sm space-y-1">
											{paso.detalles.map((detalle, i) => (
												<li
													key={i}
													className="flex items-start space-x-2 text-gray-700"
												>
													<CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
													<span>{detalle}</span>
												</li>
											))}
										</ul>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Requirements by Product */}
			<div className="py-20 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Requisitos"
							title="Requisitos por Producto"
							subtitle="Documentación necesaria"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Conoce exactamente qué documentos necesitas para
							cada servicio
						</p>
					</div>

					<div className="space-y-4">
						{requisitosPorProducto.map((item, idx) => (
							<motion.div
								key={item.id}
								className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
							>
								<button
									onClick={() => toggleSection(item.id)}
									className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors"
								>
									<div className="flex items-center space-x-4">
										<div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
											<FileText className="w-6 h-6 text-emerald-600" />
										</div>
										<div className="text-left">
											<h3 className="text-xl font-bold text-gray-900">
												{item.producto}
											</h3>
											<p className="text-sm text-gray-600 mt-1">
												Plazo: {item.plazo}
											</p>
										</div>
									</div>

									<ChevronDown
										className={`w-6 h-6 text-gray-600 transition-transform ${
											expandedSection === item.id
												? "rotate-180"
												: ""
										}`}
									/>
								</button>

								<AnimatePresence>
									{expandedSection === item.id && (
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
											<div className="grid md:grid-cols-2 gap-8 pt-6">
												<div>
													<h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
														<ClipboardList className="w-5 h-5 text-emerald-600" />
														<span>
															Requisitos Generales
														</span>
													</h4>
													<ul className="space-y-3">
														{item.requisitos.map(
															(requisito, i) => (
																<li
																	key={i}
																	className="flex items-start space-x-3"
																>
																	<CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
																	<span className="text-gray-700">
																		{
																			requisito
																		}
																	</span>
																</li>
															),
														)}
													</ul>
												</div>

												<div>
													<h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
														<FileText className="w-5 h-5 text-emerald-600" />
														<span>
															Documentos
															Necesarios
														</span>
													</h4>
													<ul className="space-y-3">
														{item.documentos.map(
															(documento, i) => (
																<li
																	key={i}
																	className="flex items-start space-x-3"
																>
																	<CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
																	<span className="text-gray-700">
																		{
																			documento
																		}
																	</span>
																</li>
															),
														)}
													</ul>
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

			{/* General Documents Required */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Documentos"
							title="Documentos Generales Requeridos"
							subtitle="Obligatorios"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Estos documentos son necesarios sin importar el
							producto que solicites
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{requisitosCorporativos.map((seccion, idx) => (
							<motion.div
								key={seccion.id}
								className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
							>
								<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
									<FileText className="w-6 h-6 text-emerald-600" />
								</div>

								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{seccion.titulo}
								</h3>

								<ul className="space-y-3">
									{seccion.items.map((item, i) => (
										<li
											key={i}
											className="flex items-start space-x-3"
										>
											<CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-1" />
											<span className="text-gray-700 text-sm">
												{item}
											</span>
										</li>
									))}
								</ul>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Important Notes */}
			<div className="py-20 md:py-24 bg-emerald-50">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-2xl p-8 border border-emerald-200">
						<div className="flex items-start space-x-4">
							<Shield className="w-8 h-8 text-emerald-600 flex-shrink-0 mt-1" />
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Información Importante
								</h3>

								<ul className="space-y-3 text-gray-700">
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Todos los documentos deben estar
											vigentes y ser originales para
											verificación
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Las fotocopias deben ser claras y
											completas en ambos lados
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											La evaluación de tu solicitud puede
											requerir documentación adicional
											según tu perfil
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Puedes agendar una cita con nuestro
											equipo para resolver dudas sobre el
											proceso
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Los plazos indicados son aproximados
											y pueden variar según la complejidad
											de tu solicitud
										</span>
									</li>
								</ul>
							</div>
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
