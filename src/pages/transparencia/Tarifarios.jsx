import React from "react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { tasasCreditos, tasaMoratoria, comisiones } from "../../data/creditos.js";
import { tasasAhorros, notasTasas } from "../../data/ahorros.js";

export default function Tarifarios() {
	return (
		<div className="pt-24 pb-16">
			<div className="max-w-6xl mx-auto px-6">
				<SectionHeading
					badge="Transparencia"
					title="Tarifarios"
					subtitle="Tasas de interés, comisiones y notas informativas."
				/>

				<div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
					<div className="p-8">
						<h2 className="text-2xl font-bold text-gray-900">
							Créditos
						</h2>
						<p className="mt-2 text-gray-600">
							Tasas de interés (TEA) y comisión por desembolso.
						</p>
					</div>

					<div className="px-8 pb-8 overflow-x-auto">
						<table className="w-full min-w-[640px]">
							<thead>
								<tr className="bg-primary text-white">
									<th className="text-left p-4 font-semibold">
										Producto
									</th>
									<th className="text-center p-4 font-semibold">
										TEA Mín.
									</th>
									<th className="text-center p-4 font-semibold">
										TEA Máx.
									</th>
								</tr>
							</thead>
							<tbody>
								{tasasCreditos.map((row, index) => (
									<tr
										key={row.producto}
										className={`border-b border-gray-100 ${
											index % 2 === 0
												? "bg-white"
												: "bg-gray-50"
										}`}
									>
										<td className="p-4 text-gray-900 font-medium">
											{row.producto}
										</td>
										<td className="p-4 text-center text-gray-700">
											{row.teaMin}
										</td>
										<td className="p-4 text-center text-gray-700">
											{row.teaMax}
										</td>
									</tr>
								))}
							</tbody>
						</table>

						<div className="mt-6 bg-gray-50 rounded-xl p-6">
							<div className="text-sm text-gray-700">
								<span className="font-semibold">
									Tasa moratoria:
								</span>{" "}
								{tasaMoratoria.interesMoratorioAnual}
							</div>
							{tasaMoratoria.nota ? (
								<div className="mt-2 text-sm text-gray-700">
									{tasaMoratoria.nota}
								</div>
							) : null}
						</div>

						<div className="mt-8">
							<h3 className="text-xl font-semibold text-gray-900">
								Comisiones
							</h3>
							<div className="mt-6 overflow-x-auto">
								<table className="w-full min-w-[720px]">
									<thead>
										<tr className="bg-primary text-white">
											<th className="text-left p-4 font-semibold">
												Servicio
											</th>
											<th className="text-center p-4 font-semibold">
												Monto
											</th>
											<th className="text-center p-4 font-semibold">
												Momento
											</th>
										</tr>
									</thead>
									<tbody>
										{comisiones.map((row, index) => (
											<tr
												key={row.servicio}
												className={`border-b border-gray-100 ${
													index % 2 === 0
														? "bg-white"
														: "bg-gray-50"
												}`}
											>
												<td className="p-4 text-gray-900 font-medium">
													{row.servicio}
												</td>
												<td className="p-4 text-center text-gray-700">
													{row.monto}
												</td>
												<td className="p-4 text-center text-gray-700">
													{row.momento}
												</td>
											</tr>
										))}
									</tbody>
								</table>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10 bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
					<div className="p-8">
						<h2 className="text-2xl font-bold text-gray-900">
							Ahorros
						</h2>
						<p className="mt-2 text-gray-600">
							Tasas de interés (TREA) según tipo de ahorro.
						</p>
					</div>

					<div className="px-8 pb-8 overflow-x-auto">
						<table className="w-full min-w-[520px]">
							<thead>
								<tr className="bg-primary text-white">
									<th className="text-left p-4 font-semibold">
										Producto
									</th>
									<th className="text-center p-4 font-semibold">
										TREA
									</th>
								</tr>
							</thead>
							<tbody>
								{tasasAhorros.map((row, index) => (
									<tr
										key={row.tipo}
										className={`border-b border-gray-100 ${
											index % 2 === 0
												? "bg-white"
												: "bg-gray-50"
										}`}
									>
										<td className="p-4 text-gray-900 font-medium">
											{row.tipo}
										</td>
										<td className="p-4 text-center text-gray-700">
											{row.trea}
										</td>
									</tr>
								))}
							</tbody>
						</table>

						{notasTasas?.length ? (
							<div className="mt-6 bg-gray-50 rounded-xl p-6">
								<h3 className="font-semibold text-gray-900 mb-4">
									Notas importantes
								</h3>
								<ul className="space-y-2">
									{notasTasas.map((nota) => (
										<li
											key={nota}
											className="flex items-start gap-3 text-gray-700"
										>
											<div className="w-2 h-2 rounded-full bg-primary mt-2 shrink-0" />
											<span className="text-sm leading-relaxed">
												{nota}
											</span>
										</li>
									))}
								</ul>
							</div>
						) : null}
					</div>
				</div>
			</div>
		</div>
	);
}
