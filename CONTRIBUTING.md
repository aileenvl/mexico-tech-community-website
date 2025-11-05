# Guía de Contribución

¡Gracias por tu interés en contribuir a la Plataforma MX Tech Community! 🎉

Esta guía te ayudará a hacer contribuciones de manera efectiva y alineada con los estándares del proyecto.

## 📋 Tabla de Contenidos

- [Código de Conducta](#código-de-conducta)
- [Cómo Puedo Contribuir](#cómo-puedo-contribuir)
- [Proceso de Pull Request](#proceso-de-pull-request)
- [Guías de Estilo](#guías-de-estilo)
- [Estructura de Commits](#estructura-de-commits)

## 📜 Código de Conducta

Al participar en este proyecto, te comprometes a mantener un ambiente respetuoso y acogedor. Se espera que todos los contribuyentes:

- Usen un lenguaje acogedor e inclusivo
- Respeten diferentes puntos de vista y experiencias
- Acepten críticas constructivas con gracia
- Se enfoquen en lo mejor para la comunidad
- Muestren empatía hacia otros miembros de la comunidad

## 🤝 Cómo Puedo Contribuir

Hay varias formas de contribuir al proyecto:

### 1. Agregar tu Comunidad

Si eres parte de una comunidad tecnológica en Monterrey:

**Requisitos:**

- Comunidad activa con al menos 20 miembros
- Enfocada en tecnología o temas relacionados
- Con presencia activa (meetups, eventos, o comunidad online)

**Pasos:**

1. Fork el repositorio
2. Agrega tu logo a la carpeta `public/`
3. Edita `data/communities.ts`
4. Incluye toda la información requerida (nombre en inglés y español)
5. Crea un Pull Request

### 2. Publicar un Evento

Para agregar eventos de la comunidad:

**Requisitos:**

- Evento confirmado con fecha y ubicación
- Relacionado con tecnología
- Abierto a la comunidad (no eventos privados de empresa)
- En Mexico

**Información Necesaria:**

- Título y descripción clara
- Fecha y hora exactas
- Ubicación completa
- Link de registro o más información
- Comunidad organizadora

### 3. Agregar Patrocinadores

Para organizaciones que apoyan a la comunidad tecnológica:

**Tipos de Patrocinio:**

- **Budget**: Apoyo financiero, becas, donaciones
- **Space**: Espacios para eventos, coworking, oficinas

**Requisitos:**

- Apoyo activo y verificable a comunidades tecnológicas
- Presencia en Mexico
- Sitio web activo

### 4. Mejorar la Plataforma

¿Desarrollador que quiere contribuir con código?

**Áreas donde puedes ayudar:**

- Corregir bugs
- Mejorar la UI/UX
- Agregar nuevas funcionalidades
- Optimizar el rendimiento
- Mejorar la accesibilidad
- Traducir contenido

## 🔄 Proceso de Pull Request

### Antes de Crear un PR

1. **Busca Issues existentes** para evitar duplicados
2. **Crea un Issue** si vas a trabajar en algo nuevo
3. **Comenta en el Issue** para indicar que trabajarás en ello
4. **Fork el repositorio** si aún no lo has hecho

### Creando tu PR

1. **Crea una rama descriptiva**

   ```bash
   git checkout -b tipo/descripcion-corta
   ```

   Ejemplos:

   - `feature/agregar-comunidad-nodejs`
   - `fix/corregir-fecha-evento`
   - `docs/actualizar-readme`
   - `style/mejorar-comunidades-grid`

2. **Haz commits pequeños y descriptivos**

   ```bash
   git add .
   git commit -m "tipo: descripción concisa"
   ```

3. **Prueba tus cambios localmente**

   ```bash
   npm run dev # Verifica que todo funcione
   npm run build # Asegúrate que compile sin errores
   npm run lint # Revisa errores de estilo
   ```

4. **Push a tu fork**

   ```bash
   git push origin nombre-de-tu-rama
   ```

5. **Crea el Pull Request**
   - Ve a GitHub y haz clic en "Compare & Pull Request"
   - Usa un título claro y descriptivo
   - Llena la plantilla de PR con toda la información

### Plantilla de Pull Request

```markdown
## Descripción

<!-- Describe qué cambios introduce este PR -->

## Tipo de cambio

- [ ] Nueva comunidad
- [ ] Nuevo evento
- [ ] Nuevo patrocinador
- [ ] Corrección de bug
- [ ] Nueva funcionalidad
- [ ] Mejora de documentación
- [ ] Otro (especificar):

## Checklist

- [ ] Probé los cambios localmente
- [ ] El código compila sin errores
- [ ] Actualicé la documentación si fue necesario
- [ ] Seguí las guías de estilo del proyecto
- [ ] Mi código no genera nuevos warnings

## Screenshots (si aplica)

<!-- Agrega capturas de pantalla si hay cambios visuales -->

## Información adicional

<!-- Cualquier contexto adicional sobre el PR -->
```

### Revisión del PR

- Los mantenedores revisarán tu PR lo antes posible
- Puede haber comentarios o solicitudes de cambios
- Una vez aprobado, se hará merge a la rama principal
- ¡Tu contribución será visible en el sitio! 🎉

## 🎨 Guías de Estilo

### Código TypeScript/React

```typescript
// ✅ Bien
interface Community {
  id: string;
  name: string;
  nameEs: string;
}

// ❌ Evitar
interface community {
  ID: string;
  Name: string;
}
```

**Reglas:**

- Usa TypeScript para type safety
- Nombres de interfaces en PascalCase
- Nombres de variables en camelCase
- Usa interfaces en lugar de types cuando sea posible
- Siempre tipea los props de componentes
- Usa `const` en lugar de `let` cuando sea posible

### Estructura de Archivos

```
data/
├── communities.ts # Datos de comunidades
├── events.ts # Datos de eventos
└── sponsors.ts # Datos de patrocinadores

components/
├── ui/ # Componentes reutilizables de UI
├── header.tsx # Componente específico
└── footer.tsx # Componente específico
```

### Formato de Datos

**IDs únicos:**

- Minúsculas
- Usa guiones en lugar de espacios
- Sin caracteres especiales
- Ejemplo: `"gdg-monterrey"`, `"devfest-2025"`

**Fechas:**

- Formato ISO: `YYYY-MM-DD`
- Ejemplo: `"2025-11-15"`

**Horas:**

- Formato 24h: `HH:MM`
- Ejemplo: `"18:00"`, `"09:30"`

**URLs:**

- Siempre incluye `https://`
- Verifica que sean válidas
- Sin caracteres innecesarios al final

**Descripciones:**

- Claras y concisas
- Sin typos o errores gramaticales
- Incluye versión en inglés y español
- No uses lenguaje promocional excesivo

### Componentes React

```typescript
// ✅ Componente bien estructurado
interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
  variant?: "primary" | "secondary";
}

export function Button({
  onClick,
  children,
  variant = "primary",
}: ButtonProps) {
  return (
    <button
      onClick={onClick}
      className={variant === "primary" ? "bg-primary" : "bg-secondary"}
    >
      {children}
    </button>
  );
}
```

### CSS/Tailwind

- Usa clases de Tailwind en lugar de CSS custom cuando sea posible
- Mantén las clases ordenadas: layout → spacing → typography → colors
- Usa las variables de color del tema (`primary`, `secondary`, etc.)

```tsx
// ✅ Bien

<div className="flex flex-col gap-4 p-6 text-lg text-foreground bg-card">

// ❌ Evitar

<div className="text-lg p-6 bg-card flex gap-4 text-foreground flex-col">
```

## 📝 Estructura de Commits

Usa [Conventional Commits](https://www.conventionalcommits.org/):

```
tipo(alcance): descripción corta

[cuerpo opcional]

[footer opcional]
```

### Tipos de Commits

- `feat`: Nueva funcionalidad
- `fix`: Corrección de bug
- `docs`: Cambios en documentación
- `style`: Cambios de formato (sin afectar lógica)
- `refactor`: Refactorización de código
- `test`: Agregar o modificar tests
- `chore`: Tareas de mantenimiento

### Ejemplos

```bash

# Agregar comunidad

git commit -m "feat(communities): agregar GDG Monterrey"

# Corregir bug

git commit -m "fix(events): corregir formato de fecha en calendario"

# Actualizar docs

git commit -m "docs(readme): actualizar instrucciones de contribución"

# Mejorar estilos

git commit -m "style(communities): mejorar aspecto ratio de logos"
```

## ✅ Checklist antes de hacer PR

Antes de enviar tu Pull Request, verifica:

### Para Datos (Comunidades/Eventos/Patrocinadores)

- [ ] Toda la información está completa
- [ ] Los IDs son únicos y siguen el formato correcto
- [ ] Las URLs son válidas y funcionan
- [ ] Las fechas están en formato correcto (YYYY-MM-DD)
- [ ] Las descripciones están en inglés y español
- [ ] Los logos/imágenes están en `public/` y son apropiados
- [ ] Probé localmente y todo se ve correcto

### Para Código

- [ ] El código compila sin errores (`npm run build`)
- [ ] No hay errores de linter (`npm run lint`)
- [ ] Probé en desarrollo (`npm run dev`)
- [ ] Los componentes son responsivos (mobile, tablet, desktop)
- [ ] Seguí las guías de estilo del proyecto
- [ ] Agregué TypeScript types donde corresponde
- [ ] El código está comentado si es necesario
- [ ] Actualicé la documentación si agregué features nuevas

## 🐛 Reportar Bugs

Si encuentras un bug:

1. **Verifica** que no exista ya un Issue similar
2. **Crea un nuevo Issue** con:
   - Título descriptivo
   - Pasos para reproducir el bug
   - Comportamiento esperado vs. actual
   - Screenshots o videos si aplica
   - Información del browser/sistema
   - Logs de error si están disponibles

## 💡 Sugerir Mejoras

Para sugerir nuevas funcionalidades:

1. **Abre un Discussion** en GitHub Discussions
2. **Describe la funcionalidad** claramente
3. **Explica el problema** que resolvería
4. **Proporciona ejemplos** de cómo se usaría
5. **Considera alternativas** y menciónalas

## 🆘 ¿Necesitas Ayuda?

Si tienes preguntas:

1. Revisa la documentación en el README
2. Busca en Issues y Discussions existentes
3. Crea un Issue con la etiqueta `question`
4. Únete a las discusiones de la comunidad

## 📞 Contacto

- **GitHub Issues**: Para bugs y features
- **GitHub Discussions**: Para preguntas generales
- **Pull Requests**: Para contribuciones de código

---

¡Gracias por contribuir a la comunidad tecnológica de México! 🚀

**#MxTech #OpenSource #Community**
