import React from "react";
import { motion } from "motion/react";
import { Quote, Star } from "lucide-react";
import { testimonials } from "../../data/home";

export function TestimonialsSection() {
	return (
		<section className="relative py-20 overflow-hidden bg-linear-to-br from-emerald-50/50 to-yellow-50/30">
			{/* Organic background elements */}
			<div className="absolute inset-0 overflow-hidden">
				<motion.div
					className="absolute -top-20 right-1/4 w-96 h-96 bg-linear-to-br from-emerald-200/20 to-yellow-200/20 rounded-full blur-3xl"
					animate={{
						y: [0, 50, 0],
						scale: [1, 1.2, 1],
					}}
					transition={{
						duration: 15,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
				<motion.div
					className="absolute bottom-0 left-1/3 w-80 h-80 bg-linear-to-br from-yellow-200/20 to-emerald-200/20 rounded-full blur-3xl"
					animate={{
						y: [0, -40, 0],
						scale: [1, 1.1, 1],
					}}
					transition={{
						duration: 18,
						repeat: Infinity,
						ease: "easeInOut",
					}}
				/>
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
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
						Testimonios
					</motion.span>
					<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
						Lo que dicen
						<span className="block mt-2 bg-linear-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
							nuestros socios
						</span>
					</h2>
					<p className="text-xl text-gray-600">
						Miles de personas ya confiaron en nosotros para alcanzar
						sus metas financieras
					</p>
				</motion.div>

				{/* Testimonials Grid */}
				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{testimonials.map((testimonial, index) => (
						<motion.div
							key={testimonial.name}
							className="relative group"
							initial={{ opacity: 0, y: 30 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ duration: 0.5, delay: index * 0.1 }}
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
								transition={{ duration: 4, repeat: Infinity }}
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
									"{testimonial.content}"
								</p>

								{/* Author */}
								<div className="flex items-center space-x-4 pt-6 border-t border-gray-100">
									<motion.div
										className="relative w-14 h-14 rounded-2xl overflow-hidden shrink-0"
										whileHover={{ scale: 1.1 }}
									>
										<img
											src={testimonial.image}
											alt={testimonial.name}
											className="w-full h-full object-cover"
										/>
									</motion.div>
									<div>
										<p className="font-bold text-gray-900">
											{testimonial.name}
										</p>
										<p className="text-sm text-gray-600">
											{testimonial.role}
										</p>
									</div>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Trust Badges */}
				<motion.div
					className="mt-20 flex flex-wrap justify-center items-center gap-8"
					initial={{ opacity: 0, y: 30 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					transition={{ delay: 0.5 }}
				>
					<div className="flex items-center space-x-3 px-6 py-3 bg-white rounded-full shadow-md">
						<div className="w-10 h-10 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-xl flex items-center justify-center">
							<Quote className="w-5 h-5 text-white" />
						</div>
						<div>
							<p className="font-bold text-gray-900">+5,000</p>
							<p className="text-xs text-gray-600">
								Reseñas positivas
							</p>
						</div>
					</div>
					<div className="flex items-center space-x-3 px-6 py-3 bg-white rounded-full shadow-md">
						<div className="w-10 h-10 bg-linear-to-br from-yellow-500 to-yellow-600 rounded-xl flex items-center justify-center">
							<Star className="w-5 h-5 text-white" />
						</div>
						<div>
							<p className="font-bold text-gray-900">4.9/5</p>
							<p className="text-xs text-gray-600">
								Calificación promedio
							</p>
						</div>
					</div>
				</motion.div>
			</div>
		</section>
	);
}
