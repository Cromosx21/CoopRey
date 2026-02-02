import React, { useState } from "react";
import { CTASection } from "../components/sections/CTASection.jsx";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import {
	BarChart3,
	PieChart,
	Download,
	CheckCircle,
	ShieldCheck,
	FileSearch,
	Landmark,
} from "lucide-react";
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

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{ratiosFinancieros.map((ratio, idx) => {
                            // Extract numeric value safely
                            // Handle cases where ratio.value might be undefined or not a string
                            const rawValue = String(ratio.value || '');
                            const numericValue = parseFloat(rawValue.replace(/[^0-9.]/g, '')) || 0;
                            
                            // Determine max value for calculation (approximate)
                            const maxVal = rawValue.includes('%') ? 100 : (numericValue > 10 ? 100 : 5);
                            const progress = Math.min((numericValue / maxVal) * 100, 100);

                            return (
                                <motion.div
                                    key={idx}
                                    className="bg-white rounded-3xl p-6 border border-gray-100 shadow-lg hover:shadow-xl hover:border-emerald-200 transition-all group relative overflow-hidden"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    transition={{
                                        duration: 0.6,
                                        delay: idx * 0.1,
                                    }}
                                    viewport={{ once: true }}
                                >
                                    {/* Decorative background blob */}
                                    <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-50 rounded-full blur-2xl -mr-16 -mt-16 group-hover:bg-emerald-100 transition-colors" />

                                    <div className="relative z-10">
                                        <div className="flex justify-between items-start mb-4">
                                            <h3 className="text-xl font-bold text-gray-800">
                                                {ratio.ratio}
                                            </h3>
                                            <div className="bg-emerald-50 text-emerald-700 text-xs font-bold px-3 py-1 rounded-full border border-emerald-100">
                                                Meta: {ratio.target}
                                            </div>
                                        </div>

                                        <div className="flex items-end gap-2 mb-4">
                                            <span className="text-4xl font-extrabold text-gray-900">
                                                {ratio.value}
                                            </span>
                                        </div>

                                        {/* Progress Bar Visualization */}
                                        <div className="w-full bg-gray-100 h-2 rounded-full mb-4 overflow-hidden">
                                            <motion.div 
                                                className="h-full bg-linear-to-r from-emerald-500 to-yellow-400 rounded-full"
                                                initial={{ width: 0 }}
                                                whileInView={{ width: `${progress}%` }}
                                                transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
                                                viewport={{ once: true }}
                                            />
                                        </div>

                                        <p className="text-gray-500 text-sm leading-relaxed border-t border-gray-50 pt-4">
                                            {/* Mock description since it's missing in data */}
                                            Indicador estratégico que mide la capacidad de {ratio.ratio.toLowerCase()} para asegurar la estabilidad financiera.
                                        </p>
                                    </div>
                                </motion.div>
                            );
                        })}
					</div>
				</div>
			</div>

			{/* Composición de Activos - Rediseñado */}
			<div className="py-20 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Activos */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
								<div className="p-2 bg-emerald-100 rounded-lg">
									<PieChart className="w-6 h-6 text-emerald-600" />
								</div>
								<span>Composición de Activos</span>
							</h3>

							<div className="space-y-6">
								{composicionActivos.map((item, idx) => (
									<div key={idx} className="relative">
										<div className="flex justify-between items-end mb-2">
											<div>
												<span className="block font-bold text-gray-900 text-lg">
													{item.value}%
												</span>
												<span className="text-sm text-gray-500 font-medium">
													{item.name}
												</span>
											</div>
											<span className="text-sm font-semibold text-emerald-700 bg-emerald-50 px-3 py-1 rounded-full border border-emerald-100">
												{/* Mock data since monto is missing */}
												$ {(item.value * 150000).toLocaleString()}
											</span>
										</div>
										<div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
											<motion.div
												className="bg-linear-to-r from-emerald-500 to-emerald-400 h-full rounded-full"
												initial={{ width: 0 }}
												whileInView={{ width: `${item.value}%` }}
												transition={{ duration: 1, delay: 0.2 }}
												viewport={{ once: true }}
											/>
										</div>
									</div>
								))}
							</div>
						</motion.div>

						{/* Pasivos */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
							className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100"
						>
							<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center space-x-3">
								<div className="p-2 bg-yellow-100 rounded-lg">
									<PieChart className="w-6 h-6 text-yellow-600" />
								</div>
								<span>Composición de Pasivos</span>
							</h3>

							<div className="space-y-6">
								{composicionPasivos.map((item, idx) => (
									<div key={idx} className="relative">
										<div className="flex justify-between items-end mb-2">
											<div>
												<span className="block font-bold text-gray-900 text-lg">
													{item.value}%
												</span>
												<span className="text-sm text-gray-500 font-medium">
													{item.name}
												</span>
											</div>
											<span className="text-sm font-semibold text-yellow-700 bg-yellow-50 px-3 py-1 rounded-full border border-yellow-100">
												{/* Mock data since monto is missing */}
												$ {(item.value * 120000).toLocaleString()}
											</span>
										</div>
										<div className="w-full bg-gray-100 rounded-full h-3 overflow-hidden">
											<motion.div
												className="bg-linear-to-r from-yellow-500 to-yellow-400 h-full rounded-full"
												initial={{ width: 0 }}
												whileInView={{ width: `${item.value}%` }}
												transition={{ duration: 1, delay: 0.2 }}
												viewport={{ once: true }}
											/>
										</div>
									</div>
								))}
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Auditoría y Verificación - Rediseñado */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-linear-to-br from-emerald-900 to-emerald-800 rounded-3xl p-8 md:p-12 text-white relative overflow-hidden shadow-2xl">
						{/* Background Patterns */}
						<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/3 -translate-y-1/3" />
						<div className="absolute bottom-0 left-0 w-64 h-64 bg-yellow-500/10 rounded-full blur-3xl -translate-x-1/3 translate-y-1/3" />

						<div className="relative z-10">
							<div className="text-center mb-12">
								<div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 backdrop-blur-sm rounded-2xl mb-6 border border-white/20">
									<ShieldCheck className="w-8 h-8 text-emerald-300" />
								</div>
								<h3 className="text-3xl md:text-4xl font-bold mb-4">
									Auditoría y Verificación
								</h3>
								<p className="text-emerald-100 max-w-2xl mx-auto text-lg">
									Garantizamos la integridad de nuestra información financiera a través de múltiples niveles de control.
								</p>
							</div>

							<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
								{[
									{
										icon: FileSearch,
										title: "Auditoría Externa",
										desc: "Auditados anualmente por firmas independientes certificadas bajo estándares internacionales."
									},
									{
										icon: CheckCircle,
										title: "Aprobación Interna",
										desc: "Revisión exhaustiva y aprobación por parte de la Junta Directiva y comités de vigilancia."
									},
									{
										icon: Landmark,
										title: "Control Estatal",
										desc: "Supervisión constante y reporte a la Superintendencia de Economía Solidaria."
									}
								].map((item, idx) => {
									const Icon = item.icon;
									return (
										<motion.div
											key={idx}
											className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/10 hover:bg-white/20 transition-colors"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											transition={{ delay: idx * 0.1 }}
											viewport={{ once: true }}
										>
											<div className="flex items-center space-x-3 mb-4">
												<Icon className="w-6 h-6 text-yellow-300" />
												<h4 className="font-bold text-lg">{item.title}</h4>
											</div>
											<p className="text-emerald-50 text-sm leading-relaxed">
												{item.desc}
											</p>
										</motion.div>
									);
								})}
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Call to Action */}
			<CTASection />
		</>
	);
}
