export const estadosFinancieros = [
	{
		año: 2025,
		secciones: [
			{
				id: "balance-general",
				titulo: "Balance general",
				descripcion:
					"Estados del balance general del año 2025. Publicación trimestral.",
				documentos: [
					{
						periodo: "Enero - Marzo",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/balance-general/enero-marzo.pdf",
					},
					{
						periodo: "Abril - Junio",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/balance-general/abril-junio.pdf",
					},
					{
						periodo: "Julio - Septiembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/balance-general/julio-septiembre.pdf",
					},
					{
						periodo: "Octubre - Diciembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/balance-general/octubre-diciembre.pdf",
					},
				],
			},
			{
				id: "estado-resultados",
				titulo: "Estado de resultados",
				descripcion:
					"Estados de resultados del año 2025. Publicación trimestral.",
				documentos: [
					{
						periodo: "Enero - Marzo",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/estado-de-resultados/enero-marzo.pdf",
					},
					{
						periodo: "Abril - Junio",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/estado-de-resultados/abril-junio.pdf",
					},
					{
						periodo: "Julio - Septiembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/estado-de-resultados/julio-septiembre.pdf",
					},
					{
						periodo: "Octubre - Diciembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2025/estado-de-resultados/octubre-diciembre.pdf",
					},
				],
			},
		],
	},
	{
		año: 2026,
		secciones: [
			{
				id: "balance-general",
				titulo: "Balance general",
				descripcion:
					"Estados del balance general del año 2026. Publicación trimestral.",
				documentos: [
					{
						periodo: "Enero - Marzo",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/balance-general/enero-marzo.pdf",
					},
					{
						periodo: "Abril - Junio",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/balance-general/abril-junio.pdf",
					},
					{
						periodo: "Julio - Septiembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/balance-general/julio-septiembre.pdf",
					},
					{
						periodo: "Octubre - Diciembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/balance-general/octubre-diciembre.pdf",
					},
				],
			},
			{
				id: "estado-resultados",
				titulo: "Estado de resultados",
				descripcion:
					"Estados de resultados del año 2026. Publicación trimestral.",
				documentos: [
					{
						periodo: "Enero - Marzo",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/estado-de-resultados/enero-marzo.pdf",
					},
					{
						periodo: "Abril - Junio",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/estado-de-resultados/abril-junio.pdf",
					},
					{
						periodo: "Julio - Septiembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/estado-de-resultados/julio-septiembre.pdf",
					},
					{
						periodo: "Octubre - Diciembre",
						tamaño: "PDF",
						url: "/docs/estados-financieros/2026/estado-de-resultados/octubre-diciembre.pdf",
					},
				],
			},
		],
	},
];

export const ratiosFinancieros = [
	{
		ratio: "Liquidez",
		value: "1.35",
		target: "≥ 1.20",
	},
	{
		ratio: "Morosidad",
		value: "2.10%",
		target: "≤ 3.00%",
	},
	{
		ratio: "Solvencia",
		value: "12.80%",
		target: "≥ 10.00%",
	},
	{
		ratio: "Rentabilidad",
		value: "6.20%",
		target: "≥ 5.00%",
	},
];

export const indicadoresFinancieros = [];

export const composicionActivos = [
	{ name: "Cartera de créditos", value: 58 },
	{ name: "Disponibilidades", value: 18 },
	{ name: "Inversiones", value: 14 },
	{ name: "Otros activos", value: 10 },
];

export const composicionPasivos = [
	{ name: "Depósitos", value: 72, monto: "S/. 0" },
	{ name: "Obligaciones", value: 18, monto: "S/. 0" },
	{ name: "Otros pasivos", value: 10, monto: "S/. 0" },
];
