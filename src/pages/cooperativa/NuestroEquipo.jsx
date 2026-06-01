import React, {
	useCallback,
	useEffect,
	useMemo,
	useRef,
	useState,
} from "react";
import { motion, AnimatePresence } from "motion/react";
import SectionHeading from "../../components/ui/SectionHeading.jsx";
import { equipoPorAgencia } from "../../data/nosotros";

const EXCLUDED_ID = "directorio-coopac-2026";
const DEFAULT_GROUP_ID = "oficina-principal";

function getInitials(fullName) {
	const words = String(fullName ?? "")
		.trim()
		.split(/\s+/)
		.filter(Boolean);
	if (!words.length) return "";
	if (words.length === 1) return words[0].slice(0, 2).toUpperCase();
	return `${words[0][0]}${words[words.length - 1][0]}`.toUpperCase();
}

function prefetchImages(urls, prefetchedSet) {
	const uniqueUrls = [...new Set(urls)].filter(
		(url) => url && !prefetchedSet.has(url),
	);
	for (const url of uniqueUrls) {
		prefetchedSet.add(url);
		const img = new Image();
		img.decoding = "async";
		img.src = url;
	}
}

// ─── Skeleton base con shimmer ───────────────────────────────────────────────
function Skeleton({ className = "" }) {
	return (
		<div
			className={`relative overflow-hidden bg-gray-200 ${className}`}
			aria-hidden="true"
		>
			<div className="absolute inset-0 -translate-x-full animate-[shimmer_1.6s_infinite] bg-linear-to-r from-transparent via-white/60 to-transparent" />
		</div>
	);
}

// ─── Skeleton del panel principal ───────────────────────────────────────────
function PanelSkeleton() {
	return (
		<div
			className="mt-12"
			aria-label="Cargando información..."
			aria-busy="true"
		>
			<div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-stretch">
				{/* Imagen skeleton */}
				<div className="relative min-h-64 sm:min-h-80 lg:min-h-[440px]">
					<div className="absolute inset-0 bg-gray-300 -rotate-2 rounded-3xl" />
					<Skeleton className="relative w-full h-full rotate-2 rounded-3xl min-h-64 sm:min-h-80 lg:min-h-[440px]" />
				</div>

				{/* Texto skeleton */}
				<div className="px-1 sm:px-2 lg:px-0 py-2 sm:py-4 flex flex-col gap-4">
					<Skeleton className="h-9 w-3/4 rounded-xl" />
					<div className="flex flex-col gap-2 mt-1">
						<Skeleton className="h-4 w-full rounded-lg" />
						<Skeleton className="h-4 w-5/6 rounded-lg" />
						<Skeleton className="h-4 w-4/6 rounded-lg" />
					</div>

					{/* Cita skeleton */}
					<div className="mt-4 rounded-[28px] bg-gray-100 border border-gray-200 p-6 flex flex-col gap-3">
						<Skeleton className="h-4 w-full rounded-lg" />
						<Skeleton className="h-4 w-full rounded-lg" />
						<Skeleton className="h-4 w-2/3 rounded-lg" />
						<div className="mt-3 flex flex-col items-end gap-2">
							<Skeleton className="h-4 w-40 rounded-lg" />
							<Skeleton className="h-3 w-28 rounded-lg" />
						</div>
					</div>
				</div>
			</div>

			{/* Botón skeleton */}
			<div className="mt-10 flex justify-center">
				<Skeleton className="h-12 w-52 rounded-full" />
			</div>
		</div>
	);
}

