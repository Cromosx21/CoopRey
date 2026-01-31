import React from "react";
import { motion } from "motion/react";
import { compromisos } from "../../data/nosotros";
import { Heart } from "lucide-react";

export function Compromiso() {
	return (
		<section className="relative py-32 overflow-hidden bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				{/* Section Header */}
				<motion.div
					className="text-center max-w-3xl mx-auto mb-20"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ duration: 0.6 }}
				>
					<motion.span
						className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium mb-4"
						initial={{ opacity: 0, scale: 0.8 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
					>
						Compromiso Social
					</motion.span>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Trabajamos por un
						<span className="block mt-2 bg-linear-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
							impacto positivo
						</span>
					</h2>
					<p className="text-xl text-gray-600">
						Nuestro compromiso va más allá de los servicios
						financieros. Creemos en el desarrollo integral de
						nuestras comunidades.
					</p>
				</motion.div>

				{/* Commitments List */}
				<div className="space-y-20">
					{compromisos.map((compromiso, index) => {
						const Icon = compromiso.icon;
						const isEven = index % 2 === 0;

						return (
							<motion.div
								key={compromiso.title}
								className={`grid lg:grid-cols-2 gap-12 items-center ${!isEven ? "lg:grid-flow-dense" : ""}`}
								initial={{ opacity: 0, y: 50 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.8 }}
							>
								{/* Content */}
								<div
									className={`space-y-6 ${!isEven ? "lg:col-start-2" : ""}`}
								>
									<div className="inline-flex items-center justify-center w-16 h-16 bg-linear-to-br from-emerald-500 to-yellow-500 rounded-2xl shadow-lg">
										<Icon className="w-8 h-8 text-white" />
									</div>
									<h3 className="text-3xl font-bold text-gray-900">
										{compromiso.title}
									</h3>
									<p className="text-lg text-gray-600 leading-relaxed">
										{compromiso.description}
									</p>

									{/* Stats or Details */}
									<div className="flex items-center space-x-8 pt-4">
										<div>
											<p className="text-3xl font-bold text-emerald-600">
												100+
											</p>
											<p className="text-sm text-gray-600">
												Talleres anuales
											</p>
										</div>
										<div>
											<p className="text-3xl font-bold text-emerald-600">
												5K+
											</p>
											<p className="text-sm text-gray-600">
												Beneficiarios
											</p>
										</div>
									</div>
								</div>

								{/* Image */}
								<motion.div
									className={`relative ${!isEven ? "lg:col-start-1 lg:row-start-1" : ""}`}
									whileHover={{ scale: 1.02 }}
									transition={{ duration: 0.3 }}
								>
									<div className="relative">
										{/* Organic shape background */}
										<motion.div
											className="absolute inset-0 bg-linear-to-br from-emerald-400/20 to-yellow-400/20 rounded-[40%_60%_60%_40%/60%_40%_40%_60%] blur-2xl"
											animate={{
												borderRadius: [
													"40% 60% 60% 40% / 60% 40% 40% 60%",
													"60% 40% 40% 60% / 40% 60% 60% 40%",
													"40% 60% 60% 40% / 60% 40% 40% 60%",
												],
											}}
											transition={{
												duration: 10,
												repeat: Infinity,
												ease: "easeInOut",
											}}
										/>

										<div className="relative rounded-[40%_60%_60%_40%/60%_40%_40%_60%] overflow-hidden">
											<img
												src={compromiso.image}
												alt={compromiso.title}
												className="w-full h-[400px] object-cover"
											/>
										</div>
									</div>
								</motion.div>
							</motion.div>
						);
					})}
				</div>

				{/* Call to Action */}
				<motion.div
					className="mt-20 text-center"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.3 }}
				>
					<div className="inline-flex items-center space-x-2 px-6 py-3 bg-emerald-50 rounded-full border border-emerald-100">
						<Heart className="w-5 h-5 text-emerald-600" />
						<span className="text-emerald-700 font-medium">
							Juntos construimos un futuro mejor
						</span>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
