# Cooperativa de Ahorro y Crédito Niño Rey

Bienvenido al repositorio oficial del sitio web de la Cooperativa de Ahorro y Crédito Niño Rey. Este proyecto es una aplicación web moderna construida con React y Vite, diseñada para brindar información y servicios a nuestros socios y público en general.

## 🚀 Características Principales

*   **Diseño Moderno y Responsivo**: Interfaz de usuario adaptable a dispositivos móviles y de escritorio, con un diseño limpio y profesional.
*   **Información Institucional**: Secciones dedicadas a "Nosotros", "Productos y Servicios", "Transparencia" y "Noticias".
*   **Estados Financieros**: Visualización clara y gráfica de los estados financieros y ratios de la cooperativa.
*   **Gestión de Documentos**: Acceso fácil a documentos institucionales y normativos.
*   **Formularios Interactivos**: Libro de reclamaciones y contacto integrados.

## 🛠️ Tecnologías Utilizadas

*   **Frontend**: [React](https://react.dev/) (v18+)
*   **Build Tool**: [Vite](https://vitejs.dev/)
*   **Estilos**: [Tailwind CSS](https://tailwindcss.com/) (v4)
*   **Animaciones**: [Motion](https://motion.dev/) (anteriormente Framer Motion)
*   **Iconos**: [Lucide React](https://lucide.dev/)
*   **Enrutamiento**: Navegación personalizada basada en el estado (SPA).

## 📦 Instalación y Configuración

Sigue estos pasos para ejecutar el proyecto en tu entorno local:

1.  **Clonar el repositorio**:
    ```bash
    git clone <URL_DEL_REPOSITORIO>
    cd CoopRey
    ```

2.  **Instalar dependencias**:
    Asegúrate de tener [Node.js](https://nodejs.org/) instalado.
    ```bash
    npm install
    ```

3.  **Iniciar el servidor de desarrollo**:
    ```bash
    npm run dev
    ```
    La aplicación estará disponible en `http://localhost:5173`.

4.  **Construir para producción**:
    ```bash
    npm run build
    ```
    Los archivos optimizados se generarán en la carpeta `dist`.

## 📂 Estructura del Proyecto

```
CoopRey/
├── public/              # Archivos estáticos
├── src/
│   ├── components/      # Componentes reutilizables (UI, secciones, comunes)
│   ├── data/            # Datos estáticos (JSON/JS objects) para el contenido
│   ├── layouts/         # Plantillas de diseño (MainLayout)
│   ├── pages/           # Vistas principales de la aplicación
│   ├── styles/          # Estilos globales (Tailwind)
│   ├── App.jsx          # Componente raíz y configuración de rutas
│   └── main.jsx         # Punto de entrada de la aplicación
├── index.html           # Archivo HTML principal
├── package.json         # Dependencias y scripts
├── vite.config.js       # Configuración de Vite
└── README.md            # Documentación del proyecto
```

## 📝 Notas de Desarrollo

*   **Tailwind v4**: Este proyecto utiliza la última versión de Tailwind CSS. La configuración se encuentra en `src/styles/globals.css` y `vite.config.ts`.
*   **Despliegue**: Para desplegar en Vercel, asegúrate de que el archivo `vercel.json` esté configurado correctamente (especialmente si hay problemas con el directorio de salida).

## 🤝 Contribución

Las contribuciones son bienvenidas. Por favor, abre un "Issue" para discutir cambios mayores antes de enviar un "Pull Request".

## 📄 Licencia

Este proyecto es propiedad de Cooperativa de Ahorro y Crédito Niño Rey. Todos los derechos reservados.

## Imágenes y contenido externo

El banner y las noticias muestran una copia local del contenido de Google al abrir la página.
Los datos se actualizan en segundo plano y se guardan en el navegador durante cinco minutos.
Si Google no responde, se mantiene el contenido disponible.

Antes de publicar, actualiza la copia local y sus imágenes optimizadas:

```bash
npm run content:sync
npm run build
```

Las publicaciones nuevas también se consultan en tiempo de ejecución. El comando de sincronización
genera las versiones WebP locales para evitar depender de Google Drive en la primera visita.
Si se reemplaza una imagen conservando su enlace de Drive, vuelve a sincronizar y publicar.

Para reducir fotos WebP grandes añadidas al proyecto y comprobar la caché:

```bash
npm run images:optimize
npm run test:images
```
