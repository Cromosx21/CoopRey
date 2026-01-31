import { FileText } from "lucide-react";

export const requisitosHeroData = {
	badge: "Requisitos y Proceso",
	badgeIcon: FileText,
	title: "¿Qué necesitas para",
	titleHighlight: "ser socio?",
	description:
		"Te guiamos paso a paso en el proceso de incorporación a nuestra cooperativa",
	image: "https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=600&fit=crop",
};

export const procesoPasos = [
	{
		numero: "1",
		titulo: "Reúne tus Documentos",
		descripcion:
			"Prepara la documentación necesaria según tu tipo de solicitud",
		detalles: [
			"Cédula de identidad",
			"Comprobantes de ingresos",
			"Recibo de servicios",
		],
	},
	{
		numero: "2",
		titulo: "Presenta tu Solicitud",
		descripcion: "Visita nuestras oficinas o inicia el proceso en línea",
		detalles: [
			"Llenado de formulario",
			"Entrega de documentos",
			"Entrevista inicial",
		],
	},
	{
		numero: "3",
		titulo: "Verificación y Análisis",
		descripcion:
			"Evaluamos tu perfil para garantizar tu seguridad financiera",
		detalles: [
			"Revisión de historial",
			"Análisis de capacidad",
			"Validación de datos",
		],
	},
	{
		numero: "4",
		titulo: "¡Bienvenido Socio!",
		descripcion:
			"Formaliza tu ingreso y comienza a disfrutar los beneficios",
		detalles: ["Firma de contrato", "Aporte inicial", "Entrega de carnet"],
	},
];

export const requisitosCorporativos = [
	{
		id: 1,
		titulo: "Documentos Personales",
		items: [
			"Cédula de identidad vigente (frente y reverso)",
			"Cédula de identidad original para verificación",
			"Fotocopia de pasaporte (si es extranjero)",
			"Comprobante de domicilio reciente (últimos 3 meses)",
		],
	},
	{
		id: 2,
		titulo: "Documentos de Ingresos",
		items: [
			"Último recibo de salario o pensión",
			"Certificado de ingresos del empleador",
			"Declaración de impuestos (últimos 2 años)",
			"Estados de cuenta bancarios (últimos 3 meses)",
		],
	},
	{
		id: 3,
		titulo: "Documentos de Patrimonio",
		items: [
			"Comprobante de propiedad inmueble",
			"Póliza de vehículo (si aplica)",
			"Estados de inversiones o acciones",
			"Declaración de bienes",
		],
	},
];

export const requisitosPorProducto = [
	{
		id: 1,
		producto: "Crédito Personal",
		requisitos: [
			"Ser mayor de edad (18 años)",
			"Tener cédula vigente",
			"Comprobante de ingresos",
			"Referencias personales o laborales",
			"Comprobante de domicilio",
			"No tener deudas vencidas",
			"Pago de cuota de ingreso",
		],
		documentos: [
			"2 fotocopias de cédula",
			"Comprobante de ingresos (último mes)",
			"Comprobante de servicios (agua, luz, internet)",
			"Formulario de solicitud completado",
		],
		plazo: "3-5 días hábiles",
	},
	{
		id: 2,
		producto: "Crédito Hipotecario",
		requisitos: [
			"Ser mayor de edad",
			"Ciudadanía comprobada",
			"Ingresos estables comprobables",
			"Aval o garantía hipotecaria",
			"Estar al día con obligaciones financieras",
			"Crédito limpio sin moras",
			"Antigüedad mínima de 2 años como socio",
		],
		documentos: [
			"Cédula de identidad",
			"Escritura o promesa de compra del inmueble",
			"Avalúo fiscal del inmueble",
			"Últimos 3 meses de comprobantes de ingresos",
			"Últimos 3 meses de estados de cuenta",
			"Comprobante de patrimonio",
			"Declaración de impuestos (últimos 2 años)",
		],
		plazo: "15-30 días",
	},
	{
		id: 3,
		producto: "Crédito Empresarial",
		requisitos: [
			"Ser dueño o representante legal de la empresa",
			"Empresa registrada y formal",
			"Mínimo 2 años de operación",
			"Estados financieros auditados",
			"Plan de inversión documentado",
			"Garantías empresariales o personales",
			"Buen historial crediticio",
		],
		documentos: [
			"Cédula del representante legal",
			"Cédula de la empresa",
			"Últimos 3 años de balances",
			"Declaración de impuestos empresarial",
			"Presupuesto de inversión",
			"Descripción del proyecto",
			"Estados de cuenta del negocio",
		],
		plazo: "10-20 días",
	},
];
