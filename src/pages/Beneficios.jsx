import React from "react";
import { CTASection } from "../components/sections/CTASection.jsx";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import BeneficiosSplitScreen from "../components/sections/BeneficiosSplitScreen.jsx";
import { CheckCircle, Quote, Star } from "lucide-react";
import {
	beneficiosEspeciales,
	beneficiosHeroData,
} from "../data/beneficios.js";

export default function Beneficios() {
	return (
		<>
			{/* Hero Section */}
			<div className="relative overflow-hidden pt-32 pb-20 md:pb-24">
				{/* Background Image */}
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url('${beneficiosHeroData.image}')`,
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
							<beneficiosHeroData.badgeIcon className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								{beneficiosHeroData.badge}
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{beneficiosHeroData.title}{" "}
							<span className="text-yellow-200">
								{beneficiosHeroData.titleHighlight}
							</span>{" "}
							{beneficiosHeroData.titleSuffix}
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							{beneficiosHeroData.description}
						</motion.p>
					</div>
				</div>
			</div>

			{/* Split Screen Benefits Section */}
			<BeneficiosSplitScreen />

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

			{/* Special Benefits Section */}
			<div className="py-20 md:py-24 bg-linear-to-b from-gray-50 to-white">
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

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{/* First 3 items (Existing Special Benefits) */}
						{beneficiosEspeciales.map((seccion, idx) => {
							const Icon = seccion.icon;
							return (
								<motion.div
									key={idx}
									className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all group relative overflow-hidden flex flex-col h-full"
									initial={{ opacity: 0, y: 20 }}
									whileInView={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.5,
										delay: idx * 0.1,
									}}
									viewport={{ once: true }}
								>
									{/* Background Gradient */}
									<div className="absolute top-0 right-0 w-32 h-32 bg-linear-to-bl from-emerald-50 to-transparent rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-110 duration-500" />

									{/* Header */}
									<div className="relative mb-6">
										<div className="w-14 h-14 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-600 mb-4 group-hover:bg-emerald-100 transition-colors">
											<Icon className="w-7 h-7" />
										</div>
										<h3 className="text-xl font-bold text-gray-900 leading-tight">
											{seccion.titulo}
										</h3>
									</div>

									{/* List */}
									<ul className="space-y-3 relative grow">
										{seccion.items.map((item, i) => (
											<li
												key={i}
												className="flex items-start space-x-2.5 text-sm text-gray-600"
											>
												<CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
												<span className="leading-relaxed">
													{item}
												</span>
											</li>
										))}
									</ul>
								</motion.div>
							);
						})}

						{/* 4th Item: Member Image Card */}
						<motion.div
							className="relative rounded-3xl overflow-hidden h-full min-h-80 shadow-lg group"
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6, delay: 0.3 }}
							viewport={{ once: true }}
						>
							<img
								src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1632&q=80"
								alt="Socio satisfecho"
								className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
							/>
							<div className="absolute inset-0 bg-linear-to-t from-black/80 via-black/20 to-transparent" />

							<div className="absolute bottom-0 left-0 right-0 p-6 text-white">
								<div className="flex items-center space-x-2 mb-2">
									<div className="flex -space-x-2">
										{[1, 2, 3].map((i) => (
											<div
												key={i}
												className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 overflow-hidden"
											>
												<img
													src={`https://i.pravatar.cc/100?img=${i + 10}`}
													alt="Avatar"
													className="w-full h-full object-cover"
												/>
											</div>
										))}
									</div>
									<span className="text-sm font-medium text-emerald-300">
										+2,500 Socios
									</span>
								</div>
								<p className="text-lg font-bold leading-tight">
									Únete a nuestra creciente familia
									cooperativa
								</p>
							</div>
						</motion.div>
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
			<div className="py-20 md:py-24 bg-linear-to-b from-[#f0fdf4] to-white relative overflow-hidden">
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
								className="relative group"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: idx * 0.1,
								}}
							>
								{/* Organic background shape */}
								<motion.div
									className="absolute -inset-2 bg-linear-to-br from-emerald-400/10 to-yellow-400/10 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] group-hover:from-emerald-400/20 group-hover:to-yellow-400/20 transition-all duration-300"
									whileHover={{
										borderRadius: [
											"30% 70% 70% 30% / 30% 30% 70% 70%",
											"70% 30% 30% 70% / 70% 70% 30% 30%",
											"30% 70% 70% 30% / 30% 30% 70% 70%",
										],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
									}}
								/>

								<div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 h-full flex flex-col">
									{/* Quote Icon */}
									<div className="mb-6">
										<div className="inline-flex items-center justify-center w-12 h-12 bg-linear-to-br from-emerald-500 to-yellow-500 rounded-2xl">
											<Quote className="w-6 h-6 text-white" />
										</div>
									</div>

									{/* Rating */}
									<div className="flex items-center space-x-1 mb-4">
										{[...Array(testimonial.rating)].map(
											(_, i) => (
												<Star
													key={i}
													className="w-5 h-5 text-yellow-400 fill-current"
												/>
											),
										)}
									</div>

									{/* Content */}
									<p className="text-gray-700 leading-relaxed mb-6 grow italic">
										"{testimonial.comentario}"
									</p>

									{/* Author */}
									<div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
										<motion.div
											className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0"
											whileHover={{ scale: 1.1 }}
										>
											<img
												src={testimonial.imagen}
												alt={testimonial.nombre}
												className="w-full h-full object-cover"
											/>
										</motion.div>
										<div>
											<p className="font-bold text-gray-900">
												{testimonial.nombre}
											</p>
											<p className="text-sm text-gray-600">
												{testimonial.rol}
											</p>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<CTASection />
		</>
	);
}
