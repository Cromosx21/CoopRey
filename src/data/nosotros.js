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
  Mail
} from "lucide-react";

export const nosotrosHeroData = {
  badge: "Conoce nuestra institución",
  title: "Somos una",
  titleHighlight: "cooperativa",
  description:
    "La Cooperativa de Ahorro y Crédito Niño Rey Huamanga fomenta la cooperación entre sus socios, brindando servicios financieros de calidad con soluciones mancomunadas.",
};


export const quienesSomosData = {
  badge: "¿Quiénes Somos?",
  title: "Cooperativa Niño Rey Huamanga",
  subtitle: "Solidez financiera y desarrollo cooperativo",
  content: [
    "La Cooperativa de Ahorro y Crédito Niño Rey Huamanga brinda servicios microfinancieros y complementarios orientados a mejorar la calidad de vida de sus socios en la región Ayacucho.",
    "Nuestra misión es fomentar la cooperación entre sus socios, brindando servicios financieros de calidad con soluciones mancomunadas.",
    "Nuestra visión es ser una cooperativa con solidez financiera, contribuyendo eficazmente en el desarrollo de nuestros socios, su familia y su comunidad.",
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
    image:
      "https://images.unsplash.com/photo-1763355873417-1e0926397851?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    icon: GraduationCap,
    title: "Educación cooperativa",
    description:
      "Impulsamos la educación y capacitación permanente para fortalecer la cultura financiera y cooperativa de nuestros socios.",
    image:
      "https://images.unsplash.com/photo-1758691736872-61a1f75fe2d5?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
  {
    icon: Handshake,
    title: "Compromiso con la comunidad",
    description:
      "Contribuimos al desarrollo local brindando servicios financieros responsables en beneficio de la comunidad.",
    image:
      "https://images.unsplash.com/photo-1759310610325-2c7cb621e5e3?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080",
  },
];

export const equipo = [
  {
    name: "Asamblea General de Socios",
    role: "Máximo órgano de gobierno",
    image: "/images/asamblea.png",
    description:
      "Es la máxima autoridad de la cooperativa, conformada por todos los socios, quienes participan en la toma de decisiones fundamentales para la institución.",
  },
  {
    name: "Consejo de Administración",
    role: "Órgano de dirección",
    image: "/images/consejo-administracion.png",
    description:
      "Responsable de la dirección estratégica y supervisión de la gestión institucional conforme a los principios cooperativos.",
  },
  {
    name: "Consejo de Vigilancia",
    role: "Órgano de control",
    image: "/images/consejo-vigilancia.png",
    description:
      "Supervisa la gestión administrativa y financiera, velando por el cumplimiento normativo y los intereses de los socios.",
  },
  {
    name: "Gerencia General",
    role: "Gestión ejecutiva",
    image: "/images/gerencia-general.png",
    description:
      "Ejecuta las decisiones estratégicas y administra las operaciones institucionales para el cumplimiento de los objetivos de la cooperativa.",
  },
];
