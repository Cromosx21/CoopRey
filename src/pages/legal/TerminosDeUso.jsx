import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";

export default function TerminosDeUso() {
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
						title="Términos de"
						subtitle="uso"
					/>
				</motion.div>

				<div className="mt-10 space-y-8 text-gray-700 leading-relaxed">
					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
						<p className="text-sm text-gray-500">
							Última actualización: 2026-04-08
						</p>
						<p className="mt-4">
							Al acceder y utilizar este sitio web, aceptas los
							siguientes términos y condiciones. Si no estás de
							acuerdo, por favor no utilices el sitio.
						</p>
					</div>

					<div className="grid gap-6">
						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								1. Uso del sitio
							</h2>
							<p className="mt-3">
								El contenido tiene fines informativos. Nos
								reservamos el derecho de modificar, suspender o
								descontinuar secciones del sitio sin previo aviso.
							</p>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								2. Propiedad intelectual
							</h2>
							<p className="mt-3">
								Los textos, imágenes, logotipos y otros recursos
								pertenecen a sus respectivos titulares. No está
								permitida su reproducción o uso no autorizado.
							</p>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								3. Enlaces a terceros
							</h2>
							<p className="mt-3">
								Podemos incluir enlaces a sitios de terceros. No
								somos responsables del contenido, disponibilidad o
								prácticas de dichos sitios.
							</p>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								4. Limitación de responsabilidad
							</h2>
							<p className="mt-3">
								No garantizamos que el sitio esté libre de errores
								o interrupciones. El uso del sitio es bajo tu
								propia responsabilidad.
							</p>
						</section>

						<section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sm:p-8">
							<h2 className="text-xl font-semibold text-gray-900">
								5. Cambios
							</h2>
							<p className="mt-3">
								Podemos actualizar estos términos en cualquier
								momento. La versión vigente estará disponible en
								esta página.
							</p>
						</section>
					</div>
				</div>
			</div>
		</div>
	);
}
