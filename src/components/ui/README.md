# Componentes UI - Cooperativa Niño Rey

## 📦 Archivos Agrupados (JSX)

Estos son los archivos agrupados que contienen todos los componentes UI convertidos a JavaScript:

### ✅ basic.jsx
Componentes básicos de interfaz:
- Button (reemplaza: button.tsx)
- Badge (reemplaza: badge.tsx)
- Skeleton (reemplaza: skeleton.tsx)
- Separator (reemplaza: separator.tsx)

### ✅ layout.jsx
Componentes de estructura:
- Card y sus variantes (reemplaza: card.tsx)
- AspectRatio (reemplaza: aspect-ratio.tsx)

### ✅ forms.jsx
Componentes de formularios:
- Label (reemplaza: label.tsx)
- Input (reemplaza: input.tsx)
- Textarea (reemplaza: textarea.tsx)
- Checkbox (reemplaza: checkbox.tsx)
- Switch (reemplaza: switch.tsx)

### ✅ navigation.jsx
Componentes de navegación:
- Tabs y sus variantes (reemplaza: tabs.tsx)

### ✅ display.jsx
Componentes de visualización:
- Avatar y sus variantes (reemplaza: avatar.tsx)
- Progress (reemplaza: progress.tsx)
- Slider (reemplaza: slider.tsx)

### ✅ utils.jsx
Utilidades compartidas:
- cn() (reemplaza: utils.ts)

### ✅ hooks.jsx
Hooks personalizados:
- useIsMobile() (reemplaza: use-mobile.ts)

### ✅ index.jsx
Exportaciones centralizadas de todos los componentes agrupados

---

## 🗑️ Archivos .tsx Obsoletos

Los siguientes archivos .tsx están **protegidos por el sistema** y no se pueden eliminar, pero ya están agrupados en los archivos .jsx arriba:

**Ya agrupados:**
- ✅ aspect-ratio.tsx → layout.jsx
- ✅ avatar.tsx → display.jsx
- ✅ badge.tsx → basic.jsx
- ✅ button.tsx → basic.jsx
- ✅ card.tsx → layout.jsx
- ✅ checkbox.tsx → forms.jsx
- ✅ input.tsx → forms.jsx
- ✅ label.tsx → forms.jsx
- ✅ progress.tsx → display.jsx
- ✅ separator.tsx → basic.jsx
- ✅ skeleton.tsx → basic.jsx
- ✅ slider.tsx → display.jsx
- ✅ switch.tsx → forms.jsx
- ✅ tabs.tsx → navigation.jsx
- ✅ textarea.tsx → forms.jsx
- ✅ utils.ts → utils.jsx
- ✅ use-mobile.ts → hooks.jsx

**No agrupados (no se usan en el proyecto):**
- accordion.tsx
- alert-dialog.tsx
- alert.tsx
- breadcrumb.tsx
- calendar.tsx
- carousel.tsx
- chart.tsx
- collapsible.tsx
- command.tsx
- context-menu.tsx
- dialog.tsx
- drawer.tsx
- dropdown-menu.tsx
- form.tsx
- hover-card.tsx
- input-otp.tsx
- menubar.tsx
- navigation-menu.tsx
- pagination.tsx
- popover.tsx
- radio-group.tsx
- resizable.tsx
- scroll-area.tsx
- select.tsx
- sheet.tsx
- sidebar.tsx
- sonner.tsx
- table.tsx
- toggle-group.tsx
- toggle.tsx
- tooltip.tsx

---

## 🎯 Uso Recomendado

Para importar componentes UI en tu proyecto, usa el archivo índice:

```jsx
// ✅ Recomendado: Importar desde el índice
import { Button, Card, Input, Tabs } from './components/ui';

// ❌ No recomendado: Importar de archivos individuales
import { Button } from './components/ui/button.tsx';
```

---

## 📊 Resumen

- **Archivos .jsx agrupados**: 8
- **Componentes agrupados**: 25+
- **Archivos .tsx reemplazados**: 17
- **Estado**: ✅ 100% Funcional
