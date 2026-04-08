import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll, useTransform } from "motion/react";
import { HandCoins, ShieldCheck, Users, CheckCircle } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import ProcesoStep from "../../components/requisitos/ProcesoStep.jsx";
import RequisitoAccordionItem from "../../components/requisitos/RequisitoAccordionItem.jsx";
import RequisitoGeneralCard from "../../components/requisitos/RequisitoGeneralCard.jsx";
import { CTASection } from "../../components/sections/CTASection.jsx";
import {
	requisitosCorporativos,
	requisitosPorProducto,
	procesoPasos,
} from "../../data/requisitos";

export default function RequisitosSocio() {
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

	useEffect(() => {
		if (window.location.pathname !== "/requisitos") return;
		window.history.replaceState({}, "", "/socios/requisitos");
		window.dispatchEvent(new PopStateEvent("popstate"));
	}, []);

	return (
		<div className="pt-32 pb-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<SectionHeading
						badge="Socios"
						title="Requisitos"
						subtitle="para ser socio"
					/>
					<p className="mt-4 text-gray-600 text-lg leading-relaxed">
						Te mostramos el proceso de incorporación y la
						documentación más solicitada. Los requisitos pueden
						variar según el producto y la evaluación.
					</p>
				</div>

				<div className="rounded-[32px] bg-gray-50 p-6 sm:p-10 border border-gray-100">
					<div className="text-gray-900 font-semibold text-lg">
						Resumen rápido
					</div>
					<div className="mt-5 grid md:grid-cols-3 gap-4">
						<div className="rounded-2xl bg-white p-5 border border-gray-100">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
									<Users className="w-5 h-5 text-primary" />
								</div>
								<div className="font-semibold text-gray-900">
									Identificación
								</div>
							</div>
							<ul className="mt-4 space-y-2 text-sm text-gray-700">
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
									<span>DNI vigente (y copia)</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
									<span>Datos de contacto actualizados</span>
								</li>
							</ul>
						</div>

						<div className="rounded-2xl bg-white p-5 border border-gray-100">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
									<ShieldCheck className="w-5 h-5 text-primary" />
								</div>
								<div className="font-semibold text-gray-900">
									Validación
								</div>
							</div>
							<ul className="mt-4 space-y-2 text-sm text-gray-700">
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
									<span>Verificación de datos y firma</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
									<span>Conoce tus canales de atención</span>
								</li>
							</ul>
						</div>

						<div className="rounded-2xl bg-white p-5 border border-gray-100">
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
									<HandCoins className="w-5 h-5 text-primary" />
								</div>
								<div className="font-semibold text-gray-900">
									Aportes
								</div>
							</div>
							<ul className="mt-4 space-y-2 text-sm text-gray-700">
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
									<span>Registro de aportación social</span>
								</li>
								<li className="flex items-start gap-2">
									<CheckCircle className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
									<span>Constancia/estado de aportes</span>
								</li>
							</ul>
						</div>
					</div>
				</div>

				<div className="mt-16">
					<div className="text-xl font-bold text-gray-900">
						Proceso de incorporación
					</div>
					<div className="mt-8 relative" ref={timelineRef}>
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

				<div className="mt-20">
					<div className="text-center mb-14">
						<SectionHeading
							badge="Documentos"
							title="Documentos generales solicitados"
							subtitle="Para atenderte más rápido"
						/>
						<p className="text-gray-600 text-lg max-w-2xl mx-auto">
							Estos documentos suelen ser requeridos para
							incorporación y/o evaluación según el servicio.
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

			<div className="mt-14">
				<CTASection />
			</div>
		</div>
	);
}
