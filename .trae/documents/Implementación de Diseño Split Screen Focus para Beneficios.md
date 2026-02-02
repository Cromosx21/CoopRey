Voy a implementar el patrón de diseño "Split Screen Focus" para la sección de Beneficios Principales, reemplazando la cuadrícula actual por una experiencia de scroll interactiva y moderna.

### 1. Nuevo Componente: `BeneficiosSplitScreen.jsx`
Crearé un componente dedicado en `src/components/sections/BeneficiosSplitScreen.jsx` que contendrá toda la lógica de la pantalla dividida:

*   **Estructura Visual:**
    *   **Desktop:** Diseño de 2 columnas.
        *   **Izquierda (Sticky):** Ocupará el 50% del ancho y el 100% del alto de la ventana (`h-screen sticky top-0`). Mostrará la imagen del beneficio activo con transiciones suaves (`AnimatePresence` + `fade/scale`).
        *   **Derecha (Scrollable):** Contendrá la lista de beneficios con suficiente espaciado vertical para permitir un "foco" claro en cada elemento.
    *   **Móvil:** Diseño de 1 columna apilada. Desactivará el efecto sticky y mostrará la imagen junto a cada beneficio.

*   **Interacción (Core):**
    *   Usaré `framer-motion` (específicamente `useInView`) para detectar qué bloque de texto está en el centro de la pantalla.
    *   Al detectar un nuevo bloque, actualizará el estado `activeId`, lo que disparará el cambio de imagen en la columna izquierda.

*   **Datos:**
    *   Reutilizaré `beneficiosItems` de `src/data/beneficios.js`, que ya contiene las imágenes y textos necesarios.

### 2. Actualización de `Beneficios.jsx`
*   Importaré el nuevo componente `BeneficiosSplitScreen`.
*   Sustituiré la sección actual de "Benefits Grid" (la cuadrícula de tarjetas) por este nuevo componente.
*   Mantendré intactas las secciones de Hero, Beneficios Especiales y Testimonios.

### 3. Estilo y Atmósfera
*   **Imágenes:** Se mostrarán a pantalla completa en la columna izquierda, estilo "lifestyle".
*   **Tipografía:** Jerarquía clara con H2/H3 para la introducción y H4 para los beneficios, usando los estilos de Tailwind existentes.
*   **Feedback Visual:** El texto activo tendrá un estado de "resaltado" sutil (opacidad o color) para guiar la lectura.