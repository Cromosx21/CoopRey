import React, { useState, useRef, useEffect } from "react";
import { motion, useInView, AnimatePresence } from "motion/react";
import { beneficiosItems } from "../../data/beneficios";
import { CheckCircle } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const BenefitItem = ({ item, setActiveId }) => {
	const ref = useRef(null);
	// Margin set to trigger when element is in the center of the viewport
	const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

	useEffect(() => {
		if (isInView) {
			setActiveId(item.id);
		}
	}, [isInView, item.id, setActiveId]);

	return (
		<div
			ref={ref}
			className="min-h-[70vh] flex flex-col justify-center py-12 md:py-24"
		>
			{/* Mobile Image (Visible only on mobile) */}
			<div className="md:hidden w-full aspect-video mb-8 rounded-2xl overflow-hidden shadow-lg">
				<img
					src={item.imagen}
					alt={item.titulo}
					className="w-full h-full object-cover"
				/>
			</div>

			<motion.div
				initial={{ opacity: 0, x: 20 }}
				whileInView={{ opacity: 1, x: 0 }}
				transition={{ duration: 0.5 }}
				viewport={{ once: true }}
				className={`transition-opacity duration-500 ${
					isInView ? "opacity-100" : "opacity-40 md:opacity-40"
				}`}
			>
				<div className="flex items-center gap-4 mb-6">
					<div className="w-12 h-12 rounded-xl bg-emerald-100 flex items-center justify-center text-emerald-600">
						<item.icon className="w-6 h-6" />
					</div>
					<h4 className="text-2xl md:text-3xl font-bold text-gray-900">
						{item.titulo}
					</h4>
				</div>

				<p className="text-lg text-gray-600 mb-8 leading-relaxed">
					{item.descripcion}
				</p>

				<ul className="space-y-4">
					{item.detalles.map((detalle, idx) => (
						<li key={idx} className="flex items-start gap-3">
							<CheckCircle className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
							<span className="text-gray-700">{detalle}</span>
						</li>
					))}
				</ul>

                <div className="mt-8 pt-6 border-t border-gray-100">
                    <p className="text-emerald-700 font-semibold flex items-center gap-2">
                        <span className="text-2xl font-bold">{item.dato}</span>
                    </p>
                </div>
			</motion.div>
		</div>
	);
};

export default function BeneficiosSplitScreen() {
	const [activeId, setActiveId] = useState(beneficiosItems[0].id);
	const activeItem =
		beneficiosItems.find((item) => item.id === activeId) ||
		beneficiosItems[0];

	return (
		<section className="relative w-full bg-linear-to-b from-gray-50 via-white to-white">
			{/* Unified Background Elements */}
			<div className="absolute inset-0 bg-linear-to-br from-emerald-50/20 to-transparent z-0 pointer-events-none" />
			<div className="absolute top-0 right-0 w-96 h-96 bg-yellow-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
			<div className="absolute bottom-0 left-0 w-96 h-96 bg-emerald-200/20 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2 pointer-events-none" />

			{/* Centered Title Section */}
			<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pt-20 md:pt-32 text-center">
				<SectionHeading
					badge="Beneficios"
					title="Beneficios Principales"
					subtitle="Ventajas de ser socio"
					align="center"
				/>
				<p className="text-xl text-gray-600 mt-6 max-w-3xl mx-auto leading-relaxed">
					Como socio cooperativista tienes acceso a servicios
					y privilegios diseñados específicamente para
					potenciar tu bienestar financiero.
				</p>
			</div>

			<div className="flex flex-col md:flex-row mt-12 md:mt-0">
				{/* Left Column - Sticky Image (Desktop) */}
				<div className="hidden md:flex w-1/2 sticky top-0 h-screen flex-col justify-center items-center px-12">
					
					{/* Circular/Wave Image Container */}
					<div className="relative z-10 w-[450px] h-[450px]">
						{/* Organic blobs background */}
						<motion.div 
							animate={{ 
								rotate: [0, 360],
								scale: [1, 1.05, 1]
							}}
							transition={{ 
								duration: 20, 
								repeat: Infinity, 
								ease: "linear" 
							}}
							className="absolute inset-0 bg-emerald-200/30 rounded-[60%_40%_30%_70%/60%_30%_70%_40%] blur-xl"
						/>
						<motion.div 
							animate={{ 
								rotate: [360, 0],
								scale: [1, 1.1, 1]
							}}
							transition={{ 
								duration: 15, 
								repeat: Infinity, 
								ease: "linear" 
							}}
							className="absolute inset-4 bg-yellow-200/30 rounded-[30%_70%_70%_30%/30%_30%_70%_70%] blur-xl"
						/>

						{/* Main Image Mask */}
						<div className="absolute inset-4 overflow-hidden rounded-[60%_40%_30%_70%/60%_30%_70%_40%] border-4 border-white shadow-2xl bg-white">
							<AnimatePresence mode="wait">
								<motion.div
									key={activeItem.id}
									initial={{ opacity: 0, scale: 1.1 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0 }}
									transition={{ duration: 0.5, ease: "easeInOut" }}
									className="w-full h-full"
								>
									<img
										src={activeItem.imagen}
										alt={activeItem.titulo}
										className="w-full h-full object-cover"
									/>
								</motion.div>
							</AnimatePresence>
						</div>
					</div>
				</div>

				{/* Right Column - Scrollable Content */}
				<div className="w-full md:w-1/2 relative z-10">
					<div className="max-w-2xl mx-auto px-6 pb-20 md:py-20">
						{/* Benefits List */}
						<div className="space-y-0">
							{beneficiosItems.map((item) => (
								<BenefitItem
									key={item.id}
									item={item}
									setActiveId={setActiveId}
								/>
							))}
						</div>
                        
                        {/* Bottom Spacer */}
                        <div className="h-[20vh] md:h-[30vh]" />
					</div>
				</div>
			</div>
		</section>
	);
}
