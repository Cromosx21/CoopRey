# AGENTS.md - CoopRey Development Guide

This file provides guidelines for AI agents working on this codebase.

## Project Overview

- **Name**: Cooperativa de Ahorro y Crédito Niño Rey - Website
- **Stack**: React 18 + Vite + Tailwind CSS v4 + Motion (Framer Motion)
- **Language**: JavaScript (JSX)
- **Type System**: None (plain JavaScript)

---

## Build & Development Commands

```bash
# Install dependencies
npm install

# Start development server (http://localhost:5173)
npm run dev

# Build for production (outputs to dist/)
npm run build

# Preview production build locally
npm run preview
```

**Note**: No test framework is currently configured. There are no tests in this project.

---

## Project Structure

```
src/
├── components/
│   ├── common/       # Header, Footer, WhatsAppButton
│   ├── sections/     # HeroSection, BenefitsSection, ServicesSection, etc.
│   ├── ui/           # Reusable UI components (SectionHeading)
│   ├── ahorros/     # Savings-related components
│   ├── requisitos/   # Requirements components
│   └── nosotros/    # About page components
├── data/             # Static JSON/JS data files
├── layouts/          # MainLayout
├── pages/           # Page components (Home, Nosotros, Creditos, etc.)
├── styles/          # globals.css (Tailwind v4 config)
├── App.jsx          # Root component with SPA routing
└── main.jsx         # Entry point
```

---

## Code Style Guidelines

### General Principles

- Keep files focused and reasonably sized (refactor large components)
- Use functional components with hooks exclusively
- Prefer early returns for conditionals
- Extract repeated JSX into reusable components

### Naming Conventions

- **Files**: PascalCase (e.g., `Header.jsx`, `BeneficiosSplitScreen.jsx`)
- **Components**: PascalCase matching filename (e.g., `export default function Header()`)
- **Functions/callbacks**: camelCase
- **Constants**: camelCase or UPPER_SNAKE_CASE for config objects
- **CSS Classes**: Tailwind utility classes (kebab-case)

### Imports

```javascript
// React core imports
import React, { useState, useEffect } from "react";

// Third-party imports (grouped)
import { Menu, X, Lock, ChevronDown } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

// Local imports (use explicit .jsx extension)
import MainLayout from "./layouts/MainLayout.jsx";
import Home from "./pages/Home.jsx";
```

- Order imports: React core → third-party → local components
- Use named exports for utilities, default for components

### Formatting

- Use **tabs** for indentation (not spaces)
- No trailing commas
- Use double quotes for strings
- Max line length: ~100 characters (soft wrap)
- Add blank lines between logical sections within functions

### Component Structure

```jsx
import React, { useState, useEffect } from "react";
import { Icon } from "lucide-react";
import { motion } from "motion/react";

export default function ComponentName() {
  // State hooks first
  const [state, setState] = useState(initialValue);

  // Effects
  useEffect(() => {
    // effect logic
    return () => cleanup;
  }, []);

  // Event handlers
  const handleClick = () => {};

  // Render
  return (
    <div className="...">
      {/* JSX content */}
    </div>
  );
}
```

### Tailwind CSS Usage

- Use Tailwind v4 syntax (`@import "tailwindcss"`)
- Custom theme variables defined in `src/styles/globals.css`
- Use `clsx` and `tailwind-merge` (`cn()`) for conditional classes
- Avoid arbitrary values; use theme tokens instead

### Animations

- Use **Motion** (import from `motion/react`) for animations
- Common patterns: `motion.div`, `AnimatePresence`, `whileHover`, `whileTap`
- Keep animations subtle and performant

### Routing

This project uses **custom SPA routing** (not react-router):

```jsx
// In App.jsx
const navigate = (path) => {
  window.history.pushState({}, "", path);
  setCurrentPage(path);
  window.scrollTo(0, 0);
};

// Use href for links, not navigate() function
<a href="/page">Link</a>
```

### Error Handling

- Use try/catch for async operations
- Add console.error with context for debugging
- Consider loading states for async data

### TypeScript

- This project does NOT use TypeScript
- If adding types is needed, consider migrating to `.tsx` files

---

## Design Guidelines

### Brand Colors (Tailwind)

- Primary: Emerald (`text-emerald-600`, `bg-emerald-500`)
- Secondary: Yellow/gold accents
- Background: White/gray scale

### Typography

- Base font size: 16px
- Headings: Use Tailwind text utilities (`text-2xl`, `text-xl`, etc.)
- Font weights: `font-medium` (500) for headings, `font-normal` (400) for body

### Responsive Design

- Mobile-first approach
- Use `lg:` and `xl:` breakpoints for desktop
- Test on 320px, 768px, 1024px, 1440px widths

---

## Common Patterns

### Conditional Classes

```jsx
<div className={`base-class ${isActive ? "active-class" : "inactive-class"}`}>
```

### Animation Variants

```jsx
<motion.div
  initial={{ opacity: 0, y: 10 }}
  animate={{ opacity: 1, y: 0 }}
  transition={{ duration: 0.2, delay: index * 0.05 }}
>
```

### Event Listeners Cleanup

```jsx
useEffect(() => {
  const handler = () => {};
  window.addEventListener("event", handler);
  return () => window.removeEventListener("event", handler);
}, []);
```

---

## File Extensions

- Components: `.jsx`
- Utilities/data: `.js`
- Styles: `.css`
- Config: `.js` or `.ts` (vite uses `.ts`)

---

## What to Avoid

- Do NOT use className strings longer than ~150 characters (refactor with `cn()`)
- Do NOT add new npm packages without checking existing dependencies in `package.json`
- Do NOT use CSS files (use Tailwind utilities or inline styles sparingly)
- Do NOT add comments explaining obvious code
- Do NOT create unnecessary wrapper components

---

## Useful File References

- Routing: `src/App.jsx`
- Tailwind config: `src/styles/globals.css`
- Layout: `src/layouts/MainLayout.jsx`
- Header: `src/components/common/Header.jsx`
