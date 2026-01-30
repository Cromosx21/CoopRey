import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading.jsx";
import {
	Gift,
	DollarSign,
	BookOpen,
	Users,
	Shield,
	Zap,
	CheckCircle,
	Award,
	Percent,
	TrendingUp,
} from "lucide-react";

export default function Beneficios() {
	const beneficiosItems = [
		{
			id: 1,
			titulo: "Tasas Preferenciales",
			descripcion:
				"Acceso a tasas de interés más bajas en créditos y más altas en ahorros",
			icon: Percent,
			imagen: "https://images.unsplash.com/photo-1579621970563-ebec5855551f?w=500&h=400&fit=crop",
			dato: "Hasta 2% más de rentabilidad",
			detalles: [
				"Tasas exclusivas para socios",
				"Mejoras periódicas en nuestras condiciones",
				"Descuentos en productos especiales",
			],
		},
		{
			id: 2,
			titulo: "Descuentos Comerciales",
			descripcion: "Convenios con empresas y servicios locales",
			icon: Gift,
			imagen: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=400&fit=crop",
			dato: "Hasta 30% descuento",
			detalles: [
				"Descuentos en comercios aliados",
				"Promociones exclusivas para socios",
				"Rebajas en servicios de salud y educación",
			],
		},
		{
			id: 3,
			titulo: "Educación Financiera",
			descripcion: "Acceso a talleres y capacitaciones gratuitas",
			icon: BookOpen,
			imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
			dato: "12 talleres anuales",
			detalles: [
				"Talleres mensuales de finanzas personales",
				"Seminarios de emprendimiento",
				"Asesoramiento personalizado gratuito",
			],
		},
		{
			id: 4,
			titulo: "Programa de Retorno",
			descripcion: "Dividendos y excedentes cooperativos",
			icon: TrendingUp,
			imagen: "https://images.unsplash.com/photo-1607624814075-e51df1bdc82f?w=500&h=400&fit=crop",
			dato: "+25% retorno anual",
			detalles: [
				"Participación en los excedentes anuales",
				"Bonificaciones por antigüedad",
				"Premios por referencias exitosas",
			],
		},
		{
			id: 5,
			titulo: "Atención Prioritaria",
			descripcion: "Servicio al cliente preferente y personalizado",
			icon: Zap,
			imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
			dato: "Respuesta en 24 horas",
			detalles: [
				"Atención rápida en caja y servicios",
				"Línea telefónica exclusiva",
				"Gestor personal asignado",
			],
		},
		{
			id: 6,
			titulo: "Protección y Seguridad",
			descripcion: "Cobertura adicional y protección de inversiones",
			icon: Shield,
			imagen: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&h=400&fit=crop",
			dato: "100% protegido",
			detalles: [
				"Seguro de depósitos garantizado",
				"Cobertura de vida en créditos",
				"Protección patrimonial",
			],
		},
	];

	const beneficiosEspeciales = [
		{
			titulo: "Acceso a Productos Exclusivos",
			items: [
				"Créditos con condiciones especiales",
				"Productos de inversión avanzada",
				"Servicios financieros personalizados",
				"Seguros y protección adicional",
			],
		},
		{
			titulo: "Participación Cooperativa",
			items: [
				"Voz y voto en asambleas",
				"Participación en decisiones corporativas",
				"Acceso a información financiera",
				"Oportunidad de ser directivo",
			],
		},
		{
			titulo: "Beneficios Familiares",
			items: [
				"Incorporación de familiares dependientes",
				"Descuentos para familia directa",
				"Herencia de la calidad de socio",
				"Protección multigeneracional",
			],
		},
		{
			titulo: "Beneficios Comunitarios",
			items: [
				"Apoyo a iniciativas locales",
				"Participación en eventos cooperativos",
				"Red de socios a nivel nacional",
				"Compromiso social compartido",
			],
		},
	];

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
							<Award className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								Privilegios de Ser Socio
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Disfruta de{" "}
							<span className="text-yellow-200">
								beneficios exclusivos
							</span>{" "}
							como socio
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Tu inversión en la cooperativa te abre puertas a
							oportunidades financieras y personales
						</motion.p>
					</div>
				</div>
			</div>

			{/* Benefits Grid */}
			<div className="py-20 md:py-24 relative z-10 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Beneficios"
							title="Beneficios Principales"
							subtitle="Ventajas de ser socio"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Como socio cooperativista tienes acceso a servicios
							y privilegios diseñados para tu bienestar financiero
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
						{beneficiosItems.map((beneficio, idx) => {
							const IconComponent = beneficio.icon;
							return (
								<motion.div
									key={beneficio.id}
									className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 hover:shadow-2xl transition-all duration-300"
									initial={{
										opacity: 0,
										y: 20,
									}}
									animate={{
										opacity: 1,
										y: 0,
									}}
									transition={{
										duration: 0.6,
										delay: idx * 0.1,
									}}
									whileHover={{ y: -8 }}
								>
									{/* Imagen */}
									<div className="relative h-40 overflow-hidden bg-gray-200">
										<img
											src={beneficio.imagen}
											alt={beneficio.titulo}
											className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />

										{/* Dato destacado */}
										<div className="absolute bottom-4 left-4 right-4">
											<p className="text-white text-2xl font-bold">
												{beneficio.dato}
											</p>
										</div>
									</div>

									{/* Contenido */}
									<div className="p-6">
										<div className="mb-3">
											<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-50 rounded-lg group-hover:bg-emerald-100 transition-colors">
												<IconComponent className="w-6 h-6 text-emerald-600" />
											</div>
										</div>

										<h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-emerald-600 transition-colors">
											{beneficio.titulo}
										</h3>

										<p className="text-gray-600 mb-4 text-sm">
											{beneficio.descripcion}
										</p>

										<ul className="space-y-2">
											{beneficio.detalles.map(
												(detalle, i) => (
													<li
														key={i}
														className="flex items-start space-x-2"
													>
														<CheckCircle className="w-4 h-4 text-emerald-500 flex-shrink-0 mt-0.5" />
														<span className="text-sm text-gray-700">
															{detalle}
														</span>
													</li>
												),
											)}
										</ul>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Wave divisor */}
			<svg
				className="w-full"
				viewBox="0 0 1200 100"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
					fill="#f9fafb"
				/>
			</svg>

			{/* Wave divisor inverso */}
			<svg
				className="w-full"
				viewBox="0 0 1200 100"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
					fill="#f9fafb"
				/>
			</svg>

			{/* Special Benefits Section */}
			<div className="py-20 md:py-24 bg-gradient-to-b from-gray-50 to-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Ventajas"
							title="Más Razones para Ser Socio"
							subtitle="Oportunidades y participación"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Descubre todas las ventajas que te esperan
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{beneficiosEspeciales.map((seccion, idx) => {
							// Iconos para cada sección
							const sectionIcons = [
								<Gift className="w-8 h-8" />,
								<Users className="w-8 h-8" />,
								<DollarSign className="w-8 h-8" />,
								<Award className="w-8 h-8" />,
							];

							return (
								<motion.div
									key={idx}
									className="bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all group relative overflow-hidden"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.1,
									}}
									viewport={{ once: true }}
								>
									{/* Fondo gradiente sutil */}
									<div className="absolute -top-10 -right-10 w-40 h-40 bg-gradient-to-br from-emerald-100 to-yellow-100 rounded-full opacity-0 group-hover:opacity-20 transition-opacity duration-500" />

									{/* Encabezado con icono */}
									<div className="relative mb-8 flex items-start space-x-4">
										<div className="flex-shrink-0">
											<div className="flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-br from-emerald-100 to-yellow-100 text-emerald-600 group-hover:from-emerald-200 group-hover:to-yellow-200 transition-all">
												{sectionIcons[idx]}
											</div>
										</div>
										<h3 className="text-2xl font-bold text-gray-900 pt-1">
											{seccion.titulo}
										</h3>
									</div>

									{/* Items */}
									<ul className="space-y-4 relative">
										{seccion.items.map((item, i) => (
											<motion.li
												key={i}
												className="flex items-start space-x-3"
												initial={{
													opacity: 0,
													x: -10,
												}}
												whileInView={{
													opacity: 1,
													x: 0,
												}}
												transition={{
													duration: 0.4,
													delay: i * 0.1,
												}}
												viewport={{ once: true }}
											>
												<div className="flex-shrink-0">
													<div className="flex items-center justify-center h-6 w-6 rounded-full bg-emerald-100 mt-1">
														<CheckCircle className="h-4 w-4 text-emerald-600" />
													</div>
												</div>
												<span className="text-gray-700 leading-relaxed">
													{item}
												</span>
											</motion.li>
										))}
									</ul>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

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

			{/* Testimonials Section */}
			<div className="py-20 md:py-24 bg-white relative overflow-hidden">
				{/* Decorative waves */}
				<svg
					className="absolute inset-0 w-full h-full"
					viewBox="0 0 1200 600"
					preserveAspectRatio="none"
					style={{ opacity: 0.05 }}
				>
					<defs>
						<pattern
							id="waveTest"
							x="0"
							y="0"
							width="120"
							height="120"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M0,60 Q30,30 60,60 T120,60"
								fill="none"
								stroke="#059669"
								strokeWidth="2"
							/>
						</pattern>
					</defs>
					<rect width="1200" height="600" fill="url(#waveTest)" />
				</svg>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Testimonios"
							title="Lo Dicen Nuestros Socios"
							subtitle="Experiencias reales"
						/>
						<p className="text-gray-600 text-lg">
							Testimonios reales de socios satisfechos
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{[
							{
								nombre: "María García",
								rol: "Socia desde 2018",
								comentario:
									"Los beneficios y la atención que recibo como socia han superado mis expectativas. Definitivamente fue la mejor decisión.",
								rating: 5,
								imagen: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
							},
							{
								nombre: "Carlos Rodríguez",
								rol: "Pequeño empresario",
								comentario:
									"La cooperativa me ayudó a crecer mi negocio con créditos accesibles y asesoría sin igual. Muy agradecido.",
								rating: 5,
								imagen: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
							},
							{
								nombre: "Ana López",
								rol: "Socia desde 2015",
								comentario:
									"Además de buenos servicios financieros, encuentro una comunidad de personas comprometidas con el bien común.",
								rating: 5,
								imagen: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=400&fit=crop",
							},
						].map((testimonial, idx) => (
							<motion.div
								key={idx}
								className="bg-white rounded-2xl overflow-hidden border-2 border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all group"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: idx * 0.1,
								}}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
							>
								{/* Imagen de perfil */}
								<div className="relative h-32 overflow-hidden bg-gradient-to-r from-emerald-400 to-yellow-300">
									<img
										src={testimonial.imagen}
										alt={testimonial.nombre}
										className="w-full h-full object-cover"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent" />
								</div>

								{/* Contenido */}
								<div className="p-6">
									{/* Stars */}
									<div className="flex space-x-1 mb-4">
										{[...Array(testimonial.rating)].map(
											(_, i) => (
												<motion.div
													key={i}
													className="w-5 h-5 text-yellow-400 fill-current"
													initial={{
														opacity: 0,
														scale: 0,
													}}
													whileInView={{
														opacity: 1,
														scale: 1,
													}}
													transition={{
														delay: i * 0.1,
													}}
													viewport={{
														once: true,
													}}
												>
													★
												</motion.div>
											),
										)}
									</div>

									{/* Comentario */}
									<p className="text-gray-700 mb-6 italic leading-relaxed">
										"{testimonial.comentario}"
									</p>

									{/* Info */}
									<div className="border-t border-gray-100 pt-4">
										<p className="font-semibold text-gray-900">
											{testimonial.nombre}
										</p>
										<p className="text-sm text-emerald-600 font-medium">
											{testimonial.rol}
										</p>
									</div>
								</div>
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
