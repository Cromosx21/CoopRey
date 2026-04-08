import React from "react";
import { HandCoins, ShieldCheck, Users, CheckCircle } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { CTASection } from "../../components/sections/CTASection.jsx";

export default function AportesSocio() {
	return (
		<div className="pt-32 pb-20 bg-gray-50">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<SectionHeading
						badge="Socios"
						title="Aportes"
						subtitle="del socio"
					/>
					<p className="mt-4 text-gray-600 text-lg leading-relaxed">
						Los aportes representan tu participación en el capital
						social. Fortalecen a la cooperativa y permiten sostener
						su crecimiento para beneficio de los socios.
					</p>
				</div>

				<div className="grid lg:grid-cols-3 gap-8">
					<div className="rounded-[32px] bg-white p-7 border border-gray-100 shadow-sm">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700">
								<HandCoins className="w-6 h-6" />
							</div>
							<div className="text-gray-900 font-bold text-lg">
								¿Qué es un aporte?
							</div>
						</div>
						<p className="mt-4 text-gray-700 leading-relaxed">
							Es una aportación registrada a tu nombre como parte de
							tu condición de socio. Se refleja en tu constancia o
							estado de aportes.
						</p>
					</div>

					<div className="rounded-[32px] bg-white p-7 border border-gray-100 shadow-sm">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700">
								<ShieldCheck className="w-6 h-6" />
							</div>
							<div className="text-gray-900 font-bold text-lg">
								¿Para qué sirve?
							</div>
						</div>
						<ul className="mt-4 space-y-3 text-gray-700">
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Fortalece el patrimonio de la cooperativa</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Mejora la capacidad de atender a los socios</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Refuerza la sostenibilidad institucional</span>
							</li>
						</ul>
					</div>

					<div className="rounded-[32px] bg-white p-7 border border-gray-100 shadow-sm">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-emerald-50 flex items-center justify-center text-emerald-700">
								<Users className="w-6 h-6" />
							</div>
							<div className="text-gray-900 font-bold text-lg">
								Consulta de aportes
							</div>
						</div>
						<p className="mt-4 text-gray-700 leading-relaxed">
							Puedes solicitar tu estado/constancia de aportes en
							ventanilla. Los montos y periodicidad dependen del
							reglamento vigente y se te informarán al momento de la
							afiliación.
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
