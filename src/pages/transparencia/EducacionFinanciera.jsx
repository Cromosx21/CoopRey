import React from "react";
import { motion } from "motion/react";
import { BookOpen, ExternalLink, ShieldCheck, Link as LinkIcon } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";

export default function EducacionFinanciera() {
	const sbsUrl = "https://www.sbs.gob.pe/educacion-financiera/finanzas-para-ti";

	return (
		<div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-6xl mx-auto px-6">

				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<SectionHeading
						badge="Transparencia"
						title="Educación financiera"
						subtitle="SBS"
					/>
				</motion.div>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-8">

					{/* CONTENIDO PRINCIPAL */}
					<div className="lg:col-span-2 space-y-6">

						

						{/* ACCESO A CONTENIDO */}
						<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center">
									<BookOpen className="w-6 h-6 text-primary" />
								</div>

								<div>
									<div className="text-xl font-semibold text-gray-900">
										Domina tus finanzas y maneja tu dinero
									</div>

									<div className="mt-2 text-gray-700 leading-relaxed">
										Contenido educativo oficial para fortalecer la gestión del dinero,
										el ahorro y la toma de decisiones financieras informadas.
									</div>
								</div>
							</div>

							<a
								href={sbsUrl}
								target="_blank"
								rel="noreferrer"
								className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 transition-colors"
							>
								<span>Acceder a “Finanzas para Ti”</span>
								<ExternalLink className="w-4 h-4" />
							</a>

							<div className="mt-4 flex items-center gap-2 text-sm text-gray-600">
								<LinkIcon className="w-4 h-4" />
								<span>Enlace al portal oficial de la SBS</span>
							</div>
						</div>
					</div>

				</div>
			</div>
		</div>
	);
}
