import React from "react";
import { motion } from "motion/react";
import { AlertCircle, FileText } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";

export default function Sanciones() {
	return (
		<div className="pt-24 pb-16 bg-white">
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
					<div className="lg:col-span-2 space-y-6">
						<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 rounded-2xl bg-primary/10 flex items-center justify-center shrink-0">
									<AlertCircle className="w-6 h-6 text-primary" />
								</div>
								<div>
									<div className="text-xl font-bold text-gray-900">
										Estado de publicación
									</div>
									<div className="mt-2 text-gray-700 leading-relaxed">
										No se cuenta con la información. Esta sección mostrará
										de forma clara, accesible y permanente las sanciones
										impuestas por la SBS una vez se disponga de ellas.
									</div>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-2xl border border-gray-100 shadow-sm">
							<div className="px-8 pt-8">
								<div className="text-lg font-semibold text-gray-900">
									Histórico de sanciones
								</div>
								<div className="mt-1 text-sm text-gray-600">
									Desde la incorporación al Registro Nacional de COOPAC
								</div>
							</div>
							<div className="p-8">
								<div className="border border-gray-100 rounded-xl overflow-hidden">
									<div className="bg-gray-50 px-4 py-3 text-sm text-gray-600">
										No hay registros disponibles
									</div>
								</div>
							</div>
						</div>
					</div>

					<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 h-fit">
						<div className="flex items-start gap-3">
							<div className="w-10 h-10 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
								<FileText className="w-5 h-5 text-primary" />
							</div>
							<div>
								<div className="text-sm text-gray-600">
									Referencia normativa
								</div>
								<div className="mt-1 text-base font-semibold text-gray-900">
									Oficio N.º 54340-2025-SBS
								</div>
							</div>
						</div>

						<div className="mt-4 text-sm text-gray-700 leading-relaxed">
							De acuerdo con el Oficio N.º 54340-2025-SBS, cada COOPAC
							deberá publicar, en la sección de transparencia de su web
							o en su página principal, de manera clara, accesible y
							permanente, las sanciones que le hubieran sido impuestas
							por la SBS desde su incorporación al Registro Nacional de COOPAC.
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
