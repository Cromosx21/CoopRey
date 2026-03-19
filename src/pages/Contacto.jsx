import React from "react";
import { motion } from "motion/react";
import { MapPin, Phone, Mail, Clock, ExternalLink } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { sedes } from "../data/contacto";

const getMapsUrl = (direccion) => {
	if (!direccion) return "https://www.google.com/maps";
	return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
		direccion,
	)}`;
};

const getTelHref = (telefono) => {
	if (!telefono) return "#";
	const first = String(telefono).split("/")[0]?.trim();
	const normalized = first?.replace(/[^\d+]/g, "");
	if (!normalized) return "#";
	return `tel:${normalized}`;
};

export default function Oficinas() {
	const sedePrincipal = sedes.find((sede) => sede.destacada) || sedes[0];
	const otrasSedes = sedes.filter((sede) => sede.id !== sedePrincipal?.id);

	return (
		<div className="pt-24 pb-16">
			<div className="max-w-6xl mx-auto px-6">
				<SectionHeading
					badge="Atención al Socio"
					title="Oficinas"
					subtitle="Encuentra nuestra sede principal y las agencias disponibles."
				/>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
					<motion.div
						className="lg:col-span-2 bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden"
						initial={{ opacity: 0, y: 12 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.35 }}
					>
						<div className="p-6 sm:p-8">
							<div className="flex items-start justify-between gap-6">
								<div>
									<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary/10 text-primary text-xs font-semibold">
										<span>Oficina principal</span>
									</div>
									<h2 className="mt-4 text-2xl sm:text-3xl font-bold text-gray-900">
										{sedePrincipal?.nombre ||
											"Sede principal"}
									</h2>
									<p className="mt-2 text-gray-600">
										{sedePrincipal?.tipo ||
											"Atención presencial y administrativa"}
									</p>
								</div>

								<a
									href={getMapsUrl(sedePrincipal?.direccion)}
									target="_blank"
									rel="noreferrer"
									className="shrink-0 inline-flex items-center gap-2 rounded-xl bg-primary text-white px-4 py-3 font-medium hover:bg-primary/90 transition-colors"
								>
									<span className="hidden sm:inline">
										Ver en Maps
									</span>
									<span className="sm:hidden">Maps</span>
									<ExternalLink className="w-4 h-4" />
								</a>
							</div>

							<div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
								<div className="flex items-start gap-3">
									<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
										<MapPin className="w-5 h-5 text-primary" />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900">
											Dirección
										</div>
										<div className="mt-1 text-sm text-gray-700 leading-relaxed">
											{sedePrincipal?.direccion ||
												"Por asignar"}
										</div>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
										<Clock className="w-5 h-5 text-primary" />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900">
											Horario de atención
										</div>
										<div className="mt-1 text-sm text-gray-700 whitespace-pre-line">
											{sedePrincipal?.horarios ||
												"Por asignar"}
										</div>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
										<Phone className="w-5 h-5 text-primary" />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900">
											Teléfono
										</div>
										<a
											href={getTelHref(
												sedePrincipal?.telefono,
											)}
											className="mt-1 inline-block text-sm text-primary font-medium hover:text-primary/90 transition-colors"
										>
											{sedePrincipal?.telefono ||
												"Por asignar"}
										</a>
									</div>
								</div>

								<div className="flex items-start gap-3">
									<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
										<Mail className="w-5 h-5 text-primary" />
									</div>
									<div>
										<div className="text-sm font-semibold text-gray-900">
											Email
										</div>
										<div className="mt-1 text-sm text-gray-700">
											{sedePrincipal?.email ||
												"Por asignar"}
										</div>
									</div>
								</div>
							</div>
						</div>
					</motion.div>

					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-fit">
						<div className="text-sm text-gray-600">
							¿Necesitas ayuda rápida?
						</div>
						<div className="mt-2 text-lg font-semibold text-gray-900">
							Canales de atención
						</div>

						<a
							href="tel:+51066284760"
							className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-gray-100 px-4 py-4 hover:bg-gray-50 transition-colors"
						>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
									<Phone className="w-5 h-5 text-primary" />
								</div>
								<div>
									<div className="text-sm font-semibold text-gray-900">
										Llámanos
									</div>
									<div className="text-sm text-gray-600">
										066 284760
									</div>
								</div>
							</div>
							<span className="text-sm text-primary font-medium">
								Marcar
							</span>
						</a>

						<a
							href="https://wa.me/51979585886"
							className="mt-3 flex items-center justify-between gap-4 rounded-xl border border-gray-100 px-4 py-4 hover:bg-gray-50 transition-colors"
							target="_blank"
							rel="noreferrer"
						>
							<div className="flex items-center gap-3">
								<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
									<Phone className="w-5 h-5 text-primary" />
								</div>
								<div>
									<div className="text-sm font-semibold text-gray-900">
										WhatsApp
									</div>
									<div className="text-sm text-gray-600">
										979 585 886
									</div>
								</div>
							</div>
							<span className="text-sm text-primary font-medium">
								Abrir
							</span>
						</a>
					</div>
				</div>

				<div className="mt-14">
					<div className="flex items-end justify-between gap-6 flex-wrap">
						<div>
							<h2 className="text-2xl font-bold text-gray-900">
								Otras agencias
							</h2>
							<p className="mt-2 text-gray-600">
								Selecciona la agencia más cercana.
							</p>
						</div>
					</div>

					<div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{otrasSedes.map((sede, index) => (
							<motion.div
								key={sede.id}
								className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 hover:shadow-md transition-shadow"
								initial={{ opacity: 0, y: 12 }}
								whileInView={{ opacity: 1, y: 0 }}
								viewport={{ once: true }}
								transition={{
									duration: 0.35,
									delay: index * 0.04,
								}}
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<div className="text-xs font-semibold text-primary bg-primary/10 inline-flex px-3 py-1 rounded-full">
											{sede.tipo}
										</div>
										<div className="mt-3 text-lg font-bold text-gray-900">
											{sede.nombre}
										</div>
									</div>
									<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center text-xl shrink-0">
										{sede.icono}
									</div>
								</div>

								<div className="mt-5 space-y-3 text-sm text-gray-700">
									<div className="flex items-start gap-2">
										<MapPin className="w-4 h-4 text-primary mt-0.5 shrink-0" />
										<span className="leading-relaxed">
											{sede.direccion}
										</span>
									</div>

									<a
										href={getTelHref(sede.telefono)}
										className="flex items-center gap-2 text-primary font-medium hover:text-primary/90 transition-colors"
									>
										<Phone className="w-4 h-4" />
										<span>{sede.telefono}</span>
									</a>

									<div className="flex items-start gap-2 pt-3 border-t border-gray-100">
										<Clock className="w-4 h-4 text-primary mt-0.5 shrink-0" />
										<div className="whitespace-pre-line text-gray-600">
											{sede.horarios}
										</div>
									</div>

									<a
										href={getMapsUrl(sede.direccion)}
										target="_blank"
										rel="noreferrer"
										className="inline-flex items-center gap-2 text-gray-700 hover:text-primary transition-colors"
									>
										<span>Ver ubicación</span>
										<ExternalLink className="w-4 h-4" />
									</a>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
}
