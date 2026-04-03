import {
	Shield,
	Users,
	Heart,
	Target,
	Award,
	Lightbulb,
	Handshake,
	Star,
	Globe,
	GraduationCap,
	Leaf,
	Linkedin,
	Mail,
} from "lucide-react";

export const nosotrosHeroData = {
	badge: "Conoce nuestra institución",
	title: "Somos una",
	titleHighlight: "cooperativa",
	description:
		"La Cooperativa de Ahorro y Crédito Niño Rey de Huamanga - Ayacucho fomenta la cooperación entre sus socios, brindando servicios financieros de calidad con soluciones mancomunadas.",
};

export const quienesSomosData = {
	badge: "¿Quiénes Somos?",
	title: "Cooperativa de Ahorro y Crédito Niño Rey",
	subtitle: "Solidez financiera y desarrollo cooperativo",
	content: [
		"La Cooperativa de Ahorro y Crédito Niño Rey de Huamanga - Ayacucho (COOPAC Niño Rey) fue fundada el 16 de setiembre de 2015 en la ciudad de Huamanga, región Ayacucho, como una iniciativa orientada a promover el ahorro, facilitar el acceso al crédito y contribuir al desarrollo económico y social de sus socios, bajo los principios del cooperativismo, la solidaridad y la ayuda mutua.",
		"La cooperativa cuenta con agencias en Huamanga, Coracora, Pausa y Relave, atendiendo a socios de zonas urbanas y rurales.",
	],
	features: [
		{
			icon: Target,
			title: "Misión institucional",
			description:
				"Fomentar la cooperación entre sus socios, brindando servicios financieros de calidad con soluciones mancomunadas.",
		},
		{
			icon: Award,
			title: "Visión institucional",
			description:
				"Ser una cooperativa con solidez financiera, contribuyendo eficazmente en el desarrollo de nuestros socios, su familia y su comunidad.",
		},
	],
};

export const valores = [
	{
		icon: Heart,
		title: "Solidaridad",
		description:
			"Promovemos el apoyo mutuo entre nuestros socios para mejorar su bienestar económico y social.",
		color: "from-red-500 to-pink-500",
	},
	{
		icon: Handshake,
		title: "Ayuda Mutua",
		description:
			"Nuestros socios trabajan de manera conjunta para alcanzar objetivos comunes mediante la cooperación.",
		color: "from-emerald-500 to-teal-600",
	},
	{
		icon: Users,
		title: "Compromiso con la Comunidad",
		description:
			"Contribuimos al desarrollo económico y social de las comunidades donde operamos.",
		color: "from-blue-500 to-cyan-500",
	},
	{
		icon: Shield,
		title: "Responsabilidad",
		description:
			"Actuamos con responsabilidad en la gestión de los recursos confiados por nuestros socios.",
		color: "from-purple-500 to-indigo-500",
	},
	{
		icon: Lightbulb,
		title: "Educación Cooperativa",
		description:
			"Impulsamos la formación e información permanente para fortalecer el cooperativismo.",
		color: "from-yellow-500 to-orange-500",
	},
	{
		icon: Star,
		title: "Cooperación",
		description:
			"Fomentamos la colaboración entre cooperativas para fortalecer el sistema cooperativo.",
		color: "from-amber-500 to-yellow-500",
	},
];

export const compromisos = [
	{
		icon: Users,
		title: "Desarrollo de los socios",
		description:
			"Promovemos el desarrollo económico y social de nuestros socios y sus familias mediante servicios financieros cooperativos.",
		image: "/images/Desarrollo.webp",
	},
	{
		icon: GraduationCap,
		title: "Educación cooperativa",
		description:
			"Impulsamos la educación y capacitación permanente para fortalecer la cultura financiera y cooperativa de nuestros socios.",
		image: "/images/Educacion.webp",
	},
	{
		icon: Handshake,
		title: "Compromiso con la comunidad",
		description:
			"Contribuimos al desarrollo local brindando servicios financieros responsables en beneficio de la comunidad.",
		image: "/images/Compromiso.webp",
	},
];

