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
											className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
											initial={{ opacity: 0, y: 20 }}
											whileInView={{ opacity: 1, y: 0 }}
											viewport={{ once: true }}
											transition={{
												duration: 0.5,
												delay: index * 0.06,
											}}
										>
											<div className="relative w-full h-80 sm:h-96 bg-gray-100">
												{member.image ? (
													<img
														src={member.image}
														alt={member.name}
														className="w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-[1.06]"
														loading="lazy"
														decoding="async"
														onError={(e) => {
															e.currentTarget.style.display =
																"none";
														}}
													/>
												) : (
													<div className="w-full h-full flex items-center justify-center bg-primary/5">
														<div className="w-16 h-16 rounded-2xl bg-primary/10 flex items-center justify-center">
															<div className="text-primary font-bold text-lg">
																{getInitials(
																	member.name,
																)}
															</div>
														</div>
													</div>
												)}

												<div className="absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-black/80 via-black/30 to-transparent transition-opacity duration-300 group-hover:from-black/90" />
												<div className="absolute inset-x-0 bottom-0 p-5 transition-transform duration-300 group-hover:-translate-y-1">
													<div className="text-white font-bold text-base leading-tight">
														{member.name}
													</div>
													<div className="mt-1 text-white/90 text-sm font-medium leading-snug">
														{member.role}
													</div>
												</div>
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
