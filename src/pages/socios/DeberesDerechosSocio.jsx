import React from "react";
import { Scale, HeartHandshake, CheckCircle } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { CTASection } from "../../components/sections/CTASection.jsx";

export default function DeberesDerechosSocio() {
	return (
		<div className="pt-32 pb-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="text-center max-w-3xl mx-auto mb-16">
					<SectionHeading
						badge="Socios"
						title="Derechos y deberes"
						subtitle="del socio"
					/>
					<p className="mt-4 text-gray-600 text-lg leading-relaxed">
						Ser socio es participar activamente. Estos puntos
						resumen lo esencial para una relación clara, respetuosa
						y responsable con la cooperativa.
					</p>
				</div>

				<div className="grid lg:grid-cols-2 gap-8">
					<div className="rounded-[32px] bg-gray-50 p-7 sm:p-10 border border-gray-100">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-100">
								<Scale className="w-6 h-6 text-primary" />
							</div>
							<div className="text-gray-900 font-bold text-xl">
								Derechos
							</div>
						</div>
						<ul className="mt-6 space-y-4 text-gray-700 leading-relaxed">
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Recibir información clara sobre productos, condiciones y costos</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Ser atendido con respeto, sin discriminación y con canales de reclamo</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Participar en la vida cooperativa según estatuto y reglamentos</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Acceder a constancias y estados de cuenta cuando corresponda</span>
							</li>
						</ul>
					</div>

					<div className="rounded-[32px] bg-gray-50 p-7 sm:p-10 border border-gray-100">
						<div className="flex items-center gap-3">
							<div className="w-12 h-12 rounded-2xl bg-white flex items-center justify-center border border-gray-100">
								<HeartHandshake className="w-6 h-6 text-primary" />
							</div>
							<div className="text-gray-900 font-bold text-xl">
								Deberes
							</div>
						</div>
						<ul className="mt-6 space-y-4 text-gray-700 leading-relaxed">
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Brindar información veraz y mantener datos actualizados</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Cumplir con las obligaciones asumidas y los reglamentos vigentes</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Usar responsablemente los productos y cuidar tu historial crediticio</span>
							</li>
							<li className="flex items-start gap-3">
								<CheckCircle className="w-5 h-5 text-emerald-600 mt-0.5 shrink-0" />
								<span>Participar con respeto y promover la cultura cooperativa</span>
							</li>
						</ul>
					</div>
				</div>
			</div>

			<div className="mt-14">
				<CTASection />
			</div>
		</div>
	);
}
