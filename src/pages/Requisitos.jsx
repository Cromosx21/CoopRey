import React, { useState } from "react";
import { CTASection } from "../components/sections/CTASection.jsx";
import { motion, AnimatePresence } from "motion/react";
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

					<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
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
			<div className="py-20 md:py-24 bg-emerald-50">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="bg-white rounded-2xl p-8 border border-emerald-200">
						<div className="flex items-start space-x-4">
							<Shield className="w-8 h-8 text-emerald-600 shrink-0 mt-1" />
							<div>
								<h3 className="text-2xl font-bold text-gray-900 mb-4">
									Información Importante
								</h3>

								<ul className="space-y-3 text-gray-700">
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Todos los documentos deben estar
											vigentes y ser originales para
											verificación
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Las fotocopias deben ser claras y
											completas en ambos lados
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											La evaluación de tu solicitud puede
											requerir documentación adicional
											según tu perfil
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Puedes agendar una cita con nuestro
											equipo para resolver dudas sobre el
											proceso
										</span>
									</li>
									<li className="flex items-start space-x-2">
										<span className="text-emerald-600 font-bold">
											•
										</span>
										<span>
											Los plazos indicados son aproximados
											y pueden variar según la complejidad
											de tu solicitud
										</span>
									</li>
								</ul>
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
