import {
	Zap,
	Home,
	Briefcase,
	GraduationCap,
	FileText,
	Clock,
	BadgeCheck,
	DollarSign,
	Percent,
} from "lucide-react";

export const creditosHeroData = {
	badge: "Créditos a tu Medida",
	badgeIcon: Percent,
	title: "Financia tus",
	titleHighlight: "sueños",
	titleSuffix: "con confianza",
	description:
		"Créditos accesibles con trámites ágiles y tasas preferenciales para socios cooperativistas",
	image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=800&fit=crop",
};

export const tasasCreditos = [
	{ producto: "Credi Emprendedor - pequeña empresa", teaMin: "26.82%", teaMax: "79.58%" },
	{ producto: "Credi Agrario", teaMin: "37.67%", teaMax: "79.58%" },
	{ producto: "Rapi-diario", teaMin: "101.22%", teaMax: "79.58%" },
	{ producto: "Credi emprendedor", teaMin: "34.49%", teaMax: "79.58%" },
	{ producto: "Peque crédito", teaMin: "39.29%", teaMax: "79.58%" },
	{ producto: "Credi estudiante", teaMin: "42.58%", teaMax: "79.58%" },
	{ producto: "Credi móvil", teaMin: "26.82%", teaMax: "79.58%" },
	{ producto: "Credi convenio", teaMin: "34.49%", teaMax: "79.58%" },
	{ producto: "Credi personal", teaMin: "42.58%", teaMax: "79.58%" },
	{ producto: "Credi simple", teaMin: "60.10%", teaMax: "79.58%" },
	{ producto: "Administrativo", teaMin: "20.98%", teaMax: "79.58%" },
	{ producto: "Mi moto administrativo niño rey", teaMin: "26.82%", teaMax: "79.58%" },
	{ producto: "Credi cubierto", teaMin: "26.82%", teaMax: "79.58%" },
	{ producto: "Micro consumo", teaMin: "42.58%", teaMax: "79.58%" },
	{ producto: "Mi hogar", teaMin: "26.82%", teaMax: "79.58%" },
];

export const tasaMoratoria = {
	interesMoratorioAnual: "213.84%",
	interesMoratorioNegociado: "213.84%",
	nota: "El presente tarifario aplica para créditos nuevos, reprogramados y refinanciados. Todas las tasas de interés se encuentran calculadas usando un periodo de 360 días.",
};

export const comisiones = [
	{ servicio: "Formato de trámite FUT (Opcional)", monto: "S/.2.00", momento: "Por operación" },
	{ servicio: "Libreta de Aportes Y Ahorros", monto: "S/.10.00", momento: "Desde la segunda emisión" },
	{ servicio: "Emisión de Constancia de no adeudo", monto: "S/.25.00", momento: "Desde la segunda emisión" },
	{ servicio: "Afiliación", monto: "S/.40.00", momento: "Por operación" },
	{ servicio: "Desafiliación", monto: "S/.30.00", momento: "Por operación" },
	{ servicio: "Comisión por servicios cooperativos", monto: "S/.15.00", momento: "Se paga anual" },
	{ servicio: "Emisión de Constancia de no ser socio", monto: "S/.5.00", momento: "Por operación" },
	{ servicio: "Emisión de Estado de cuenta (período anual)", monto: "S/.3.00", momento: "Por operación" },
	{ servicio: "Emisión de Duplicado de Voucher", monto: "S/.3.00", momento: "Por operación" },
	{ servicio: "Emisión de Duplicado de Contrato a plazo fijo", monto: "S/.25.00", momento: "Por operación" },
	{ servicio: "Emisión Duplicado de Cronograma de pago", monto: "S/.3.00", momento: "Por operación" },
	{ servicio: "Consulta en central de Riesgo (fuera de evaluación)", monto: "S/.5.00", momento: "Por operación" },
];

export const tiposCreditos = [
	{
		id: 1,
		nombre: "Crédito Personal",
		descripcion: "Para tus gastos y proyectos personales",
		tasa: "Desde 8.5%",
		plazo: "12-60 meses",
		monto: "Hasta $50,000",
		imagen: "https://images.unsplash.com/photo-1672380135241-c024f7fbfa13?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		beneficios: ["Trámite rápido", "Sin avalistas", "Desembolso inmediato"],
		icon: Zap,
	},
	{
		id: 2,
		nombre: "Crédito Hipotecario",
		descripcion: "Realiza el sueño de tu vivienda propia",
		tasa: "Desde 6.2%",
		plazo: "5-25 años",
		monto: "Hasta $500,000",
		imagen: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?w=600&h=500&fit=crop",
		beneficios: [
			"Tasas preferenciales",
			"Tramitación ágil",
			"Asesoramiento completo",
		],
		icon: Home,
	},
	{
		id: 3,
		nombre: "Crédito Empresarial",
		descripcion: "Impulsa tu negocio con financiamiento accesible",
		tasa: "Desde 7.8%",
		plazo: "12-84 meses",
		monto: "Hasta $200,000",
		imagen: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=500&fit=crop",
		beneficios: [
			"Capital de trabajo",
			"Equipo e instalaciones",
			"Asesoría empresarial",
		],
		icon: Briefcase,
	},
	{
		id: 4,
		nombre: "Crédito Educativo",
		descripcion: "Invierte en tu futuro y el de tus hijos",
		tasa: "Desde 5.5%",
		plazo: "12-60 meses",
		monto: "Hasta $30,000",
		imagen: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?w=600&h=500&fit=crop",
		beneficios: [
			"Periodo de gracia",
			"Pagos flexibles",
			"Cobertura completa",
		],
		icon: GraduationCap,
	},
];

export const pasos = [
	{
		id: 1,
		titulo: "Solicitud",
		descripcion: "Llena el formulario en línea o visita una sucursal",
		icon: FileText,
	},
	{
		id: 2,
		titulo: "Evaluación",
		descripcion: "Analizamos tu perfil y capacidad de pago en 24h",
		icon: Clock,
	},
	{
		id: 3,
		titulo: "Aprobación",
		descripcion: "Te confirmamos las condiciones finales del crédito",
		icon: BadgeCheck,
	},
	{
		id: 4,
		titulo: "Desembolso",
		descripcion: "Recibe el dinero en tu cuenta inmediatamente",
		icon: DollarSign,
	},
];
