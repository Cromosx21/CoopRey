import React from "react";
import { CTASection } from "../components/sections/CTASection.jsx";
import { motion } from "motion/react";
import { Shield, Percent } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { productosAhorros, ahorrosHeroData } from "../data/ahorros.js";
import AhorroProductCard from "../components/ahorros/AhorroProductCard.jsx";

export default function Ahorros() {
	return (
		<>
			{/* Hero Section */}
			<section className="relative min-h-[60vh] flex items-center pt-28 pb-20 overflow-hidden">
				<div className="absolute inset-0 overflow-hidden">
					<div
						className="absolute inset-0 bg-cover bg-center"
						style={{
							backgroundImage: `url('${ahorrosHeroData.image}')`,
							opacity: 0.2,
						}}
					/>
					<div className="absolute inset-0 bg-linear-to-br from-emerald-500/50 via-blue-500/30 to-indigo-500/20 mix-blend-multiply" />
				</div>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<motion.div
							className="inline-flex items-center space-x-2 px-5 py-2 bg-emerald-50 rounded-full border border-emerald-100"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<ahorrosHeroData.badgeIcon className="w-4 h-4 text-emerald-600" />
							<span className="text-emerald-700 text-sm font-medium">
								{ahorrosHeroData.badge}
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-gray-900 leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{ahorrosHeroData.title}{" "}
							<span className="bg-linear-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">
								{ahorrosHeroData.titleHighlight}
							</span>{" "}
							{ahorrosHeroData.titleSuffix}
						</motion.h1>

						<motion.p
							className="text-xl text-gray-600"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							{ahorrosHeroData.description}
						</motion.p>
					</div>
				</div>
			</section>

			{/* Productos de Ahorro */}
			<section className="py-20 px-4 sm:px-6 lg:px-8 bg-linear-to-b from-white to-gray-50">
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
						{productosAhorros.map((producto, idx) => (
							<AhorroProductCard
								key={producto.id}
								producto={producto}
								idx={idx}
							/>
						))}
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
		</>
	);
}
