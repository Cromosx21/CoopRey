import { BarChart3, TrendingUp, DollarSign, Users } from "lucide-react";

export const estadosHeroData = {
	badge: "Transparencia Financiera",
	badgeIcon: BarChart3,
	title: "Estados",
	titleHighlight: "Financieros",
	description:
		"Reportes auditorados y verificados de nuestra situación financiera",
	image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=1200&h=600&fit=crop",
};

export const estadosFinancieros = [
	{
		id: 1,
		año: 2024,
		disponible: true,
		reportes: [
			{
				titulo: "Balance General",
				descripcion:
					"Estado de situación financiera al 31 de diciembre",
				tamaño: "1.2 MB",
			},
			{
				titulo: "Estado de Resultados",
				descripcion: "Ingresos, gastos y utilidades del ejercicio",
				tamaño: "0.9 MB",
			},
			{
				titulo: "Flujo de Caja",
				descripcion: "Movimiento de recursos durante el período",
				tamaño: "0.8 MB",
			},
			{
				titulo: "Notas a los Estados",
				descripcion: "Explicaciones y detalles de rubros principales",
				tamaño: "1.5 MB",
			},
		],
	},
	{
		id: 2,
		año: 2023,
		disponible: true,
		reportes: [
			{
				titulo: "Balance General",
				descripcion:
					"Estado de situación financiera al 31 de diciembre",
				tamaño: "1.1 MB",
			},
			{
				titulo: "Estado de Resultados",
				descripcion: "Ingresos, gastos y utilidades del ejercicio",
				tamaño: "0.8 MB",
			},
			{
				titulo: "Flujo de Caja",
				descripcion: "Movimiento de recursos durante el período",
				tamaño: "0.7 MB",
			},
			{
				titulo: "Notas a los Estados",
				descripcion: "Explicaciones y detalles de rubros principales",
				tamaño: "1.3 MB",
			},
		],
	},
	{
		id: 3,
		año: 2022,
		disponible: true,
		reportes: [
			{
				titulo: "Balance General",
				descripcion:
					"Estado de situación financiera al 31 de diciembre",
				tamaño: "1.0 MB",
			},
			{
				titulo: "Estado de Resultados",
				descripcion: "Ingresos, gastos y utilidades del ejercicio",
				tamaño: "0.8 MB",
			},
			{
				titulo: "Flujo de Caja",
				descripcion: "Movimiento de recursos durante el período",
				tamaño: "0.7 MB",
			},
			{
				titulo: "Notas a los Estados",
				descripcion: "Explicaciones y detalles de rubros principales",
				tamaño: "1.2 MB",
			},
		],
	},
];

export const indicadoresFinancieros = [
	{
		titulo: "Activo Total",
		valor: "$125,450,000",
		cambio: "+12.5%",
		icono: BarChart3,
		color: "emerald",
	},
	{
		titulo: "Capital Social",
		valor: "$45,230,000",
		cambio: "+8.3%",
		icono: DollarSign,
		color: "yellow",
	},
	{
		titulo: "Excedentes",
		valor: "$8,450,000",
		cambio: "+15.2%",
		icono: TrendingUp,
		color: "emerald",
	},
	{
		titulo: "Base Societaria",
		valor: "15,420",
		cambio: "+5.4%",
		icono: Users,
		color: "blue",
	},
];

export const ratiosFinancieros = [
	{
		ratio: "Liquidez",
		valor: "2.5",
		target: "> 1.5",
		status: "Optimo",
	},
	{
		ratio: "Solvencia",
		valor: "18.5%",
		target: "> 12%",
		status: "Optimo",
	},
	{
		ratio: "Morosidad",
		valor: "2.1%",
		target: "< 3%",
		status: "Optimo",
	},
	{
		ratio: "Eficiencia",
		valor: "65%",
		target: "< 70%",
		status: "Bueno",
	},
];

export const composicionActivos = [
	{ name: "Cartera de Créditos", value: 65, color: "#10B981" },
	{ name: "Inversiones", value: 20, color: "#3B82F6" },
	{ name: "Disponible", value: 10, color: "#F59E0B" },
	{ name: "Activos Fijos", value: 5, color: "#6366F1" },
];

export const composicionPasivos = [
	{ name: "Depósitos a Plazo", value: 55, color: "#10B981" },
	{ name: "Ahorros a la Vista", value: 30, color: "#3B82F6" },
	{ name: "Obligaciones Financieras", value: 10, color: "#F59E0B" },
	{ name: "Otros Pasivos", value: 5, color: "#6366F1" },
];
