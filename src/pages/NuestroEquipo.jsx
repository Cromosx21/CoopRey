import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "../components/ui/SectionHeading.jsx";
import { equipoPorAgencia } from "../data/nosotros";

export default function NuestroEquipo() {
	const selectorRef = useRef(null);
	const [selectedGroupId, setSelectedGroupId] = useState(() => {
		if (equipoPorAgencia.some((g) => g.id === "oficina-principal")) {
			return "oficina-principal";
		}
		return equipoPorAgencia[0]?.id || "all";
	});

	const getInitials = (fullName) => {
		const words = String(fullName || "")
			.trim()
			.split(/\s+/)
			.filter(Boolean);

		if (!words.length) return "";
		if (words.length === 1) return words[0].slice(0, 2).toUpperCase();

		return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
	};

	useEffect(() => {
		const raw = window.location.hash.replace("#", "").trim();
		if (!raw) return;
		const isKnown =
			raw === "all" || equipoPorAgencia.some((g) => g.id === raw);
		if (!isKnown) return;
		setSelectedGroupId(raw);
	}, []);

	const visibleGroups = useMemo(() => {
		const groups =
			selectedGroupId === "all"
				? equipoPorAgencia
				: equipoPorAgencia.filter((g) => g.id === selectedGroupId);

		return groups;
	}, [selectedGroupId]);

	const handleSelectGroup = (id) => {
		setSelectedGroupId(id);
		window.history.replaceState(
			{},
			"",
			`${window.location.pathname}#${id}`,
		);
	};

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
						Conoce al equipo de la cooperativa por áreas y agencias
						de atención al socio.
					</p>
				</motion.div>

				<div
					ref={selectorRef}
					className="sticky top-24 z-30 -mx-4 sm:-mx-6 lg:-mx-8"
				>
					<div className="px-4 sm:px-6 lg:px-8 py-4 bg-white/90 backdrop-blur border-y border-gray-200">
						<div className="flex flex-col lg:flex-row lg:items-center gap-4 lg:gap-6">
							<div className="flex-1 min-w-0">
								<div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
									<button
										type="button"
										onClick={() => handleSelectGroup("all")}
										className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
											selectedGroupId === "all"
												? "bg-primary text-white border-primary"
												: "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
										}`}
									>
										Todos
									</button>
									{equipoPorAgencia.map((g) => (
										<button
											key={g.id}
											type="button"
											onClick={() =>
												handleSelectGroup(g.id)
											}
											className={`shrink-0 px-4 py-2 rounded-full text-sm font-medium border transition-colors ${
												selectedGroupId === g.id
													? "bg-primary text-white border-primary"
													: "bg-white text-gray-700 border-gray-200 hover:bg-gray-50"
											}`}
										>
											{g.titulo}
										</button>
									))}
								</div>
							</div>
						</div>
					</div>
				</div>

				<div className="mt-10">
					{visibleGroups.length ? (
						visibleGroups.map((grupo) => (
							<section key={grupo.id} className="mb-20 last:mb-0">
								<div className="mb-10 flex items-center justify-between gap-4 flex-wrap">
									<h2 className="text-3xl font-bold text-gray-900">
										{grupo.titulo}
									</h2>
									<div className="text-sm text-gray-600">
										{grupo.miembros.length}{" "}
										{grupo.miembros.length === 1
											? "persona"
											: "personas"}
									</div>
								</div>

								<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
									{grupo.miembros.map((member, index) => (
										<motion.div
											key={member.id}
											className="bg-white rounded-3xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border border-gray-100"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: index * 0.06,
											}}
										>
											<div className="relative h-24 bg-primary/5 flex items-center justify-center">
												<div className="w-14 h-14 rounded-2xl bg-primary/10 flex items-center justify-center">
													<div className="text-primary font-bold">
														{getInitials(
															member.name,
														)}
													</div>
												</div>
											</div>
											<div className="p-6">
												<h3 className="text-lg font-bold text-gray-900 mb-1">
													{member.name}
												</h3>
												<p className="text-primary font-medium">
													{member.role}
												</p>
											</div>
										</motion.div>
									))}
								</div>
							</section>
						))
					) : (
						<div className="bg-gray-50 border border-gray-200 rounded-3xl p-10 text-center">
							<div className="text-lg font-semibold text-gray-900">
								No se encontraron resultados
							</div>
							<div className="mt-2 text-gray-600">
								Prueba con otro nombre, cargo o selecciona otro
								grupo.
							</div>
						</div>
					)}
				</div>
			</div>
		</div>
	);
}
