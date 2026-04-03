import React, { useEffect, useCallback } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { heroSlides } from "../../data/home";

export function HeroSection() {
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
			startAutoplay();
		};

		const handlePointerDown = () => {
			stopAutoplay();
		};

		startAutoplay();
		document.addEventListener("visibilitychange", handleVisibilityChange);
		emblaApi.on("select", handleSelect);
		emblaApi.on("pointerDown", handlePointerDown);

		return () => {
			stopAutoplay();
			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange,
			);
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
			<div
				ref={emblaRef}
				className="relative w-full h-[520px] md:h-[640px]"
			>
				<div className="flex h-full">
					{heroSlides.map((slide, index) => (
						<div
							key={slide.id}
							className="relative flex-[0_0_100%] w-full h-full"
						>
							<motion.img
								src={slide.image}
								alt={slide.title}
								className="absolute inset-0 w-full h-full object-cover"
								initial={{ scale: 1.05, opacity: 0 }}
								animate={{ scale: 1, opacity: 1 }}
								transition={{ duration: 0.8 }}
							/>
						</div>
					))}
				</div>
				{/* Navegación lateral */}
				<button
					type="button"
					onClick={scrollPrev}
					className="hidden md:flex absolute left-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center transition-colors cursor-pointer"
				>
					<ChevronLeft className="w-5 h-5" />
				</button>
				<button
					type="button"
					onClick={scrollNext}
					className="hidden md:flex absolute right-4 top-1/2 -translate-y-1/2 z-20 w-10 h-10 rounded-full bg-black/40 hover:bg-black/60 text-white items-center justify-center transition-colors cursor-pointer"
				>
					<ChevronRight className="w-5 h-5" />
				</button>
			</div>
		</section>
	);
}
