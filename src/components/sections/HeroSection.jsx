import React, { useEffect, useCallback, useState } from "react";
import { motion } from "motion/react";
import useEmblaCarousel from "embla-carousel-react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

const API_URL =
	"https://script.googleusercontent.com/macros/echo?user_content_key=AUkAhnQIjTJeR5hQhhT6WenEWRNo3XF6H90ci3f_HoYRF1V7TCyE8upzeOa2rqrpyHq8IZoh5TURBurWZPfjZubrfk51wejZYbZaT9xtPDh_4KJZpWyqIG9Ughb_q5f8pg6OD4HjX80O8cSiodXTAafMRtGywb0ll2HSIYKnVEVpWGVzE8wVYUaq6Eg6PjkQwdoWCxrgv7_ofkHGQ2lLaw0l7V3u4l5bw2wZNCS8zYL-yhRt2h-Xx1uppmzkHOHJE4TzyidydpEZ5s84RJGHnZvDhXrRcj-wJg&lib=MszhlAdFZRzOWFEl8FepbDwqjHCp9OC0x";

export function HeroSection() {
	const [heroSlides, setHeroSlides] = useState([]);

	const [emblaRef, emblaApi] = useEmblaCarousel({
		loop: true,
	});

	// Convierte links de Google Drive
	const convertDriveUrl = (url) => {
		if (!url) return "";

		const match = url.match(/\/d\/(.*?)\//);

		if (!match) return "";

		const fileId = match[1];

		return `https://drive.google.com/thumbnail?id=${fileId}&sz=w2000`;
	};

	// Cargar data
	useEffect(() => {
		const fetchSlides = async () => {
			try {
				const response = await fetch(API_URL);
				const data = await response.json();

				const formattedSlides = data.map((item, index) => ({
					id: index + 1,
					title: item.Nombre,
					image: convertDriveUrl(item.web),
					imgmobil: convertDriveUrl(item.celular),
				}));

				setHeroSlides(formattedSlides);
			} catch (error) {
				console.error("Error loading slides:", error);
			}
		};

		fetchSlides();
	}, []);

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

		document.addEventListener(
			"visibilitychange",
			handleVisibilityChange,
		);

		emblaApi.on("select", handleSelect);
		emblaApi.on("pointerDown", handlePointerDown);

		return () => {
			stopAutoplay();

			document.removeEventListener(
				"visibilitychange",
				handleVisibilityChange,
			);

			emblaApi.off("select", handleSelect);
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
							<picture>
								<source
									media="(max-width: 768px)"
									srcSet={slide.imgmobil}
								/>

								<motion.img
									src={slide.image}
									alt={slide.title}
									className="absolute inset-0 w-full h-full object-cover"
									initial={{ scale: 1.05, opacity: 0 }}
									animate={{ scale: 1, opacity: 1 }}
									transition={{ duration: 0.8 }}
								/>
							</picture>
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