import React from "react";
import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";

export default function WhatsAppButton() {
	const whatsappNumber = "+51951234567"; // Número de WhatsApp de la cooperativa
	const message =
		"Hola, tengo una consulta sobre los servicios de la Cooperativa Niño Rey.";

	const handleWhatsAppClick = () => {
		const url = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
		window.open(url, "_blank");
	};

	return (
		<motion.button
			onClick={handleWhatsAppClick}
			initial={{ scale: 0, opacity: 0 }}
			animate={{ scale: 1, opacity: 1 }}
			transition={{ delay: 0.5, duration: 0.3 }}
			whileHover={{ scale: 1.1, rotate: 5 }}
			whileTap={{ scale: 0.95 }}
			className="fixed bottom-8 right-8 z-40 bg-gradient-to-br from-green-400 to-green-600 hover:from-green-500 hover:to-green-700 text-white rounded-full p-4 shadow-2xl transition-all duration-300"
			aria-label="Contactar por WhatsApp"
			title="Contactar por WhatsApp"
		>
			<MessageCircle className="w-6 h-6" />

			{/* Pulse animation */}
			<motion.span
				initial={{ scale: 1, opacity: 0.8 }}
				animate={{ scale: 1.5, opacity: 0 }}
				transition={{ duration: 1, repeat: Infinity }}
				className="absolute inset-0 rounded-full border-2 border-green-400"
			/>
		</motion.button>
	);
}
