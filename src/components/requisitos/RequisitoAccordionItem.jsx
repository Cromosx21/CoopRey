import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { FileText, ChevronDown, ClipboardList, CheckCircle } from "lucide-react";

export default function RequisitoAccordionItem({
  item,
  idx,
  expandedSection,
  toggleSection,
}) {
  return (
    <motion.div
      className="bg-white rounded-2xl border border-gray-200 overflow-hidden"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: idx * 0.1 }}
    >
      <button
        onClick={() => toggleSection(item.id)}
        className="w-full px-8 py-6 flex items-center justify-between hover:bg-gray-50 transition-colors cursor-pointer"
      >
        <div className="flex items-center space-x-4">
          <div className="inline-flex items-center justify-center w-10 h-10 bg-emerald-100 rounded-lg">
            <FileText className="w-6 h-6 text-emerald-600" />
          </div>
          <div className="text-left">
            <h3 className="text-xl font-bold text-gray-900">{item.producto}</h3>
            <p className="text-sm text-gray-600 mt-1">Plazo: {item.plazo}</p>
          </div>
        </div>

        <ChevronDown
          className={`w-6 h-6 text-gray-600 transition-transform ${
            expandedSection === item.id ? "rotate-180" : ""
          }`}
        />
      </button>

      <AnimatePresence>
        {expandedSection === item.id && (
          <motion.div
            className="px-8 pb-6 border-t border-gray-200"
            initial={{ opacity: 0, height: 0 }}
            animate={{
              opacity: 1,
              height: "auto",
            }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <div className="grid md:grid-cols-2 gap-8 pt-6">
              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <ClipboardList className="w-5 h-5 text-emerald-600" />
                  <span>Requisitos Generales</span>
                </h4>
                <ul className="space-y-3">
                  {item.requisitos.map((requisito, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <span className="text-gray-700">{requisito}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <h4 className="font-bold text-gray-900 mb-4 flex items-center space-x-2">
                  <FileText className="w-5 h-5 text-emerald-600" />
                  <span>Documentos Necesarios</span>
                </h4>
                <ul className="space-y-3">
                  {item.documentos.map((documento, i) => (
                    <li key={i} className="flex items-start space-x-3">
                      <CheckCircle className="w-4 h-4 text-emerald-500 shrink-0 mt-1" />
                      <span className="text-gray-700">{documento}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
}
