import { Users, Shield, Briefcase, Lock, Eye, Folder } from "lucide-react";

export const documentosHeroData = {
	badge: "Centro de Documentos",
	badgeIcon: Folder,
	title: "Documentos",
	titleHighlight: "Institucionales",
	description:
		"Acceso a información oficial, políticas y normativas de la cooperativa",
	image: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?w=1200&h=600&fit=crop",
};

export const documentosCategorias = [
	{
		id: 1,
		categoria: "Documentos de Gobernanza",
		icono: Users,
		color: "emerald",
		documentos: [
			{
				titulo: "Actas de Asambleas Generales",
				descripcion: "Registro de decisiones y acuerdos de asambleas",
				fecha: "Actualizado 2024",
				tamaño: "3.2 MB",
				acceso: "Público",
			},
			{
				titulo: "Políticas del Consejo Directivo",
				descripcion: "Normativas de funcionamiento y responsabilidades",
				fecha: "Vigente 2023",
				tamaño: "1.8 MB",
				acceso: "Público",
			},
			{
				titulo: "Reglamento de Junta de Vigilancia",
				descripcion: "Funciones y procedimientos de supervisión",
				fecha: "Vigente 2022",
				tamaño: "1.2 MB",
				acceso: "Público",
			},
			{
				titulo: "Política de Remuneraciones",
				descripcion:
					"Criterios para compensación de directivos y empleados",
				fecha: "Actualizado 2024",
				tamaño: "0.9 MB",
				acceso: "Restringido",
			},
		],
	},
	{
		id: 2,
		categoria: "Políticas y Procedimientos",
		icono: Shield,
		color: "blue",
		documentos: [
			{
				titulo: "Política de Riesgos",
				descripcion:
					"Gestión de riesgos crediticio, operativo y de mercado",
				fecha: "Actualizado 2024",
				tamaño: "2.5 MB",
				acceso: "Público",
			},
			{
				titulo: "Política de Cumplimiento Normativo",
				descripcion:
					"Procedimientos antilavado de dinero y cumplimiento legal",
				fecha: "Vigente 2024",
				tamaño: "2.1 MB",
				acceso: "Público",
			},
			{
				titulo: "Manual de Procedimientos Crediticios",
				descripcion: "Guía para evaluación y otorgamiento de créditos",
				fecha: "Actualizado 2023",
				tamaño: "3.8 MB",
				acceso: "Restringido",
			},
			{
				titulo: "Política de Atención al Socio",
				descripcion: "Estándares de servicio y resolución de reclamos",
				fecha: "Vigente 2024",
				tamaño: "1.5 MB",
				acceso: "Público",
			},
		],
	},
	{
		id: 3,
		categoria: "Informes y Reportes",
		icono: Briefcase,
		color: "yellow",
		documentos: [
			{
				titulo: "Informe de Gestión Anual",
				descripcion: "Resumen de actividades y logros del año",
				fecha: "2024",
				tamaño: "4.2 MB",
				acceso: "Público",
			},
			{
				titulo: "Informe de Responsabilidad Social",
				descripcion: "Iniciativas comunitarias y sostenibilidad",
				fecha: "2024",
				tamaño: "2.8 MB",
				acceso: "Público",
			},
			{
				titulo: "Informe de Auditoría Externa",
				descripcion: "Evaluación independiente de estados financieros",
				fecha: "2024",
				tamaño: "3.5 MB",
				acceso: "Público",
			},
			{
				titulo: "Reporte de Desempeño Financiero",
				descripcion: "Indicadores clave y evolución financiera",
				fecha: "Trimestral 2024",
				tamaño: "1.9 MB",
				acceso: "Público",
			},
		],
	},
	{
		id: 4,
		categoria: "Normativa Legal",
		icono: Lock,
		color: "green",
		documentos: [
			{
				titulo: "Estatuto Social",
				descripcion: "Reglamento fundamental de la cooperativa",
				fecha: "Vigente",
				tamaño: "2.4 MB",
				acceso: "Público",
			},
			{
				titulo: "Código de Ética",
				descripcion: "Principios y valores de conducta",
				fecha: "Actualizado 2023",
				tamaño: "1.1 MB",
				acceso: "Público",
			},
			{
				titulo: "Ley de Cooperativas",
				descripcion: "Marco legal aplicable al sector",
				fecha: "Referencia",
				tamaño: "5.6 MB",
				acceso: "Público",
			},
		],
	},
];
