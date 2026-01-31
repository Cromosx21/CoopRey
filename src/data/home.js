import {
  Shield,
  Clock,
  Users,
  Sparkles,
  Award,
  HeartHandshake,
  Wallet,
  PiggyBank,
  CreditCard,
  TrendingUp,
  Home,
  Quote,
  Star,
  CheckCircle,
  Building
} from "lucide-react";

export const heroData = {
  badge: "Más de 25 años de confianza",
  title: "Tu futuro",
  titleHighlight: "comienza hoy",
  description:
    "Somos una cooperativa moderna que combina la solidez de la experiencia con la innovación que necesitas para alcanzar tus metas financieras.",
  ctaText: "Hazte Socio",
  ctaLink: "#hazte-socio",
};

export const services = [
  {
    icon: PiggyBank,
    title: "Cuentas de Ahorro",
    description:
      "Haz crecer tu dinero con tasas de interés competitivas y retiros flexibles.",
    gradient: "from-emerald-500 to-emerald-600",
    color: "emerald",
    href: "/ahorros",
  },
  {
    icon: CreditCard,
    title: "Créditos",
    description:
      "Financiamiento accesible para tus proyectos personales y empresariales.",
    gradient: "from-yellow-500 to-yellow-600",
    color: "yellow",
    href: "/creditos",
  },
  {
    icon: Home,
    title: "Crédito Hipotecario",
    description:
      "Convierte el sueño de tu casa propia en realidad con nuestros planes flexibles.",
    gradient: "from-emerald-600 to-teal-600",
    color: "teal",
    href: "/creditos",
  },
  {
    icon: TrendingUp,
    title: "Inversiones",
    description:
      "Multiplica tu capital con opciones de inversión seguras y rentables.",
    gradient: "from-yellow-600 to-orange-500",
    color: "orange",
    href: "/ahorros",
  },
  {
    icon: Wallet,
    title: "Aportaciones",
    description:
      "Participa activamente en la cooperativa y disfruta de beneficios exclusivos.",
    gradient: "from-teal-500 to-emerald-600",
    color: "teal",
    href: "/nosotros",
  },
  {
    icon: Users,
    title: "Crédito Grupal",
    description:
      "Soluciones de financiamiento colectivo para grupos solidarios.",
    gradient: "from-orange-500 to-yellow-500",
    color: "orange",
    href: "/creditos",
  },
];

export const benefits = [
  {
    icon: Shield,
    title: "Seguridad Garantizada",
    description:
      "Tus ahorros están protegidos con las más altas medidas de seguridad y regulación.",
  },
  {
    icon: Clock,
    title: "Disponibilidad 24/7",
    description:
      "Accede a tus servicios en cualquier momento y desde cualquier lugar.",
  },
  {
    icon: Users,
    title: "Atención Personalizada",
    description:
      "Un equipo dedicado que entiende tus necesidades y te acompaña en cada paso.",
  },
  {
    icon: Sparkles,
    title: "Tasas Competitivas",
    description:
      "Benefíciate de las mejores tasas del mercado en ahorros y créditos.",
  },
  {
    icon: Award,
    title: "Beneficios Exclusivos",
    description:
      "Accede a promociones, sorteos y ventajas reservadas para nuestros socios.",
  },
  {
    icon: HeartHandshake,
    title: "Compromiso Social",
    description:
      "Formamos parte de una cooperativa que reinvierte en la comunidad.",
  },
];

export const stats = [
  {
    icon: TrendingUp,
    value: "+25",
    label: "Años de experiencia",
    suffix: "",
    color: "from-emerald-500 to-emerald-600",
  },
  {
    icon: Users,
    value: "15,000",
    label: "Socios activos",
    suffix: "+",
    color: "from-yellow-500 to-yellow-600",
  },
  {
    icon: Building,
    value: "12",
    label: "Agencias a nivel nacional",
    suffix: "",
    color: "from-teal-500 to-emerald-600",
  },
  {
    icon: Award,
    value: "98",
    label: "Satisfacción del cliente",
    suffix: "%",
    color: "from-orange-500 to-yellow-500",
  },
];

export const testimonials = [
  {
    name: "María González",
    role: "Empresaria",
    image:
      "https://images.unsplash.com/photo-1752650143167-2e2c258fca1e?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkaXZlcnNlJTIwcGVvcGxlJTIwc2F2aW5nJTIwbW9uZXklMjBoYXBweXxlbnwxfHx8fDE3Njk3MzM5NzN8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content:
      "Gracias a la Cooperativa Niño Rey pude hacer realidad mi sueño de abrir mi propio negocio. El proceso fue rápido y el acompañamiento excepcional.",
    rating: 5,
  },
  {
    name: "Carlos Ramírez",
    role: "Profesional Independiente",
    image:
      "https://images.unsplash.com/photo-1642257834579-eee89ff3e9fd?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxzbWFsbCUyMGJ1c2luZXNzJTIwb3duZXIlMjBzdWNjZXNzfGVufDF8fHx8MTc2OTczMzk3M3ww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content:
      "Las tasas de ahorro son las mejores que encontré. Además, el equipo siempre está dispuesto a ayudar y orientar en cada decisión financiera.",
    rating: 5,
  },
  {
    name: "Ana Martínez",
    role: "Madre de Familia",
    image:
      "https://images.unsplash.com/photo-1692459444402-c52d510ef57a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx5b3VuZyUyMGxhdGluYSUyMHByb2Zlc3Npb25hbCUyMGNvbmZpZGVudHxlbnwxfHx8fDE3Njk3MzM5NzJ8MA&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral",
    content:
      "Con el crédito hipotecario de Niño Rey, finalmente pudimos tener nuestra casa propia. El proceso fue claro y sin complicaciones.",
    rating: 5,
  },
];

export const ctaBenefits = [
  "Sin costos de apertura",
  "Respuesta en menos de 48 horas",
  "Asesoría financiera gratuita",
  "Acceso inmediato a beneficios",
];

