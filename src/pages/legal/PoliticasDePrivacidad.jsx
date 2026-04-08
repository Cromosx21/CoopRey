import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";

export default function PoliticasDePrivacidad() {
	return (
		<div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-4xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.45 }}
				>
					<SectionHeading
						badge="Legal"
						title="Políticas de"
						subtitle="privacidad"
					/>
				</motion.div>

				<div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
						<p className="text-sm text-gray-500">
							Última actualización: 2026-04-08
						</p>
						<p className="mt-4">
							Esta Política de Privacidad describe cómo la
							Cooperativa de Ahorro y Crédito Niño Rey recopila,
							utiliza y protege la información personal de los
							usuarios al navegar por este sitio web.
						</p>
					</div>

					<div className="grid gap-6">
						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								1. Información que recopilamos
							</h2>
							<ul className="mt-3 list-disc pl-5 space-y-2">
								<li>
									Datos que proporcionas mediante formularios
									(por ejemplo, Libro de Reclamaciones).
								</li>
								<li>
									Datos técnicos del dispositivo y del navegador
									(para fines de seguridad y funcionamiento).
								</li>
							</ul>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								2. Finalidades de uso
							</h2>
							<ul className="mt-3 list-disc pl-5 space-y-2">
								<li>
									Atender solicitudes, consultas y reclamos.
								</li>
								<li>
									Mejorar la experiencia de navegación y el
									rendimiento del sitio.
								</li>
								<li>
									Cumplir obligaciones legales y regulatorias.
								</li>
							</ul>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								3. Conservación y seguridad
							</h2>
							<p className="mt-3">
								Adoptamos medidas razonables de seguridad para
								proteger la información. Conservamos los datos el
								tiempo necesario para cumplir con las finalidades
								y obligaciones aplicables.
							</p>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								4. Derechos del titular
							</h2>
							<p className="mt-3">
								Puedes solicitar acceso, rectificación,
								actualización o eliminación de tu información,
								según corresponda, conforme a la normativa
								aplicable.
							</p>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								5. Contacto
							</h2>
							<p className="mt-3">
								Para consultas relacionadas con privacidad, usa
								los canales de contacto publicados en la sección
								de Oficinas.
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
