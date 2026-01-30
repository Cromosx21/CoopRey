# CoopRey - Plataforma de Cooperativa de Ahorro y Crédito

> Sitio web moderno, responsivo y dinámico para cooperativa de ahorro y crédito.

Este es un proyecto completo desarrollado con React, Vite y Tailwind CSS.

## 🚀 Tecnologías Utilizadas

- **React 18** - Biblioteca de interfaz de usuario
- **Vite** - Bundler y servidor de desarrollo
- **Tailwind CSS v4** - Framework de utilidades CSS
- **Framer Motion** - Animaciones fluidas
- **Radix UI** - Componentes accesibles
- **Lucide React** - Iconos modernos

## 📁 Estructura del Proyecto

```
src/
├── main.jsx              # Punto de entrada de React
├── App.jsx              # Enrutador principal (SPA)
├── components/          # Componentes reutilizables
│   ├── Header.jsx       # Navegación
│   ├── Footer.jsx       # Pie de página
│   ├── HeroSection.jsx  # Sección principal
│   ├── ServicesSection.jsx
│   ├── ui/              # Componentes UI agrupados (botones, inputs, etc.)
│   ├── figma/           # Componentes de utilidad
│   └── nosotros/        # Componentes específicos de página
├── pages/               # Páginas (rutas)
│   ├── Home.jsx         # Página principal
│   ├── Nosotros.jsx     # La cooperativa
│   ├── Ahorros.jsx      # Productos de ahorro
│   └── Creditos.jsx     # Productos de crédito
└── styles/              # Estilos globales
```

## 🛣️ Rutas de Navegación

| Ruta        | Página         | Descripción                    |
| ----------- | -------------- | ------------------------------ |
| `/`         | Home           | Página principal con servicios |
| `/nosotros` | La Cooperativa | Información institucional      |
| `/ahorros`  | Ahorros        | Productos de ahorro            |
| `/creditos` | Créditos       | Productos crediticios          |

## ⚡ Primeros Pasos

### Instalación

```bash
npm install
```

### Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador.

### Build Producción

```bash
npm run build
```

### Previsualizar Build

```bash
npm run preview
```

## 🎨 Características Principales

✅ **Navegación SPA** - Sin recargas de página  
✅ **Responsive** - Funciona en desktop, tablet y móvil  
✅ **Animaciones** - Framer Motion para transiciones suaves  
✅ **Componentes Accesibles** - Radix UI  
✅ **Tailwind CSS** - Diseño moderno y limpio  
✅ **Formularios** - React Hook Form integrado  
✅ **Iconos** - Lucide React

## 📱 Diseño Responsive

- **Desktop** (1024px+)
- **Tablet** (768px - 1023px)
- **Mobile** (<768px)

## 🔗 Acceso Rápido

- [Home](http://localhost:3000/)
- [La Cooperativa](http://localhost:3000/nosotros)
- [Ahorros](http://localhost:3000/ahorros)
- [Créditos](http://localhost:3000/creditos)

## 📦 Dependencias Principales

- `react` - Biblioteca de UI
- `vite` - Bundler
- `tailwindcss` - Estilos CSS
- `framer-motion` - Animaciones
- `@radix-ui/*` - Componentes accesibles
- `lucide-react` - Iconos
- `react-hook-form` - Manejo de formularios

---

**Última actualización:** 29 de enero de 2026
