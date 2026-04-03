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
		año: 2025,
		disponible: true,
		reportes: [
			{
				titulo: "Balance General",
				descripcion:
					"Estado de situación financiera al 31 de diciembre",
				tamaño: "1.2 MB",
				url: "#",
			},
			{
				titulo: "Estado de Resultados",
				descripcion: "Ingresos, gastos y utilidades del ejercicio",
				tamaño: "0.9 MB",
				url: "/images/reportes/2025/EEFF122025.pdf",
			},
			{
				titulo: "Flujo de Caja",
				descripcion: "Movimiento de recursos durante el período",
				tamaño: "0.8 MB",
				url: "#",
			},
			{
				titulo: "Notas a los Estados",
				descripcion: "Explicaciones y detalles de rubros principales",
				tamaño: "1.5 MB",
				url: "#",
			},
		],
	},
	
	
];

export const indicadoresFinancieros = [
	{
		titulo: "Activo Total",
		valor: "S/.17,927,433.96",
		cambio: "+12.5%",
		icono: BarChart3,
		color: "emerald",
	},
	{
		titulo: "Capital Social",
		valor: "S/.4,563,727.63",
		cambio: "+8.3%",
		icono: DollarSign,
		color: "yellow",
	},
	{
		titulo: "Excedentes",
		valor: "S/.1,926,662.22",
		cambio: "+15.2%",
		icono: TrendingUp,
		color: "emerald",
	},
	{
		titulo: "Base Societaria",
		valor: "6,723",
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
	{ name: "Depósitos a Plazo", value: 55, color: "#10B981", monto: "S/. 6,600,000" },
	{ name: "Ahorros a la Vista", value: 30, color: "#3B82F6", monto: "S/. 3,600,000" },
	{ name: "Obligaciones Financieras", value: 10, color: "#F59E0B", monto: "S/. 1,200,000" },
	{ name: "Otros Pasivos", value: 5, color: "#6366F1", monto: "S/. 600,000" },
];
