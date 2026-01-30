import React, { useState } from "react";
import { Header } from "../components/Header.jsx";
import { Footer } from "../components/Footer.jsx";
import { motion } from "motion/react";
import SectionHeading from "../components/SectionHeading.jsx";
import {
	Calendar,
	User,
	ArrowRight,
	Search,
	Tag,
	TrendingUp,
} from "lucide-react";

export default function Noticias() {
	const [selectedCategory, setSelectedCategory] = useState("todas");
	const [searchTerm, setSearchTerm] = useState("");

	const noticias = [
		{
			id: 1,
			titulo: "CoopRey Celebra 25 Años de Servicio a la Comunidad",
			resumen:
				"Hemos alcanzado un importante hito en nuestra historia, reafirmando nuestro compromiso con nuestros socios y la comunidad",
			contenido:
				"En este año especial celebramos 25 años de operaciones continuas, durante los cuales hemos servido a más de 15,000 familias. Nuestro crecimiento ha sido sostenido gracias a la confianza de nuestros socios.",
			imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
			fecha: "28 de enero, 2026",
			autor: "Comunicaciones CoopRey",
			categoria: "empresa",
			destacado: true,
		},
		{
			id: 2,
			titulo: "Nuevas Tasas de Ahorro a Plazo Disponibles",
			resumen:
				"Mejoramos nuestras tasas de rendimiento para que tu dinero trabaje más por ti",
			contenido:
				"A partir de este mes, ofrecemos nuevas opciones de ahorro a plazo con tasas competitivas que van desde 4.5% hasta 6.2% anual, dependiendo del plazo elegido.",
			imagen: "https://images.unsplash.com/photo-1579621970563-ebec5855551f?w=500&h=300&fit=crop",
			fecha: "25 de enero, 2026",
			autor: "Área de Productos",
			categoria: "productos",
			destacado: false,
		},
		{
			id: 3,
			titulo: "Programa de Educación Financiera para Jóvenes",
			resumen:
				"Lanzamos una iniciativa para enseñar a los jóvenes sobre finanzas personales y emprendimiento",
			contenido:
				"El programa incluye talleres gratuitos, mentorías y acceso a recursos educativos en línea. Está diseñado para estudiantes de 15 a 25 años interesados en mejorar su alfabetización financiera.",
			imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
			fecha: "20 de enero, 2026",
			autor: "Área de RSE",
			categoria: "educacion",
			destacado: true,
		},
		{
			id: 4,
			titulo: "Ampliamos Servicios en Línea y Aplicación Móvil",
			resumen:
				"Nuestras plataformas digitales ahora ofrecen más funcionalidades para facilitar tu experiencia",
			contenido:
				"La nueva versión de nuestra app móvil incluye: transferencias instantáneas, consulta de saldos en tiempo real, solicitud de créditos y atención al cliente 24/7.",
			imagen: "https://images.unsplash.com/photo-1516534775068-bb57013de58f?w=500&h=300&fit=crop",
			fecha: "15 de enero, 2026",
			autor: "Tecnología",
			categoria: "tecnologia",
			destacado: false,
		},
		{
			id: 5,
			titulo: "CoopRey Apoya Proyectos Comunitarios en 5 Ciudades",
			resumen:
				"Inversión en infraestructura y desarrollo local a través de nuestro programa de responsabilidad social",
			contenido:
				"Hemos destinado 2.5 millones en fondos para proyectos de educación, salud y vivienda en comunidades vulnerables de nuestra área de cobertura.",
			imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=300&fit=crop",
			fecha: "10 de enero, 2026",
			autor: "Responsabilidad Social",
			categoria: "rse",
			destacado: false,
		},
		{
			id: 6,
			titulo: "Obtuvimos Certificación Internacional de Seguridad",
			resumen:
				"Nuestros sistemas de información cumplen con los más altos estándares internacionales de seguridad",
			contenido:
				"Hemos obtenido la certificación ISO 27001 que garantiza la protección óptima de datos de nuestros socios. Esta acreditación refuerza nuestra posición como institución confiable.",
			imagen: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=500&h=300&fit=crop",
			fecha: "5 de enero, 2026",
			autor: "Tecnología",
			categoria: "empresa",
			destacado: false,
		},
	];

	const categorias = [
		{ valor: "todas", label: "Todas las Noticias" },
		{ valor: "empresa", label: "Empresa" },
		{ valor: "productos", label: "Productos" },
		{ valor: "educacion", label: "Educación" },
		{ valor: "tecnologia", label: "Tecnología" },
		{ valor: "rse", label: "Responsabilidad Social" },
	];

	const noticiasFiltradas = noticias.filter((noticia) => {
		const cumpleCategoria =
			selectedCategory === "todas" ||
			noticia.categoria === selectedCategory;
		const cumpleBusqueda =
			noticia.titulo.toLowerCase().includes(searchTerm.toLowerCase()) ||
			noticia.resumen.toLowerCase().includes(searchTerm.toLowerCase());
		return cumpleCategoria && cumpleBusqueda;
	});

	const noticiasDestacadas = noticias.filter((n) => n.destacado).slice(0, 2);

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
							id="wave"
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
					<rect width="1200" height="600" fill="url(#wave)" />
				</svg>

				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
					<motion.div
						className="text-center space-y-6 mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
					>
						<SectionHeading
							badge="Noticias"
							title="Últimas"
							subtitle="Noticias"
						/>
						<p className="text-xl text-gray-600 max-w-2xl mx-auto">
							Mantente informado sobre los últimos eventos,
							productos y novedades de CoopRey
						</p>
					</motion.div>

					{/* Buscador */}
					<motion.div
						className="relative max-w-2xl mx-auto mb-12"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.1 }}
					>
						<div className="relative">
							<Search className="absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400" />
							<input
								type="text"
								placeholder="Buscar noticias..."
								value={searchTerm}
								onChange={(e) => setSearchTerm(e.target.value)}
								className="w-full pl-12 pr-6 py-4 bg-white border-2 border-gray-200 rounded-full focus:border-emerald-500 focus:outline-none transition-colors text-lg"
							/>
						</div>
					</motion.div>

					{/* Categorías */}
					<motion.div
						className="flex flex-wrap justify-center gap-3"
						initial={{ opacity: 0, y: 20 }}
						animate={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6, delay: 0.2 }}
					>
						{categorias.map((cat) => (
							<button
								key={cat.valor}
								onClick={() => setSelectedCategory(cat.valor)}
								className={`px-5 py-2.5 rounded-full font-medium transition-all ${
									selectedCategory === cat.valor
										? "bg-emerald-600 text-white shadow-lg scale-105"
										: "bg-white text-gray-700 border-2 border-gray-200 hover:border-emerald-500"
								}`}
							>
								{cat.label}
							</button>
						))}
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

			{/* Noticias Destacadas */}
			{noticiasDestacadas.length > 0 && (
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
					<div className="mb-12">
						<SectionHeading
							badge="Noticias"
							title="Destacadas"
							subtitle="Historias relevantes"
						/>
					</div>

					<div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
						{noticiasDestacadas.map((noticia, idx) => (
							<motion.div
								key={noticia.id}
								className="group relative overflow-hidden rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
								initial={{ opacity: 0, y: 20 }}
								animate={{ opacity: 1, y: 0 }}
								transition={{ duration: 0.6, delay: idx * 0.1 }}
								whileHover={{ y: -10 }}
							>
								<div className="relative h-96">
									<img
										src={noticia.imagen}
										alt={noticia.titulo}
										className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
									/>
									<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
								</div>

								<div className="absolute bottom-0 left-0 right-0 p-8">
									<div className="flex items-center space-x-3 mb-4">
										<span className="inline-block px-4 py-2 bg-emerald-500 text-white rounded-full text-sm font-semibold">
											Destacada
										</span>
										<span className="text-yellow-300 text-sm font-medium">
											{noticia.categoria}
										</span>
									</div>

									<h3 className="text-2xl font-bold text-white mb-3">
										{noticia.titulo}
									</h3>

									<p className="text-gray-100 text-sm mb-4">
										{noticia.resumen}
									</p>

									<div className="flex items-center justify-between pt-4 border-t border-white/20">
										<div className="flex items-center space-x-4 text-sm text-gray-200">
											<span className="flex items-center space-x-1">
												<Calendar className="w-4 h-4" />
												<span>{noticia.fecha}</span>
											</span>
											<span className="flex items-center space-x-1">
												<User className="w-4 h-4" />
												<span>{noticia.autor}</span>
											</span>
										</div>
										<button className="text-emerald-300 hover:text-white transition-colors">
											<ArrowRight className="w-5 h-5" />
										</button>
									</div>
								</div>
							</motion.div>
						))}
					</div>
				</div>
			)}

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

			{/* Grid de Noticias */}
			<div className="bg-gradient-to-b from-green-50 to-white py-20">
				<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
					<div className="mb-12">
						<SectionHeading
							badge="Noticias"
							title="Todas las Noticias"
							subtitle="Mantente informado"
						/>
					</div>

					{noticiasFiltradas.length > 0 ? (
						<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
							{noticiasFiltradas.map((noticia, idx) => (
								<motion.article
									key={noticia.id}
									className="bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-emerald-300 hover:shadow-xl transition-all duration-300 group"
									initial={{ opacity: 0, y: 20 }}
									animate={{ opacity: 1, y: 0 }}
									transition={{
										duration: 0.6,
										delay: idx * 0.05,
									}}
									whileHover={{ y: -8 }}
								>
									{/* Imagen con efecto */}
									<div className="relative h-48 overflow-hidden bg-gray-200">
										<img
											src={noticia.imagen}
											alt={noticia.titulo}
											className="w-full h-full object-cover group-hover:scale-125 transition-transform duration-500"
										/>
										<div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
									</div>

									<div className="p-6">
										{/* Categoría y etiqueta */}
										<div className="flex items-center space-x-2 mb-3">
											<Tag className="w-4 h-4 text-emerald-600" />
											<span className="text-xs font-semibold text-emerald-600 uppercase">
												{noticia.categoria}
											</span>
										</div>

										{/* Título */}
										<h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-emerald-600 transition-colors line-clamp-2">
											{noticia.titulo}
										</h3>

										{/* Resumen */}
										<p className="text-gray-600 text-sm mb-4 line-clamp-2">
											{noticia.resumen}
										</p>

										{/* Metadatos */}
										<div className="space-y-2 pt-4 border-t border-gray-100 text-xs text-gray-600">
											<div className="flex items-center space-x-2">
												<Calendar className="w-3.5 h-3.5 text-emerald-600" />
												<span>{noticia.fecha}</span>
											</div>
											<div className="flex items-center space-x-2">
												<User className="w-3.5 h-3.5 text-emerald-600" />
												<span>{noticia.autor}</span>
											</div>
										</div>

										{/* Botón */}
										<button className="w-full mt-4 px-4 py-2.5 bg-gradient-to-r from-emerald-600 to-emerald-700 text-white rounded-lg hover:from-emerald-700 hover:to-emerald-800 transition-all font-medium inline-flex items-center justify-center space-x-2 group/btn">
											<span>Leer más</span>
											<ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
										</button>
									</div>
								</motion.article>
							))}
						</div>
					) : (
						<motion.div
							className="text-center py-12"
							initial={{ opacity: 0 }}
							animate={{ opacity: 1 }}
						>
							<p className="text-gray-600 text-lg">
								No se encontraron noticias con esos criterios
							</p>
						</motion.div>
					)}
				</div>
			</div>

			{/* Wave divisor final */}
			<svg
				className="w-full"
				viewBox="0 0 1200 100"
				preserveAspectRatio="none"
			>
				<path
					d="M0,50 Q300,100 600,50 T1200,50 L1200,0 L0,0 Z"
					fill="#f0fdf4"
				/>
			</svg>

			{/* Newsletter */}
			<div className="bg-gradient-to-r from-emerald-600 to-emerald-700 py-16">
				<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
					<motion.div
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ duration: 0.6 }}
						viewport={{ once: true }}
					>
						<h2 className="text-3xl font-bold text-white mb-4">
							¿Quieres recibir nuestras noticias?
						</h2>

						<p className="text-emerald-100 mb-8 max-w-2xl mx-auto">
							Suscríbete a nuestro boletín y recibe las últimas
							actualizaciones directamente en tu correo
						</p>

						<div className="flex gap-3 max-w-md mx-auto">
							<input
								type="email"
								placeholder="Tu correo electrónico"
								className="flex-1 px-6 py-3 rounded-full focus:outline-none focus:ring-2 focus:ring-yellow-300"
							/>
							<button className="px-8 py-3 bg-yellow-400 text-emerald-900 font-semibold rounded-full hover:bg-yellow-300 transition-colors">
								Suscribirse
							</button>
						</div>
					</motion.div>
				</div>
			</div>

			<Footer />
		</div>
	);
}
