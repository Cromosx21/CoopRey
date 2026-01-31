import React from "react";
import { motion } from "motion/react";
import { FileText, CheckCircle } from "lucide-react";

export default function RequisitoGeneralCard({ seccion, idx }) {
  return (
		<motion.div
			className="relative group h-full"
			initial={{ opacity: 0, y: 30 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true }}
			transition={{ duration: 0.5, delay: idx * 0.1 }}
		>
			{/* Background blobs */}
			<div className="absolute -inset-1 bg-linear-to-r from-emerald-100 to-yellow-100 rounded-4xl blur-sm opacity-0 group-hover:opacity-100 transition duration-500" />

			<div className="relative h-full bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 hover:border-green-300 t">
				{/* Header with floating icon */}
				<div className="flex flex-col items-center text-center mb-6">
					<div className="relative mb-6">
						<div className="absolute inset-0 bg-emerald-200 rounded-2xl blur-md opacity-20 group-hover:opacity-40 transition-opacity" />
						<div className="relative w-16 h-16 bg-linear-to-br from-emerald-50 to-white rounded-2xl flex items-center justify-center border border-emerald-100 shadow-inner group-hover:scale-110 transition-transform duration-300">
							<FileText className="w-8 h-8 text-emerald-600 group-hover:rotate-6 transition-transform duration-300" />
						</div>
					</div>

					<h3 className="text-xl font-bold text-gray-900 group-hover:text-emerald-700 transition-colors">
						{seccion.titulo}
					</h3>
					<div className="h-1 w-12 bg-emerald-100 rounded-full mt-3 group-hover:w-24 group-hover:bg-emerald-400 transition-all duration-500" />
				</div>

				{/* List items with hover effects */}
				<ul className="space-y-4">
					{seccion.items.map((item, i) => (
						<motion.li
							key={i}
							className="flex items-start space-x-3 p-2 rounded-lg hover:bg-gray-50 transition-colors"
							initial={{ opacity: 0, x: -10 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ delay: 0.2 + i * 0.05 }}
						>
							<div className="shrink-0 mt-0.5">
								<CheckCircle className="w-5 h-5 text-emerald-300 group-hover:text-emerald-500 transition-colors" />
							</div>
							<span className="text-gray-600 text-sm leading-relaxed group-hover:text-gray-900 transition-colors">
								{item}
							</span>
						</motion.li>
					))}
				</ul>
			</div>
		</motion.div>
  );
}
