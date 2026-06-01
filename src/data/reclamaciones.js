export const reclamacionesInfo = {
	title: "Libro de Reclamaciones",
	subtitle: "Servicio de Atención de Reclamos y Quejas",
	description:
		"Estamos comprometidos con tu satisfacción. Registra tu reclamo o queja y recibe seguimiento permanente de tu caso.",
	numeroRUC: "20600851536",
	nombreEmpresa:
		"Cooperativa de Ahorro y Crédito Niño Rey de Huamanga - Ayacucho",
	direccion:
		"MZA. C LOTE. 07 URB. SECTOR EDUCACION (MERCADO NERY GARCIA) AYACUCHO - HUAMANGA – AYACUCHO",
	telefonoReclamos: "066 284760 / 979 585 886",
	emailReclamos: "atencionalsocio@coopacninorey.com.pe",
	emailLegal: "legal@coopacninorey.com.pe",
	horarioAtencion: "Lunes a Viernes: 8:30 AM - 1:00 PM / 3:00 PM - 6:00 PM",
	diasHabiles: "2 a 15 días hábiles",
};

export const tiposReclamo = [
	{
		id: "producto",
		label: "Reclamo sobre Producto/Servicio",
		description: "Problemas con cuentas, créditos o servicios ofrecidos",
		icon: "📋",
	},
	{
		id: "atencion",
		label: "Reclamo por Atención",
		description: "Problemas en la atención recibida",
		icon: "👥",
	},
	{
		id: "comisiones",
		label: "Reclamo sobre Comisiones",
		description: "Discrepancia en cobros de comisiones",
		icon: "💰",
	},
	{
		id: "transacciones",
		label: "Reclamo sobre Transacciones",
		description: "Problemas con transferencias o movimientos",
		icon: "💳",
	},
	{
		id: "informacion",
		label: "Reclamo sobre Información",
		description: "Información incorrecta o confusa",
		icon: "ℹ️",
	},
	{
		id: "otro",
		label: "Otro",
		description: "Otros tipos de reclamos",
		icon: "❓",
	},
];

export const estadosReclamo = {
	registrado: "Registrado",
	enRevision: "En Revisión",
	investigacion: "En Investigación",
	respondido: "Respondido",
	resuelto: "Resuelto",
	rechazado: "Rechazado",
};

export const reglamentoPeru = {
	title: "Normativa de Reclamaciones",
	items: [
		{
			titulo: "Derecho a Reclamar",
			descripcion:
				"Todo cliente tiene derecho a presentar reclamos sobre productos y servicios de forma gratuita.",
		},
		{
			titulo: "Plazo de Presentación",
			descripcion:
				"Puedes presentar reclamos hasta 60 días calendario después del hecho que lo origina.",
		},
		{
			titulo: "Resolución",
			descripcion:
				"La institución tiene 2 a 15 días hábiles para responder tu reclamo.",
		},
		{
			titulo: "Código de Reclamo",
			descripcion:
				"Recibirás un código único para hacer seguimiento a tu reclamo.",
		},
		{
			titulo: "Información Completa",
			descripcion:
				"Proporciona todos los detalles necesarios para una mejor investigación.",
		},
		{
			titulo: "Confidencialidad",
			descripcion:
				"Tus datos personales serán tratados conforme a la Ley de Protección de Datos Personales.",
		},
	],
};
