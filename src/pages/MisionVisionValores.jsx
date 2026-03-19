import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { quienesSomosData } from "../data/nosotros";
import { NuestrosValores } from "../components/nosotros/NuestrosValores.jsx";

export default function MisionVisionValores() {
	return (
		<>
			<section className="pt-32 pb-20 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center max-w-3xl mx-auto mb-14"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<SectionHeading
							badge="La Cooperativa"
							title="Misión, visión"
							subtitle="y valores"
						/>
						<p className="mt-4 text-gray-600 text-lg">
							Los principios que definen nuestro propósito, la
							dirección hacia donde vamos y la forma en la que
							actuamos.
						</p>
					</motion.div>

					<div className="grid md:grid-cols-2 gap-8">
						{quienesSomosData.features.map((feature, index) => {
							const Icon = feature.icon;
							return (
								<motion.div
									key={feature.title}
									className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-8"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: 0.1 + index * 0.1,
									}}
								>
									<div className="flex items-start space-x-4">
										<div className="shrink-0 w-14 h-14 bg-linear-to-br from-emerald-100 to-yellow-100 rounded-2xl flex items-center justify-center">
											<Icon className="w-7 h-7 text-emerald-600" />
										</div>
										<div>
											<h2 className="text-2xl font-bold text-gray-900">
												{feature.title}
											</h2>
											<p className="mt-2 text-gray-600 leading-relaxed">
												{feature.description}
											</p>
										</div>
									</div>
								</motion.div>
							);
						})}
					</div>
				</div>
			</section>

			<NuestrosValores />
		</>
	);
}
