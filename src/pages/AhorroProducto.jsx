import React from "react";
import { CheckCircle, PiggyBank } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { tasasAhorros, notasTasas, productosAhorros } from "../data/ahorros.js";

const ahorroConfigPorTipo = {
	infantil: {
		titulo: "Ahorro infantil",
		matchTasas: ["ahorro infantil"],
		matchProducto: ["ahorro infantil"],
	},
	libre: {
		titulo: "Ahorro libre",
		matchTasas: ["ahorro libre"],
		matchProducto: ["ahorro libre"],
	},
	"plazo-fijo": {
		titulo: "Plazo fijo",
		matchTasas: ["plazo fijo"],
		matchProducto: ["plazo fijo"],
	},
	programado: {
		titulo: "Ahorro programado",
		matchTasas: ["ahorro programado"],
		matchProducto: ["ahorro programado"],
	},
	"deposito-garantia": {
		titulo: "Depósito de garantía",
		matchTasas: [
			"depósito de garantía",
			"deposito de garantía",
			"deposito de garantia",
		],
		matchProducto: [
			"depósito de garantía",
			"deposito de garantía",
			"deposito de garantia",
		],
	},
	canasta: {
		titulo: "Ahorro canasta",
		matchTasas: ["ahorro canasta"],
		matchProducto: ["ahorro canasta"],
	},
};

const normalizar = (value) => (value || "").toString().trim().toLowerCase();

const filtrarTasasAhorro = (tipo) => {
	const config = ahorroConfigPorTipo[tipo];
	if (!config) return [];

	const filtradas = tasasAhorros.filter((row) =>
		config.matchTasas.some((keyword) =>
			normalizar(row.tipo).includes(keyword),
		),
	);

	return filtradas.length ? filtradas : tasasAhorros;
};

const obtenerProducto = (tipo) => {
	const config = ahorroConfigPorTipo[tipo];
	if (!config) return null;

	const producto = productosAhorros.find((item) =>
		config.matchProducto.some((keyword) =>
			normalizar(item.nombre).includes(keyword),
		),
	);

	return producto || null;
};

export default function AhorroProducto({ tipo = "libre" }) {
	const config = ahorroConfigPorTipo[tipo];
	const tasas = filtrarTasasAhorro(tipo);
	const producto = obtenerProducto(tipo);

	if (!config) {
		return (
			<div className="pt-24 pb-16">
				<div className="max-w-6xl mx-auto px-6">
					<SectionHeading
						badge="Ahorros"
						title="Producto no disponible"
						subtitle="Selecciona un producto desde el menú de Productos y Servicios."
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="pt-24 pb-16">
			<section className="relative overflow-hidden">
				<div className="absolute inset-0">
					{producto?.imagen ? (
						<img
							src={producto.imagen}
							alt={producto.nombre}
							className="w-full h-full object-cover opacity-15"
						/>
					) : (
						<div className="w-full h-full bg-gray-50" />
					)}
					<div className="absolute inset-0 bg-linear-to-b from-white via-white/90 to-white" />
				</div>

				<div className="relative max-w-6xl mx-auto px-6 py-14">
					<SectionHeading
						badge="Ahorros"
						title={config.titulo}
						subtitle={
							producto?.descripcion ||
							"Información, beneficios y tasas de interés del producto."
						}
					/>

					{producto?.beneficios?.length ? (
						<div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
							<h3 className="text-xl font-semibold text-gray-900">
								Beneficios
							</h3>
							<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{producto.beneficios.map((beneficio) => (
									<div
										key={beneficio}
										className="flex items-start gap-3 text-gray-700"
									>
										<div className="w-7 h-7 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
											<CheckCircle className="w-4 h-4 text-primary" />
										</div>
										<div className="text-sm leading-relaxed">
											{beneficio}
										</div>
									</div>
								))}
							</div>
						</div>
					) : null}
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 mt-10">
				<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-x-auto">
					<div className="flex items-center justify-between gap-4 flex-wrap">
						<h3 className="text-xl font-semibold text-gray-900">
							Tasas de interés (TREA)
						</h3>
						<div className="flex items-center gap-2 text-sm text-gray-600">
							<PiggyBank className="w-4 h-4 text-primary" />
							<span>Información referencial</span>
						</div>
					</div>

					<table className="w-full min-w-[480px] mt-6">
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
							{tasas.map((row, index) => (
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
							<h4 className="font-semibold text-gray-900 mb-4">
								Notas importantes
							</h4>
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
			</section>
		</div>
	);
}
