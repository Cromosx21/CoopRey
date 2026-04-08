import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, HelpCircle } from "lucide-react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";

export default function PreguntasFrecuentes() {
	const faqs = [
		{
			question: "¿Cómo puedo abrir una cuenta de ahorros?",
			answer:
				"Puedes acercarte a cualquiera de nuestras oficinas con tu DNI vigente. Si deseas, revisa primero la sección de requisitos para conocer la documentación solicitada."
		},
		{
			question: "¿Cuáles son los horarios de atención?",
			answer:
				"Atendemos de lunes a viernes en el horario publicado en la sección de Oficinas. Los horarios pueden variar por agencia."
		},
		{
			question: "¿Dónde consulto tasas y comisiones vigentes?",
			answer:
				"Las tasas y comisiones se encuentran en la página de Transparencia, en la sección de Tarifarios."
		},
		{
			question: "¿Cómo presento un reclamo o queja?",
			answer:
				"Puedes registrar tu solicitud en el Libro de Reclamaciones desde la web o hacerlo de manera presencial en nuestras oficinas."
		}
	];

	const [openIndex, setOpenIndex] = useState(0);

	return (
		<div className="pt-24 pb-16">
			<div className="max-w-6xl mx-auto px-6">
				<SectionHeading
					badge="Transparencia"
					title="Preguntas Frecuentes"
					subtitle="Respuestas rápidas para ayudarte a encontrar lo que buscas."
				/>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<div className="lg:col-span-2 space-y-4">
						{faqs.map((faq, index) => {
							const isOpen = openIndex === index;

							return (
								<div
									key={faq.question}
									className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
								>
									<button
										type="button"
										onClick={() =>
											setOpenIndex((prev) =>
												prev === index ? -1 : index,
											)
										}
										className="w-full flex items-start justify-between gap-6 px-6 py-5 text-left"
									>
										<div className="flex items-start gap-3">
											<div className="w-9 h-9 rounded-xl bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
												<HelpCircle className="w-5 h-5 text-primary" />
											</div>
											<div>
												<div className="text-[15px] font-semibold text-gray-900">
													{faq.question}
												</div>
												<div className="text-sm text-gray-500 mt-1">
													Ver respuesta
												</div>
											</div>
										</div>

										<ChevronDown
											className={`w-5 h-5 text-gray-600 transition-transform ${
												isOpen ? "rotate-180" : ""
											}`}
										/>
									</button>

									<AnimatePresence>
										{isOpen && (
											<motion.div
												initial={{ height: 0, opacity: 0 }}
												animate={{ height: "auto", opacity: 1 }}
												exit={{ height: 0, opacity: 0 }}
												transition={{ duration: 0.25 }}
												className="px-6 pb-6"
											>
												<div className="pt-2 text-gray-700 leading-relaxed">
													{faq.answer}
												</div>
											</motion.div>
										)}
									</AnimatePresence>
								</div>
							);
						})}
					</div>

					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-fit">
						<div className="text-sm text-gray-600">
							¿No encontraste lo que buscabas?
						</div>
						<div className="mt-2 text-lg font-semibold text-gray-900">
							Visita nuestras oficinas
						</div>
						<a
							href="/oficinas"
							className="mt-5 inline-flex items-center justify-center w-full rounded-xl bg-primary text-white px-4 py-3 font-medium hover:bg-primary/90 transition-colors"
						>
							Ver oficinas
						</a>
						<a
							href="/libro-reclamaciones"
							className="mt-3 inline-flex items-center justify-center w-full rounded-xl bg-primary/10 text-primary px-4 py-3 font-medium hover:bg-primary/15 transition-colors"
						>
							Libro de reclamaciones
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
