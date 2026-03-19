import React from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { equipo } from "../data/nosotros";
import { sedes } from "../data/contacto";
import { MapPin, Phone, Clock } from "lucide-react";

export default function NuestroEquipo() {
	const equipoAdministrativo = equipo.slice(5);

	return (
		<div className="pt-32 pb-20 bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<motion.div
					className="text-center max-w-3xl mx-auto mb-14"
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.6 }}
				>
					<SectionHeading
						badge="La Cooperativa"
						title="Nuestro"
						subtitle="equipo"
					/>
					<p className="mt-4 text-gray-600 text-lg">
						Conoce al equipo administrativo y nuestras sucursales de
						atención al socio.
					</p>
				</motion.div>

				<section className="mb-20">
					<div className="mb-10">
						<h2 className="text-3xl font-bold text-gray-900">
							Equipo administrativo
						</h2>
						<p className="mt-2 text-gray-600">
							Profesionales que respaldan el funcionamiento diario
							de la cooperativa.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{equipoAdministrativo.map((member, index) => (
							<motion.div
								key={member.name}
								className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
							>
								<div className="relative h-72 overflow-hidden bg-linear-to-br from-emerald-100 to-yellow-100">
									<img
										src={member.image}
										alt={member.name}
										className="w-full h-full object-cover"
									/>
								</div>
								<div className="p-6">
									<h3 className="text-xl font-bold text-gray-900 mb-1">
										{member.name}
									</h3>
									<p className="text-emerald-600 font-medium mb-3">
										{member.role}
									</p>
									<p className="text-gray-600 text-sm leading-relaxed">
										{member.description}
									</p>
								</div>
							</motion.div>
						))}
					</div>
				</section>

				<section>
					<div className="mb-10">
						<h2 className="text-3xl font-bold text-gray-900">
							Sucursales
						</h2>
						<p className="mt-2 text-gray-600">
							Ubica la agencia más cercana y conoce nuestros
							horarios de atención.
						</p>
					</div>

					<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
						{sedes.map((sede, index) => (
							<motion.div
								key={sede.id}
								className="bg-white rounded-3xl border border-gray-200 shadow-sm hover:shadow-lg transition-shadow p-8"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.5,
									delay: index * 0.08,
								}}
							>
								<div className="flex items-start justify-between gap-4">
									<div>
										<h3 className="text-xl font-bold text-gray-900">
											{sede.nombre}
										</h3>
										<p className="mt-1 text-emerald-600 font-medium">
											{sede.tipo}
										</p>
									</div>
									<div className="w-12 h-12 rounded-2xl bg-linear-to-br from-emerald-100 to-yellow-100 flex items-center justify-center text-xl shrink-0">
										{sede.icono}
									</div>
								</div>

								<div className="mt-6 space-y-3 text-sm text-gray-700">
									<div className="flex items-start space-x-2">
										<MapPin className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
										<span>{sede.direccion}</span>
									</div>
									<div className="flex items-start space-x-2">
										<Phone className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
										<span>{sede.telefono}</span>
									</div>
									<div className="flex items-start space-x-2">
										<Clock className="w-4 h-4 text-emerald-600 mt-0.5 shrink-0" />
										<span className="whitespace-pre-line">
											{sede.horarios}
										</span>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</section>
			</div>
		</div>
	);
}
