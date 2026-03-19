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
					className="inline-block px-4 py-2 bg-primary/10 text-primary rounded-full text-sm font-medium"
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
					<span className="block mt-2 text-primary">
						{subtitle}
					</span>
				)}
			</h2>
		</div>
	);
}
