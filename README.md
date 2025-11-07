# Plataforma MX Tech Community

Una plataforma de código abierto que conecta y muestra las comunidades tecnológicas de México. Construida con Next.js y diseñada para ser impulsada por la comunidad y fácil de contribuir.

[English version](./README.en.md)

## 🌟 Características

- **Directorio de Comunidades** - Descubre comunidades tecnológicas locales
- **Calendario de Eventos** - Vista interactiva de eventos tecnológicos próximos
- **Directorio de Patrocinadores** - Muestra organizaciones que apoyan la comunidad tecnológica
- **Código Abierto** - Plataforma impulsada por la comunidad donde cualquiera puede contribuir

## 📋 Estructura del Proyecto

```
├── app/                    # Páginas del router de Next.js
│   ├── page.tsx           # Página de inicio
│   ├── communities/       # Directorio de comunidades
│   ├── events/            # Calendario de eventos
│   ├── sponsors/          # Página de patrocinadores
│   ├── layout.tsx         # Layout principal
│   └── globals.css        # Estilos globales
├── components/            # Componentes de React
│   ├── ui/               # Componentes de shadcn/ui
│   ├── header.tsx        # Encabezado de navegación
│   ├── footer.tsx        # Pie de página
│   └── ...
├── data/                  # Archivos de datos
│   ├── communities.ts    # Datos de comunidades
│   ├── events.ts         # Datos de eventos
│   └── sponsors.ts       # Datos de patrocinadores
└── public/               # Recursos estáticos
```

## 🚀 Comenzar

### Prerrequisitos

- Node.js 18+
- npm o yarn

### Instalación

