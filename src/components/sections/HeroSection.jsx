import React, { useEffect, useCallback, useMemo, useState } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import snapshot from "../../data/contentSnapshot.json";
import { heroContentUrl } from "../../data/contentSources.js";
import { useRemoteContent } from "../../hooks/useRemoteContent.js";
import { getDriveImage, getDriveImageSet } from "../../utils/driveImages.js";

export function HeroSection() {
	const [selectedIndex, setSelectedIndex] = useState(0);
	const [firstImageLoaded, setFirstImageLoaded] = useState(false);
	const { data } = useRemoteContent(
		"cooprey:hero:v1",
		heroContentUrl,
		snapshot.hero,
		snapshot.generatedAt
	);
	const heroSlides = useMemo(() => data.map((item, index) => ({
		id: index + 1,
		title: item.Nombre,
		image: item.web,
		imgmobil: item.celular
	})), [data]);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
	});

	useEffect(() => {
		if (!emblaApi) return;

		let autoplayId;

		const startAutoplay = () => {
			if (autoplayId) clearInterval(autoplayId);

			autoplayId = setInterval(() => {
				if (!emblaApi) return;

				emblaApi.scrollNext();
			}, 6000);
		};

		const stopAutoplay = () => {
			if (autoplayId) {
				clearInterval(autoplayId);
				autoplayId = undefined;
			}
		};

		const handleVisibilityChange = () => {
			if (document.hidden) {
				stopAutoplay();
			} else {
				startAutoplay();
			}
		};

		const handleSelect = () => {
			setSelectedIndex(emblaApi.selectedScrollSnap());
			startAutoplay();
		};

		const handlePointerDown = () => {
			stopAutoplay();
		};

		startAutoplay();

		document.addEventListener(
			"visibilitychange",
				handleVisibilityChange
		);

		emblaApi.on("select", handleSelect);
		emblaApi.on("reInit", handleSelect);
		emblaApi.on("pointerDown", handlePointerDown);

		return () => {
			stopAutoplay();

			document.removeEventListener(
				"visibilitychange",
					handleVisibilityChange
			);

			emblaApi.off("select", handleSelect);
			emblaApi.off("reInit", handleSelect);
			emblaApi.off("pointerDown", handlePointerDown);
		};
	}, [emblaApi]);

	const scrollPrev = useCallback(() => {
		if (!emblaApi) return;

		emblaApi.scrollPrev();
	}, [emblaApi]);

	const scrollNext = useCallback(() => {
		if (!emblaApi) return;

		emblaApi.scrollNext();
	}, [emblaApi]);

	return (
		<section
			className="relative w-full max-h-[765px] mt-24 overflow-hidden"
			id="inicio"
		>
			<div ref={emblaRef} className="relative">
				<div className="flex">
					{heroSlides.map((slide, index) => (
						<div
							key={slide.id}
							className="relative flex-[0_0_100%] w-full h-[80vh]"
						>
							{(index === 0 || index === selectedIndex || (
								firstImageLoaded && index === (selectedIndex + 1) % heroSlides.length
							)) && <picture>
								<source
									media="(max-width: 768px)"
									srcSet={getDriveImageSet(slide.imgmobil || slide.image, [480, 768])}
									sizes="100vw"
								/>

								<img
									src={getDriveImage(slide.image, 1280)}
									srcSet={getDriveImageSet(slide.image, [768, 1280, 1920])}
									sizes="100vw"
									alt={slide.title}
									loading={index === selectedIndex ? "eager" : "lazy"}
									fetchPriority={index === selectedIndex ? "high" : "low"}
									decoding={index === selectedIndex ? "sync" : "async"}
									onLoad={() => setFirstImageLoaded(true)}
									className="absolute inset-0 w-full h-full object-cover"
								/>
							</picture>}
						</div>
					))}
				</div>

				{/* Navegación lateral */}
				<button
					type="button"
					onClick={scrollPrev}
						aria-label="Banner anterior"
					className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center transition-colors cursor-pointer"
				>
					<ChevronLeft className="w-5 h-5" />
				</button>

				<button
					type="button"
					onClick={scrollNext}
						aria-label="Siguiente banner"
					className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center transition-colors cursor-pointer"
				>
					<ChevronRight className="w-5 h-5" />
				</button>
			</div>
		</section>
	);
}
