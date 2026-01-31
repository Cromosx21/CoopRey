import React from "react";
import { motion } from "motion/react";
import { FileText, CheckCircle } from "lucide-react";

export default function RequisitoGeneralCard({ seccion, idx }) {
  return (
    <motion.div
      className="bg-white rounded-2xl p-8 border border-gray-200 hover:border-emerald-200 hover:shadow-lg transition-all"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-lg mb-4">
        <FileText className="w-6 h-6 text-emerald-600" />
      </div>

      <h3 className="text-xl font-bold text-gray-900 mb-4">{seccion.titulo}</h3>

      <ul className="space-y-3">
        {seccion.items.map((item, i) => (
          <li key={i} className="flex items-start space-x-3">
            <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
            <span className="text-gray-700 text-sm">{item}</span>
          </li>
        ))}
      </ul>
    </motion.div>
  );
}