```bash
# Clona el repositorio
git clone https://github.com/aileenvl/mexico-tech-community-website.git

# Navega al proyecto
cd mexico-tech-community-website

# Instala las dependencias
npm install

# Ejecuta el servidor de desarrollo
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) para ver la aplicación.

## 🤝 Cómo Contribuir

¡Damos la bienvenida a todas las contribuciones! Aquí te explicamos cómo agregar tu comunidad, evento o convertirte en patrocinador.

### Agregar una Comunidad

1. **Haz un Fork del repositorio**

   - Haz clic en el botón "Fork" en la esquina superior derecha de GitHub

2. **Clona tu fork**

   ```bash
   git clone https://github.com/aileenvl/mexico-tech-community-website.git
   cd mexico-tech-community-website
   ```

3. **Crea una nueva rama**

   ```bash
   git checkout -b agregar-comunidad-NOMBRE
   ```

4. **Edita el archivo `data/communities.ts`**

   Agrega tu comunidad al array `communitiesData`:

   ```typescript
   {
     id: "tu-comunidad-mty", // Identificador único (minúsculas con guiones)
     name: "Tu Comunidad Name", // Nombre en inglés
     nameEs: "Tu Comunidad Nombre", // Nombre en español
     description: "Brief description of your community", // Descripción en inglés
     descriptionEs: "Breve descripción de tu comunidad", // Descripción en español
     category: "General Tech", // Categoría: "General Tech", "Backend / Database", "AI / Developer Tools", etc.
     focus: ["JavaScript", "React", "Node.js"], // Tecnologías o temas principales
     members: 100, // Número aproximado de miembros
     meetups: 5, // Número de meetups realizados
     image: "/tu-logo.png", // Ruta a tu logo (colócalo en la carpeta public/)
     city: "Monterrey", // Ciudad
     links: {
       website: "https://tucomunidad.com", // Sitio web (opcional)
       twitter: "https://twitter.com/tucomunidad", // Twitter (opcional)
       linkedin: "https://linkedin.com/company/tucomunidad", // LinkedIn (opcional)
       github: "https://github.com/tucomunidad", // GitHub (opcional)
       discord: "https://discord.gg/tucomunidad", // Discord (opcional)
       slack: "https://tucomunidad.slack.com", // Slack (opcional)
     },
     contacts: [
       {
         name: "Tu Nombre",
         role: "Community Lead",
         socials: {
           twitter: "https://twitter.com/tunombre",
           linkedin: "https://linkedin.com/in/tunombre",
           github: "https://github.com/tunombre",
         },
       },
     ],
   }
   ```

5. **Agrega el logo de tu comunidad**

   - Coloca tu logo en la carpeta `public/`
   - Formatos recomendados: PNG con fondo transparente o JPG
   - Tamaño recomendado: 400x160px o similar

6. **Prueba localmente**

   ```bash
   npm run dev
   ```

   Verifica que tu comunidad aparezca correctamente en http://localhost:3000/communities

7. **Haz commit de tus cambios**

   ```bash
   git add .
   git commit -m "Agregar comunidad: [Nombre de tu comunidad]"
   git push origin agregar-comunidad-NOMBRE
   ```

8. **Crea un Pull Request**
   - Ve a tu fork en GitHub
   - Haz clic en "Compare & pull request"
   - Describe los cambios que realizaste
   - Envía el Pull Request

### Agregar un Evento

1. **Sigue los pasos 1-3 de "Agregar una Comunidad"** (fork, clone, crear rama)

2. **Edita el archivo `data/events.ts`**

   Agrega tu evento al array `eventsData`:

   ```typescript
   {
     id: "nombre-evento-2025", // Identificador único
     title: "Nombre del Evento", // Título del evento
     description: "Descripción completa del evento. Incluye qué aprenderán, quién hablará, etc.", // Descripción detallada
     date: "2025-12-31", // Fecha en formato YYYY-MM-DD
     time: "18:00", // Hora en formato 24h (HH:MM)
     location: "Nombre del Lugar, Dirección completa, Ciudad", // Ubicación completa
     city: "Ciudad", // Ciudad donde se realiza el evento
     community: "Nombre de la Comunidad", // Comunidad organizadora
     attendees: 50, // Número esperado de asistentes
     link: "https://eventlink.com/tu-evento", // Link de registro o más información
   }
   ```

3. **Verifica que la fecha sea correcta**

   - Usa formato ISO: YYYY-MM-DD (ejemplo: 2025-11-15)
   - La hora debe estar en formato 24h: HH:MM (ejemplo: 18:00)

4. **Prueba localmente**

   ```bash
   npm run dev
   ```

   Verifica que tu evento aparezca en http://localhost:3000/events

5. **Haz commit y crea el Pull Request**
   ```bash
   git add .
   git commit -m "Agregar evento: [Nombre del evento]"
   git push origin agregar-evento-NOMBRE
   ```

### Convertirse en Patrocinador

¿Tu organización apoya a las comunidades tecnológicas de Monterrey? ¡Únete como patrocinador!

1. **Sigue los pasos 1-3 de "Agregar una Comunidad"** (fork, clone, crear rama)

2. **Edita el archivo `data/sponsors.ts`**

   Agrega tu organización al array `sponsorsData`:

   ```typescript
   {
     id: "tu-organizacion", // Identificador único
     name: "Tu Organización", // Nombre de la organización
     description: "Cómo apoyas a la comunidad tecnológica (ej: espacios, presupuesto, mentorías)", // Descripción de apoyo
     type: "budget", // Tipo: "budget" (presupuesto) o "space" (espacios)
     logo: "TU ORG", // Texto corto o siglas para el logo
     website: "https://tuorganizacion.com", // Sitio web
   }
   ```

3. **Tipos de patrocinio:**

   - `"budget"`: Apoyo financiero, donaciones, becas
   - `"space"`: Espacios físicos, venues, oficinas para eventos

4. **Prueba, commit y Pull Request**
   ```bash
   npm run dev # Prueba localmente
   git add .
   git commit -m "Agregar patrocinador: [Nombre de la organización]"
   git push origin agregar-patrocinador-NOMBRE
   ```

## 📅 Referencia de Formatos de Datos

### Estructura de Comunidades

```typescript
interface Community {
  id: string; // Identificador único (ej: "gdg-monterrey")
  name: string; // Nombre en inglés
  nameEs: string; // Nombre en español
  description: string; // Descripción en inglés
  descriptionEs: string; // Descripción en español
  category: string; // Categoría de la comunidad
  focus: string[]; // Array de tecnologías/temas
  members: number; // Número de miembros
  meetups: number; // Número de meetups
  image: string; // Ruta del logo
  city: string; // Ciudad
  links?: {
    // Links opcionales
    website?: string;
    twitter?: string;
    linkedin?: string;
    github?: string;
    discord?: string;
    slack?: string;
  };
  contacts: Contact[]; // Array de contactos
}
```

### Estructura de Eventos

```typescript
interface Event {
  id: string; // Identificador único
  title: string; // Título del evento
  description: string; // Descripción completa
  date: string; // Fecha (YYYY-MM-DD)
  time: string; // Hora (HH:MM, 24h)
  location: string; // Ubicación completa
  city: string; // Ciudad del evento
  community: string; // Comunidad organizadora
  attendees: number; // Número de asistentes
  link?: string; // Link de registro (opcional)
}
```

### Estructura de Patrocinadores

```typescript
interface Sponsor {
  id: string; // Identificador único
  name: string; // Nombre de la organización
  description: string; // Cómo apoyan
  type: "budget" | "space"; // Tipo de patrocinio
  logo?: string; // Texto del logo
  website?: string; // Sitio web
}
```

## ✅ Reglas de Validación

Al agregar contenido, asegúrate de:

### Comunidades

- ✓ Todos los campos requeridos están completos
- ✓ El `id` es único y usa minúsculas con guiones
- ✓ Incluye descripciones tanto en inglés como en español
- ✓ Las URLs de contacto son válidas
- ✓ El logo está en la carpeta `public/`
- ✓ Los contactos tienen al menos un método de comunicación

### Eventos

- ✓ La fecha está en formato `YYYY-MM-DD`
- ✓ La hora está en formato `HH:MM` (24 horas)
- ✓ La fecha es futura (no eventos pasados)
- ✓ La ubicación es clara y completa
- ✓ El link de registro es válido (si se proporciona)

### Patrocinadores

- ✓ El tipo es exactamente `"budget"` o `"space"`
- ✓ La descripción explica claramente cómo apoyan
- ✓ El sitio web es una URL válida

## 🎨 Sistema de Diseño

La plataforma usa:

- **Framework**: Next.js 16 con React 19
- **Estilos**: Tailwind CSS v4
- **Componentes UI**: shadcn/ui
- **Iconos**: Lucide React
- **Fuente**: Inter

## 🔧 Comandos Disponibles

```bash
npm run dev       # Inicia el servidor de desarrollo
npm run build     # Construye la aplicación para producción
npm run start     # Inicia el servidor de producción
npm run lint      # Ejecuta el linter
```

## 🐛 Reportar Problemas

Si encuentras un bug o tienes una sugerencia:

1. Revisa los [Issues existentes](https://github.com/aileenvl/mexico-tech-community-website/issues)
2. Si no existe, crea un nuevo Issue con:
   - Título descriptivo
   - Descripción detallada del problema o sugerencia
   - Pasos para reproducir (si es un bug)
   - Capturas de pantalla (si aplica)

## 💡 Ideas y Sugerencias

¿Tienes ideas para mejorar la plataforma? ¡Nos encantaría escucharlas!

- Abre un [GitHub Discussion](https://github.com/aileenvl/mexico-tech-community-website/discussions)
- Crea un Issue con la etiqueta `enhancement`
- Contacta a los organizadores

## 📝 Código de Conducta

Esta comunidad sigue un código de conducta para asegurar un ambiente respetuoso y acogedor para todos:

- Sé respetuoso y profesional
- Valora la diversidad de opiniones
- Acepta la crítica constructiva
- Enfócate en lo mejor para la comunidad
- Muestra empatía hacia otros miembros

## 🙋 Soporte

¿Necesitas ayuda?

1. Revisa esta documentación
2. Busca en los [Issues existentes](https://github.com/aileenvl/mexico-tech-community-website/issues)
3. Crea un nuevo Issue si no encuentras respuesta
4. Únete a las discusiones de la comunidad

## 🎯 Roadmap

Próximas funcionalidades planeadas:

- [ ] Sistema de autenticación para organizadores
- [ ] Filtros avanzados por tecnología
- [ ] Notificaciones de eventos
- [ ] Integración con calendarios (Google, Apple)
- [ ] Sistema de RSVPs para eventos
- [ ] Mapa interactivo de comunidades

## 📄 Licencia

Este proyecto es de código abierto y está disponible bajo una licencia permisiva.


## 📞 Contacto

- **GitHub**: [mexico-tech-community-website](https://github.com/aileenvl/mexico-tech-community-website)
- **Issues**: [Reportar un problema](https://github.com/aileenvl/mexico-tech-community-website/issues)
- **Discussions**: [Unirse a la conversación](https://github.com/aileenvl/mexico-tech-community-website/discussions)

---

**Hecho con ❤️ por y para la Comunidad Tecnológica de México**

**#MxTech #OpenSource #TechCommunity**
