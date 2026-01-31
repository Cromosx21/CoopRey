import React from "react";
import { motion } from "motion/react";
import { Shield, ArrowRight, TrendingUp, Heart } from "lucide-react";
import { heroData } from "../../data/home";

export function HeroSection() {
	return (
		<section
			className="relative min-h-screen flex items-center pt-20 overflow-hidden"
			id="inicio"
		>
			{/* Organic Background Shapes */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute -top-40 -right-40 w-96 h-96 bg-linear-to-br from-emerald-200/40 to-yellow-200/40 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						rotate: [0, 90, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute top-1/3 -left-20 w-80 h-80 bg-linear-to-br from-yellow-200/30 to-emerald-200/30 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						rotate: [0, -90, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-0 right-1/4 w-96 h-96 bg-linear-to-br from-emerald-100/40 to-yellow-100/40 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				<div className="grid lg:grid-cols-2 gap-12 items-center">
					{/* Content */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8 }}
					>
						<div className="space-y-4">
							<motion.div
								className="inline-flex items-center space-x-2 px-4 py-2 bg-emerald-50 rounded-full"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.2 }}
							>
								<Shield className="w-4 h-4 text-emerald-600" />
								<span className="text-emerald-700 text-sm font-medium">
									{heroData.badge}
								</span>
							</motion.div>

							<motion.h1
								className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.3 }}
							>
								{heroData.title}
								<span className="block mt-2 bg-linear-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
									{heroData.titleHighlight}
								</span>
							</motion.h1>

							<motion.p
								className="text-xl text-gray-600 leading-relaxed max-w-lg"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 0.4 }}
							>
								{heroData.description}
							</motion.p>
						</div>

						<motion.div
							className="flex flex-col sm:flex-row gap-4"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.5 }}
						>
							<motion.a
								href={heroData.ctaLink}
								className="inline-flex items-center justify-center space-x-2 px-8 py-4 bg-linear-to-r from-emerald-500 to-emerald-600 text-white rounded-full hover:from-emerald-600 hover:to-emerald-700 transition-all duration-300 shadow-xl hover:shadow-2xl group"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="font-semibold">
									Hazte Socio <span>{heroData.ctaText}</span>
								</span>
								<ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
							</motion.a>
							<motion.a
								href="#servicios"
								className="inline-flex items-center justify-center px-8 py-4 bg-white border-2 border-emerald-500 text-emerald-600 rounded-full hover:bg-emerald-50 transition-all duration-300"
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								<span className="font-semibold">
									Conoce Nuestros Servicios
								</span>
							</motion.a>
						</motion.div>

						{/* Quick Stats */}
						<motion.div
							className="grid grid-cols-3 gap-6 pt-8"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ delay: 0.6 }}
						>
							<div className="space-y-1">
								<div className="flex items-center space-x-2">
									<TrendingUp className="w-5 h-5 text-emerald-600" />
									<p className="font-bold text-2xl text-gray-900">
										25+
									</p>
								</div>
								<p className="text-sm text-gray-600">
									Años de experiencia
								</p>
							</div>
							<div className="space-y-1">
								<div className="flex items-center space-x-2">
									<Heart className="w-5 h-5 text-emerald-600" />
									<p className="font-bold text-2xl text-gray-900">
										15k+
									</p>
								</div>
								<p className="text-sm text-gray-600">
									Socios activos
								</p>
							</div>
							<div className="space-y-1">
								<div className="flex items-center space-x-2">
									<Shield className="w-5 h-5 text-emerald-600" />
									<p className="font-bold text-2xl text-gray-900">
										100%
									</p>
								</div>
								<p className="text-sm text-gray-600">
									Confianza
								</p>
							</div>
						</motion.div>
					</motion.div>

					{/* Hero Image with Organic Shape */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						animate={{ opacity: 1, x: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						<div className="relative">
							{/* Organic shape container */}
							<div className="relative w-full aspect-square">
								<motion.div
									className="absolute inset-0 bg-linear-to-br from-emerald-400/20 to-yellow-400/20 rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
									animate={{
										borderRadius: [
											"60% 40% 30% 70% / 60% 30% 70% 40%",
											"30% 60% 70% 40% / 50% 60% 30% 60%",
											"60% 40% 30% 70% / 60% 30% 70% 40%",
										],
									}}
									transition={{
										duration: 8,
										repeat: Infinity,
										ease: "easeInOut",
									}}
								/>
								<img
									src="https://images.unsplash.com/photo-1758084413534-ca441e8376a3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGhpc3BhbmljJTIwZmFtaWx5JTIwZmluYW5jaWFsJTIwcGxhbm5pbmd8ZW58MXx8fHwxNzY5NzMzOTcxfDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
									alt="Familia feliz planificando su futuro financiero"
									className="absolute inset-8 w-[calc(100%-4rem)] h-[calc(100%-4rem)] object-cover rounded-[60%_40%_30%_70%/60%_30%_70%_40%]"
								/>
							</div>

							{/* Floating cards */}
							<motion.div
								className="absolute -bottom-8 -left-8 bg-white p-4 rounded-3xl shadow-2xl"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1 }}
								whileHover={{ scale: 1.05 }}
							>
								<div className="flex items-center space-x-3">
									<div className="w-12 h-12 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center">
										<TrendingUp className="w-6 h-6 text-white" />
									</div>
									<div>
										<p className="text-sm text-gray-600">
											Tasa de ahorro
										</p>
										<p className="font-bold text-lg text-gray-900">
											Hasta 8.5%
										</p>
									</div>
								</div>
							</motion.div>

							<motion.div
								className="absolute -top-8 -right-8 bg-white p-4 rounded-3xl shadow-2xl"
								initial={{ opacity: 0, y: -20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ delay: 1.2 }}
								whileHover={{ scale: 1.05 }}
							>
								<div className="flex items-center space-x-3">
									<div className="w-12 h-12 bg-linear-to-br from-yellow-400 to-yellow-500 rounded-2xl flex items-center justify-center">
										<Heart className="w-6 h-6 text-white" />
									</div>
									<div>
										<p className="text-sm text-gray-600">
											Socios
										</p>
										<p className="font-bold text-lg text-gray-900">
											+15,000
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
