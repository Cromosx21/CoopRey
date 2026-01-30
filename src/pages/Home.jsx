import React from "react";
import { Header } from "../components/Header.jsx";
import { HeroSection } from "../components/HeroSection.jsx";
import { ServicesSection } from "../components/ServicesSection.jsx";
import { BenefitsSection } from "../components/BenefitsSection.jsx";
import { StatsSection } from "../components/StatsSection.jsx";
import { TestimonialsSection } from "../components/TestimonialsSection.jsx";
import { CTASection } from "../components/CTASection.jsx";
import { Footer } from "../components/Footer.jsx";

export default function Home() {
	return (
		<div className="min-h-screen bg-white">
			<Header />
			<main>
				<HeroSection />
				<ServicesSection />
				<BenefitsSection />
				<StatsSection />
				<TestimonialsSection />
				<CTASection />
			</main>
			<Footer />
		</div>
	);
}
