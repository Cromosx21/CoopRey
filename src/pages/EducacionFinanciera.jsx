import React from "react";
import { motion } from "motion/react";
import { BookOpen, ExternalLink, ShieldCheck } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function EducacionFinanciera() {
	const sbsUrl = "https://www.sbs.gob.pe/educacion-financiera/finanzas-para-ti";

	return (
		<div className="pt-24 pb-16 bg-white">
			<div className="max-w-6xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<SectionHeading
						badge="Educación financiera"
						title="Finanzas"
						subtitle="para ti"
					/>
				</motion.div>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-6">
						<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
									<BookOpen className="w-6 h-6 text-primary" />
								</div>
								<div>
									<div className="text-xl font-bold text-gray-900">
										Domina tus finanzas y maneja tu dinero
									</div>
									<div className="mt-2 text-gray-700 leading-relaxed">
										Accede al programa nacional “Finanzas para Ti” de la SBS
										y revisa el módulo “Domina tus finanzas” para fortalecer
										tus hábitos financieros y tomar decisiones informadas.
									</div>
								</div>
							</div>

							<a
								href={sbsUrl}
								target="_blank"
								rel="noreferrer"
								className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
							>
								<span>Ir a Finanzas para Ti (SBS)</span>
								<ExternalLink className="w-4 h-4" />
							</a>

							<div className="mt-4 text-sm text-gray-600">
								Este enlace te redirige al portal oficial de la SBS.
							</div>
						</div>
					</div>

					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-fit">
						<div className="flex items-start gap-3">
							<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
								<ShieldCheck className="w-5 h-5 text-primary" />
							</div>
							<div>
								<div className="text-sm text-gray-600">
									Referencia normativa
								</div>
								<div className="mt-1 text-base font-semibold text-gray-900">
									Oficio N.º 54340-2025-SBS
								</div>
							</div>
						</div>

						<div className="mt-4 text-sm text-gray-700 leading-relaxed">
							De acuerdo con el Oficio N.º 54340-2025-SBS, cada COOPAC
							debe publicar en su web institucional un enlace claro,
							accesible y permanente para acceder a la guía “Domina tus
							finanzas y maneja tu dinero”, elaborada en el marco del
							programa nacional “Finanzas para Ti”.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
