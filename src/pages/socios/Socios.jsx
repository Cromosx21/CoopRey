import React from "react";
import { motion } from "motion/react";
import {
	Award,
	FileText,
	HandCoins,
	Scale,
	ShieldCheck,
	ArrowRight,
} from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { CTASection } from "../../components/sections/CTASection.jsx";

const sociosLinks = [
	{
		title: "Beneficios de ser socio",
		description:
			"Conoce los beneficios, programas y servicios que obtienes al formar parte de la cooperativa.",
		href: "/socios/beneficios",
		icon: Award,
		color: "bg-emerald-50 text-emerald-700",
	},
	{
		title: "Requisitos para ser socio",
		description:
			"Revisa el proceso de incorporación y la documentación más solicitada para afiliarte.",
		href: "/socios/requisitos",
		icon: FileText,
		color: "bg-yellow-50 text-yellow-700",
	},
	{
		title: "Aportes",
		description:
			"Entiende qué son los aportes, para qué sirven y cómo consultar tu constancia o estado de aportes.",
		href: "/socios/aportes",
		icon: HandCoins,
		color: "bg-emerald-50 text-emerald-700",
	},
	{
		title: "Deberes y derechos",
		description:
			"Conoce tus derechos como socio y los deberes que sostienen la transparencia y la convivencia cooperativa.",
		href: "/socios/deberes-derechos",
		icon: Scale,
		color: "bg-yellow-50 text-yellow-700",
	},
	{
		title: "Previsión social",
		description:
			"Información general sobre bienestar, acompañamiento y campañas orientadas al socio y su familia.",
		href: "/socios/prevision-social",
		icon: ShieldCheck,
		color: "bg-emerald-50 text-emerald-700",
	},
];

export default function Socios() {
	return (
		<div className="pt-32 pb-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-14">
					<SectionHeading
						badge="Información para el socio"
						title="Socios"
						subtitle="Todo lo que necesitas saber"
					/>
					<p className="mt-4 text-gray-600 text-lg leading-relaxed">
						Explora cada tema de forma separada para entender con
						claridad tu incorporación, beneficios, aportes, deberes,
						derechos y previsión social.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
					{sociosLinks.map((item, idx) => {
						const Icon = item.icon;

						return (
							<motion.a
								key={item.href}
								href={item.href}
								className="group rounded-[28px] border border-gray-100 bg-white p-7 shadow-sm hover:shadow-md transition-shadow"
								initial={{ opacity: 0, y: 14 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{ duration: 0.35, delay: idx * 0.05 }}
							>
								<div className="flex items-start justify-between gap-4">
									<div
										className={`w-12 h-12 rounded-2xl flex items-center justify-center ${item.color}`}
									>
										<Icon className="w-6 h-6" />
									</div>
									<div className="w-10 h-10 rounded-xl bg-gray-50 flex items-center justify-center text-gray-600 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
										<ArrowRight className="w-5 h-5" />
									</div>
								</div>

								<div className="mt-5 text-gray-900 font-bold text-lg">
									{item.title}
								</div>
								<div className="mt-2 text-gray-600 leading-relaxed">
									{item.description}
								</div>
							</motion.a>
						);
					})}
				</div>
			</div>

			<div className="mt-14">
				<CTASection />
			</div>
		</div>
	);
}
