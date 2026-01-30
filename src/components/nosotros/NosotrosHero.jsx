import React from "react";
import { motion } from "motion/react";
import { Shield, Users, Heart, TrendingUp } from "lucide-react";

export function NosotrosHero() {
	return (
		<section className="relative min-h-[70vh] flex items-center pt-32 pb-20 overflow-hidden">
			{/* Fondo con imagen y máscara */}
			<div className="absolute inset-0 overflow-hidden">
				<div
					className="absolute inset-0 bg-cover bg-center"
					style={{
						backgroundImage: `url('https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop')`,
						opacity: 0.3,
					}}
				/>
				{/* Máscara con degradado verde a amarillo con transparencia */}
				<div
					className="absolute inset-0"
					style={{
						background: `linear-gradient(135deg, 
              rgba(16, 185, 129, 0.6) 0%, 
              rgba(34, 197, 94, 0.4) 25%,
              rgba(134, 239, 172, 0.3) 50%,
              rgba(250, 204, 21, 0.4) 75%,
              rgba(253, 224, 71, 0.3) 100%)`,
						mixBlendMode: "multiply",
					}}
				/>
				{/* Shapes animados */}
				<motion.div
					className="absolute -top-40 right-0 w-[500px] h-[500px] bg-linear-to-br from-emerald-200/40 to-yellow-200/40 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.2, 1],
						x: [0, 50, 0],
					}}
					transition={{
						duration: 20,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-linear-to-br from-yellow-200/30 to-emerald-200/30 rounded-full blur-3xl"
					animate={{
						scale: [1, 1.3, 1],
						x: [0, -30, 0],
					}}
					transition={{
						duration: 25,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
				<div className="max-w-4xl mx-auto text-center space-y-8">
					{/* Badge */}
					<motion.div
						className="inline-flex items-center space-x-2 px-5 py-2 bg-emerald-50 rounded-full border border-emerald-100"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<Shield className="w-4 h-4 text-emerald-600" />
						<span className="text-emerald-700 text-sm font-medium">
							Conoce nuestra historia
						</span>
					</motion.div>

					{/* Main Heading */}
					<motion.h1
						className="text-5xl md:text-6xl lg:text-7xl font-bold text-gray-900 leading-tight"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.2 }}
					>
						Somos más que una
						<span className="block mt-2 bg-linear-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
							cooperativa
						</span>
					</motion.h1>

					{/* Description */}
					<motion.p
						className="text-xl md:text-2xl text-gray-600 leading-relaxed max-w-3xl mx-auto"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.4 }}
					>
						Somos una familia financiera comprometida con el
						bienestar y el progreso de cada uno de nuestros socios.
						Construyendo juntos un futuro más próspero.
					</motion.p>

					{/* Stats */}
					<motion.div
						className="grid grid-cols-2 md:grid-cols-4 gap-8 pt-12"
						initial={{ opacity: 0, y: 30 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.8, delay: 0.6 }}
					>
						{[
							{ icon: TrendingUp, value: "25+", label: "Años" },
							{ icon: Users, value: "15K+", label: "Socios" },
							{ icon: Shield, value: "12", label: "Agencias" },
							{
								icon: Heart,
								value: "98%",
								label: "Satisfacción",
							},
						].map((stat, index) => {
							const Icon = stat.icon;
							return (
								<motion.div
									key={stat.label}
									className="space-y-3"
									initial={{ opacity: 0, scale: 0.8 }}
									animate={{ opacity: 1, scale: 1 }}
									transition={{ delay: 0.8 + index * 0.1 }}
								>
									<div className="inline-flex items-center justify-center w-14 h-14 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl shadow-lg mx-auto">
										<Icon className="w-7 h-7 text-white" />
									</div>
									<div>
										<p className="text-3xl font-bold text-gray-900">
											{stat.value}
										</p>
										<p className="text-sm text-gray-600">
											{stat.label}
										</p>
									</div>
								</motion.div>
							);
						})}
					</motion.div>
				</div>
			</div>
		</section>
	);
}
