import React from "react";
import { motion } from "motion/react";
import { AlertCircle, FileText, CheckCircle2 } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Sanciones() {
	return (
		<div className="pt-24 pb-16 bg-gradient-to-b from-gray-50 to-white">
			<div className="max-w-6xl mx-auto px-6">
				<motion.div
					initial={{ opacity: 0, y: 16 }}
					animate={{ opacity: 1, y: 0 }}
					transition={{ duration: 0.5 }}
				>
					<SectionHeading
						badge="Transparencia"
						title="Sanciones"
						subtitle="SBS"
					/>
				</motion.div>

				<div className="mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
					
					{/* CONTENIDO PRINCIPAL */}
					<div className="lg:col-span-2 space-y-6">

						{/* ESTADO */}
						<div className="rounded-2xl border border-green-100 bg-green-50 p-8 shadow-sm">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-2xl bg-green-100 flex items-center justify-center">
									<CheckCircle2 className="w-6 h-6 text-green-600" />
								</div>

								<div className="flex-1">
									<div className="flex items-center gap-3">
										<div className="text-xl font-bold text-gray-900">
											Estado de sanciones
										</div>

										<span className="text-xs font-semibold px-3 py-1 rounded-full bg-green-100 text-green-700">
											Sin sanciones
										</span>
									</div>

									<div className="mt-3 text-gray-700 leading-relaxed">
										A la fecha, la empresa no registra sanciones impuestas por la SBS.
										Esta sección se mantiene actualizada en cumplimiento de la normativa
										vigente y garantiza acceso permanente a esta información.
									</div>
								</div>
							</div>
						</div>

						{/* HISTÓRICO */}
						<div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
							<div className="px-8 pt-8 pb-4 border-b border-gray-100">
								<div className="text-lg font-semibold text-gray-900">
									Histórico de sanciones
								</div>
								<div className="mt-1 text-sm text-gray-500">
									Desde la incorporación al Registro Nacional de COOPAC
								</div>
							</div>

							<div className="p-8">
								<div className="border border-dashed border-gray-200 rounded-xl p-10 text-center">
									
									<div className="flex justify-center mb-3">
										<CheckCircle2 className="w-8 h-8 text-green-500" />
									</div>

									<div className="text-sm font-medium text-gray-700">
										No se registran sanciones
									</div>

									<div className="text-xs text-gray-500 mt-1">
										No existen registros desde la incorporación al sistema COOPAC
									</div>
								</div>
							</div>
						</div>
					</div>

					{/* SIDEBAR */}
					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-fit">
						
						<div className="flex items-start gap-3">
							<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center">
								<FileText className="w-5 h-5 text-primary" />
							</div>

							<div>
								<div className="text-sm text-gray-500">
									Referencia normativa
								</div>

								<div className="mt-1 text-base font-semibold text-gray-900">
									Oficio N.º 54340-2025-SBS
								</div>
							</div>
						</div>

						<div className="mt-4 text-sm text-gray-700 leading-relaxed">
							De acuerdo con el Oficio N.º 54340-2025-SBS, cada COOPAC
							deberá publicar las sanciones impuestas por la SBS de forma
							clara, accesible y permanente desde su incorporación al Registro Nacional.
						</div>

						{/* EXTRA: FECHA */}
						<div className="mt-6 pt-4 border-t border-gray-100 text-xs text-gray-500">
							Última actualización: {new Date().toLocaleDateString()}
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}