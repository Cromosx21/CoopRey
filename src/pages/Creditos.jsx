import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { motion } from "motion/react";
import {
	Zap,
	Home,
	Briefcase,
	GraduationCap,
	Percent,
	CheckCircle,
	FileText,
	Clock,
	BadgeCheck,
	DollarSign,
} from "lucide-react";
import SectionHeading from "../components/SectionHeading.jsx";
import { Button } from "react-day-picker";

export default function Creditos() {
	const tiposCreditos = [
		{
			id: 1,
			nombre: "Crédito Personal",
			descripcion: "Para tus gastos y proyectos personales",
			tasa: "Desde 8.5%",
			plazo: "12-60 meses",
			monto: "Hasta $50,000",
			imagen: "https://images.unsplash.com/photo-1579621970563-ebec5855551f?w=600&h=500&fit=crop",
			beneficios: [
				"Trámite rápido",
				"Sin avalistas",
				"Desembolso inmediato",
			],
			icon: Zap,
		},
		{
			id: 2,
			nombre: "Crédito Hipotecario",
			descripcion: "Realiza el sueño de tu vivienda propia",
			tasa: "Desde 6.2%",
			plazo: "5-25 años",
			monto: "Hasta $500,000",
			imagen: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=500&fit=crop",
			beneficios: [
				"Tasas preferenciales",
				"Tramitación ágil",
				"Asesoramiento completo",
			],
			icon: Home,
		},
		{
			id: 3,
			nombre: "Crédito Empresarial",
			descripcion: "Impulsa tu negocio con financiamiento accesible",
			tasa: "Desde 7.8%",
			plazo: "12-84 meses",
			monto: "Hasta $200,000",
			imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
			beneficios: [
				"Capital de trabajo",
				"Equipo e instalaciones",
				"Asesoría empresarial",
			],
			icon: Briefcase,
		},
		{
			id: 4,
			nombre: "Crédito Educativo",
			descripcion: "Invierte en tu formación profesional",
			tasa: "Desde 5.5%",
			plazo: "12-120 meses",
			monto: "Hasta $80,000",
			imagen: "https://images.unsplash.com/photo-1427504494785-cdcb0f67ef48?w=600&h=500&fit=crop",
			beneficios: [
				"Cuota diferida",
				"Tasas especiales",
				"Periodo de gracia",
			],
			icon: GraduationCap,
		},
	];

	const pasos = [
		{
			numero: "01",
			titulo: "Solicitud",
			descripcion:
				"Completa tu solicitud en línea o en nuestras oficinas",
			icon: FileText,
		},
		{
			numero: "02",
			titulo: "Evaluación",
			descripcion: "Analizamos tu perfil crediticio en 24-48 horas",
			icon: Clock,
		},
		{
			numero: "03",
			titulo: "Aprobación",
			descripcion: "Recibe la confirmación de aprobación vía correo",
			icon: BadgeCheck,
		},
		{
			numero: "04",
			titulo: "Desembolso",
			descripcion: "El dinero se deposita en tu cuenta el mismo día",
			icon: DollarSign,
		},
	];

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section */}
			<section className="relative min-h-[60vh] flex items-center pt-28 pb-20 overflow-hidden">
				<div className="absolute inset-0 overflow-hidden">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{
							backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop')`,
							opacity: 0.2,
						}}
					/>
					<div
						className="absolute inset-0"
						style={{
							background: `linear-gradient(135deg, 
                rgba(59, 130, 246, 0.5) 0%, 
                rgba(99, 102, 241, 0.3) 50%,
                rgba(139, 92, 246, 0.2) 100%)`,
							mixBlendMode: "multiply",
						}}
					/>
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<motion.div
							className="inline-flex items-center space-x-2 px-5 py-2 bg-emerald-50 rounded-full border border-emerald-100"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<Percent className="w-4 h-4 text-emerald-600" />
							<span className="text-emerald-700 text-sm font-medium"></span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Financia tus{" "}
							<span className="bg-gradient-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
								sueños
							</span>{" "}
							con confianza
						</motion.h1>

						<motion.p
							className="text-xl text-gray-600"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Créditos accesibles con trámites ágiles y tasas
							preferenciales para socios cooperativistas
						</motion.p>
					</div>
				</div>
			</section>

			{/* Tipos de Créditos */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-20">
						{/* Section heading */}
						<SectionHeading
							badge="Productos"
							title="Nuestros Productos de Crédito"
							subtitle="Múltiples opciones diseñadas para tus necesidades"
						/>
					</div>

					{/* Mini secciones de créditos */}
					<div className="space-y-16">
						{tiposCreditos.map((credito, idx) => {
							const IconComponent = credito.icon;
							const isOdd = idx % 2 === 0;

							return (
								<motion.div
									key={credito.id}
									className={`grid md:grid-cols-2 gap-8 lg:gap-12 items-center ${
										!isOdd ? "md:grid-flow-col-dense" : ""
									}`}
									initial={{ opacity: 0, y: 40 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{ duration: 0.6 }}
									viewport={{ once: true }}
								>
									{/* Contenido */}
									<div
										className={
											isOdd ? "order-1" : "order-2"
										}
									>
										<div className="space-y-6">
											{/* Header con icono */}
											<div className="flex items-start space-x-4">
												<div className="flex-shrink-0 w-14 h-14 bg-gradient-to-br from-emerald-500 to-yellow-400 rounded-2xl flex items-center justify-center shadow-lg">
													<IconComponent className="w-7 h-7 text-white" />
												</div>
												<div>
													<h3 className="text-3xl font-bold text-gray-900">
														{credito.nombre}
													</h3>
													<p className="text-gray-600 mt-1">
														{credito.descripcion}
													</p>
												</div>
											</div>

											{/* Características en grid */}
											<div className="grid grid-cols-3 gap-4">
												<div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
													<p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
														Tasa
													</p>
													<p className="text-2xl font-bold text-gray-900 mt-2">
														{credito.tasa}
													</p>
												</div>
												<div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
													<p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
														Plazo
													</p>
													<p className="text-lg font-bold text-gray-900 mt-2">
														{credito.plazo}
													</p>
												</div>
												<div className="bg-gray-100 rounded-xl p-4 border border-gray-200">
													<p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
														Monto
													</p>
													<p className="text-lg font-bold text-gray-900 mt-2">
														{credito.monto}
													</p>
												</div>
											</div>

											{/* Beneficios */}
											<div className="bg-white rounded-2xl p-6 border border-gray-200">
												<p className="font-semibold text-gray-900 mb-4">
													Beneficios principales
												</p>
												<div className="space-y-3">
													{credito.beneficios.map(
														(beneficio, i) => (
															<div
																key={i}
																className="flex items-center space-x-3"
															>
																<CheckCircle className="w-5 h-5 text-emerald-600 shrink-0" />
																<p className="text-gray-700">
																	{beneficio}
																</p>
															</div>
														),
													)}
												</div>
											</div>

											{/* Botón */}
											<motion.button
												className="px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all hover:shadow-lg w-full md:w-auto"
												whileHover={{ scale: 1.05 }}
												whileTap={{ scale: 0.95 }}
											>
												Solicitar Crédito
											</motion.button>
										</div>
									</div>

									{/* Imagen */}
									<div
										className={`order-${
											isOdd ? "2" : "1"
										} relative`}
									>
										<motion.div
											className="relative overflow-hidden rounded-3xl shadow-2xl"
											whileHover={{ scale: 1.05 }}
											transition={{
												duration: 0.3,
											}}
										>
											<img
												src={credito.imagen}
												alt={credito.nombre}
												className="w-full h-96 object-cover"
											/>
											<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" />

											{/* Badge de información */}
											<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur rounded-xl p-4 shadow-lg">
												<p className="text-xs font-semibold text-gray-600 uppercase tracking-wider">
													Tasa
												</p>
												<p className="text-3xl font-bold text-gray-900 mt-1">
													{credito.tasa}
												</p>
											</div>
										</motion.div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Wave divisor */}
			<svg
				className="w-full"
				viewBox="0 0 1200 100"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
					fill="#f0fdf4"
				/>
			</svg>

			{/* Proceso de Solicitud (ajustado a referencia) */}
			<section className="bg-[#f0fdf4] py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
				<div className="max-w-7xl mx-auto relative z-10">
					<motion.div
						className="text-center mb-12"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<SectionHeading
							badge="Proceso"
							title="Proceso de Solicitud"
							subtitle="Sigue estos pasos claros y sencillos para obtener tu crédito."
						/>
					</motion.div>

					<div className="grid md:grid-cols-3 gap-12 items-center">
						{/* LEFT: imágenes superpuestas (desktop) */}
						<div className="hidden md:block relative h-[480px] col-span-2">
							{/* Fondo - imagen grande horizontal */}
							<div className="absolute left-0 top-12 w-[60%] h-[75%] rounded-2xl bg-white shadow-lg overflow-hidden border-8 border-[#f0fdf4] transform -rotate-3">
								<img
									src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1000&h=700&fit=crop"
									alt="flujo solicitud"
									className="w-full h-full object-cover"
								/>
							</div>

							{/* Tarjeta vertical superpuesta */}
							<div className="absolute right-0 top-0 w-[46%] h-full rounded-2xl bg-white shadow-2xl overflow-hidden border-8 border-[#f0fdf4] transform rotate-[4deg]">
								<img
									src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&h=1200&fit=crop"
									alt="aprobacion"
									className="w-full h-full object-cover"
								/>
							</div>
						</div>

						{/* RIGHT: pasos verticales */}
						<div className="flex flex-col gap-10 relative">
							<div className="absolute top-1/2 -translate-1/2 left-7 -z-10 w-px h-11/12 bg-gray-400"></div>
							{pasos.map((paso, idx) => {
								const Icon = paso.icon;
								return (
									<motion.div
										key={idx}
										className="flex items-center gap-6"
										initial={{ opacity: 0, x: 20 }}
										whileInView={{ opacity: 1, x: 0 }}
										transition={{
											duration: 0.5,
											delay: idx * 0.12,
										}}
										viewport={{ once: true }}
									>
										{/* Texto */}
										<div>
											<div className="flex flex-row items-center gap-2">
												<div className=" -top-8 -right-6 py-3 px-4 bg-emerald-600 text-white rounded-full flex items-center justify-center text-2xl font-bold">
													{paso.numero}
												</div>
												<div>
													<h4 className="text-2xl font-semibold text-gray-900">
														{paso.titulo}
													</h4>
													<p className="text-md text-gray-600 mt-1">
														{paso.descripcion}
													</p>
												</div>
											</div>
										</div>
									</motion.div>
								);
							})}
						</div>
					</div>
					<div className="flex justify-center mt-12">
						<motion.button
							className=" px-8 py-4 bg-linear-to-r from-emerald-600 to-emerald-700 text-white rounded-xl font-semibold hover:from-emerald-700 hover:to-emerald-800 transition-all hover:shadow-lg w-full md:w-auto cursor-pointer"
							whileHover={{ scale: 1.05 }}
							whileTap={{ scale: 0.95 }}
						>
							Comenzar mi Solicitud
						</motion.button>
					</div>
				</div>
			</section>

			{/* Wave divisor final */}
			<svg
				className="w-full"
				viewBox="0 0 1200 100"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
					fill="#f0fdf4"
				/>
			</svg>

			<CTASection />
			<Footer />
		</div>
	);
}
