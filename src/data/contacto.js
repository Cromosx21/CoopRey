import { MessageSquare, Phone, Mail } from "lucide-react";

export const contactHeroData = {
	badge: "Estamos para ayudarte",
	badgeIcon: MessageSquare,
	title: "¿Cómo podemos",
	titleHighlight: "ayudarte?",
	description:
		"Contáctanos a través de nuestros múltiples canales. Estamos aquí para responder tus preguntas y servirte mejor.",
	image: "https://images.unsplash.com/photo-1596524430615-b46475ddff6e?q=80&w=1200&h=800&fit=crop",
};

export const contactChannels = [
	{
		icon: Phone,
		title: "Teléfono",
		subtitle: "Llamadas de lunes a viernes",
		action: "066 284760 / 979 585 886",
		href: "tel:+51066284760",
	},
	{
		icon: Mail,
		title: "Email",
		subtitle: "Respuesta en 24 horas",
		action: "Por asignar",
		href: "#",
	},
	{
		icon: MessageSquare,
		title: "WhatsApp",
		subtitle: "Disponible en nuestro sitio",
		action: "979 585 886",
		href: "https://wa.me/51979585886",
	},
];

export const sedes = [
	{
		id: 1,
		nombre: "Sede Principal Huamanga",
		tipo: "Oficina Administrativa",
		direccion: "MZA. C LOTE. 07 URB. SECTOR EDUCACION (MERCADO NERY GARCIA) AYACUCHO - HUAMANGA – AYACUCHO",
		telefono: "066 284760 / 979 585 886",
		email: "Por asignar",
		horarios: "Lun - Vier: 8:30 AM - 1:00 PM\n2:00 PM - 6:00 PM",
		icono: "🏢",
		destacada: true,
	},
	{
		id: 2,
		nombre: "Agencia Relave",
		tipo: "Oficina de Atención",
		direccion: "Avenida oro, barrio los ángeles Mz. G1 Lt.10",
		telefono: "930 451 455",
		email: "Por asignar",
		horarios: "Lun - Vier: 8:30 AM - 1:00 PM\n2:00 PM - 6:00 PM",
		icono: "🏦",
		destacada: false,
	},
	{
		id: 3,
		nombre: "Agencia Pausa",
		tipo: "Oficina de Atención",
		direccion: "AV.28 DE JULIO Nº 939",
		telefono: "927 383 813 / 990 919 254",
		email: "Por asignar",
		horarios: "Lun - Vier: 8:30 AM - 1:00 PM\n2:00 PM - 6:00 PM",
		icono: "🏬",
		destacada: false,
	},
	{
		id: 4,
		nombre: "Agencia Coracora",
		tipo: "Oficina de Atención",
		direccion: "JR. MIGUEL GRAU Nº 513",
		telefono: "990 919 265",
		email: "Por asignar",
		horarios: "Lun - Vier: 8:30 AM - 1:00 PM\n2:00 PM - 6:00 PM",
		icono: "🏪",
		destacada: false,
	},
];
