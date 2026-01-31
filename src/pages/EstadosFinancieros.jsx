import React, { useState } from "react";
import { CTASection } from "../components/sections/CTASection.jsx";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { BarChart3, PieChart, Download, CheckCircle } from "lucide-react";
import {
	estadosFinancieros,
	indicadoresFinancieros,
	ratiosFinancieros,
	composicionActivos,
	composicionPasivos,
} from "../data/estadosFinancieros";

export default function EstadosFinancieros() {
	const [selectedYear, setSelectedYear] = useState(2024);

	return (
		<>
			{/* Hero Section */}
			<div className="relative overflow-hidden pt-32 pb-20 md:pb-24">
				{/* Background Image */}
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url('https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop')`,
						backgroundPosition: "center",
						backgroundSize: "cover",
						backgroundAttachment: "fixed",
					}}
				/>

				{/* Gradient Overlay */}
				<div className="absolute inset-0 z-1 bg-linear-to-br from-emerald-500/85 to-yellow-500/75 mix-blend-multiply" />

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
					<div className="max-w-3xl mx-auto text-center space-y-6">
						<motion.div
							className="inline-flex items-center space-x-2 px-5 py-2 bg-white/20 backdrop-blur-sm rounded-full border border-white/30"
							initial={{ opacity: 0, y: 20 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.6 }}
						>
							<BarChart3 className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								Transparencia Financiera
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							Estados{" "}
							<span className="text-yellow-200">Financieros</span>
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							Reportes auditorados y verificados de nuestra
							situación financiera
						</motion.p>
					</div>
				</div>
			</div>

			{/* Indicadores Principales */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Transparencia"
							title="Indicadores Financieros 2024"
							subtitle="Métricas clave"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Principales métricas de desempeño de la cooperativa
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
						{indicadoresFinancieros.map((indicador, idx) => {
							const IconComponent = indicador.icono;
							return (
								<motion.div
									key={idx}
									className="bg-white rounded-2xl p-6 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.1,
									}}
									whileHover={{ y: -5 }}
								>
									<div className="flex items-start justify-between mb-4">
										<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg">
											<IconComponent className="w-6 h-6 text-emerald-600" />
										</div>
										<span className="text-sm font-bold text-green-600 bg-green-50 px-3 py-1 rounded-full">
											{indicador.cambio}
										</span>
									</div>

									<p className="text-gray-600 text-sm mb-2">
										{indicador.titulo}
									</p>
									<p className="text-2xl font-bold text-gray-900">
										{indicador.valor}
									</p>
								</motion.div>
							);
						})}
					</div>
				</div>
			</div>

			{/* Descargar Reportes */}
			<div className="py-20 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Reportes"
							title="Reportes Disponibles"
							subtitle="Estados auditados"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Descarga los estados financieros completos y
							auditados
						</p>
					</div>

					{/* Selector de Año */}
					<div className="flex justify-center gap-4 mb-12">
						{estadosFinancieros.map((item) => (
							<motion.button
								key={item.año}
								onClick={() => setSelectedYear(item.año)}
								className={`px-6 py-3 rounded-lg font-semibold transition-all ${
									selectedYear === item.año
										? "bg-emerald-600 text-white shadow-lg"
										: "bg-white text-gray-900 border border-gray-200 hover:border-emerald-200"
								}`}
								whileHover={{ scale: 1.05 }}
								whileTap={{ scale: 0.95 }}
							>
								{item.año}
							</motion.button>
						))}
					</div>

					{/* Reportes del Año Seleccionado */}
					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{estadosFinancieros
							.find((item) => item.año === selectedYear)
							?.reportes.map((reporte, idx) => (
								<motion.div
									key={idx}
									className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.1,
									}}
									whileHover={{ y: -5 }}
								>
									<div className="flex items-start justify-between mb-4">
										<div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg">
											<BarChart3 className="w-6 h-6 text-emerald-600" />
										</div>
										<span className="text-xs font-semibold text-gray-500 bg-gray-100 px-3 py-1 rounded-full">
											{reporte.tamaño}
										</span>
									</div>

									<h3 className="text-xl font-bold text-gray-900 mb-2">
										{reporte.titulo}
									</h3>

									<p className="text-gray-600 mb-6">
										{reporte.descripcion}
									</p>

									<motion.a
										href="#descargar"
										className="inline-flex items-center space-x-2 px-4 py-2 bg-linear-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all"
										whileHover={{ scale: 1.05 }}
										whileTap={{ scale: 0.95 }}
									>
										<Download className="w-4 h-4" />
										<span>Descargar</span>
									</motion.a>
								</motion.div>
							))}
					</div>
				</div>
			</div>

			{/* Ratios Financieros */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Ratios"
							title="Ratios Financieros"
							subtitle="Solidez y rentabilidad"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Análisis de solidez y rentabilidad de la cooperativa
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
						{ratiosFinancieros.map((ratio, idx) => (
							<motion.div
								key={idx}
								className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: idx * 0.05,
								}}
								whileHover={{ y: -5 }}
							>
								<div className="flex items-start justify-between mb-4">
									<div>
										<h3 className="text-lg font-bold text-gray-900">
											{ratio.nombre}
										</h3>
										<span className="text-xs font-semibold text-emerald-600 bg-emerald-50 px-3 py-1 rounded-full inline-block mt-2">
											{ratio.rango}
										</span>
									</div>
									<p className="text-3xl font-bold text-emerald-600">
										{ratio.valor}
									</p>
								</div>

								<p className="text-gray-600 text-sm pt-4 border-t border-gray-100">
									{ratio.descripcion}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			{/* Composición de Activos */}
			<div className="py-20 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Activos */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
								<PieChart className="w-6 h-6 text-emerald-600" />
								<span>Composición de Activos</span>
							</h3>

							<div className="space-y-4">
								{composicionActivos.map((item, idx) => (
									<div
										key={idx}
										className="bg-white rounded-lg p-4"
									>
										<div className="flex items-center justify-between mb-2">
											<span className="font-semibold text-gray-900">
												{item.concepto}
											</span>
											<span className="text-emerald-600 font-bold">
												{item.porcentaje}%
											</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div
												className="bg-linear-to-r from-emerald-500 to-emerald-600 h-2 rounded-full"
												style={{
													width: `${item.porcentaje}%`,
												}}
											/>
										</div>
										<p className="text-sm text-gray-600 mt-2">
											{item.monto}
										</p>
									</div>
								))}
							</div>
						</motion.div>

						{/* Pasivos */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							animate={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-2">
								<PieChart className="w-6 h-6 text-emerald-600" />
								<span>Composición de Pasivos</span>
							</h3>

							<div className="space-y-4">
								{composicionPasivos.map((item, idx) => (
									<div
										key={idx}
										className="bg-white rounded-lg p-4"
									>
										<div className="flex items-center justify-between mb-2">
											<span className="font-semibold text-gray-900">
												{item.concepto}
											</span>
											<span className="text-emerald-600 font-bold">
												{item.porcentaje}%
											</span>
										</div>
										<div className="w-full bg-gray-200 rounded-full h-2">
											<div
												className="bg-linear-to-r from-yellow-500 to-yellow-600 h-2 rounded-full"
												style={{
													width: `${item.porcentaje}%`,
												}}
											/>
										</div>
										<p className="text-sm text-gray-600 mt-2">
											{item.monto}
										</p>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Información Adicional */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-emerald-50 rounded-2xl p-8 border border-emerald-200">
						<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center space-x-2">
							<CheckCircle className="w-6 h-6 text-emerald-600" />
							<span>Auditoría y Verificación</span>
						</h3>

						<div className="space-y-4 text-gray-700">
							<p>
								Todos nuestros estados financieros son auditados
								anualmente por firmas auditoras independientes y
								certificadas, en cumplimiento con los estándares
								internacionales de contabilidad.
							</p>

							<p>
								Los reportes son revisados y aprobados por la
								Junta Directiva y presentados a la
								Superintendencia de Economía Solidaria para
								verificación y cumplimiento de normativa.
							</p>

							<p>
								Nos comprometemos con la transparencia total y
								la divulgación oportuna de información
								financiera a nuestros socios y stakeholders.
							</p>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<CTASection />
		</>
	);
}
