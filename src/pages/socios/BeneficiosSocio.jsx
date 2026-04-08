import React, { useEffect } from "react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import BeneficiosSplitScreen from "../../components/sections/BeneficiosSplitScreen.jsx";
import { CTASection } from "../../components/sections/CTASection.jsx";

export default function BeneficiosSocio() {
	useEffect(() => {
		if (window.location.pathname !== "/beneficios") return;
		window.history.replaceState({}, "", "/socios/beneficios");
		window.dispatchEvent(new PopStateEvent("popstate"));
	}, []);

	return (
		<div className="pt-32 pb-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-14">
					<SectionHeading
						badge="Socios"
						title="Beneficios"
						subtitle="de ser socio"
					/>
					<p className="mt-4 text-gray-600 text-lg leading-relaxed">
						Ser socio te permite acceder a servicios financieros,
						beneficios institucionales y programas orientados al
						bienestar. Revisa cada beneficio y consulta la atención
						en oficina si necesitas una orientación personalizada.
					</p>
				</div>
			</div>

			<BeneficiosSplitScreen />

			<div className="mt-10">
				<CTASection />
			</div>
		</div>
	);
}
