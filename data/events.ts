export interface Event {
  id: string;
  title: string;
  description: string;
  date: string;
  time: string;
  location: string;
  city: string;
  community: string;
  attendees: number;
  link?: string;
}

export const eventsData: Event[] = [
  {
    id: "devfest-monterrey-2025",
    title: "DevFest Monterrey 2025",
    description:
      "La conferencia tecnológica impulsada por la comunidad más grande del mundo. Explora herramientas de desarrollo, aprende de Google y Google Developer Experts, y conecta con desarrolladores. Temas: AI, Android, Angular, Cloud, Firebase, Flutter, Gemini y más.",
    date: "2025-11-13",
    time: "18:00",
    location:
      "Facultad de Arquitectura, s/n Pedro de Alba, San Nicolás de los Garza",
    city: "Monterrey",
    community: "GDG Monterrey",
    attendees: 101,
    link: "https://gdg.community.dev/events/details/google-gdg-monterrey-presents-devfest-monterrey-2025/",
  },
  {
    id: "cursor-meetup-monterrey",
    title: "Cursor meetup Monterrey",
    description:
      "¡Primer Cursor Community Meetup en Monterrey! Aprende a construir de forma más inteligente con IA. Incluye introducción a Cursor, demostración en vivo, charlas de la comunidad y networking con otros desarrolladores.",
    date: "2025-11-14",
    time: "18:00",
    location:
      "Apex Systems Helice, Av San Jerónimo 1104, San Jeronimo, Monterrey",
    city: "Monterrey",
    community: "Cursor Community",
    attendees: 50,
    link: "https://luma.com/m4w80tw3",
  },
  {
    id: "posadev-2025",
    title: "PosaDev 2025",
    description:
      "El evento anual que conecta, inspira y fortalece las comunidades de tecnología. Hecho con amor para la comunidad tech. Explora desde desarrollo de software hasta diseño UX, gestión de proyectos, testing y cada disciplina que impulsa la transformación digital.",
    date: "2025-12-06",
    time: "09:00",
    location:
      "Centro de Congresos del Tecnológico de Monterrey, Campus Guadalajara, Av. General Ramón Corona 2515C, Valle Real, Zapopan",
    city: "Guadalajara",
    community: "PosaDev",
    attendees: 200,
    link: "https://posadev.org/",
  },
];
