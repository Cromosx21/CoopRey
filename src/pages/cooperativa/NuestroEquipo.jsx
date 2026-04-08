import React, { useEffect, useMemo, useRef, useState } from "react";
import { motion } from "motion/react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { equipoPorAgencia } from "../../data/nosotros";

export default function NuestroEquipo() {
	const panelRef = useRef(null);
	const staffRef = useRef(null);

	const tabGroups = useMemo(() => {
		return equipoPorAgencia.filter(
			(g) => g.id !== "directorio-coopac-2026",
		);
	}, []);

	const [selectedGroupId, setSelectedGroupId] = useState(() => {
		if (tabGroups.some((g) => g.id === "oficina-principal")) {
			return "oficina-principal";
		}
		return tabGroups[0]?.id || "";
	});

	const [showStaff, setShowStaff] = useState(false);
	const prefetchedImagesRef = useRef(new Set());

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
		const isKnown = tabGroups.some((g) => g.id === raw);
		if (!isKnown) return;
		setSelectedGroupId(raw);
	}, []);

	const selectedGroup = useMemo(() => {
		return (
			tabGroups.find((g) => g.id === selectedGroupId) ||
			tabGroups[0] ||
			null
		);
	}, [selectedGroupId, tabGroups]);

	const handleSelectGroup = (id) => {
		setSelectedGroupId(id);
		setShowStaff(false);
		window.history.replaceState(
			{},
			"",
			`${window.location.pathname}#${id}`,
		);
		if (panelRef.current) {
			const elementPosition = panelRef.current.getBoundingClientRect().top;
			const offsetPosition = elementPosition + window.pageYOffset - 224;

			window.scrollTo({ top: offsetPosition, behavior: "smooth" });
		}
	};

	useEffect(() => {
		if (!selectedGroup) return;

		const urls = [
			selectedGroup.imagen,
			selectedGroup.administrador?.image,
			...selectedGroup.miembros.map((m) => m.image),
		].filter(Boolean);

		const uniqueUrls = Array.from(new Set(urls));
		let cancelled = false;

		const prefetch = () => {
			for (const url of uniqueUrls) {
				if (cancelled) return;
				if (prefetchedImagesRef.current.has(url)) continue;
				prefetchedImagesRef.current.add(url);
				const img = new Image();
				img.decoding = "async";
				img.src = url;
			}
		};

		if ("requestIdleCallback" in window) {
			const id = window.requestIdleCallback(prefetch, { timeout: 1500 });
			return () => {
				cancelled = true;
				window.cancelIdleCallback(id);
			};
		}

		const id = window.setTimeout(prefetch, 0);
		return () => {
			cancelled = true;
			window.clearTimeout(id);
		};
	}, [selectedGroup]);

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

					<div className="-mx-4 sm:-mx-6 lg:-mx-8 px-4 sm:px-6 lg:px-8 py-5 bg-white/90 backdrop-blur border-y border-gray-200 sticky top-24 z-10">
						<div className="flex gap-2 overflow-x-auto pb-1 -mx-1 px-1">
							{tabGroups.map((g) => (
								<button
									key={g.id}
									type="button"
									onClick={() => handleSelectGroup(g.id)}
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
				<section ref={panelRef} className="scroll-mt-32">

					{selectedGroup ? (
						<div className="mt-12">
							<div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-stretch">
								<div className="relative rounded-[36px] min-h-64 sm:min-h-80 lg:min-h-[440px] bg-gray-100">
									<div className="absolute top-0 left-0 w-full h-full bg-emerald-700 -rotate-2 rounded-3xl" />
									{selectedGroup.imagen ? (
										<img
											src={selectedGroup.imagen}
											alt={selectedGroup.titulo}
											className="w-full h-full object-cover rotate-2 rounded-3xl"
											loading="eager"
											fetchPriority="high"
											decoding="async"
										/>
									) : (
										<div className="w-full h-full" />
									)}
									<div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent rounded-3xl rotate-2" />

									<div className="absolute left-6 bottom-6 right-6">
										<div className="text-white text-sm font-semibold">
											{selectedGroup.titulo}
										</div>
									</div>
								</div>

								<div className="px-1 sm:px-2 lg:px-0 py-2 sm:py-4">
									<div className="text-2xl sm:text-3xl font-bold text-gray-900">
										{selectedGroup.titulo}
									</div>
									<div className="mt-3 text-gray-600 leading-relaxed">
										{selectedGroup.resena || ""}
									</div>
									<div className="mt-6 rounded-[28px] bg-primary/5 border border-primary/10 p-6 text-gray-700 leading-relaxed">
										<p>“{selectedGroup.mensajeAdmin}”</p>
										<br />
										<div>
											<span className="text-end w-full block">
												{selectedGroup.administrador
													?.name || ""}
											</span>
											<span className="text-end w-full block font-bold text-sm">
												{selectedGroup.administrador
													?.role || ""}
											</span>
										</div>
									</div>
								</div>
							</div>

							<div className="mt-10 flex justify-center">
								<button
									type="button"
									onClick={() => {
										setShowStaff(true);
										window.requestAnimationFrame(() => {
											staffRef.current?.scrollIntoView({
												behavior: "smooth",
												block: "start",
											});
										});
									}}
									className="rounded-full bg-primary text-white font-semibold px-7 py-3 transition-colors hover:bg-primary/90"
								>
									Conocer al personal
								</button>
							</div>
						</div>
					) : null}
				</section>

				{showStaff && selectedGroup ? (
					<section
						ref={staffRef}
						className="mt-16 scroll-mt-32"
						key={`${selectedGroup.id}-staff`}
					>
						<div className="mb-10 flex items-center justify-between gap-4 flex-wrap">
							<h2 className="text-3xl font-bold text-gray-900">
								Personal de {selectedGroup.titulo}
							</h2>
							<div className="text-sm text-gray-600">
								{selectedGroup.miembros.length}{" "}
								{selectedGroup.miembros.length === 1
									? "persona"
									: "personas"}
							</div>
						</div>

						<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
							{selectedGroup.miembros.map((member, index) => (
								<motion.div
									key={member.id}
									className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-white shadow-sm transition-shadow duration-300 hover:shadow-xl"
									initial={{ opacity: 0, y: 18 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.45,
										delay: index * 0.05,
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
													if (
														e.currentTarget.dataset
															.fallbackApplied
													)
														return;
													e.currentTarget.dataset.fallbackApplied =
														"1";
													e.currentTarget.src =
														"/images/LOGO.webp";
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
				) : null}
			</div>
		</div>
	);
}
