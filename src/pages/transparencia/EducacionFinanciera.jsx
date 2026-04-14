import React from "react";
import { motion } from "motion/react";
import {
	BookOpen,
	ExternalLink,
	ShieldCheck,
	Link as LinkIcon,
} from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";

export default function EducacionFinanciera() {
	const sbsUrl =
		"https://www.sbs.gob.pe/educacion-financiera/finanzas-para-ti";

	return (
		<div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-6xl mx-auto px-6">

				{/* HEADER */}
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<SectionHeading
						badge="Transparencia"
						title="Educación financiera"
						subtitle="Superintendencia de Banca, Seguros y AFP (SBS)"
					/>
				</motion.div>

				{/* CONTENT */}
				<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">

					{/* CARD PRINCIPAL */}
					<motion.div
						initial={{ opacity: 0, y: 10 }}
						whileInView={{ opacity: 1, y: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow p-8"
					>
						<div className="flex items-start gap-4">
							<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
								<BookOpen className="w-6 h-6 text-primary" />
							</div>

							<div>
								<h3 className="text-xl font-semibold text-gray-900">
									Domina tus finanzas personales
								</h3>

								<p className="mt-2 text-gray-600 leading-relaxed">
									Accede a contenido oficial para mejorar tu gestión del dinero,
									reforzar el ahorro y tomar decisiones financieras más informadas.
								</p>
							</div>
						</div>

						{/* BOTÓN */}
						<a
							href={sbsUrl}
							target="_blank"
							rel="noreferrer"
							className="mt-6 inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-white px-6 py-3 font-medium hover:bg-primary/90 active:scale-[0.98] transition-all"
						>
							<span>Ir a Finanzas para Ti</span>
							<ExternalLink className="w-4 h-4" />
						</a>

						{/* FOOT NOTE */}
						<div className="mt-4 flex items-center gap-2 text-sm text-gray-500">
							<LinkIcon className="w-4 h-4" />
							<span>Portal oficial de la SBS</span>
						</div>
					</motion.div>

					{/* IMAGEN / BRAND CARD */}
					<motion.div
						initial={{ opacity: 0, scale: 0.98 }}
						whileInView={{ opacity: 1, scale: 1 }}
						viewport={{ once: true }}
						transition={{ duration: 0.4 }}
						className="flex justify-center"
					>
						<div className="bg-white border border-gray-100 shadow-sm rounded-2xl p-10 w-full flex flex-col items-center gap-4 hover:shadow-md transition-shadow">
							
							<img
								src="/images/SBS_logotipo.webp"
								alt="Logo de la Superintendencia de Banca, Seguros y AFP (SBS)"
								className="h-24 w-auto object-contain"
							/>

							<div className="text-center">
								<p className="text-gray-900 font-semibold">
									Superintendencia de Banca, Seguros y AFP
								</p>
								<p className="text-gray-500 text-sm mt-1">
									Educación financiera oficial del Perú
								</p>
							</div>

							<div className="flex items-center gap-2 text-xs text-gray-500">
								<ShieldCheck className="w-4 h-4" />
								<span>Fuente confiable y regulada</span>
							</div>
						</div>
					</motion.div>

				</div>
			</div>
		</div>
	);
}