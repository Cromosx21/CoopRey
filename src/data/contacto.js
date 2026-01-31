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
		action: "+1 (555) 123-4567",
		href: "tel:+15551234567",
	},
	{
		icon: Mail,
		title: "Email",
		subtitle: "Respuesta en 24 horas",
		action: "info@cooprey.com",
		href: "mailto:info@cooprey.com",
	},
	{
		icon: MessageSquare,
		title: "Chat en Vivo",
		subtitle: "Disponible en nuestro sitio",
		action: "Inicia una conversación",
		href: "#",
	},
];

export const sedes = [
	{
		id: 1,
		nombre: "Sede Principal",
		tipo: "Oficina Administrativa",
		direccion: "Av. Principal 1500, Centro",
		telefono: "+1 (555) 123-4567",
		email: "info@cooprey.com",
		horarios: "Lun - Vier: 8:00 AM - 5:00 PM\nSáb: 9:00 AM - 1:00 PM",
		icono: "🏢",
		destacada: true,
	},
	{
		id: 2,
		nombre: "Sucursal Centro",
		tipo: "Oficina de Atención",
		direccion: "Calle 5 No. 250, Centro",
		telefono: "+1 (555) 234-5678",
		email: "sucursal.centro@cooprey.com",
		horarios: "Lun - Vier: 8:30 AM - 4:30 PM\nSáb: 9:30 AM - 12:00 PM",
		icono: "🏦",
		destacada: false,
	},
	{
		id: 3,
		nombre: "Sucursal Norte",
		tipo: "Oficina de Atención",
		direccion: "Av. Norte 800, Zona Residencial",
		telefono: "+1 (555) 345-6789",
		email: "sucursal.norte@cooprey.com",
		horarios: "Lun - Vier: 8:00 AM - 5:00 PM\nSáb: 9:00 AM - 1:00 PM",
		icono: "🏬",
		destacada: false,
	},
	{
		id: 4,
		nombre: "Sucursal Sur",
		tipo: "Oficina de Atención",
		direccion: "Av. Sur 1200, Centro Comercial",
		telefono: "+1 (555) 456-7890",
		email: "sucursal.sur@cooprey.com",
		horarios: "Lun - Vier: 9:00 AM - 5:30 PM\nSáb: 10:00 AM - 2:00 PM",
		icono: "🏪",
		destacada: false,
	},
	{
		id: 5,
		nombre: "Atención Virtual 24/7",
		tipo: "Servicio en Línea",
		direccion: "Disponible en www.cooprey.com",
		telefono: "+1 (555) 111-2222",
		email: "atencion.virtual@cooprey.com",
		horarios: "Disponible 24 horas, 7 días a la semana",
		icono: "💻",
		destacada: false,
	},
];
