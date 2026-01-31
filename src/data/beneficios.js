import {
	Gift,
	DollarSign,
	BookOpen,
	TrendingUp,
	Zap,
	Shield,
	Users,
	Award,
	Percent,
} from "lucide-react";

export const beneficiosHeroData = {
	badge: "Privilegios de Ser Socio",
	badgeIcon: Award,
	title: "Disfruta de",
	titleHighlight: "beneficios exclusivos",
	titleSuffix: "como socio",
	description:
		"Tu inversión en la cooperativa te abre puertas a oportunidades financieras y personales",
	image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
};

export const beneficiosItems = [
	{
		id: 1,
		titulo: "Tasas Preferenciales",
		descripcion:
			"Acceso a tasas de interés más bajas en créditos y más altas en ahorros",
		icon: Percent,
		imagen: "https://images.unsplash.com/photo-1651341050677-24dba59ce0fd?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		dato: "Hasta 2% más de rentabilidad",
		detalles: [
			"Tasas exclusivas para socios",
			"Mejoras periódicas en nuestras condiciones",
			"Descuentos en productos especiales",
		],
	},
	{
		id: 2,
		titulo: "Descuentos Comerciales",
		descripcion: "Convenios con empresas y servicios locales",
		icon: Gift,
		imagen: "https://images.unsplash.com/photo-1607623814075-e51df1bdc82f?w=500&h=400&fit=crop",
		dato: "Hasta 30% descuento",
		detalles: [
			"Descuentos en comercios aliados",
			"Promociones exclusivas para socios",
			"Rebajas en servicios de salud y educación",
		],
	},
	{
		id: 3,
		titulo: "Educación Financiera",
		descripcion: "Acceso a talleres y capacitaciones gratuitas",
		icon: BookOpen,
		imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=500&h=400&fit=crop",
		dato: "12 talleres anuales",
		detalles: [
			"Talleres mensuales de finanzas personales",
			"Seminarios de emprendimiento",
			"Asesoramiento personalizado gratuito",
		],
	},
	{
		id: 4,
		titulo: "Distribución de Excedentes",
		descripcion:
			"Participación en las utilidades anuales de la cooperativa",
		icon: TrendingUp,
		imagen: "https://images.unsplash.com/photo-1526628953301-3e589a6a8b74?q=80&w=1106&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		dato: "Rentabilidad anual",
		detalles: [
			"Reparto de excedentes según aportaciones",
			"Inversión en mejoras para la cooperativa",
			"Transparencia en la gestión de recursos",
		],
	},
	{
		id: 5,
		titulo: "Atención Prioritaria",
		descripcion: "Canales de atención exclusivos y agilidad en trámites",
		icon: Zap,
		imagen: "https://images.unsplash.com/photo-1564846824194-346b7871b855?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		dato: "Trámites en minutos",
		detalles: [
			"Atención personalizada en sucursales",
			"Línea telefónica exclusiva para socios",
			"Gestión rápida de solicitudes",
		],
	},
	{
		id: 6,
		titulo: "Seguro de Protección",
		descripcion: "Cobertura especial para socios y sus familias",
		icon: Shield,
		imagen: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?w=500&h=400&fit=crop",
		dato: "Cobertura familiar",
		detalles: [
			"Seguro de vida y accidentes",
			"Protección contra fraudes",
			"Asistencia médica y legal",
		],
	},
];

export const beneficiosEspeciales = [
	{
		id: 1,
		titulo: "Programa de Puntos",
		descripcion:
			"Acumula puntos por tus transacciones y canjéalos por premios",
		icon: Award,
		items: [
			"1 punto por cada $10 ahorrados",
			"Canje por productos del hogar",
			"Vigencia de 12 meses",
		],
	},
	{
		id: 2,
		titulo: "Eventos Exclusivos",
		descripcion:
			"Invitaciones a eventos sociales y culturales de la cooperativa",
		icon: Users,
		items: [
			"Cena anual de socios",
			"Celebración del día del socio",
			"Actividades recreativas familiares",
		],
	},
	{
		id: 3,
		titulo: "Sorteos Mensuales",
		descripcion:
			"Participa automáticamente en sorteos de electrodomésticos y dinero",
		icon: Gift,
		items: [
			"Sorteos de electrodomésticos",
			"Bonos de regalo",
			"Participación automática",
		],
	},
];
