import React from "react";
import { motion } from "motion/react";
import { Search, AlertCircle, FileText } from "lucide-react";
import ClaimStatusDetails from "./ClaimStatusDetails.jsx";
import { estadosReclamo } from "../../../data/reclamaciones";

export default function BuscarTab({
	searchCode,
	setSearchCode,
	handleSearch,
	searching,
	searchResult,
	error,
	getStatusColor,
	getStatusIcon,
	registeredClaims,
}) {
	return (
		<motion.div
			key="buscar"
			initial={{ opacity: 0, y: 20 }}
			animate={{ opacity: 1, y: 0 }}
			exit={{ opacity: 0, y: -20 }}
			transition={{ duration: 0.3 }}
		>
			<div className="bg-white rounded-2xl shadow-xl p-8 max-w-3xl mx-auto mb-12 border border-gray-100">
				<div className="text-center mb-10">
					<h2 className="text-3xl font-bold text-gray-900 mb-3">
						Seguimiento de Reclamo
					</h2>
					<p className="text-gray-600">
						Ingresa el código único generado al momento de tu
						registro para conocer el estado actual y respuesta del
						área legal.
					</p>
				</div>

				<form
					onSubmit={handleSearch}
					className="flex flex-col sm:flex-row gap-4 mb-10"
				>
					<div className="relative flex-1">
						<div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none">
							<Search className="w-5 h-5 text-gray-400" />
						</div>
						<input
							type="text"
							value={searchCode}
							onChange={(e) =>
								setSearchCode(e.target.value.toUpperCase())
							}
							placeholder="REC-YYYYMMDD-XXXXXX"
							className="w-full pl-12 pr-4 py-4 border-2 border-gray-100 rounded-2xl focus:ring-4 focus:ring-emerald-100 focus:border-emerald-500 transition-all font-mono text-lg uppercase"
							required
						/>
					</div>
					<motion.button
						type="submit"
						disabled={searching}
						whileHover={{ scale: 1.02 }}
						whileTap={{ scale: 0.98 }}
						className="bg-emerald-600 hover:bg-emerald-700 text-white font-bold py-4 px-8 rounded-2xl transition-all duration-200 shadow-lg shadow-emerald-100 flex items-center justify-center gap-2 min-w-[160px] disabled:opacity-70"
					>
						{searching ? (
							<div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin" />
						) : (
							<>
								<Search className="w-5 h-5" />
								<span>Buscar</span>
							</>
						)}
					</motion.button>
				</form>

				{searchResult ? (
					<ClaimStatusDetails
						claim={searchResult}
						getStatusColor={getStatusColor}
						getStatusIcon={getStatusIcon}
					/>
				) : error && !searching ? (
					<div className="text-center py-8">
						<AlertCircle className="w-12 h-12 text-red-500 mx-auto mb-3" />
						<p className="text-gray-600">{error}</p>
					</div>
				) : (
					<div className="text-center py-12 border-2 border-dashed border-gray-100 rounded-2xl">
						<div className="w-20 h-20 bg-gray-50 rounded-full flex items-center justify-center mx-auto mb-4">
							<Search className="w-10 h-10 text-gray-200" />
						</div>
						<p className="text-gray-400 font-medium">
							Aún no has buscado ningún reclamo
						</p>
					</div>
				)}
			</div>

			{/* Reclamos Recientes */}
			{registeredClaims.length > 0 && !searchResult && (
				<div className="max-w-4xl mx-auto">
					<h3 className="text-xl font-bold text-gray-900 mb-6">
						Mis Reclamos Recientes
					</h3>
					<div className="grid sm:grid-cols-2 gap-4">
						{registeredClaims.slice(0, 4).map((claim) => (
							<motion.div
								key={claim.id}
								initial={{ opacity: 0, x: -20 }}
								animate={{ opacity: 1, x: 0 }}
								className="bg-white border border-gray-200 rounded-lg p-4 hover:shadow-lg transition-shadow cursor-pointer"
								onClick={() => {
									setSearchCode(claim.id);
									handleSearch();
								}}
							>
								<div className="flex items-center justify-between mb-3">
									<p className="font-mono font-bold text-emerald-600">
										{claim.id}
									</p>
									<div
										className={`flex items-center space-x-2 px-3 py-1 rounded-full border text-xs ${getStatusColor(
											claim.estado,
										)}`}
									>
										{getStatusIcon(claim.estado)}
										<span>
											{estadosReclamo[claim.estado] ||
												claim.estado}
										</span>
									</div>
								</div>
								<p className="text-gray-700 font-semibold mb-2 line-clamp-1">
									{claim.descripcion}
								</p>
								<p className="text-xs text-gray-500">
									{claim.fechaRegistro} - {claim.nombre}
								</p>
							</motion.div>
						))}
					</div>
				</div>
			)}
		</motion.div>
	);
}
