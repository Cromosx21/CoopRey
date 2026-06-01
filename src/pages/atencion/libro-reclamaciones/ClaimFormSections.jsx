import React from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown } from "lucide-react";

export function FormSection({ id, title, description, expandedSections, toggleSection, children }) {
	const isExpanded = expandedSections.includes(id);

	return (
		<div className="mb-6">
			<button
				type="button"
				onClick={() => toggleSection(id)}
				className="w-full flex items-start justify-between gap-4 px-5 py-4 rounded-xl border border-gray-200 hover:bg-gray-50 transition-colors"
			>
				<div className="text-left">
					<div className="font-bold text-gray-900">{title}</div>
					{description && (
						<div className="text-sm text-gray-600 mt-1">{description}</div>
					)}
				</div>
				<ChevronDown
					className={`w-5 h-5 text-gray-600 mt-1 transition-transform ${
						isExpanded ? "rotate-180" : ""
					}`}
				/>
			</button>
			<AnimatePresence>
				{isExpanded && (
					<motion.div
						initial={{ height: 0, opacity: 0 }}
						animate={{ height: "auto", opacity: 1 }}
						exit={{ height: 0, opacity: 0 }}
						transition={{ duration: 0.25 }}
						className="overflow-hidden"
					>
						<div className="pt-6">{children}</div>
					</motion.div>
				)}
			</AnimatePresence>
		</div>
	);
}

export function FormField({ label, required, children, error }) {
	return (
		<div className="mb-4">
			<label className="block text-sm font-semibold text-gray-900 mb-2">
				{label} {required && <span className="text-red-500">*</span>}
			</label>
			{children}
			{error && <p className="text-xs text-red-500 mt-1">{error}</p>}
		</div>
	);
}

export function Input({ name, value, onChange, placeholder, type = "text", required = false }) {
	return (
		<input
			type={type}
			name={name}
			value={value}
			onChange={onChange}
			required={required}
			placeholder={placeholder}
			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
		/>
	);
}

export function Select({ name, value, onChange, options, required = false }) {
	return (
		<select
			name={name}
			value={value}
			onChange={onChange}
			required={required}
			className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all"
		>
			{options.map((opt) => (
				<option key={opt.value} value={opt.value}>
					{opt.label}
				</option>
			))}
		</select>
	);
}
