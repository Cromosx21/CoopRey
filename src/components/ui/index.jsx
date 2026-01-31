// Archivo índice para facilitar las importaciones de componentes UI agrupados

// Componentes básicos
export {
	Button,
	buttonVariants,
	Badge,
	badgeVariants,
	Skeleton,
	Separator,
} from "./basic.jsx";

// Componentes de layout
export {
	Card,
	CardHeader,
	CardFooter,
	CardTitle,
	CardAction,
	CardDescription,
	CardContent,
	AspectRatio,
} from "./layout.jsx";

// Componentes de formularios
export { Label, Input, Textarea, Checkbox, Switch } from "./forms.jsx";

// Componentes de navegación
export { Tabs, TabsList, TabsTrigger, TabsContent } from "./navigation.jsx";

// Componentes de display
export {
	Avatar,
	AvatarImage,
	AvatarFallback,
	Progress,
	Slider,
} from "./display.jsx";

// Componentes de popover
export {
	HoverCard,
	HoverCardTrigger,
	HoverCardContent,
} from "./hover-card.jsx";

// Utilidades
export { cn } from "../../utils/cn";

// Hooks
export { useIsMobile } from "../../hooks/use-mobile";

// Componentes generales
export { default as SectionHeading } from "./SectionHeading.jsx";
