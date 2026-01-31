import React from "react";
import { motion } from "motion/react";

export default function SectionHeading({
	badge,
	title,
	subtitle,
	className = "",
}) {
	return (
		<div className={`space-y-4 ${className}`}>
			{badge && (
				<motion.span
					className="inline-block px-4 py-2 bg-emerald-100 text-emerald-700 rounded-full text-sm font-medium"
					initial={{ opacity: 0, scale: 0.8 }}
					whileInView={{ opacity: 1, scale: 1 }}
					viewport={{ once: true }}
				>
					{badge}
				</motion.span>
			)}

			<h2 className="text-4xl md:text-5xl font-bold text-gray-900">
				{title}
				{subtitle && (
					<span className="block mt-2 bg-linear-to-r from-emerald-600 to-yellow-500 bg-clip-text text-transparent">
						{subtitle}
					</span>
				)}
			</h2>
		</div>
	);
}
