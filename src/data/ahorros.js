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

export const tasasAhorros = [
  { tipo: "Ahorro Libre", trea: "0.00%" },
  { tipo: "Ahorro Infantil", trea: "3.00%" },
  { tipo: "Depósito de garantía", trea: "0.00%" },
  { tipo: "Ahorro Canasta", trea: "0.00%" },
  { tipo: "Plazo Fijo 90 días", trea: "3.00%" },
  { tipo: "Plazo Fijo 180 días", trea: "5.00%" },
  { tipo: "Plazo Fijo 270 días", trea: "6.50%" },
  { tipo: "Plazo Fijo 360 días (1 año)", trea: "8.00%" },
  { tipo: "Plazo Fijo 540 días (1.5 años)", trea: "9.00%" },
  { tipo: "Plazo Fijo 720 días (2 años)", trea: "10.00%" },
  { tipo: "Plazo Fijo 1080 días (3 años)", trea: "11.00%" },
  { tipo: "Plazo Fijo 1440 días (4 años)", trea: "12.00%" },
  { tipo: "Plazo Fijo 1800 días (5 años)", trea: "13.00%" },
  { tipo: "Ahorro Programado 6 meses", trea: "6.00%" },
  { tipo: "Ahorro Programado 1 año", trea: "9.00%" },
  { tipo: "Ahorro Programado 1.5 años", trea: "9.50%" },
  { tipo: "Ahorro Programado 2 años", trea: "10.00%" },
  { tipo: "Ahorro Programado 3 años", trea: "11.00%" },
  { tipo: "Ahorro Programado 4 años", trea: "12.00%" },
  { tipo: "Ahorro Programado 5 años", trea: "13.00%" },
];

export const notasTasas = {
  advertencia: "Para acceder a nuestros productos y servicios es necesario ser socio de la Coopac Niño Rey.",
  periodo: "Todas las tasas de interés se encuentran calculadas usando un periodo de 360 días.",
  regulacion: "No captamos recursos del público, solo operamos con nuestros Socios.",
  registro: "Estamos inscritos en el Registro Nacional de COOPAC, bajo el número 402-2019-REG.COOPAC-SBS.",
  supervision: "Estamos regulados por la Superintendencia de Banca, Seguros y AFP (SBS), y supervisados por la Superintendencia Adjunta de Cooperativas.",
  seguro: "Estamos incorporados en el Fondo de Seguro de Depósitos Cooperativo (FSDC).",
};

export const productosAhorros = [
	{
		id: 1,
		nombre: "Ahorro Básico",
		descripcion: "Cuenta de ahorros flexible con acceso inmediato",
		tasa: "0.00%",
		minimo: "S/.50",
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
		tasa: "8.00%",
		minimo: "S/.500",
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
		tasa: "3.00%",
		minimo: "S/.25",
		beneficios: [
			"Cuenta especial",
			"Incentivos por logros",
			"Educación financiera",
		],
		icon: Award,
	},
];
