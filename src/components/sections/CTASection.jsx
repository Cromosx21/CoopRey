import React from "react";
import { motion } from "motion/react";
import { ArrowRight, CheckCircle } from "lucide-react";

import { ctaBenefits } from "../../data/common";

export function CTASection() {
	return (
		<section className="relative py-32 overflow-hidden" id="hazte-socio">
			{/* Organic gradient background */}
			<div className="absolute inset-0 bg-linear-to-br from-emerald-600 via-emerald-500 to-yellow-500">
				<motion.div
					className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						x: [0, 50, 0],
						y: [0, 30, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-0 left-0 w-80 h-80 bg-white/10 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						x: [0, -30, 0],
						y: [0, -50, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			{/* Organic waves */}
			<div className="absolute inset-0">
				<svg
					className="absolute top-0 left-0 w-full"
					viewBox="0 0 1440 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,32L48,42.7C96,53,192,75,288,80C384,85,480,75,576,64C672,53,768,43,864,48C960,53,1056,75,1152,74.7C1248,75,1344,53,1392,42.7L1440,32L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
						fill="white"
					/>
				</svg>
				<svg
					className="absolute bottom-0 left-0 w-full"
					viewBox="0 0 1440 120"
					fill="none"
					xmlns="http://www.w3.org/2000/svg"
				>
					<path
						d="M0,64L48,58.7C96,53,192,43,288,48C384,53,480,75,576,80C672,85,768,75,864,64C960,53,1056,43,1152,48C1248,53,1344,75,1392,85.3L1440,96L1440,120L1392,120C1344,120,1248,120,1152,120C1056,120,960,120,864,120C768,120,672,120,576,120C480,120,384,120,288,120C192,120,96,120,48,120L0,120Z"
						fill="white"
					/>
				</svg>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="text-center">
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, y: 30 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						{/* Badge */}
						<motion.div
							className="inline-flex items-center space-x-2 px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
							initial={{ opacity: 0, scale: 0.8 }}
							whileInView={{ opacity: 1, scale: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.2 }}
						>
							<span className="text-white text-sm font-medium">
								✨ Únete a la familia Niño Rey
							</span>
						</motion.div>

						{/* Heading */}
						<motion.h2
							className="text-4xl md:text-6xl font-bold text-white mb-6"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.3 }}
						>
							Comienza tu camino hacia
							<span className="block mt-2">
								la libertad financiera
							</span>
						</motion.h2>

						<motion.p
							className="text-xl text-white/90 max-w-2xl mx-auto leading-relaxed"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.4 }}
						>
							Hacerse socio es simple, rápido y sin
							complicaciones. Da el primer paso hoy y descubre
							todo lo que podemos hacer por ti.
						</motion.p>

						{/* Benefits List */}
						<div className="max-w-5xl w-full mx-auto grid grid-cols-1 md:grid-cols-2 gap-4 items-center justify-items-center">
							{ctaBenefits.map((benefit, index) => (
								<motion.div
									key={index}
									className="flex items-center gap-1 text-white"
									initial={{ opacity: 0, x: -20 }}
									whileInView={{ opacity: 1, x: 0 }}
									viewport={{ once: true }}
									transition={{ delay: 0.6 + index * 0.1 }}
								>
									<CheckCircle className="w-6 h-6 shrink-0" />
									<span className="text-lg">{benefit}</span>
								</motion.div>
							))}
						</div>

						{/* CTA Buttons */}
						<motion.div
							className="flex flex-col sm:flex-row gap-4 justify-center items-center"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.7 }}
						>
							<motion.a
								href="#contacto"
								className="inline-flex items-center space-x-2 px-10 py-5 bg-white text-emerald-600 rounded-full hover:bg-gray-50 transition-all duration-300 shadow-2xl hover:shadow-3xl group font-semibold text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span>Solicitar Información</span>
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</motion.a>
							<motion.a
								href="tel:+1234567890"
								className="inline-flex items-center px-10 py-5 bg-transparent border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300 font-semibold text-lg"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								Llamar Ahora
							</motion.a>
						</motion.div>

						<motion.p
							className="text-white/80 text-sm mt-8"
							initial={{ opacity: 0 }}
							whileInView={{ opacity: 1 }}
							viewport={{ once: true }}
							transition={{ delay: 0.9 }}
						>
							* Proceso 100% digital disponible
						</motion.p>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
