import React from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading.jsx";
import { TrendingUp, Percent, Lock, Award, Clock, Shield } from "lucide-react";

export default function Ahorros() {
	const productosAhorros = [
		{
			id: 1,
			nombre: "Ahorro Básico",
			descripcion: "Cuenta de ahorros flexible con acceso inmediato",
			tasa: "2.5%",
			minimo: "$50",
			beneficios: [
				"Sin comisiones",
				"Retiro inmediato",
				"Seguridad garantizada",
			],
			icon: TrendingUp,
		},
		{
			id: 2,
			nombre: "Ahorro Plazo",
			descripcion: "Maximiza tu rendimiento con plazo fijo",
			tasa: "4.8%",
			minimo: "$500",
			beneficios: [
				"Tasa fija",
				"Plazo flexible (6-24 meses)",
				"Renovación automática",
			],
			icon: Clock,
		},
		{
			id: 3,
			nombre: "Ahorro Infantil",
			descripcion: "Enseña a tus hijos el valor del ahorro",
			tasa: "3.0%",
			minimo: "$25",
			beneficios: [
				"Cuenta especial",
				"Incentivos por logros",
				"Educación financiera",
			],
			icon: Award,
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
							backgroundImage: `url('https://images.unsplash.com/photo-1579621970563-430f63602022?w=1200&h=800&fit=crop')`,
							opacity: 0.2,
						}}
					/>
					<div
						className="absolute inset-0"
						style={{
							background: `linear-gradient(135deg, 
                rgba(16, 185, 129, 0.5) 0%, 
                rgba(59, 130, 246, 0.3) 50%,
                rgba(79, 70, 229, 0.2) 100%)`,
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
							<Lock className="w-4 h-4 text-emerald-600" />
							<span className="text-emerald-700 text-sm font-medium">
								Productos de Ahorro Seguros
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Haz crecer tu{" "}
							<span className="bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
								dinero
							</span>{" "}
							con nosotros
						</motion.h1>

						<motion.p
							className="text-xl text-gray-600"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Opciones de ahorro flexibles y seguras diseñadas
							para cumplir tus metas financieras
						</motion.p>
					</div>
				</div>
			</section>

			{/* Productos de Ahorro */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-gray-50">
				<div className="max-w-7xl mx-auto">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Ahorros"
							title="Nuestros Productos de Ahorro"
							subtitle="Opciones seguras y rentables"
						/>
						<p className="text-xl text-gray-600">
							Elige la opción que mejor se adapte a tus metas
							financieras
						</p>
					</div>

					<div className="grid md:grid-cols-3 gap-8">
						{productosAhorros.map((producto, idx) => {
							const IconComponent = producto.icon;
							return (
								<motion.div
									key={producto.id}
									className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all"
									initial={{ opacity: 0, y: 30 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.1,
									}}
									whileHover={{ y: -5 }}
								>
									<div className="flex items-center mb-6">
										<div className="p-3 bg-emerald-50 rounded-lg">
											<IconComponent className="w-6 h-6 text-emerald-600" />
										</div>
										<h3 className="text-2xl font-bold text-gray-900 ml-4">
											{producto.nombre}
										</h3>
									</div>

									<p className="text-gray-600 mb-6">
										{producto.descripcion}
									</p>

									<div className="bg-gradient-to-br from-emerald-50 to-blue-50 rounded-xl p-6 mb-6">
										<p className="text-gray-600 text-sm">
											Tasa de Rendimiento Anual
										</p>
										<p className="text-4xl font-bold text-emerald-600">
											{producto.tasa}
										</p>
										<p className="text-gray-600 text-sm mt-2">
											Depósito Mínimo: {producto.minimo}
										</p>
									</div>

									<div className="space-y-3 mb-6">
										{producto.beneficios.map(
											(beneficio, i) => (
												<div
													key={i}
													className="flex items-center space-x-3"
												>
													<div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
													<p className="text-gray-700">
														{beneficio}
													</p>
												</div>
											),
										)}
									</div>

									<button className="w-full bg-gradient-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all">
										Abrir Cuenta
									</button>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			{/* Información adicional */}
			<section className="py-20 px-4 sm:px-6 lg:px-8">
				<div className="max-w-4xl mx-auto">
					<div className="grid md:grid-cols-2 gap-12">
						<motion.div
							initial={{ opacity: 0, x: -30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="flex items-start space-x-4">
								<div className="p-3 bg-blue-50 rounded-lg h-fit">
									<Shield className="w-6 h-6 text-blue-600" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										100% Seguro
									</h3>
									<p className="text-gray-600">
										Tus fondos están protegidos por nuestros
										sistemas de seguridad de última
										generación y regulaciones financieras
									</p>
								</div>
							</div>
						</motion.div>

						<motion.div
							initial={{ opacity: 0, x: 30 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.8 }}
						>
							<div className="flex items-start space-x-4">
								<div className="p-3 bg-green-50 rounded-lg h-fit">
									<Percent className="w-6 h-6 text-green-600" />
								</div>
								<div>
									<h3 className="text-2xl font-bold text-gray-900 mb-2">
										Mejores Tasas
									</h3>
									<p className="text-gray-600">
										Ofrecemos las mejores tasas del mercado
										para maximizar tu rendimiento de
										inversión
									</p>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</section>

			<CTASection />
			<Footer />
		</div>
	);
}