export const equipo = [
	{
		name: "Edgard Maldonado Córdova",
		role: "Gerente General",
		image: "/images/consejo/EDGAR_MALDONADO_CORDOVA.webp",
		description:
			"Responsable de la dirección estratégica de la organización. Lidera la toma de decisiones, supervisa todas las áreas operativas y garantiza el cumplimiento de los objetivos institucionales.",
	},
	{
		name: "Koper Aguilar Huillcahuaman",
		role: "Sub Gerente",
		image: "/images/consejo/KOPER_AGUILAR_HUILLCAHUAMAN.webp",
		description:
			"Encargado de apoyar en la gestión administrativa y operativa. Coordina las actividades internas y asegura la correcta ejecución de los planes establecidos por la gerencia.",
	},
	{
		name: "Angie Maldonado Valenzuela",
		role: "Jefe de Finanzas",
		image: "/images/consejo/ANGIE_MALDONADO_VALENZUELA.webp",
		description:
			"Responsable de la planificación financiera, control de presupuestos y gestión de recursos económicos. Garantiza la sostenibilidad financiera de la organización.",
	},
	{
		name: "Camilo Benito Ñaccha Casaverde",
		role: "Asesor Legal Interno",
		image: "/images/consejo/CAMILO_BENITO_NACCHA_CASAVERDE.webp",
		description:
			"Brinda asesoría jurídica en temas legales y normativos. Supervisa el cumplimiento de las leyes vigentes y protege los intereses legales de la organización.",
	},
	{
		name: "Maribel Calderón Ordóñez",
		role: "Asistente de Gestión",
		image: "/images/consejo/MARIBEL_CALDERON_ORDONEZ.webp",
		description:
			"Apoya en la organización administrativa, gestión documental y coordinación de actividades internas. Facilita la comunicación entre áreas y contribuye a la eficiencia operativa.",
	},
];

