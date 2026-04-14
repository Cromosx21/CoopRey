import React from "react";
import { motion } from "motion/react";

export default function WhatsAppButton() {
  const whatsappNumber = "+51979585886";
  const message =
    "Hola, tengo una consulta sobre los servicios de la Cooperativa Niño Rey de Huamanga - Ayacucho.";

  const handleWhatsAppClick = () => {
    const url = `https://wa.me/${whatsappNumber.replace(/\D/g, "")}?text=${encodeURIComponent(message)}`;
    window.open(url, "_blank", "noopener,noreferrer");
  };

  return (
    <motion.button
      onClick={handleWhatsAppClick}
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.4, duration: 0.3 }}
      whileHover={{ scale: 1.12 }}
      whileTap={{ scale: 0.95 }}
      className="cursor-pointer fixed bottom-8 right-8 z-50 bg-green-500 hover:bg-green-600 text-white rounded-full p-4 shadow-xl hover:shadow-green-500/50 transition-all duration-300 flex items-center justify-center"
      aria-label="Contactar por WhatsApp"
      title="Contactar por WhatsApp"
    >
      {/* Logo oficial de WhatsApp (SVG) */}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
        className="w-6 h-6 fill-current"
      >
        <path d="M16 .4C7.4.4.4 7.4.4 16c0 2.8.7 5.4 2.1 7.8L.4 31.6l8-2.1c2.3 1.2 4.9 1.9 7.6 1.9 8.6 0 15.6-7 15.6-15.6S24.6.4 16 .4zm0 28.6c-2.4 0-4.7-.6-6.7-1.8l-.5-.3-4.7 1.2 1.3-4.6-.3-.5C4.1 20.7 3.5 18.4 3.5 16 3.5 9 9 3.5 16 3.5S28.5 9 28.5 16 23 29 16 29zm6.7-9.4c-.4-.2-2.3-1.1-2.6-1.2-.4-.1-.6-.2-.9.2-.3.4-1 1.2-1.2 1.4-.2.2-.5.3-.9.1-.4-.2-1.6-.6-3.1-1.9-1.1-1-1.9-2.2-2.1-2.6-.2-.4 0-.6.2-.8.2-.2.4-.5.6-.7.2-.2.3-.4.5-.7.2-.3.1-.6 0-.8-.1-.2-.9-2.1-1.2-2.8-.3-.7-.6-.6-.9-.6h-.8c-.3 0-.8.1-1.2.6-.4.5-1.5 1.5-1.5 3.6s1.5 4.2 1.7 4.5c.2.3 3 4.6 7.2 6.4 1 .4 1.8.7 2.4.9 1 .3 1.9.2 2.6.1.8-.1 2.3-.9 2.6-1.8.3-.9.3-1.6.2-1.8-.1-.2-.3-.3-.7-.5z" />
      </svg>

      {/* Animación de pulso */}
      <motion.span
        className="absolute inset-0 rounded-full border-2 border-green-400"
        initial={{ scale: 1, opacity: 0.7 }}
        animate={{ scale: 1.6, opacity: 0 }}
        transition={{ duration: 1.2, repeat: Infinity }}
      />
    </motion.button>
  );
}