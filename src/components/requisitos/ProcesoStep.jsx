import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function ProcesoStep({ paso, idx }) {
	const Icon = paso.icon;
	const isEven = idx % 2 === 0;

	return (
		<motion.div
			initial={{ opacity: 0, y: 50 }}
			whileInView={{ opacity: 1, y: 0 }}
			viewport={{ once: true, margin: "-100px" }}
			transition={{ duration: 0.7, ease: "easeOut" }}
			className={`relative flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-0 ${
				isEven ? "md:flex-row" : "md:flex-row-reverse"
			}`}
		>
			{/* Contenido (Texto) */}
			<motion.div 
				className={`w-full md:w-1/2 ${isEven ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left"} text-center`}
				whileInView={{ x: 0, opacity: 1 }}
				initial={{ x: isEven ? -50 : 50, opacity: 0 }}
				transition={{ duration: 0.6, delay: 0.2 }}
				viewport={{ once: true }}
			>
				<div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:border-emerald-200 transition-all duration-300 relative group transform hover:-translate-y-1">
					{/* Decoración sutil de fondo */}
					<div className="absolute inset-0 bg-linear-to-br from-emerald-50/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl" />
					
					<h3 className="text-2xl font-bold text-gray-900 mb-3 relative z-10 group-hover:text-emerald-700 transition-colors">
						{paso.titulo}
					</h3>
					<p className="text-gray-600 mb-6 leading-relaxed relative z-10">
						{paso.descripcion}
					</p>

					<ul className={`space-y-2 inline-block text-left relative z-10 bg-gray-50/80 p-4 rounded-xl w-full border border-transparent group-hover:border-emerald-100 transition-colors`}>
						{paso.detalles.map((detalle, i) => (
							<li key={i} className="flex items-start space-x-3 text-sm text-gray-700">
								<CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
								<span>{detalle}</span>
							</li>
						))}
					</ul>
				</div>
			</motion.div>

			{/* Marcador Central (Timeline) */}
			<motion.div 
				className="relative z-10 flex shrink-0"
				initial={{ scale: 0 }}
				whileInView={{ scale: 1 }}
				transition={{ type: "spring", stiffness: 200, damping: 15, delay: 0.1 }}
				viewport={{ once: true }}
			>
				<div className="w-12 h-12 md:w-16 md:h-16 rounded-full bg-white border-4 border-emerald-100 flex items-center justify-center shadow-lg transform transition-all duration-300 group hover:scale-110 hover:border-emerald-500 hover:shadow-emerald-200/50 hover:shadow-xl">
					<div className="w-full h-full rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600 group-hover:bg-emerald-500 group-hover:text-white transition-colors duration-300">
						{Icon ? <Icon className="w-5 h-5 md:w-7 md:h-7" /> : <span className="font-bold">{paso.numero}</span>}
					</div>
				</div>
			</motion.div>

			{/* Espacio vacío para equilibrar el layout en desktop */}
			<div className="hidden md:block w-1/2" />
		</motion.div>
	);
}
