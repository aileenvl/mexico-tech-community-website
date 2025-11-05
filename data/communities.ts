export interface Community {
  id: string;
  name: string;
  nameEs: string;
  description: string;
  descriptionEs: string;
  focus: string[];
  focusEs: string[];
  members: number;
  contacts: Contact[];
  image?: string;
  category?: string;
  meetups?: number;
  links?: {
    [key: string]: string,
  };
  state: string;
  stateEs: string;
  city: string;
}

export interface Contact {
  name: string;
  role: string;
  roleEs: string;
  bio?: string;
  bioEs?: string;
  socials: {
    [key: string]: string,
  };
}

export const communitiesData: Community[] = [
  {
    id: "gdg-mty",
    name: "GDG Monterrey",
    nameEs: "GDG Monterrey",
    description:
      "Official Google Developer Group in Monterrey. A community of developers, designers, and innovators sharing knowledge on web, mobile, AI, and cloud technologies.",
    descriptionEs:
      "Grupo oficial de Desarrolladores de Google en Monterrey. Una comunidad de desarrolladores, diseñadores e innovadores que comparten conocimiento sobre tecnologías web, móviles, de IA y la nube.",
    focus: ["Web", "Android", "AI/ML", "Cloud", "Community"],
    focusEs: ["Web", "Android", "IA/ML", "Nube", "Comunidad"],
    members: 1500,
    category: "General Tech",
    meetups: 20,
    image: "/gdg-mty.jpg",
    state: "Nuevo León",
    stateEs: "Nuevo León",
    city: "Monterrey",
    contacts: [
      {
        name: "Aileen Villanueva",
        role: "Women Techmakers Ambassador & Organizer",
        roleEs: "Embajadora Women Techmakers y Organizadora",
        bio: "Software developer and community organizer passionate about JavaScript, AI, and empowering local tech ecosystems.",
        bioEs:
          "Desarrolladora de software y organizadora de comunidades apasionada por JavaScript, la IA y el fortalecimiento del ecosistema tecnológico local.",
        socials: {
          twitter: "https://twitter.com/aileenvl",
          linkedin: "https://www.linkedin.com/in/aileen-villanueva-31155666/",
          github: "https://github.com/aileenvl",
          website: "https://aileenvl.com",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/googledevgroups",
      website: "https://gdg.community.dev/",
    },
  },
  {
    id: "supabase-mty",
    name: "Supabase Monterrey",
    nameEs: "Supabase Monterrey",
    description:
      "A community of developers and makers building with Supabase, Postgres, and modern web tools. We host meetups, workshops, and open demos.",
    descriptionEs:
      "Una comunidad de desarrolladores y creadores que construyen con Supabase, Postgres y herramientas modernas de desarrollo web. Organizamos meetups, talleres y demos abiertas.",
    focus: ["Supabase", "Postgres", "Next.js", "TypeScript", "Open Source"],
    focusEs: [
      "Supabase",
      "Postgres",
      "Next.js",
      "TypeScript",
      "Código Abierto",
    ],
    members: 0,
    category: "Backend / Database",
    meetups: 4,
    image: "/supabase.png",
    state: "Nuevo León",
    stateEs: "Nuevo León",
    city: "Monterrey",
    contacts: [
      {
        name: "Aileen Villanueva",
        role: "Organizer",
        roleEs: "Organizadora",
        bio: "Developer and community builder organizing Supabase meetups in Monterrey and sharing demos and learning resources.",
        bioEs:
          "Desarrolladora y organizadora de comunidad que coordina meetups de Supabase en Monterrey y comparte demos y recursos de aprendizaje.",
        socials: {
          twitter: "https://twitter.com/aileenvl",
          linkedin: "https://www.linkedin.com/in/aileen-villanueva-31155666/",
          github: "https://github.com/aileenvl",
          email: "aileen@supabasemty.dev",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/supabase",
      website: "https://supabase.com",
    },
  },
  {
    id: "cursor-mty",
    name: "Cursor Monterrey",
    nameEs: "Cursor Monterrey",
    description:
      "A casual meetup for developers exploring Cursor, AI-assisted coding, and the future of building with AI tools.",
    descriptionEs:
      "Un meetup casual para desarrolladores que exploran Cursor, la programación asistida por IA y el futuro de construir con herramientas de IA.",
    focus: ["AI", "Cursor", "Frontend", "Agents"],
    focusEs: ["IA", "Cursor", "Agentes"],
    members: 0,
    category: "AI / Developer Tools",
    meetups: 1,
    image: "/cursor.png",
    state: "Nuevo León",
    stateEs: "Nuevo León",
    city: "Monterrey",
    contacts: [
      {
        name: "Aileen Villanueva",
        role: "Host & Organizer",
        roleEs: "Anfitriona y Organizadora",
        bio: "Software developer and Cursor Ambassador excited about teaching and exploring AI tools for creative coding.",
        bioEs:
          "Desarrolladora de software y Embajadora de Cursor entusiasmada por enseñar y explorar herramientas de IA para la programación creativa.",
        socials: {
          twitter: "https://twitter.com/aileenvl",
          linkedin: "https://www.linkedin.com/in/aileen-villanueva-31155666/",
          github: "https://github.com/aileenvl",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/cursor_ai",
      website: "https://cursor.com/",
    },
  },
];

export const MEXICAN_STATES = [
  { id: "all", name: "All States", nameEs: "Todos los Estados" },
  { id: "NL", name: "Nuevo León", nameEs: "Nuevo León" },
  { id: "CDMX", name: "Ciudad de México", nameEs: "Ciudad de México" },
  { id: "JAL", name: "Jalisco", nameEs: "Jalisco" },
  { id: "PUE", name: "Puebla", nameEs: "Puebla" },
  { id: "QRO", name: "Querétaro", nameEs: "Querétaro" },
  { id: "BC", name: "Baja California", nameEs: "Baja California" },
  { id: "COAH", name: "Coahuila", nameEs: "Coahuila" },
  { id: "GTO", name: "Guanajuato", nameEs: "Guanajuato" },
  { id: "SLP", name: "San Luis Potosí", nameEs: "San Luis Potosí" },
  { id: "TAMPS", name: "Tamaulipas", nameEs: "Tamaulipas" },
];
