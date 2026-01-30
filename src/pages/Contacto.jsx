import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading.jsx";
import {
	MapPin,
	Phone,
	Mail,
	Clock,
	Send,
	MessageSquare,
	CheckCircle,
	AlertCircle,
} from "lucide-react";

export default function Contacto() {
	const [formData, setFormData] = useState({
		nombre: "",
		email: "",
		telefono: "",
		asunto: "",
		mensaje: "",
	});
	const [enviado, setEnviado] = useState(false);
	const [cargando, setCargando] = useState(false);

	const sedes = [
		{
			id: 1,
			nombre: "Sede Principal",
			tipo: "Oficina Administrativa",
			direccion: "Av. Principal 1500, Centro",
			telefono: "+1 (555) 123-4567",
			email: "info@cooprey.com",
			horarios: "Lun - Vier: 8:00 AM - 5:00 PM\nSáb: 9:00 AM - 1:00 PM",
			icono: "🏢",
			destacada: true,
		},
		{
			id: 2,
			nombre: "Sucursal Centro",
			tipo: "Oficina de Atención",
			direccion: "Calle 5 No. 250, Centro",
			telefono: "+1 (555) 234-5678",
			email: "sucursal.centro@cooprey.com",
			horarios: "Lun - Vier: 8:30 AM - 4:30 PM\nSáb: 9:30 AM - 12:00 PM",
			icono: "🏦",
			destacada: false,
		},
		{
			id: 3,
			nombre: "Sucursal Norte",
			tipo: "Oficina de Atención",
			direccion: "Av. Norte 800, Zona Residencial",
			telefono: "+1 (555) 345-6789",
			email: "sucursal.norte@cooprey.com",
			horarios: "Lun - Vier: 8:00 AM - 5:00 PM\nSáb: 9:00 AM - 1:00 PM",
			icono: "🏬",
			destacada: false,
		},
		{
			id: 4,
			nombre: "Sucursal Sur",
			tipo: "Oficina de Atención",
			direccion: "Av. Sur 1200, Centro Comercial",
			telefono: "+1 (555) 456-7890",
			email: "sucursal.sur@cooprey.com",
			horarios: "Lun - Vier: 9:00 AM - 5:30 PM\nSáb: 10:00 AM - 2:00 PM",
			icono: "🏪",
			destacada: false,
		},
		{
			id: 5,
			nombre: "Atención Virtual 24/7",
			tipo: "Servicio en Línea",
			direccion: "Disponible en www.cooprey.com",
			telefono: "+1 (555) 111-2222",
			email: "atencion.virtual@cooprey.com",
			horarios: "Disponible 24 horas, 7 días a la semana",
			icono: "💻",
			destacada: false,
		},
	];

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prev) => ({
			...prev,
			[name]: value,
		}));
	};

	const handleSubmit = async (e) => {
		e.preventDefault();
		setCargando(true);

		// Simular envío
		setTimeout(() => {
			setFormData({
				nombre: "",
				email: "",
				telefono: "",
				asunto: "",
				mensaje: "",
			});
			setEnviado(true);
			setCargando(false);

			// Ocultar mensaje después de 5 segundos
			setTimeout(() => setEnviado(false), 5000);
		}, 1500);
	};

	return (
		<div className="min-h-screen bg-white">
			<Header />

			{/* Hero Section con Wave */}
			<div className="relative pt-32 pb-20 overflow-hidden bg-gradient-to-br from-emerald-50 to-yellow-50">
				{/* Wave SVG de fondo */}
				<svg
					className="absolute inset-0 w-full h-full"
					viewBox="0 0 1200 600"
					preserveAspectRatio="none"
					style={{ opacity: 0.1 }}
				>
					<defs>
						<pattern
							id="waveContact"
							x="0"
							y="0"
							width="120"
							height="120"
							patternUnits="userSpaceOnUse"
						>
							<path
								d="M0,60 Q30,30 60,60 T120,60"
								fill="none"
								stroke="#059669"
								strokeWidth="2"
							/>
						</pattern>
					</defs>
					<rect width="1200" height="600" fill="url(#waveContact)" />
				</svg>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="text-center space-y-6 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<h1 className="text-5xl md:text-6xl font-bold text-gray-900">
							¿Cómo podemos{" "}
							<span className="text-emerald-600">ayudarte?</span>
						</h1>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Contáctanos a través de nuestros múltiples canales.
							Estamos aquí para responder tus preguntas y servir
							mejor
						</p>
					</motion.div>
				</div>

				{/* Wave decorativo */}
				<svg
					className="absolute bottom-0 left-0 w-full"
					viewBox="0 0 1200 120"
					preserveAspectRatio="none"
				>
					<path
						d="M0,50 Q300,20 600,50 T1200,50 L1200,120 L0,120 Z"
						fill="#ffffff"
					/>
				</svg>
			</div>

			{/* Canales de Contacto Rápido */}
			<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 -mt-12 relative z-20">
				<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
					{/* Teléfono */}
					<motion.div
						className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-emerald-300 transition-all"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						whileHover={{ y: -5 }}
					>
						<div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
							<Phone className="w-6 h-6 text-emerald-600" />
						</div>
						<h3 className="text-lg font-bold text-gray-900 mb-2">
							Teléfono
						</h3>
						<p className="text-gray-600 mb-3">
							Llamadas de lunes a viernes
						</p>
						<a
							href="tel:+15551234567"
							className="text-emerald-600 font-semibold hover:text-emerald-700 text-lg"
						>
							+1 (555) 123-4567
						</a>
					</motion.div>

					{/* Email */}
					<motion.div
						className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-emerald-300 transition-all"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
						whileHover={{ y: -5 }}
					>
						<div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
							<Mail className="w-6 h-6 text-emerald-600" />
						</div>
						<h3 className="text-lg font-bold text-gray-900 mb-2">
							Email
						</h3>
						<p className="text-gray-600 mb-3">
							Respuesta en 24 horas
						</p>
						<a
							href="mailto:info@cooprey.com"
							className="text-emerald-600 font-semibold hover:text-emerald-700 break-all"
						>
							info@cooprey.com
						</a>
					</motion.div>

					{/* Chat */}
					<motion.div
						className="bg-white rounded-2xl p-8 shadow-lg border border-gray-200 hover:shadow-xl hover:border-emerald-300 transition-all"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
						whileHover={{ y: -5 }}
					>
						<div className="flex items-center justify-center w-12 h-12 bg-emerald-100 rounded-full mb-4">
							<MessageSquare className="w-6 h-6 text-emerald-600" />
						</div>
						<h3 className="text-lg font-bold text-gray-900 mb-2">
							Chat en Vivo
						</h3>
						<p className="text-gray-600 mb-3">
							Disponible en nuestro sitio
						</p>
						<button className="text-emerald-600 font-semibold hover:text-emerald-700">
							Inicia una conversación
						</button>
					</motion.div>
				</div>
			</div>

			{/* Wave divisor */}
			<svg
				className="w-full"
				viewBox="0 0 1200 100"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
					fill="#f0fdf4"
				/>
			</svg>

			{/* Formulario y Sede Principal */}
			<div className="bg-gradient-to-b from-green-50 to-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
						{/* Formulario de Contacto */}
						<motion.div
							initial={{ opacity: 0, x: -20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<SectionHeading
								badge="Contacto"
								title="Envíanos un Mensaje"
								subtitle="Estamos para ayudarte"
								className="mb-6"
							/>

							<form onSubmit={handleSubmit} className="space-y-6">
								{/* Nombre */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Nombre completo
									</label>
									<input
										type="text"
										name="nombre"
										value={formData.nombre}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
										placeholder="Tu nombre"
									/>
								</div>

								{/* Email */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Correo electrónico
									</label>
									<input
										type="email"
										name="email"
										value={formData.email}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
										placeholder="tu@email.com"
									/>
								</div>

								{/* Teléfono */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Teléfono
									</label>
									<input
										type="tel"
										name="telefono"
										value={formData.telefono}
										onChange={handleChange}
										className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
										placeholder="+1 (555) 123-4567"
									/>
								</div>

								{/* Asunto */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Asunto
									</label>
									<input
										type="text"
										name="asunto"
										value={formData.asunto}
										onChange={handleChange}
										required
										className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors"
										placeholder="¿En qué podemos ayudarte?"
									/>
								</div>

								{/* Mensaje */}
								<div>
									<label className="block text-sm font-medium text-gray-700 mb-2">
										Mensaje
									</label>
									<textarea
										name="mensaje"
										value={formData.mensaje}
										onChange={handleChange}
										required
										rows="6"
										className="w-full px-4 py-3 border-2 border-gray-300 rounded-xl focus:border-emerald-500 focus:outline-none transition-colors resize-none"
										placeholder="Cuéntanos más sobre tu consulta..."
									/>
								</div>

								{/* Mensaje de éxito */}
								{enviado && (
									<motion.div
										className="flex items-center space-x-3 p-4 bg-green-50 border-2 border-green-200 rounded-xl"
										initial={{ opacity: 0, y: -10 }}
										animate={{ opacity: 1, y: 0 }}
									>
										<CheckCircle className="w-5 h-5 text-green-600" />
										<p className="text-green-800 font-medium">
											¡Mensaje enviado correctamente! Te
											responderemos pronto.
										</p>
									</motion.div>
								)}

								{/* Botón envío */}
								<button
									type="submit"
									disabled={cargando}
									className="w-full px-8 py-4 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-xl hover:from-emerald-700 hover:to-emerald-800 disabled:opacity-50 disabled:cursor-not-allowed font-semibold inline-flex items-center justify-center space-x-2 transition-all"
								>
									<span>
										{cargando
											? "Enviando..."
											: "Enviar Mensaje"}
									</span>
									<Send className="w-5 h-5" />
								</button>
							</form>
						</motion.div>

						{/* Sede Principal con Mapa */}
						<motion.div
							initial={{ opacity: 0, x: 20 }}
							whileInView={{ opacity: 1, x: 0 }}
							transition={{ duration: 0.6 }}
							viewport={{ once: true }}
						>
							<SectionHeading
								badge="Sucursales"
								title="Sede Principal"
								subtitle="Visítanos"
								className="mb-6"
							/>

							{/* Mapa */}
							<div className="relative w-full h-80 rounded-2xl overflow-hidden shadow-lg mb-6 border-2 border-emerald-200">
								<iframe
									className="w-full h-full"
									style={{ border: 0 }}
									src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3887.5053419263206!2d-77.04240932346945!3d-12.046373888675395!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9105b7a8f5c5c5c5%3A0x1234567890abcdef!2sAv.%20Principal%201500!5e0!3m2!1ses!2spe!4v1706564400000"
									allowFullScreen=""
									loading="lazy"
									referrerPolicy="no-referrer-when-downgrade"
									title="Ubicación Sede Principal"
								/>
							</div>

							{/* Detalles de la Sede Principal */}
							<div className="bg-gradient-to-br from-emerald-50 to-yellow-50 rounded-2xl p-8 border-2 border-emerald-300 shadow-lg">
								<div className="space-y-4">
									{/* Dirección */}
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0">
											<MapPin className="w-6 h-6 text-emerald-600 mt-1" />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">
												Dirección
											</h3>
											<p className="text-gray-700">
												Av. Principal 1500, Centro
											</p>
										</div>
									</div>

									{/* Teléfono */}
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0">
											<Phone className="w-6 h-6 text-emerald-600 mt-1" />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">
												Teléfono
											</h3>
											<a
												href="tel:+15551234567"
												className="text-emerald-600 hover:text-emerald-700 font-medium"
											>
												+1 (555) 123-4567
											</a>
										</div>
									</div>

									{/* Email */}
									<div className="flex items-start space-x-4">
										<div className="flex-shrink-0">
											<Mail className="w-6 h-6 text-emerald-600 mt-1" />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900">
												Email
											</h3>
											<a
												href="mailto:info@cooprey.com"
												className="text-emerald-600 hover:text-emerald-700 font-medium"
											>
												info@cooprey.com
											</a>
										</div>
									</div>

									{/* Horarios */}
									<div className="flex items-start space-x-4 pt-4 border-t border-emerald-200">
										<div className="flex-shrink-0">
											<Clock className="w-6 h-6 text-emerald-600 mt-1" />
										</div>
										<div>
											<h3 className="font-semibold text-gray-900 mb-2">
												Horarios de Atención
											</h3>
											<div className="text-sm text-gray-700 space-y-1">
												<p>
													<strong>
														Lunes a Viernes:
													</strong>{" "}
													8:00 AM - 5:00 PM
												</p>
												<p>
													<strong>Sábados:</strong>{" "}
													9:00 AM - 1:00 PM
												</p>
											</div>
										</div>
									</div>
								</div>
							</div>
						</motion.div>
					</div>
				</div>
			</div>

			{/* Wave divisor */}
			<svg
				className="w-full"
				viewBox="0 0 1200 100"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 Q300,0 600,50 T1200,50 L1200,100 L0,100 Z"
					fill="#f0fdf4"
				/>
			</svg>

			{/* Todas las Sucursales */}
			<div className="bg-gradient-to-b from-green-50 to-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<motion.div
						className="text-center mb-16"
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="text-4xl font-bold text-gray-900 mb-4">
							Todas Nuestras Sucursales
						</h2>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Visítanos en cualquiera de nuestras ubicaciones o
							accede a nuestros servicios en línea
						</p>
					</motion.div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
						{sedes.slice(1).map((sede, idx) => (
							<motion.div
								key={sede.id}
								className="bg-white rounded-2xl p-6 border-2 border-gray-200 hover:border-emerald-400 hover:shadow-xl transition-all"
								initial={{ opacity: 0, y: 20 }}
								whileInView={{ opacity: 1, y: 0 }}
								transition={{
									duration: 0.6,
									delay: idx * 0.1,
								}}
								viewport={{ once: true }}
								whileHover={{ y: -5 }}
							>
								{/* Icono y Nombre */}
								<div className="mb-4">
									<div className="text-5xl mb-3">
										{sede.icono}
									</div>
									<h3 className="text-xl font-bold text-gray-900">
										{sede.nombre}
									</h3>
									<p className="text-sm text-emerald-600 font-medium">
										{sede.tipo}
									</p>
								</div>

								{/* Detalles compactos */}
								<div className="space-y-3 pt-4 border-t border-gray-200">
									{/* Dirección */}
									<div className="flex items-start space-x-2">
										<MapPin className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
										<span className="text-sm text-gray-700">
											{sede.direccion}
										</span>
									</div>

									{/* Teléfono */}
									<div className="flex items-center space-x-2">
										<Phone className="w-4 h-4 text-emerald-600 flex-shrink-0" />
										<a
											href={`tel:${sede.telefono}`}
											className="text-sm text-emerald-600 hover:text-emerald-700 font-medium"
										>
											{sede.telefono}
										</a>
									</div>

									{/* Email */}
									<div className="flex items-center space-x-2">
										<Mail className="w-4 h-4 text-emerald-600 flex-shrink-0" />
										<a
											href={`mailto:${sede.email}`}
											className="text-sm text-emerald-600 hover:text-emerald-700 font-medium truncate"
										>
											{sede.email}
										</a>
									</div>

									{/* Horarios */}
									<div className="flex items-start space-x-2 pt-2 border-t border-gray-100">
										<Clock className="w-4 h-4 text-emerald-600 flex-shrink-0 mt-1" />
										<div className="text-xs text-gray-600">
											<div className="whitespace-pre-line">
												{sede.horarios}
											</div>
										</div>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
