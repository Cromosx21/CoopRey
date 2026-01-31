import { TrendingUp, Clock, Award, Lock } from "lucide-react";

export const ahorrosHeroData = {
	badge: "Productos de Ahorro Seguros",
	badgeIcon: Lock,
	title: "Haz crecer tu",
	titleHighlight: "dinero",
	titleSuffix: "con nosotros",
	description:
		"Opciones de ahorro flexibles y seguras diseñadas para cumplir tus metas financieras",
	image: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
};

export const productosAhorros = [
	{
		id: 1,
		nombre: "Ahorro Básico",
		descripcion: "Cuenta de ahorros flexible con acceso inmediato",
		tasa: "2.5%",
		minimo: "$50",
		beneficios: [
			"Sin comisiones",
			"Retiro inmediato",
			"Seguridad garantizada",
		],
		icon: TrendingUp,
	},
	{
		id: 2,
		nombre: "Ahorro Plazo",
		descripcion: "Maximiza tu rendimiento con plazo fijo",
		tasa: "4.8%",
		minimo: "$500",
		beneficios: [
			"Tasa fija",
			"Plazo flexible (6-24 meses)",
			"Renovación automática",
		],
		icon: Clock,
	},
	{
		id: 3,
		nombre: "Ahorro Infantil",
		descripcion: "Enseña a tus hijos el valor del ahorro",
		tasa: "3.0%",
		minimo: "$25",
		beneficios: [
			"Cuenta especial",
			"Incentivos por logros",
			"Educación financiera",
		],
		icon: Award,
	},
];
