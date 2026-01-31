import React from "react";
import { motion } from "motion/react";

export default function AhorroProductCard({ producto, idx }) {
  const IconComponent = producto.icon;

  return (
    <motion.div
      className="bg-white rounded-2xl border border-gray-200 p-8 hover:shadow-xl transition-all"
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.6,
        delay: idx * 0.1,
      }}
      whileHover={{ y: -5 }}
    >
      <div className="flex items-center mb-6">
        <div className="p-3 bg-emerald-50 rounded-lg">
          <IconComponent className="w-6 h-6 text-emerald-600" />
        </div>
        <h3 className="text-2xl font-bold text-gray-900 ml-4">
          {producto.nombre}
        </h3>
      </div>

      <p className="text-gray-600 mb-6">{producto.descripcion}</p>

      <div className="bg-linear-to-br from-emerald-50 to-blue-50 rounded-xl p-6 mb-6">
        <p className="text-gray-600 text-sm">Tasa de Rendimiento Anual</p>
        <p className="text-4xl font-bold text-emerald-600">{producto.tasa}</p>
        <p className="text-gray-600 text-sm mt-2">
          Depósito Mínimo: {producto.minimo}
        </p>
      </div>

      <div className="space-y-3 mb-6">
        {producto.beneficios.map((beneficio, i) => (
          <div key={i} className="flex items-center space-x-3">
            <div className="w-2 h-2 bg-emerald-600 rounded-full"></div>
            <p className="text-gray-700">{beneficio}</p>
          </div>
        ))}
      </div>

      <button className="w-full bg-linear-to-r from-emerald-600 to-emerald-700 text-white py-3 rounded-lg font-semibold hover:shadow-lg transition-all cursor-pointer">
        Abrir Cuenta
      </button>
    </motion.div>
  );
}
