import React from "react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { CTASection } from "../../components/sections/CTASection.jsx";

export default function PrevisionSocialSocio() {
	return (
		<div className="pt-32 pb-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<SectionHeading
						badge="Socios"
						title="Previsión social"
						subtitle="bienestar y acompañamiento"
					/>
					<p className="mt-4 text-gray-600 text-lg leading-relaxed">
						La previsión social busca acompañar al socio en
						situaciones importantes. Las condiciones específicas se
						rigen por los reglamentos vigentes.
					</p>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
					<div className="rounded-[32px] bg-white p-7 border border-gray-100 shadow-sm">
						<div className="text-gray-900 font-bold text-lg">
							Orientación y educación
						</div>
						<p className="mt-3 text-gray-700 leading-relaxed">
							Charlas y contenidos para fortalecer hábitos de
							ahorro, planificación y uso responsable del crédito.
						</p>
					</div>

					<div className="rounded-[32px] bg-white p-7 border border-gray-100 shadow-sm">
						<div className="text-gray-900 font-bold text-lg">
							Acompañamiento al socio
						</div>
						<p className="mt-3 text-gray-700 leading-relaxed">
							Canales de atención para consultas, reclamos y
							seguimiento de solicitudes, con trato cercano.
						</p>
					</div>

					<div className="rounded-[32px] bg-white p-7 border border-gray-100 shadow-sm">
						<div className="text-gray-900 font-bold text-lg">
							Programas y campañas
						</div>
						<p className="mt-3 text-gray-700 leading-relaxed">
							Iniciativas sociales y campañas institucionales en
							beneficio de los socios y su comunidad.
						</p>
					</div>
				</div>
			</div>

			<div className="mt-14">
				<CTASection />
			</div>
		</div>
	);
}
