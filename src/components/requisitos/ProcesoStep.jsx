import React from "react";
import { motion } from "motion/react";
import { CheckCircle } from "lucide-react";

export default function ProcesoStep({ paso, idx, isLast }) {
  return (
    <motion.div
      className="relative"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
    >
      {/* Connector Line */}
      {!isLast && (
        <div className="hidden md:block absolute top-16 left-1/2 w-full h-1 bg-linear-to-r from-emerald-500 to-yellow-400 z-0" />
      )}

      <div className="relative z-10 bg-white">
        <div className="inline-flex items-center justify-center w-32 h-32 rounded-full bg-linear-to-br from-emerald-50 to-yellow-50 border-4 border-emerald-500 mx-auto mb-6 font-bold text-4xl text-emerald-600">
          {paso.numero}
        </div>

        <div className="text-center">
          <h3 className="text-xl font-bold text-gray-900 mb-2">
            {paso.titulo}
          </h3>
          <p className="text-gray-600 mb-4 text-sm">{paso.descripcion}</p>

          <ul className="text-left text-sm space-y-1">
            {paso.detalles.map((detalle, i) => (
              <li key={i} className="flex items-start space-x-2 text-gray-700">
                <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                <span>{detalle}</span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </motion.div>
  );
}
