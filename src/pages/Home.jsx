import React from "react";
import { ShieldCheck } from "lucide-react";
import { HeroSection } from "../components/sections/HeroSection.jsx";
import { ServicesSection } from "../components/sections/ServicesSection.jsx";
import { BenefitsSection } from "../components/sections/BenefitsSection.jsx";
import { StatsSection } from "../components/sections/StatsSection.jsx";
import { TestimonialsSection } from "../components/sections/TestimonialsSection.jsx";
import { CTASection } from "../components/sections/CTASection.jsx";

function SbsRibbon() {
	return (
		<section className="bg-primary/5 border-b border-primary/10">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
				<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-6 text-center">
					<div className="inline-flex items-center gap-2">
						<div className="w-9 h-9 rounded-full bg-primary/10 flex items-center justify-center">
							<ShieldCheck className="w-5 h-5 text-primary" />
						</div>
						<div className="text-gray-900 font-semibold">
							Autorizados por
						</div>
					</div>
					<div className="max-w-3xs">
						<img
							src="/images/SBS_logotipo.webp"
							alt="Imagen de la SuperIntendencia de Bancas y Seguros"
							loading="lazy"
							decoding="async"
						/>
					</div>
					<div className="text-gray-700 text-sm">
						Somos seguros y confiables
					</div>
				</div>
			</div>
		</section>
	);
}

export default function Home() {
	return (
		<>
			<HeroSection />
			<SbsRibbon />
			<ServicesSection />
			<BenefitsSection />
			<StatsSection />
			<TestimonialsSection />
			<CTASection />
		</>
	);
}
