import React from "react";
import { HeroSection } from "../components/sections/HeroSection.jsx";
import { ServicesSection } from "../components/sections/ServicesSection.jsx";
import { BenefitsSection } from "../components/sections/BenefitsSection.jsx";
import { StatsSection } from "../components/sections/StatsSection.jsx";
import { TestimonialsSection } from "../components/sections/TestimonialsSection.jsx";
import { CTASection } from "../components/sections/CTASection.jsx";

export default function Home() {
	return (
		<>
			<HeroSection />
			<ServicesSection />
			<BenefitsSection />
			<StatsSection />
			<TestimonialsSection />
			<CTASection />
		</>
	);
}
