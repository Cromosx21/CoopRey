import React from "react";
import { motion } from "motion/react";
import {
	Facebook,
	Instagram,
	Twitter,
	Linkedin,
	Mail,
	Phone,
	MapPin,
} from "lucide-react";

const footerLinks = {
	servicios: [
		{ label: "Ahorro libre", href: "/ahorros-libre" },
		{ label: "Plazo fijo", href: "/ahorros-plazo-fijo" },
		{ label: "Créditos personales", href: "/creditos-personales" },
		{ label: "Créditos hipotecarios", href: "/creditos-hipotecarios" },
		{ label: "Socios", href: "/socios" },
		{ label: "Beneficios del socio", href: "/socios/beneficios" },
	],
	empresa: [
		{ label: "Nosotros", href: "/nosotros" },
		{ label: "Misión, visión y valores", href: "/mision-vision-valores" },
		{ label: "Compromiso social", href: "/compromiso-social" },
		{ label: "Órgano de gobernanza", href: "/organo-gobernanza" },
		{ label: "Nuestro equipo", href: "/nuestro-equipo" },
		{ label: "Noticias", href: "/noticias" },
		{ label: "Oficinas", href: "/oficinas" },
	],
	ayuda: [
		{ label: "Libro de Reclamaciones", href: "/libro-reclamaciones" },
		{ label: "Estados Financieros", href: "/estados-financieros" },
		{ label: "Tarifarios", href: "/tarifarios" },
		{
			label: "Documentos Institucionales",
			href: "/documentos-institucionales",
		},
		{ label: "Educación Financiera", href: "/educacion-financiera" },
		{ label: "Sanciones SBS", href: "/sanciones" },
		{ label: "Preguntas Frecuentes", href: "/preguntas-frecuentes" },
	],
};

const socialLinks = [
	{
		icon: Facebook,
		href: "https://www.facebook.com/CoopacNinoRey",
		label: "Facebook",
	},
	{
		icon: Instagram,
		href: "https://www.instagram.com/CoopacNinoRey",
		label: "Instagram",
	},
];

export default function Footer() {
	return (
		<footer
			className="relative bg-gray-900 text-white overflow-hidden"
			id="contacto"
		>
			{/* Organic background shapes */}
			<div className="absolute inset-0 overflow-hidden opacity-10">
				<div className="absolute -top-40 right-0 w-96 h-96 bg-linear-to-br from-emerald-500 to-yellow-500 rounded-full blur-3xl" />
				<div className="absolute bottom-0 left-0 w-80 h-80 bg-linear-to-br from-yellow-500 to-emerald-500 rounded-full blur-3xl" />
			</div>

			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
				{/* Main Footer Content */}
				<div className="py-16 grid md:grid-cols-2 lg:grid-cols-5 gap-12">
					{/* Brand Column */}
					<div className="lg:col-span-2 space-y-6">
						<motion.div
							className="flex items-center space-x-3"
							initial={{ opacity: 0, y: 20 }}
							whileInView={{ opacity: 1, y: 0 }}
							viewport={{ once: true }}
						>
							<div className="max-w-xs">
								<img
									src="/images/LOGOTIPO_NEGATIVO_ESCUDO_VIVO.webp"
									alt="Logotipo Niño Rey"
									loading="lazy"
									decoding="async"
								/>
							</div>
						</motion.div>

						<p className="text-gray-400 leading-relaxed max-w-md">
							Construyendo juntos un futuro financiero sólido y
							próspero. Cooperativa de Ahorro y Crédito Niño Rey
							de Huamanga - Ayacucho.
						</p>

						{/* Contact Info */}
						<div className="space-y-3">
							<motion.a
								href="#"
								className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors group"
								whileHover={{ x: 5 }}
							>
								<div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
									<Mail className="w-5 h-5" />
								</div>
								<span>Por asignar</span>
							</motion.a>
							<motion.a
								href="tel:+51066284760"
								className="flex items-center space-x-3 text-gray-400 hover:text-emerald-400 transition-colors group"
								whileHover={{ x: 5 }}
							>
								<div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center group-hover:bg-emerald-500/20 transition-colors">
									<Phone className="w-5 h-5" />
								</div>
								<span>066 284760 / 979 585 886</span>
							</motion.a>
							<motion.div
								className="flex items-start space-x-3 text-gray-400"
								initial={{ opacity: 0, x: -20 }}
								whileInView={{ opacity: 1, x: 0 }}
								viewport={{ once: true }}
							>
								<div className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center shrink-0">
									<MapPin className="w-5 h-5" />
								</div>
								<span>
									MZA. C LOTE. 07 URB. SECTOR EDUCACION
									(MERCADO NERY GARCIA) AYACUCHO - HUAMANGA –
									AYACUCHO
								</span>
							</motion.div>
						</div>

						{/* Social Links */}
						<div className="flex items-center space-x-3 pt-4">
							{socialLinks.map((social) => {
								const Icon = social.icon;
								return (
									<motion.a
										key={social.label}
										href={social.href}
										className="w-10 h-10 bg-gray-800 rounded-xl flex items-center justify-center hover:bg-linear-to-br hover:from-emerald-500 hover:to-yellow-500 transition-all duration-300"
										aria-label={social.label}
										whileHover={{ scale: 1.1, rotate: 5 }}
										whileTap={{ scale: 0.95 }}
										target="_blanck"
									>
										<Icon className="w-5 h-5" />
									</motion.a>
								);
							})}
						</div>
					</div>

					{/* Links Columns */}
					<div>
						<h3 className="font-bold text-lg mb-6">Servicios</h3>
						<ul className="space-y-3">
							{footerLinks.servicios.map((link) => (
								<li key={link.label}>
									<motion.a
										href={link.href}
										className="text-gray-400 hover:text-emerald-400 transition-colors inline-block"
										whileHover={{ x: 5 }}
									>
										{link.label}
									</motion.a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-lg mb-6">Empresa</h3>
						<ul className="space-y-3">
							{footerLinks.empresa.map((link) => (
								<li key={link.label}>
									<motion.a
										href={link.href}
										className="text-gray-400 hover:text-emerald-400 transition-colors inline-block"
										whileHover={{ x: 5 }}
									>
										{link.label}
									</motion.a>
								</li>
							))}
						</ul>
					</div>

					<div>
						<h3 className="font-bold text-lg mb-6">Ayuda</h3>
						<ul className="space-y-3">
							{footerLinks.ayuda.map((link) => (
								<li key={link.label}>
									<motion.a
										href={link.href}
										className="text-gray-400 hover:text-emerald-400 transition-colors inline-block"
										whileHover={{ x: 5 }}
									>
										{link.label}
									</motion.a>
								</li>
							))}
						</ul>
					</div>
				</div>

				{/* Bottom Bar */}
				<div className="border-t border-gray-800 py-8">
					<div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
						<p className="text-gray-400 text-sm">
							© {new Date().getFullYear()} Cooperativa de Ahorro y
							Crédito Niño Rey. Todos los derechos reservados.
						</p>
						<div className="flex items-center space-x-6">
							<a
								href="#"
								className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
							>
								Política de Privacidad
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
							>
								Términos de Uso
							</a>
							<a
								href="#"
								className="text-gray-400 hover:text-emerald-400 text-sm transition-colors"
							>
								Cookies
							</a>
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