export const equipoPorAgencia = [
	{
		id: "directorio-coopac-2026",
		titulo: "Directorio de la COOPAC 2026",
		miembros: [
			{
				id: "dir-1",
				name: "EDGARD MALDONADO CORDOVA",
				image: "/images/consejo/EDGAR_MALDONADO_CORDOVA.webp",
				role: "GERENCIA",
			},
			{
				id: "dir-2",
				name: "KOPER AGUILAR HUILLCAHUAMAN",
				image: "/images/consejo/KOPER_AGUILAR_HUILLCAHUAMAN.webp",
				role: "SUB GERENCIA",
			},
			{
				id: "dir-3",
				name: "MARIBEL CALDERON ORDOÑEZ",
				image: "/images/consejo/MARIBEL_CALDERON_ORDONEZ.webp",
				role: "ASISTENTE DE GESTION",
			},
			{
				id: "dir-4",
				name: "ANGIE MALDONADO VELENZUELA",
				image: "/images/consejo/ANGIE_MALDONADO_VALENZUELA.webp",
				role: "JEFE DE FINANZAS",
			},
			// {
			// 	id: "dir-5",
			// 	name: "MIGUEL ARTURO JIMENEZ BRAVO",
			// 	image: "/images/consejo/MIGUEL_ARTURO_JIMENEZ_BRAVO.webp",
			// 	role: "ASESOR LEGAL EXTERNO",
			// },
			{
				id: "dir-6",
				name: "CAMILO BENITO ÑACCHA CASAVERDE",
				image: "/images/consejo/CAMILO_BENITO_NACCHA_CASAVERDE.webp",
				role: "ASESOR LEGAL INTERNO",
			},
			/* 			{ id: "dir-7", name: "JHOANA TOTOCAYO HUAYNA", role: "CONTADORA" },
			 */ /* {
				id: "dir-8",
				name: "MELANIA CHOQQUE MAMANI",
				role: "ASISTENTE CONTABLE",
			}, */
			/* {
				id: "dir-9",
				name: "ELVIS PAQUIYAURI DIAZ",
				role: "UNIDAD DE RIESGOS",
			}, */
			/* {
				id: "dir-10",
				name: "YSAEL ELIAS GUTIERREZ QUISPE",
				role: "AUDITOR INTERNO",
			}, */
			{
				id: "dir-11",
				name: "EDERSON CISNEROS RODRIGUEZ",
				image: "/images/consejo/EDERSON_CISNEROS_RODRIGUEZ.webp",
				role: "IMAGEN INSTITUCIONAL",
			},
		],
	},
	{
		id: "oficina-principal",
		titulo: "Oficina Principal",
		miembros: [
			{
				id: "op-1",
				name: "GYINA NAYDA YUCRA CHAMBI",
				image: "/images/Personal/Principal/GYINA_NAYDA_YUCRA_CHAMBI.webp",
				role: "OPERACIONES CAJA",
			},
			{
				id: "op-2",
				name: "ROY ANTHONY CENTENO ORÉ",
				image: "/images/Personal/Principal/ROY_ANTHONY_CENTENO_ORE.webp",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "op-3",
				name: "ANABEL ANTUANEL RUIZ CHACHAYMA",
				image: "/images/Personal/Principal/ANABEL_ANTUANEL_RUIZ_CHACHAYMA.webp",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "op-4",
				name: "EDWIN ELMER LEON MOLINA",
				image: "/images/Personal/Principal/EDWIN_ELMER_LEON_MOLINA.webp",
				role: "GESTOR DE RECUPERACIONES",
			},
			{
				id: "op-5",
				name: "SANDIVEL QUISPE GUTIERREZ",
				image: "/images/Personal/Principal/SANDIVEL_QUISPE_GUTIERREZ.webp",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "op-6",
				name: "YHELSIN LAINES GUILLEN",
				image: "/images/Personal/Principal/YHELSIN_LAINES_GUILLEN.webp",
				role: "GESTOR DE RECUPERACIONES",
			},
			{
				id: "op-7",
				name: "DELIA VILMA QUISPE TACURI",
				image: "/images/Personal/Principal/DELIA_VILMA_QUISPE_TACURI.webp",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "op-8",
				name: "JACINTO CESAR BAUTISTA LLACTAHUAMAN",
				image: "/images/Personal/Principal/JACINTO_CESAR_BAUTISTA_LLACTAHUAMAN.webp",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "op-9",
				name: "HENRY FLORIANO RAMIREZ ALMEIDA",
				image: "/images/Personal/Principal/HENRY_FLORIANO_RAMIREZ_ALMEIDA.webp",
				role: "ADMINISTRADOR/ANALISTA DE CREDITOS",
			},
			{
				id: "op-10",
				name: "JOAQUIN HUAMAN VENTURA",
				image: "/images/Personal/Principal/JOAQUIN_HUAMAN_VENTURA.webp",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "op-11",
				name: "ROSALINA CONDORI FARFAN",
				image: "/images/Personal/Principal/ROSALINA_CONDORI_FARFAN.webp",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "op-12",
				name: "VILMA MALDONADO CORDOVA",
				image: "/images/Personal/Principal/VILMA_MALDONADO_CORDOVA.webp",
				role: "SUPERVISOR DE CREDITOS",
			},
			{
				id: "op-13",
				name: "GLICERIO MALDONADO CORDOVA",
				image: "/images/Personal/Principal/GLICERIO_MALDONADO_CORDOVA.webp",
				role: "PERSONAL DE SEGURIDAD",
			},
		],
	},
	{
		id: "agencia-cora-cora",
		titulo: "Agencia Cora Cora",
		miembros: [
			{
				id: "cc-1",
				name: "JESENIA ANDREA DIAZ ROJAS",
				role: "ADMINISTRADORA/ANALISTA DE CREDITOS",
			},
			{
				id: "cc-2",
				name: "JUAN FERNANDO CAUTI ARIAS",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "cc-3",
				name: "MARIA ANTONIA AMAO QUISPE",
				role: "ÁREA DE OPERACIONES - CAJA",
			},
			{
				id: "cc-4",
				name: "DIEGO ANDRES ROMERO RAMOS",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "cc-5",
				name: "DAVID BENITES CANCIO",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "cc-7",
				name: "YORDAN ARIAS ANAMPA",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "cc-8",
				name: "ROXANA MARIA ZARATE HUARCAYA",
				role: "PROMOTOR COOPERATIVO",
			},
			{
				id: "cc-9",
				name: "ROSA AUGUSTINA PALOMINO FLORES",
				role: "ANALISTA DE CREDITOS",
			},
		],
	},
	{
		id: "agencia-pausa",
		titulo: "Agencia Pausa",
		miembros: [
			{
				id: "pa-1",
				name: "SANDY MILAGROS MOCHCCO LLAMOCA",
				role: "RECIBIDOR PAGADOR (CAJA)",
			},
			{
				id: "pa-2",
				name: "ALEX SOLGORRE CABRERA",
				role: "ADMINISTRADOR/ANALISTA DE CREDITOS",
			},
		],
	},
	{
		id: "agencia-relave",
		titulo: "Agencia Relave",
		miembros: [
			{
				id: "re-1",
				name: "DIANA LUCIA ALMIDON HUARCAYA",
				role: "ADMINISTRADORA/OPERACIONES",
			},
			{
				id: "re-2",
				name: "LUZ MARINA CHAUCCA SUAPANTA",
				role: "ANALISTA DE CREDITOS",
			},
			{
				id: "re-3",
				name: "ALAN YUCRA LLOCLLA",
				role: "ANALISTA DE CREDITOS",
			},
		],
	},
];
