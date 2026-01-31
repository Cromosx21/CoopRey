import { FileText, Book, Shield, Users } from "lucide-react";

export const documentosDescargables = [
	{
		id: 1,
		titulo: "Estatutos Sociales Completos",
		descripcion:
			"Documento oficial que regula el funcionamiento de la cooperativa",
		fecha: "Vigente desde 2020",
		tamaño: "2.4 MB",
		icono: FileText,
		link: "#descargar",
	},
	{
		id: 2,
		titulo: "Reglamento Interno",
		descripcion: "Normas y procedimientos internos de operación",
		fecha: "Actualizado 2023",
		tamaño: "1.8 MB",
		icono: Book,
		link: "#descargar",
	},
	{
		id: 3,
		titulo: "Código de Ética y Conducta",
		descripcion:
			"Principios éticos y de buen comportamiento para socios y empleados",
		fecha: "Vigente desde 2021",
		tamaño: "1.2 MB",
		icono: Shield,
		link: "#descargar",
	},
	{
		id: 4,
		titulo: "Política de Privacidad",
		descripcion: "Protección de datos personales de nuestros socios",
		fecha: "Actualizado 2024",
		tamaño: "0.8 MB",
		icono: Users,
		link: "#descargar",
	},
];

export const capitulos = [
	{
		id: 1,
		numero: "I",
		titulo: "Naturaleza, Denominación y Domicilio",
		contenido: [
			"La cooperativa es una asociación autónoma de personas",
			"Se rige por los principios y valores cooperativistas",
			"Su domicilio principal se establece en la ciudad capital",
			"Puede establecer sucursales y agencias en otros territorios",
			"Su duración es indefinida",
		],
		seccionesDetalladas: [
			{
				titulo: "Definición Legal",
				descripcion: "Cooperativa de servicios financieros",
			},
			{
				titulo: "Ámbito de Cobertura",
				descripcion: "Nacional e internacional",
			},
			{
				titulo: "Personalidad Jurídica",
				descripcion: "Persona jurídica de derecho privado",
			},
		],
	},
	{
		id: 2,
		numero: "II",
		titulo: "Objeto Social",
		contenido: [
			"Prestar servicios financieros a sus socios",
			"Captar depósitos y otorgar créditos",
			"Promover el ahorro y la inclusión financiera",
			"Facilitar transacciones y servicios complementarios",
			"Impulsar educación financiera y cooperativismo",
		],
		seccionesDetalladas: [
			{
				titulo: "Servicios Principales",
				descripcion: "Ahorros, créditos y servicios financieros",
			},
			{
				titulo: "Responsabilidad Social",
				descripcion: "Desarrollo comunitario y sostenibilidad",
			},
			{
				titulo: "Alcance del Negocio",
				descripcion: "Servicios financieros integrales",
			},
		],
	},
	{
		id: 3,
		numero: "III",
		titulo: "Socios y Derechos",
		contenido: [
			"Pueden ser socios personas naturales mayores de edad",
			"Deben cumplir con requisitos de admisión establecidos",
			"Cada socio tiene derecho a un voto independientemente del capital",
			"Participación en asambleas y decisiones cooperativas",
			"Derecho a recibir información financiera periódica",
		],
		seccionesDetalladas: [
			{
				titulo: "Requisitos de Ingreso",
				descripcion: "Documentación y capital mínimo",
			},
			{
				titulo: "Derechos Fundamentales",
				descripcion: "Voto, información y participación",
			},
			{
				titulo: "Obligaciones de Socios",
				descripcion: "Cumplimiento de normas cooperativas",
			},
		],
	},
	{
		id: 4,
		numero: "IV",
		titulo: "Órganos de Administración",
		contenido: [
			"Asamblea General de Socios: máximo órgano de decisión",
			"Consejo Directivo: administración y representación",
			"Junta de Vigilancia: supervisión y control",
			"Gerencia General: ejecución de políticas",
			"Comités especializados: apoyo en áreas específicas",
		],
		seccionesDetalladas: [
			{
				titulo: "Funciones de la Asamblea",
				descripcion:
					"Decisiones estratégicas y revisión de resultados",
			},
			{
				titulo: "Estructura Directiva",
				descripcion: "Presidente, directores y gerente general",
			},
			{
				titulo: "Comités de Apoyo",
				descripcion: "Auditoría, riesgos, crédito y otras áreas",
			},
		],
	},
	{
		id: 5,
		numero: "V",
		titulo: "Patrimonio y Excedentes",
		contenido: [
			"Capital social aportado por socios",
			"Fondos de reserva obligatoria",
			"Fondos de educación cooperativa",
			"Excedentes distribuidos según políticas aprobadas",
			"Incremento de patrimonio anual mediante retenciones",
		],
		seccionesDetalladas: [
			{
				titulo: "Composición Patrimonial",
				descripcion: "Capital, fondos y reservas",
			},
			{
				titulo: "Distribución de Excedentes",
				descripcion: "Criterios y porcentajes establecidos",
			},
			{
				titulo: "Fondos de Destino Específico",
				descripcion: "Educación, seguridad social y expansión",
			},
		],
	},
	{
		id: 6,
		numero: "VI",
		titulo: "Disolución y Liquidación",
		contenido: [
			"La cooperativa se disuelve por decisión de asamblea",
			"Cumplimiento de obligaciones antes de liquidación",
			"Distribución del patrimonio según normas",
			"Liquidador designado por asamblea",
			"Procedimiento transparente y documentado",
		],
		seccionesDetalladas: [
			{
				titulo: "Causales de Disolución",
				descripcion: "Decisión de socios y causas legales",
			},
			{
				titulo: "Proceso de Liquidación",
				descripcion: "Cierre ordenado de operaciones",
			},
			{
				titulo: "Distribución de Bienes",
				descripcion: "Criterios legales y equitativos",
			},
		],
	},
];

export const principiosCooperativistas = [
	{
		numero: "1",
		titulo: "Adhesión Voluntaria",
		descripcion:
			"Asociación abierta a todas las personas sin restricciones",
	},
	{
		numero: "2",
		titulo: "Gestión Democrática",
		descripcion:
			"Los miembros participan activamente en la toma de decisiones",
	},
	{
		numero: "3",
		titulo: "Participación Económica",
		descripcion: "Los miembros aportan equitativamente al capital",
	},
	{
		numero: "4",
		titulo: "Autonomía e Independencia",
		descripcion: "Autogobierno con responsabilidad ante los miembros",
	},
	{
		numero: "5",
		titulo: "Educación y Formación",
		descripcion: "Compromiso con la educación cooperativista",
	},
	{
		numero: "6",
		titulo: "Cooperación entre Cooperativas",
		descripcion:
			"Trabajo conjunto para fortalecer el movimiento cooperativista",
	},
];
