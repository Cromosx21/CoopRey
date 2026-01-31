import React, { useState, useRef } from "react";
import { CTASection } from "../components/sections/CTASection.jsx";
import { motion, AnimatePresence, useScroll, useTransform } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import {
	FileText,
	CheckCircle,
	ChevronDown,
	ClipboardList,
	Shield,
} from "lucide-react";
import ProcesoStep from "../components/requisitos/ProcesoStep.jsx";
import RequisitoAccordionItem from "../components/requisitos/RequisitoAccordionItem.jsx";
import RequisitoGeneralCard from "../components/requisitos/RequisitoGeneralCard.jsx";
import {
	requisitosCorporativos,
	requisitosPorProducto,
	procesoPasos,
	requisitosHeroData,
} from "../data/requisitos";

export default function Requisitos() {
	const [expandedSection, setExpandedSection] = useState(null);
	const timelineRef = useRef(null);
	const { scrollYProgress } = useScroll({
		target: timelineRef,
		offset: ["start center", "end center"],
	});

	const scaleY = useTransform(scrollYProgress, [0, 1], [0, 1]);

	const toggleSection = (id) => {
		setExpandedSection(expandedSection === id ? null : id);
	};

	return (
		<>
			{/* Hero Section */}
			<div className="relative overflow-hidden pt-32 pb-20 md:pb-24">
				{/* Background Image */}
				<div
					className="absolute inset-0 z-0"
					style={{
						backgroundImage: `url('${requisitosHeroData.image}')`,
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
							<requisitosHeroData.badgeIcon className="w-4 h-4 text-white" />
							<span className="text-white text-sm font-medium">
								{requisitosHeroData.badge}
							</span>
						</motion.div>

						<motion.h1
							className="text-5xl md:text-6xl font-bold text-white leading-tight"
							initial={{ opacity: 0, y: 30 }}
							animate={{ opacity: 1, y: 0 }}
							transition={{ duration: 0.8, delay: 0.2 }}
						>
							{requisitosHeroData.title}{" "}
							<span className="text-yellow-200">
								{requisitosHeroData.titleHighlight}
							</span>
						</motion.h1>

						<motion.p
							className="text-xl text-white/90"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
							transition={{ duration: 0.8, delay: 0.4 }}
						>
							{requisitosHeroData.description}
						</motion.p>
					</div>
				</div>
			</div>

			{/* Process Steps */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Proceso"
							title="Proceso de Incorporación"
							subtitle="Pasos claros y rápidos"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Un proceso sencillo y transparente para que te
							conviertas en socio
						</p>
					</div>

					<div className="relative" ref={timelineRef}>
						{/* Línea conectora central (desktop) */}
						<div className="hidden md:block absolute left-1/2 h-[calc(100%-220px)] top-0 bottom-0 w-1 bg-emerald-100 -translate-x-1/2 rounded-full" />
						<motion.div
							className="hidden md:block absolute left-1/2 h-[calc(100%-220px)] top-0 w-1 bg-linear-to-b from-emerald-500 to-emerald-300 -translate-x-1/2 rounded-full origin-top"
							style={{ scaleY, bottom: 0 }}
						/>

						<div className="space-y-12 md:space-y-24">
							{procesoPasos.map((paso, idx) => (
								<ProcesoStep
									key={idx}
									paso={paso}
									idx={idx}
									isLast={idx === procesoPasos.length - 1}
								/>
							))}
						</div>
					</div>
				</div>
			</div>

			{/* Requirements by Product */}
			<div className="py-20 md:py-24 bg-gray-50">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Requisitos"
							title="Requisitos por Producto"
							subtitle="Documentación necesaria"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Conoce exactamente qué documentos necesitas para
							cada servicio
						</p>
					</div>

					<div className="space-y-4">
						{requisitosPorProducto.map((item, idx) => (
							<RequisitoAccordionItem
								key={item.id}
								item={item}
								idx={idx}
								expandedSection={expandedSection}
								toggleSection={toggleSection}
							/>
						))}
					</div>
				</div>
			</div>

			{/* General Documents Required */}
			<div className="py-20 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="text-center mb-16">
						<SectionHeading
							badge="Documentos"
							title="Documentos Generales Requeridos"
							subtitle="Obligatorios"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Estos documentos son necesarios sin importar el
							producto que solicites
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
						{requisitosCorporativos.map((seccion, idx) => (
							<RequisitoGeneralCard
								key={seccion.id}
								seccion={seccion}
								idx={idx}
							/>
						))}
					</div>
				</div>
			</div>

			{/* Important Notes */}
			<div className="py-16 md:py-16 relative overflow-hidden">
			

				<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="bg-emerald-800/90 backdrop-blur-md rounded-2xl p-8 md:p-12 border border-white/20 shadow-2xl relative overflow-hidden"
						initial={{ opacity: 0, scale: 0.95 }}
						whileInView={{ opacity: 1, scale: 1 }}
						transition={{ duration: 0.8 }}
						viewport={{ once: true }}
					>
						{/* Decorative accent */}
						<div className="absolute top-0 left-0 w-2 h-full bg-linear-to-b from-yellow-400 to-emerald-500" />

						<div className="flex flex-col md:flex-row gap-8 md:gap-12 items-start">
							<div className="shrink-0">
								<div className="w-20 h-20 bg-linear-to-br from-emerald-400 to-emerald-600 rounded-2xl flex items-center justify-center shadow-lg transform rotate-3 hover:rotate-6 transition-transform duration-300">
									<Shield className="w-10 h-10 text-white" />
								</div>
							</div>

							<div className="grow">
								<h3 className="text-3xl font-bold text-white mb-6">
									Información Importante
								</h3>

								<div className="grid md:grid-cols-2 gap-x-8 gap-y-6">
									{[
										"Todos los documentos deben estar vigentes y ser originales para verificación",
										"Las fotocopias deben ser claras y completas en ambos lados",
										"La evaluación de tu solicitud puede requerir documentación adicional según tu perfil",
										"Puedes agendar una cita con nuestro equipo para resolver dudas sobre el proceso",
										"Los plazos indicados son aproximados y pueden variar según la complejidad de tu solicitud",
									].map((note, idx) => (
										<motion.div
											key={idx}
											className="flex items-start space-x-4 group"
											initial={{ opacity: 0, x: 20 }}
											whileInView={{ opacity: 1, x: 0 }}
											transition={{ delay: idx * 0.1 }}
											viewport={{ once: true }}
										>
											<div className="w-2 h-2 rounded-full bg-emerald-400 mt-2 group-hover:scale-150 group-hover:bg-yellow-400 transition-all duration-300" />
											<p className="text-emerald-50/90 text-md leading-relaxed group-hover:text-white transition-colors">
												{note}
											</p>
										</motion.div>
									))}
								</div>
							</div>
						</div>
					</motion.div>
				</div>
			</div>

			{/* Call to Action */}
			<CTASection />
		</>
	);
}
