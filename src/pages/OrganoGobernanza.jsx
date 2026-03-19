import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { equipo } from "../data/nosotros";

export default function OrganoGobernanza() {
	const gobernanza = equipo.slice(0, 5);

	return (
		<section className="pt-32 pb-20 bg-linear-to-b from-gray-50 to-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-14"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<SectionHeading
						badge="La Cooperativa"
						title="Órgano de"
						subtitle="gobernanza"
					/>
					<p className="mt-4 text-gray-600 text-lg">
						Profesionales que lideran y supervisan la gestión de la
						cooperativa.
					</p>
				</motion.div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					{gobernanza.map((member, index) => (
						<motion.div
							key={member.name}
							className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.5, delay: index * 0.08 }}
						>
							<div className="relative h-80 overflow-hidden bg-linear-to-br from-emerald-100 to-yellow-100">
								<img
									src={member.image}
									alt={member.name}
									className="w-full h-full object-cover"
								/>
							</div>
							<div className="p-6">
								<h3 className="text-xl font-bold text-gray-900 mb-1">
									{member.name}
								</h3>
								<p className="text-emerald-600 font-medium mb-3">
									{member.role}
								</p>
								<p className="text-gray-600 text-sm leading-relaxed">
									{member.description}
								</p>
							</div>
						</motion.div>
					))}
				</div>
			</div>
		</section>
	);
}
