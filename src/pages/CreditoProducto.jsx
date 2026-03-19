import React from "react";
import { motion } from "motion/react";
import { CheckCircle, FileText, PiggyBank } from "lucide-react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { tiposCreditos, tasasCreditos } from "../data/creditos.js";
import { requisitosPorProducto } from "../data/requisitos.js";

const creditoConfigPorTipo = {
	personales: {
		titulo: "Créditos personales",
		matchNombre: ["crédito personal"],
		matchTasas: ["personal", "consumo", "simple", "micro"],
	},
	hipotecarios: {
		titulo: "Créditos hipotecarios",
		matchNombre: ["crédito hipotecario", "mi hogar"],
		matchTasas: ["hipotec", "hogar", "vivienda"],
	},
	empresariales: {
		titulo: "Créditos empresariales",
		matchNombre: [
			"crédito empresarial",
			"emprendedor",
			"microempresa",
			"agrario",
		],
		matchTasas: [
			"emprendedor",
			"empresa",
			"agrario",
			"moto",
			"convenio",
			"movil",
		],
	},
	educativos: {
		titulo: "Créditos educativos",
		matchNombre: ["crédito educativo", "educativo"],
		matchTasas: ["educ"],
	},
};

const normalizar = (value) => (value || "").toString().trim().toLowerCase();

const encontrarCredito = (tipo) => {
	const config = creditoConfigPorTipo[tipo];
	if (!config) return null;

	const credito = tiposCreditos.find((item) =>
		config.matchNombre.some((keyword) =>
			normalizar(item.nombre).includes(keyword),
		),
	);

	return credito || null;
};

const filtrarTasasCredito = (tipo) => {
	const config = creditoConfigPorTipo[tipo];
	if (!config) return [];

	const match = config.matchTasas;

	const filtradas = tasasCreditos.filter((row) => {
		const producto = normalizar(row.producto);
		return match.some((keyword) => producto.includes(keyword));
	});

	return filtradas.length ? filtradas : tasasCreditos;
};

export default function CreditoProducto({ tipo = "personales" }) {
	const config = creditoConfigPorTipo[tipo];
	const credito = encontrarCredito(tipo);
	const tasas = filtrarTasasCredito(tipo);
	const requisitos = requisitosPorProducto.find(
		(item) => normalizar(item.producto) === normalizar(credito?.nombre),
	);

	if (!config) {
		return (
			<div className="pt-24 pb-16">
				<div className="max-w-6xl mx-auto px-6">
					<SectionHeading
						badge="Créditos"
						title="Créditos"
						subtitle="Selecciona un tipo de crédito desde el menú de Productos y Servicios."
					/>
				</div>
			</div>
		);
	}

	return (
		<div className="pt-24 pb-16">
			<section className="relative overflow-hidden">
				<div className="absolute inset-0">
					{credito?.imagen ? (
						<img
							src={credito.imagen}
							alt={credito.nombre}
							className="w-full h-full object-cover opacity-15"
						/>
					) : (
						<div className="w-full h-full bg-gray-50" />
					)}
					<div className="absolute inset-0 bg-linear-to-b from-white via-white/90 to-white" />
				</div>

				<div className="relative max-w-6xl mx-auto px-6 py-14">
					<SectionHeading
						badge="Créditos"
						title={config.titulo}
						subtitle={
							credito?.descripcion ||
							"Información, tasas y requisitos del producto."
						}
					/>

					<div className="mt-10 grid gap-6 md:grid-cols-3">
						<motion.div
							className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<div className="flex items-center justify-between">
								<div className="text-sm text-gray-600">
									Tasa
								</div>
								<PiggyBank className="w-5 h-5 text-primary" />
							</div>
							<div className="mt-2 text-2xl font-semibold text-gray-900">
								{credito?.tasa || "—"}
							</div>
							<div className="mt-1 text-sm text-gray-500">
								TEA referencial según evaluación
							</div>
						</motion.div>

						<motion.div
							className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.05 }}
						>
							<div className="flex items-center justify-between">
								<div className="text-sm text-gray-600">
									Plazo
								</div>
								<FileText className="w-5 h-5 text-primary" />
							</div>
							<div className="mt-2 text-2xl font-semibold text-gray-900">
								{credito?.plazo || "—"}
							</div>
							<div className="mt-1 text-sm text-gray-500">
								Según tipo de crédito y evaluación
							</div>
						</motion.div>

						<motion.div
							className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6"
							initial={{ opacity: 0, y: 12 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
							transition={{ delay: 0.1 }}
						>
							<div className="flex items-center justify-between">
								<div className="text-sm text-gray-600">
									Monto
								</div>
								<CheckCircle className="w-5 h-5 text-primary" />
							</div>
							<div className="mt-2 text-2xl font-semibold text-gray-900">
								{credito?.monto || "—"}
							</div>
							<div className="mt-1 text-sm text-gray-500">
								Sujeto a evaluación crediticia
							</div>
						</motion.div>
					</div>

					{credito?.beneficios?.length ? (
						<div className="mt-10 bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
							<h3 className="text-xl font-semibold text-gray-900">
								Beneficios
							</h3>
							<div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
								{credito.beneficios.map((beneficio) => (
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
				<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8">
					<h3 className="text-xl font-semibold text-gray-900">
						Requisitos y documentos
					</h3>

					{requisitos ? (
						<div className="mt-6 grid gap-8 lg:grid-cols-2">
							<div>
								<div className="text-sm font-medium text-gray-900">
									Requisitos
								</div>
								<ul className="mt-4 space-y-3">
									{requisitos.requisitos.map((item) => (
										<li
											key={item}
											className="flex items-start gap-3 text-gray-700"
										>
											<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
												<CheckCircle className="w-4 h-4 text-primary" />
											</div>
											<span className="text-sm leading-relaxed">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>

							<div>
								<div className="text-sm font-medium text-gray-900">
									Documentos
								</div>
								<ul className="mt-4 space-y-3">
									{requisitos.documentos.map((item) => (
										<li
											key={item}
											className="flex items-start gap-3 text-gray-700"
										>
											<div className="w-6 h-6 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
												<FileText className="w-4 h-4 text-primary" />
											</div>
											<span className="text-sm leading-relaxed">
												{item}
											</span>
										</li>
									))}
								</ul>
							</div>
						</div>
					) : (
						<div className="mt-4 text-sm text-gray-600">
							La información de requisitos está sujeta a
							validación en agencia.
						</div>
					)}
				</div>
			</section>

			<section className="max-w-6xl mx-auto px-6 mt-10">
				<div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-8 overflow-x-auto">
					<h3 className="text-xl font-semibold text-gray-900">
						Tarifario de tasas de interés (referencial)
					</h3>
					<table className="w-full min-w-[560px] mt-6">
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
							{tasas.map((row, index) => (
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

					<div className="mt-6 text-sm text-gray-600">
						Para ver comisiones y otros conceptos, revisa la página
						de{" "}
						<a
							href="/tarifarios"
							className="text-primary font-medium"
						>
							Tarifarios
						</a>
						.
					</div>
				</div>
			</section>
		</div>
	);
}
