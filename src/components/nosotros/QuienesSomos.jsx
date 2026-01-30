import React from "react";
import { motion } from "motion/react";
import { Target, Eye, Award, Users } from "lucide-react";
import SectionHeading from "../SectionHeading.jsx";

export function QuienesSomos() {
	return (
		<section className="relative py-32 overflow-hidden bg-white">
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
				<div className="grid lg:grid-cols-2 gap-16 items-center">
					{/* Content Side */}
					<motion.div
						className="space-y-8"
						initial={{ opacity: 0, x: -50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<SectionHeading
							badge="¿Quiénes Somos?"
							title="Una institución sólida"
							subtitle="con valores humanos"
						/>

						<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
							<p>
								La{" "}
								<strong className="text-gray-900">
									Cooperativa de Ahorro y Crédito Niño Rey
								</strong>{" "}
								nació en 1999 con el sueño de ofrecer servicios
								financieros accesibles, justos y orientados al
								desarrollo de las familias peruanas.
							</p>
							<p>
								Durante más de 25 años, hemos crecido junto a
								nuestros socios, construyendo una relación
								basada en la confianza, la transparencia y el
								compromiso mutuo. No somos solo una institución
								financiera, somos una comunidad que trabaja por
								el bienestar común.
							</p>
							<p>
								Hoy, con presencia a nivel nacional y más de
								15,000 socios activos, continuamos innovando
								para ofrecer productos y servicios que se
								adapten a las necesidades de nuestros tiempos,
								sin perder la calidez y cercanía que nos
								caracteriza.
							</p>
						</div>

						{/* Key Features */}
						<div className="grid sm:grid-cols-2 gap-6 pt-8">
							{[
								{
									icon: Target,
									title: "Enfoque al socio",
									description:
										"Cada decisión pensada en tu beneficio",
								},
								{
									icon: Award,
									title: "Excelencia",
									description: "Calidad en cada servicio",
								},
							].map((feature, index) => {
								const Icon = feature.icon;
								return (
									<motion.div
										key={feature.title}
										className="flex items-start space-x-4"
										initial={{ opacity: 0, y: 20 }}
										whileInView={{ opacity: 1, y: 0 }}
										viewport={{ once: true }}
										transition={{ delay: index * 0.2 }}
									>
										<div className="shrink-0 w-12 h-12 bg-linear-to-br from-emerald-100 to-yellow-100 rounded-xl flex items-center justify-center">
											<Icon className="w-6 h-6 text-emerald-600" />
										</div>
										<div>
											<h3 className="font-bold text-gray-900 mb-1">
												{feature.title}
											</h3>
											<p className="text-sm text-gray-600">
												{feature.description}
											</p>
										</div>
									</motion.div>
								);
							})}
						</div>
					</motion.div>

					{/* Image Side */}
					<motion.div
						className="relative"
						initial={{ opacity: 0, x: 50 }}
						whileInView={{ opacity: 1, x: 0 }}
						viewport={{ once: true }}
						transition={{ duration: 0.8 }}
					>
						<div className="relative">
							{/* Organic shape background */}
							<motion.div
								className="absolute inset-0 bg-linear-to-br from-emerald-400/20 to-yellow-400/20 rounded-[40%_60%_60%_40%/60%_40%_40%_60%] blur-2xl"
								animate={{
									borderRadius: [
										"40% 60% 60% 40% / 60% 40% 40% 60%",
										"60% 40% 40% 60% / 40% 60% 60% 40%",
										"40% 60% 60% 40% / 60% 40% 40% 60%",
									],
								}}
								transition={{
									duration: 10,
									repeat: Infinity,
									ease: "easeInOut",
								}}
							/>

							{/* Main Image */}
							<div className="relative rounded-[40%_60%_60%_40%/60%_40%_40%_60%] overflow-hidden">
								<img
									src="https://images.unsplash.com/photo-1551135049-8a33b5883817?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwcm9mZXNzaW9uYWwlMjBiYW5raW5nJTIwdGVhbSUyMG1lZXRpbmd8ZW58MXx8fHwxNzY5NzM1NjU3fDA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
									alt="Equipo profesional de la cooperativa"
									className="w-full h-[600px] object-cover"
								/>
							</div>

							{/* Floating Card */}
							<motion.div
								className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl max-w-sm"
								initial={{ opacity: 0, scale: 0.8 }}
								whileInView={{ opacity: 1, scale: 1 }}
								viewport={{ once: true }}
								transition={{ delay: 0.5 }}
								whileHover={{ scale: 1.05 }}
							>
								<div className="flex items-center space-x-4">
									<div className="w-14 h-14 bg-linear-to-br from-emerald-500 to-emerald-600 rounded-2xl flex items-center justify-center shrink-0">
										<Users className="w-7 h-7 text-white" />
									</div>
									<div>
										<p className="text-sm text-gray-600">
											Fundada en
										</p>
										<p className="text-2xl font-bold text-gray-900">
											1999
										</p>
										<p className="text-xs text-gray-500 mt-1">
											25+ años de trayectoria
										</p>
									</div>
								</div>
							</motion.div>
						</div>
					</motion.div>
				</div>
			</div>
		</section>
	);
}
