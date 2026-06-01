import React from "react";
import { motion } from "motion/react";
import { reclamacionesInfo, reglamentoPeru } from "../../../data/reclamaciones";

export default function NormativaTab() {
	return (
		<motion.div
			key="normativa"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
		>
			<div className="max-w-3xl mx-auto">
				<h2 className="text-3xl font-bold text-gray-900 mb-8">
					{reglamentoPeru.title}
				</h2>

				<div className="space-y-4">
					{reglamentoPeru.items.map((item, index) => (
						<motion.div
							key={index}
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							viewport={{ once: true }}
							transition={{ delay: index * 0.1 }}
							className="bg-white rounded-lg border border-gray-200 p-6 hover:shadow-lg transition-shadow"
						>
							<div className="flex items-start space-x-4">
								<div className="w-8 h-8 bg-emerald-100 rounded-full flex items-center justify-center shrink-0 mt-1">
									<span className="text-emerald-600 font-bold">
										{index + 1}
									</span>
								</div>
								<div className="flex-1">
									<h3 className="text-lg font-bold text-gray-900 mb-2">
										{item.titulo}
									</h3>
									<p className="text-gray-600 leading-relaxed">
										{item.descripcion}
									</p>
								</div>
							</div>
						</motion.div>
					))}
				</div>

				{/* Info Cooperativa */}
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					className="bg-linear-to-r from-emerald-50 to-green-50 rounded-xl p-8 mt-12 border border-emerald-200"
				>
					<h3 className="text-xl font-bold text-emerald-900 mb-4">
						Información de la Cooperativa
					</h3>
					<div className="space-y-3 text-emerald-800">
						<p>
							<strong>Razón Social:</strong>{" "}
							{reclamacionesInfo.nombreEmpresa}
						</p>
						<p>
							<strong>RUC:</strong> {reclamacionesInfo.numeroRUC}
						</p>
						<p>
							<strong>Dirección:</strong>{" "}
							{reclamacionesInfo.direccion}
						</p>
						<p>
							<strong>Horario de Atención:</strong>{" "}
							{reclamacionesInfo.horarioAtencion}
						</p>
					</div>
				</motion.div>
			</div>
		</motion.div>
	);
}
