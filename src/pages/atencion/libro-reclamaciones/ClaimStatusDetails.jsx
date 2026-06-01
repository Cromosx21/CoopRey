import React from "react";
import { motion } from "motion/react";
import { 
	CheckCircle, Search, Clock, FileText, AlertCircle, 
	Info, Mail, Download, Clock as ClockIcon 
} from "lucide-react";
import { tiposReclamo, estadosReclamo } from "../../../data/reclamaciones";

export default function ClaimStatusDetails({ claim, getStatusColor, getStatusIcon }) {
	if (!claim) return null;

	return (
		<motion.div
			initial={{ opacity: 0, y: 10 }}
			animate={{ opacity: 1, y: 0 }}
			className="space-y-8"
		>
			{/* Status Banner */}
			<div
				className={`rounded-2xl p-6 border-2 flex flex-col md:flex-row items-center justify-between gap-4 ${getStatusColor(
					claim.estado,
				)}`}
			>
				<div className="flex items-center gap-4">
					<div className="p-3 bg-white rounded-xl shadow-sm">
						{getStatusIcon(claim.estado)}
					</div>
					<div>
						<p className="text-xs font-bold uppercase tracking-wider opacity-70">
							Estado Actual
						</p>
						<h4 className="text-2xl font-black">
							{estadosReclamo[claim.estado] || claim.estado}
						</h4>
					</div>
				</div>
				<div className="text-center md:text-right">
					<p className="text-xs font-bold uppercase tracking-wider opacity-70">
						Última Actualización
					</p>
					<p className="font-bold text-lg">
						{claim.historial?.[claim.historial.length - 1]?.fecha ||
							claim.fechaRegistro}
					</p>
				</div>
			</div>

			{/* Content Grid */}
			<div className="grid md:grid-cols-2 gap-8">
				<div className="space-y-6">
					<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
						<h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
							<Info className="w-4 h-4 text-emerald-600" />
							Detalles del Socio
						</h5>
						<div className="space-y-3">
							<div>
								<p className="text-xs text-gray-500 font-bold uppercase">
									Nombre
								</p>
								<p className="text-gray-900 font-medium">
									{claim.nombre} {claim.apellidos}
								</p>
							</div>
							<div>
								<p className="text-xs text-gray-500 font-bold uppercase">
									Documento
								</p>
								<p className="text-gray-900 font-medium">
									{claim.documento}
								</p>
							</div>
							<div>
								<p className="text-xs text-gray-500 font-bold uppercase">
									Email
								</p>
								<p className="text-gray-900 font-medium">
									{claim.email}
								</p>
							</div>
						</div>
					</div>

					<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
						<h5 className="font-bold text-gray-900 mb-4 flex items-center gap-2">
							<FileText className="w-4 h-4 text-emerald-600" />
							Detalle del Hecho
						</h5>
						<div className="space-y-3">
							<div>
								<p className="text-xs text-gray-500 font-bold uppercase">
									Tipo
								</p>
								<p className="text-gray-900 font-medium">
									{tiposReclamo.find((t) => t.id === claim.tipoReclamo)
										?.label || claim.tipoReclamo}
								</p>
							</div>
							<div>
								<p className="text-xs text-gray-500 font-bold uppercase">
									Descripción
								</p>
								<p className="text-gray-700 text-sm line-clamp-4 italic">
									"{claim.descripcion}"
								</p>
							</div>
						</div>
					</div>
				</div>

				{/* Timeline */}
				<div className="bg-gray-50 rounded-2xl p-6 border border-gray-100">
					<h5 className="font-bold text-gray-900 mb-6 flex items-center gap-2">
						<ClockIcon className="w-4 h-4 text-emerald-600" />
						Línea de Tiempo
					</h5>
					<div className="relative space-y-6 before:absolute before:left-[11px] before:top-2 before:bottom-2 before:w-0.5 before:bg-gray-200">
						{claim.historial?.map((item, idx) => (
							<div key={idx} className="relative pl-8">
								<div
									className={`absolute left-0 top-1 w-6 h-6 rounded-full border-4 border-white shadow-sm ${
										idx === claim.historial.length - 1
											? "bg-emerald-500"
											: "bg-gray-300"
									}`}
								/>
								<p className="text-[10px] font-bold text-gray-400 uppercase">
									{item.fecha}
								</p>
								<p className="text-sm font-bold text-gray-900">
									{estadosReclamo[item.estado] || item.estado}
								</p>
								<p className="text-xs text-gray-600">{item.detalle}</p>
							</div>
						))}
					</div>
				</div>
			</div>

			{/* Response Section */}
			{claim.respuesta && (
				<motion.div
					initial={{ opacity: 0, y: 20 }}
					animate={{ opacity: 1, y: 0 }}
					className="bg-emerald-900 text-white rounded-3xl p-8 shadow-2xl relative overflow-hidden"
				>
					<div className="absolute top-0 right-0 p-8 opacity-10">
						<Mail className="w-32 h-32" />
					</div>
					<div className="relative z-10">
						<div className="flex items-center gap-3 mb-4">
							<div className="w-10 h-10 bg-emerald-800 rounded-xl flex items-center justify-center">
								<CheckCircle className="w-6 h-6 text-emerald-400" />
							</div>
							<div>
								<h5 className="font-bold text-lg">Respuesta del Área Legal</h5>
								<p className="text-xs text-emerald-300">
									Emitida el {claim.fechaRespuesta}
								</p>
							</div>
						</div>
						<div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/10 italic leading-relaxed">
							{claim.respuesta}
						</div>
						<div className="mt-6 flex justify-end">
							<button className="text-sm font-bold flex items-center gap-2 hover:text-emerald-300 transition-colors">
								<Download className="w-4 h-4" />
								<span>Descargar Respuesta (PDF)</span>
							</button>
						</div>
					</div>
				</motion.div>
			)}
		</motion.div>
	);
}