// ─── Imagen que muestra skeleton hasta que carga ─────────────────────────────
function ImageWithSkeleton({
	src,
	alt,
	className,
	skeletonClassName = "",
	...props
}) {
	const [loaded, setLoaded] = useState(false);
	const [errored, setErrored] = useState(false);

	// Resetear estado al cambiar src (cambio de agencia)
	useEffect(() => {
		setLoaded(false);
		setErrored(false);
	}, [src]);

	const handleLoad = useCallback(() => setLoaded(true), []);

	const handleError = useCallback((e) => {
		if (e.currentTarget.dataset.fallbackApplied) return;
		e.currentTarget.dataset.fallbackApplied = "1";
		e.currentTarget.src = "/images/LOGO.webp";
		setErrored(true);
	}, []);

	return (
		<>
			{/* Skeleton visible mientras la imagen no cargó */}
			{!loaded && !errored && (
				<Skeleton className={`absolute inset-0 ${skeletonClassName}`} />
			)}
			<img
				src={src}
				alt={alt}
				className={`${className} transition-opacity duration-500 ${
					loaded ? "opacity-100" : "opacity-0"
				}`}
				onLoad={handleLoad}
				onError={handleError}
				{...props}
			/>
		</>
	);
}

// ─── Componente principal ────────────────────────────────────────────────────
export default function NuestroEquipo() {
	const panelRef = useRef(null);
	const staffRef = useRef(null);
	const prefetchedImagesRef = useRef(new Set());

	const tabGroups = useMemo(
		() => equipoPorAgencia.filter((g) => g.id !== EXCLUDED_ID),
		[],
	);

	const [selectedGroupId, setSelectedGroupId] = useState(() => {
		const hash = window.location.hash.replace("#", "").trim();
		const validHash = hash && tabGroups.some((g) => g.id === hash);
		if (validHash) return hash;
		if (tabGroups.some((g) => g.id === DEFAULT_GROUP_ID))
			return DEFAULT_GROUP_ID;
		return tabGroups[0]?.id ?? "";
	});

	const [showStaff, setShowStaff] = useState(false);

	// Controla si el panel está listo para mostrarse (para hacer skeleton al cambiar de tab)
	const [panelReady, setPanelReady] = useState(false);

	const selectedGroup = useMemo(
		() =>
			tabGroups.find((g) => g.id === selectedGroupId) ??
			tabGroups[0] ??
			null,
		[selectedGroupId, tabGroups],
	);

	// Cada vez que cambia el grupo, mostrar skeleton un frame antes de pintar el contenido
	useEffect(() => {
		setPanelReady(false);
		const id = window.requestAnimationFrame(() => setPanelReady(true));
		return () => window.cancelAnimationFrame(id);
	}, [selectedGroupId]);

	// Prefetch imágenes del grupo activo
	useEffect(() => {
		if (!selectedGroup) return;
		const urls = [
			selectedGroup.imagen,
			selectedGroup.administrador?.image,
			...selectedGroup.miembros.map((m) => m.image),
		].filter(Boolean);

		let cancelled = false;
		const run = () => {
			if (!cancelled) prefetchImages(urls, prefetchedImagesRef.current);
		};

		if ("requestIdleCallback" in window) {
			const id = window.requestIdleCallback(run, { timeout: 1500 });
			return () => {
				cancelled = true;
				window.cancelIdleCallback(id);
			};
		}
		const id = window.setTimeout(run, 0);
		return () => {
			cancelled = true;
			window.clearTimeout(id);
		};
	}, [selectedGroup]);

	const scrollToPanel = useCallback(() => {
		if (!panelRef.current) return;
		const top =
			panelRef.current.getBoundingClientRect().top + window.scrollY - 224;
		window.scrollTo({ top, behavior: "smooth" });
	}, []);

	const handleSelectGroup = useCallback(
		(id) => {
			setSelectedGroupId(id);
			setShowStaff(false);
			window.history.replaceState(
				{},
				"",
				`${window.location.pathname}#${id}`,
			);
			scrollToPanel();
		},
		[scrollToPanel],
	);

	const handleShowStaff = useCallback(() => {
		setShowStaff(true);
		window.requestAnimationFrame(() => {
			staffRef.current?.scrollIntoView({
				behavior: "smooth",
				block: "start",
			});
		});
	}, []);

	const memberCount = selectedGroup?.miembros.length ?? 0;

	return (
		<div className="pt-32 pb-20 bg-white">
			{/* Keyframe shimmer — se inyecta una sola vez */}
			<style>{`@keyframes shimmer { 100% { transform: translateX(200%); } }`}</style>

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

				{/* Tabs sticky */}
				<div className="sticky top-24 z-10 -mx-4 sm:-mx-6 lg:-mx-8">
					<div className="relative px-4 sm:px-6 lg:px-8 py-5 border-y border-gray-200 bg-white/95">
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
				</div>
													fetchPriority="high"

				{/* Panel principal — alterna skeleton ↔ contenido con AnimatePresence */}
				<section ref={panelRef} className="scroll-mt-32">
					<AnimatePresence mode="wait">
						{!panelReady ? (
							<motion.div
								key="skeleton-panel"
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								exit={{ opacity: 0 }}
								transition={{ duration: 0.15 }}
							>
								<PanelSkeleton />
							</motion.div>
						) : selectedGroup ? (
							<motion.div
								key={`panel-${selectedGroupId}`}
								initial={{ opacity: 0 }}
								animate={{ opacity: 1 }}
								transition={{ duration: 0.3 }}
								className="mt-12"
							>
								<div className="grid lg:grid-cols-[2fr_3fr] gap-12 items-stretch">
									{/* Imagen con skeleton interno */}
									<div className="relative min-h-64 sm:min-h-80 lg:min-h-[440px]">
										<div className="absolute inset-0 bg-emerald-700 -rotate-2 rounded-3xl" />
										<div className="relative w-full h-full overflow-hidden rotate-2 rounded-3xl min-h-64 sm:min-h-80 lg:min-h-[440px]">
											{selectedGroup.imagen ? (
												<ImageWithSkeleton
													src={selectedGroup.imagen}
													alt={selectedGroup.titulo}
													className="w-full h-full object-cover object-center"
													loading="eager"
													decoding="async"
												/>
											) : (
												<div className="w-full h-full bg-gray-100" />
											)}
											<div className="absolute inset-0 bg-linear-to-t from-black/55 via-black/10 to-transparent" />
											<div className="absolute left-6 bottom-6 right-6">
												<div className="text-white text-sm font-semibold">
													{selectedGroup.titulo}
												</div>
											</div>
										</div>
									</div>

									{/* Info */}
									<div className="px-1 sm:px-2 lg:px-0 py-2 sm:py-4">
										<div className="text-2xl sm:text-3xl font-bold text-gray-900">
											{selectedGroup.titulo}
										</div>
										{selectedGroup.resena && (
											<div className="mt-3 text-gray-600 leading-relaxed">
												{selectedGroup.resena}
											</div>
										)}
										{selectedGroup.mensajeAdmin && (
											<div className="mt-6 rounded-[28px] bg-primary/5 border border-primary/10 p-6 text-gray-700 leading-relaxed">
												<p>
													"
													{selectedGroup.mensajeAdmin}
													"
												</p>
												<br />
												<div>
													<span className="text-end w-full block">
														{selectedGroup
															.administrador
															?.name ?? ""}
													</span>
													<span className="text-end w-full block font-bold text-sm">
														{selectedGroup
															.administrador
															?.role ?? ""}
													</span>
												</div>
											</div>
										)}
									</div>
								</div>

								<div className="mt-10 flex justify-center">
									<button
										type="button"
										onClick={handleShowStaff}
										className="rounded-full bg-primary text-white font-semibold px-7 py-3 transition-colors hover:bg-primary/90"
									>
										Conocer al personal
									</button>
								</div>
							</motion.div>
						) : null}
					</AnimatePresence>
				</section>

				{/* Grid de personal con skeleton por tarjeta */}
				{showStaff && selectedGroup && (
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
								{memberCount}{" "}
								{memberCount === 1 ? "persona" : "personas"}
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
									}}
								>
									<div className="relative w-full aspect-3/4 bg-gray-200">
										{member.image ? (
											<ImageWithSkeleton
												src={member.image}
												alt={member.name}
												className="w-full h-full object-cover object-center transition-transform duration-500 group-hover:scale-[1.06]"
												loading="lazy"
												decoding="async"
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
				)}
			</div>
		</div>
	);
}
