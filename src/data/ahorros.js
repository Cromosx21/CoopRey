import { TrendingUp, Clock, Award, Lock } from "lucide-react";

export const ahorrosHeroData = {
  badge: "Productos de Ahorro",
  badgeIcon: Lock,
  title: "Haz crecer tu",
  titleHighlight: "ahorro",
  titleSuffix: "con confianza",
  description:
    "Brindamos alternativas de ahorro seguras que apoyan el bienestar económico y el desarrollo de nuestros socios.",
  image:
    "https://images.unsplash.com/photo-1572021335469-31706a17aaef?q=80&w=1170&auto=format&fit=crop",
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
