import React from "react";
import { motion } from "motion/react";
import { stats } from "../../data/home";

export function StatsSection() {
	return (
		<section className="relative py-24 overflow-hidden">

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Section Header */}
				<motion.div
					className="text-center max-w-3xl mx-auto mb-16"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
						Números que
						<span className="block mt-2 bg-linear-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
							inspiran confianza
						</span>
					</h2>
					<p className="text-xl text-gray-600">
						Nuestra trayectoria habla por sí sola
					</p>
				</motion.div>

				{/* Stats Grid */}
				<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
					{stats.map((stat, index) => {
						const Icon = stat.icon;
						return (
							<motion.div
								key={stat.label}
								className="relative group"
								initial={{ opacity: 0, y: 30 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.5,
									delay: index * 0.1,
								}}
							>
								{/* Organic background */}
								<motion.div
									className={`absolute -inset-4 bg-linear-to-br ${stat.color} opacity-0 group-hover:opacity-10 rounded-[40%_60%_70%_30%/60%_30%_70%_40%] transition-opacity duration-300 blur-xl`}
									whileHover={{
										borderRadius: [
											"40% 60% 70% 30% / 60% 30% 70% 40%",
											"60% 40% 30% 70% / 40% 70% 30% 60%",
											"40% 60% 70% 30% / 60% 30% 70% 40%",
										],
									}}
									transition={{
										duration: 4,
										repeat: Infinity,
									}}
								/>

								<div className="relative bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100 text-center h-full flex flex-col justify-center">
									{/* Icon */}
									<motion.div
										className={`inline-flex items-center justify-center w-16 h-16 bg-linear-to-br ${stat.color} rounded-2xl mb-6 shadow-lg mx-auto`}
										whileHover={{ scale: 1.1, rotate: 10 }}
										transition={{
											type: "spring",
											stiffness: 300,
										}}
									>
										<Icon className="w-8 h-8 text-white" />
									</motion.div>

									{/* Value */}
									<motion.div
										className="mb-2"
										initial={{ scale: 0.5 }}
										whileInView={{ scale: 1 }}
										viewport={{ once: true }}
										transition={{
											delay: index * 0.1 + 0.3,
											type: "spring",
										}}
									>
										<span className="text-5xl font-bold text-gray-900">
											{stat.value}
										</span>
										<span className="text-3xl font-bold text-gray-900">
											{stat.suffix}
										</span>
									</motion.div>

									{/* Label */}
									<p className="text-gray-600">
										{stat.label}
									</p>
								</div>
							</motion.div>
						);
					})}
				</div>
			</div>
		</section>
	);
}
