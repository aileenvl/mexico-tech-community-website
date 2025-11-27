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
    [key: string]: string;
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
    [key: string]: string;
  };
}

export const communitiesData: Community[] = [
  {
    id: "gdg-gdl",
    name: "GDG Guadalajara",
    nameEs: "GDG Guadalajara",
    description:
      "Official Google Developer Group in Guadalajara. A community of developers, designers, and innovators sharing knowledge on web, mobile, AI, and cloud technologies.",
    descriptionEs:
      "Grupo oficial de Desarrolladores de Google en Guadalajara. Una comunidad de desarrolladores, diseñadores e innovadores que comparten conocimiento sobre tecnologías web, móviles, de IA y la nube.",
    focus: [
      "Web",
      "Mobile",
      "AI/ML",
      "Cloud",
      "Community",
      "Career Development",
      "Firebase",
      "Gemini",
      "Networking",
    ],
    focusEs: [
      "Web",
      "Desarrollo Móvil",
      "IA/ML",
      "Nube",
      "Comunidad",
      "Desarrollo de Carreras",
      "Firebase",
      "Gemini",
      "Networking",
    ],
    members: 550,
    category: "General Tech",
    meetups: 5,
    image: "/gdg-guadalajara.png",
    state: "Jalisco",
    stateEs: "Jalisco",
    city: "Guadalajara",
    contacts: [
      {
        name: "Elisa Elias",
        role: "Organizer",
        roleEs: "Organizadora",
        bio: "Security Consultant",
        bioEs: "Consultora de Seguridad",
        socials: {
          website: "https://elisaelias.com/",
          linkedin: "https://www.linkedin.com/in/elisa-elias-0a7829268",
          instagram: "https://instagram.com/elisa_elias__",
        },
      },
      {
        name: "Uziel Cococlan",
        role: "Organizer",
        roleEs: "Organizador",
        bio: "Software Engineer",
        bioEs: "Ingeniero de software",
        socials: {
          website: "https://ushieru.com",
          linkedin: "https://www.linkedin.com/in/uzielcocolan/",
          github: "https://github.com/ushieru",
        },
      },
    ],
    links: {
      website: "https://gdgguadalajara.com/",
      instagram: "https://www.instagram.com/gdg_guadalajara/",
      linkedin: "https://www.linkedin.com/company/gdgguadalajara",
    },
  },
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
  {
    id: "pytalavera-puebla",
    name: "PyTalavera",
    nameEs: "PyTalavera",
    description:
      "Python community in Puebla. A group of Python enthusiasts sharing knowledge, best practices, and building projects together. From beginners to experts, all Pythonistas are welcome.",
    descriptionEs:
      "Comunidad Pythonista en Puebla. Un grupo de entusiastas de Python compartiendo conocimiento, mejores prácticas y construyendo proyectos juntos. Desde principiantes hasta expertos, todos los Pythonistas son bienvenidos.",
    focus: [
      "Python",
      "Data Science",
      "Machine Learning",
      "Web Development",
      "Backend",
    ],
    focusEs: [
      "Python",
      "Ciencia de Datos",
      "Machine Learning",
      "Desarrollo Web",
      "Backend",
    ],
    members: 150,
    meetups: 12,
    image: "/pytalavera.jpeg",
    category: "Backend / Database",
    state: "Puebla",
    stateEs: "Puebla",
    city: "Puebla",
    contacts: [
      {
        name: "Gabriel Gómez Téllez",
        role: "Community Lead",
        roleEs: "Líder de Comunidad",
        bio: "Backend, ML & Data Engineer with 7+ years of experience turning data into business results.",
        bioEs:
          "Ingeniero Backend, ML y Datos con más de 7 años de experiencia convirtiendo datos en resultados de negocio.",
        socials: {
          linkedin: "https://linkedin.com/in/gabrielgomezt",
        },
      },
    ],
    links: {
      linkedin: "https://linkedin.com/company/106000587",
    },
  },
  {
    id: "web-dev-talks-colima",
    name: "Web Dev Talks Colima",
    nameEs: "Web Dev Talks Colima",
    description:
      "Web Dev Talks (also known as WDT) is an independent community based in Colima, primarily focused on web development. With over 12 years of experience, we are the first and most diverse IT community in the state — bringing together not only developers, but also professionals in design, management, QA, and other areas.",
    descriptionEs:
      "Web Dev Talks (también conocida como WDT) es una comunidad independiente en Colima, enfocada principalmente en desarrollo web. Con 10 años de trayectoria, somos la primera y más diversa comunidad de IT en el estado, incluyendo no solo desarrolladores, sino también profesionales de diseño, management, QA y otras areas.",
    focus: [
      "AI",
      "Backend",
      "Frontend",
      "Web Development",
      "Mobile Development",
      "Technology",
    ],
    focusEs: [
      "AI",
      "Backend",
      "Frontend",
      "Desarrollo Web",
      "Desarrollo Móvil",
      "Tecnología",
    ],
    members: 10,
    category: "Technology / Web Development",
    meetups: 1,
    image: "/wdt-colima.png",
    state: "Colima",
    stateEs: "Colima",
    city: "Colima",
    contacts: [
      {
        name: "Miguel Oceguera",
        role: "Co-Organizer",
        roleEs: "Co-Organizador",
        bio: "Software engineer, community organizer and passionate about Observability, web, mobile, and 3D experiences. Co-organizer of JSConf México and Web Dev Talks Colima.",
        bioEs:
          "Ingeniero de software, organizador de comunidades y apasionado por la Observabilidad, desarrollo web, móvil y las experiencias 3D. Co-organizador de JSConf México y Web Dev Talks Colima.",
        socials: {
          twitter: "https://x.com/mikeoceguera",
          linkedin: "https://www.linkedin.com/in/miguelocegueram/",
          github: "https://github.com/MiguelOcegueraM",
        },
      },
    ],
    links: {
      linkedin: "https://linkedin.com/company/web-dev-talks",
      website: "https://www.webdevtalks.mx/",
    },
  },
  {
    id: "aws-ug-mixtli",
    name: "AWS User Group Mixtli",
    nameEs: "AWS User Group Mixtli",
    description:
      "We are a community passionate about Amazon Web Services (AWS) and its ecosystem. Join us to learn, share knowledge, and connect with other AWS enthusiasts in México. From beginners to certified professionals, all are welcome.",
    descriptionEs:
      "Somos una comunidad apasionada por Amazon Web Services (AWS) y su ecosistema. Únete para aprender, compartir conocimiento y conectar con otros entusiastas de AWS en México. Desde principiantes hasta profesionales certificados, todos son bienvenidos.",
    focus: ["AWS", "Cloud", "DevOps", "Infrastructure", "Serverless"],
    focusEs: ["AWS", "Nube", "DevOps", "Infraestructura", "Serverless"],
    members: 257,
    meetups: 15,
    image: "/awsugmixtli_logo.jpeg",
    category: "Backend / Database",
    state: "Puebla",
    stateEs: "Puebla",
    city: "Puebla",
    contacts: [
      {
        name: "Mariano Rodriguez",
        role: "Community Organizer",
        roleEs: "Organizador de Comunidad",
        socials: {},
      },
      {
        name: "Ana Reyna",
        role: "Community Organizer",
        roleEs: "Organizadora de Comunidad",
        socials: {},
      },
    ],
    links: {
      website: "https://awsugmixtli.com",
    },
  },
  {
    id: "gdg-tijuana",
    name: "GDG Tijuana",
    nameEs: "GDG Tijuana",
    description:
      "Official Google Developer Group in Tijuana. A community of developers, designers, and innovators sharing knowledge on web, mobile, AI, and cloud technologies.",
    descriptionEs:
      "Grupo oficial de Desarrolladores de Google en Tijuana. Comunidad de desarrolladores, diseñadores e innovadores que comparten conocimiento sobre tecnologías web, móviles, de IA y la nube.",
    focus: ["Web", "Android", "AI/ML", "Cloud", "Firebase"],
    focusEs: ["Web", "Android", "IA/ML", "Nube", "Firebase"],
    members: 34,
    category: "General Tech",
    meetups: 1,
    image: "/gdg-tijuana.png",
    state: "Baja California",
    stateEs: "Baja California",
    city: "Tijuana",
    contacts: [
      {
        name: "Gabriel Garcia Perez",
        role: "Organizer",
        roleEs: "Organizador",
        bio: "Systems engineer. Organizer of GDG Tijuana with experience in software development, cybersecurity and digital forensics. Trainer and mentor focused on developer experience and community growth.",
        bioEs:
          "Ingeniero en Sistemas Computacionales. Organizador de GDG Tijuana con experiencia en desarrollo de software, ciberseguridad e informática forense. Capacitador y mentor enfocado en la experiencia del desarrollador y el crecimiento de la comunidad.",
        socials: {
          github: "https://github.com/GarciaG1",
          linkedin:
            "https://www.linkedin.com/in/gabriel-garcia-perez-626291214/",
        },
      },
    ],
    links: {
      website: "https://gdg.community.dev/gdg-tijuana/",
      instagram: "https://www.instagram.com/gdg_tijuana/",
    },
  },
  {
    id: "rust-mx",
    name: "RustMX",
    nameEs: "RustMX",
    description:
      "RustMX is a community of developers in Mexico who learn, share, and collaborate around the Rust programming language, whether for embedded systems, AI, web frontends, backends, or interoperability. Join, share, and connect with others who love Rust.",
    descriptionEs:
      "RustMX es una comunidad de desarrolladores en México que aprenden, comparten y colaboran en torno al lenguaje de programación Rust, ya sea en sistemas embebidos, inteligencia artificial, frontends web, backends o interoperabilidad. Participa, comparte y conecta con otros apasionados por Rust.",
    focus: [
      "Rust",
      "AI/ML",
      "Cloud",
      "Embedded",
      "Backend",
      "Frontend",
      "Web Development",
    ],
    focusEs: [
      "Rust",
      "AI/ML",
      "Cloud",
      "Embedded",
      "Backend",
      "Frontend",
      "Desarrollo Web",
    ],
    members: 1347,
    category: "General Tech",
    meetups: 82,
    image: "/rust-mx.png",
    state: "Ciudad de México",
    stateEs: "Ciudad de México",
    city: "Ciudad de México",
    contacts: [
      {
        name: "Gustavo De la Cruz Tovar",
        role: "Organizer",
        roleEs: "Organizador",
        bio: "Enterprise & Cloud Architect especializado en AWS, ML/AI y DevOps. PMP, TOGAF, ITIL, IT4IT y AWS Certified (Associate & Professional). Lego Serious Play Facilitator. Más de 20 años liderando proyectos de transformación digital en LATAM.",
        bioEs:
          "Senior Delivery Consultant en AWS. Profesor de Data Science, Machine Learning e IA en La Salle México. Ingeniero Cibernético con Maestría en Métodos Matemáticos Aplicados a Finanzas. Rust evangelist y apasionado por la innovación y la docencia.",
        socials: {
          github: "https://github.com/gusdelact",
          linkedin: "https://www.linkedin.com/in/gusdelact/",
        },
      },
    ],
    links: {
      website: "https://rustmx.github.io",
      twitter: "https://twitter.com/rustlang_mx",
      meetup: "https://www.meetup.com/rust-mx/",
      youtube:
        "https://www.youtube.com/playlist?list=PLnLzwYW6HOC4KYwDLCWuZt1uaufBmc_Tz",
      telegram: "https://t.me/RustMX",
    },
  },
  {
    id: "php-mexico",
    name: "PHP Mexico",
    nameEs: "PHP México",
    description:
      "PHP Mexico is a community of PHP developers and enthusiasts in Mexico. We promote best practices, share knowledge, and organize meetups to strengthen the PHP ecosystem across the country. From beginners to advanced developers, all PHPeros are welcome.",
    descriptionEs:
      "PHP México es una comunidad de desarrolladores y entusiastas de PHP en México. Promovemos las mejores prácticas, compartimos conocimiento y organizamos meetups para fortalecer el ecosistema PHP en todo el país. Desde principiantes hasta desarrolladores avanzados, todos los PHPeros son bienvenidos.",
    focus: ["PHP", "Backend", "Web Development", "Laravel", "Symfony"],
    focusEs: ["PHP", "Backend", "Desarrollo Web", "Laravel", "Symfony"],
    members: 1616,
    category: "Backend / Database",
    meetups: 115,
    image: "/php-mexico.png",
    state: "Ciudad de México",
    stateEs: "Ciudad de México",
    city: "Ciudad de México",
    contacts: [
      {
        name: "PHP Mexico Team",
        role: "Community Organizers",
        roleEs: "Organizadores de Comunidad",
        socials: {},
      },
    ],
    links: {
      website: "https://phpmexico.mx/",
      twitter: "https://twitter.com/phpmx",
      facebook: "https://www.facebook.com/pehacheperos",
      meetup: "https://www.meetup.com/es-ES/PHP-The-Right-Way/",
      instagram: "https://www.instagram.com/phpmx/",
      slack:
        "https://join.slack.com/t/phpmx/shared_invite/zt-3a188halw-o05hyFNG~qEmW9Ci_g1kuQ",
    },
  },
  {
    id: "gophers-mx",
    name: "Gophers MX y Amigos",
    nameEs: "Gophers MX y Amigos",
    description:
      "Gophers MX is a community of Go developers and enthusiasts in Mexico. We share knowledge, best practices, and organize events to strengthen the Go ecosystem. From beginners to experts, all Gophers are welcome to learn and grow together.",
    descriptionEs:
      "Gophers MX es una comunidad de desarrolladores y entusiastas de Go en México. Compartimos conocimiento, mejores prácticas y organizamos eventos para fortalecer el ecosistema de Go. Desde principiantes hasta expertos, todos los Gophers son bienvenidos a aprender y crecer juntos.",
    focus: ["Go", "Backend", "Cloud", "Microservices", "DevOps"],
    focusEs: ["Go", "Backend", "Nube", "Microservicios", "DevOps"],
    members: 659,
    category: "Backend / Database",
    meetups: 0,
    image: "/gophers-mx-y-amigos.png",
    state: "Ciudad de México",
    stateEs: "Ciudad de México",
    city: "Ciudad de México",
    contacts: [
      {
        name: "Daniel Vergara",
        role: "Organizer",
        roleEs: "Organizador",
        socials: {},
      },
      {
        name: "Rodrigo Patiño",
        role: "Organizer",
        roleEs: "Organizador",
        socials: {},
      },
    ],
    links: {
      website: "https://gophers-mx.github.io/gophers-mx/",
      telegram: "https://t.me/golangmx",
      github: "https://github.com/gophers-mx",
      facebook: "https://www.facebook.com/groups/es.golang.mx",
      twitter: "https://twitter.com/gophersmx",
    },
  },
  {
    id: "dev-night-talks",
    name: "Dev Night Talks Villahermosa",
    nameEs: "Dev Night Talks Villahermosa",
    description:
      "Dev Night Talks is a space for developers and tech enthusiasts looking to share experiences, learn together, and build community. Every week we meet to talk about software development, tools, best practices, and tech trends. Join us and be part of a community passionate about code and collaboration!",
    descriptionEs:
      "Dev Night Talks es un espacio para desarrolladores y entusiastas de la tecnología que buscan compartir experiencias, aprender juntos y hacer comunidad. Cada semana nos reunimos para hablar de desarrollo de software, herramientas, buenas prácticas y tendencias del mundo tech. ¡Únete y sé parte de una comunidad apasionada por el código y la colaboración!",
    focus: [
      "Web",
      "Mobile",
      "AI/ML",
      "Backend",
      "Frontend",
      "Cloud",
      "Microservices",
      "DevOps",
      "Community",
      "Open Source",
      "Entrepreneurship",
    ],
    focusEs: [
      "Web",
      "Mobile",
      "AI/ML",
      "Backend",
      "Frontend",
      "Cloud",
      "Microservices",
      "DevOps",
      "Community",
      "Open Source",
      "Entrepreneurship",
    ],
    members: 175,
    category: "General Tech",
    meetups: 56,
    image: "/dev-night-talks-villahermosa.png",
    state: "Tabasco",
    stateEs: "Tabasco",
    city: "Villahermosa",
    contacts: [
      {
        name: "Gustavo Jimenez",
        role: "Organizer",
        roleEs: "Organizador",
        bio: "Software developer with over 8 years of experience. Founder and leader of the AWS User Group Villahermosa and organizer of Dev Night Talks. Passionate about code, sharing knowledge with the community, and a coffee entrepreneur who applies technology to solve real-world, everyday problems.",
        bioEs:
          "Desarrollador de software con más de 8 años de experiencia. Fundador y líder del AWS User Group Villahermosa y organizador de Dev Night Talks. Apasionado por el código, compartir conocimiento con la comunidad y emprendedor cafetero que aplica tecnología para resolver problemas reales del día a día.",
        socials: {
          linkedin: "https://www.linkedin.com/in/jimenezdev/",
        },
      },
      {
        name: "Cesa Méndez",
        role: "Data Engineer & Organizer",
        roleEs: "Data Engineer y Organizador",
        bio: "Passionate about data and code, I have 8+ years in the tech industry, working on IoT for Smart Cities in Saudi Arabia, Oil & Gas analytics in Mexico, currently working as data engineer for AI applications and services. Also, a NASA Space Apps Challenge finalist and organizer also lead of multiple dev communities in villahermosa like aws-ug and github",
        bioEs:
          "Apasionado por los datos y el código, cuento con más de 8 años de experiencia en la industria tecnológica, trabajando en IoT para ciudades inteligentes en Arabia Saudita, análisis de datos para la industria del petróleo y el gas en México, y actualmente me desempeño como ingeniero de datos para aplicaciones y servicios de IA. Además, fui finalista y organizador del NASA Space Apps Challenge y líder de varias comunidades de desarrolladores en Villahermosa, como aws-ug y GitHub.",
        socials: {
          github: "https://github.com/devcsar",
          linkedin: "https://www.linkedin.com/in/devcsar",
          AwsBuilder: "https://builder.aws.com/community/@devcsar",
          instagram: "https://www.instagram.com/csar.dev?igsh=MWtkcHgxYmE4NzJq",
        },
      },
    ],
    links: {
      website: "http://devnighttalks.com",
      tiktok: "https://www.tiktok.com/@devnighttalks",
      instagram: "https://www.instagram.com/devnighttalks",
      meetup: "https://www.meetup.com/dev-night-talks/",
    },
  },
  {
    id: "supabase-villahermosa",
    name: "Supabase Villahermosa",
    nameEs: "Supabase Villahermosa",
    description:
      "Join the developer community in Villahermosa, Tabasco for a Supabase Meetup, the open-source development platform that's revolutionizing how web and mobile applications are built. During the event, you'll learn more about the tools and services Supabase offers—such as Postgres databases, authentication, storage, and serverless features—and how to easily integrate them into your projects.",
    descriptionEs:
      "Únete a la comunidad de desarrolladores en Villahermosa, Tabasco para un Meetup de Supabase, la plataforma de desarrollo open source que está revolucionando la forma de construir aplicaciones web y móviles. Durante el evento conocerás más sobre las herramientas y servicios que ofrece Supabase —como bases de datos Postgres, autenticación, almacenamiento y funciones serverless— y cómo integrarlas fácilmente en tus proyectos.",
    focus: [
      "Supabase",
      "Postgres",
      "Javascript",
      "React JS",
      "Next.js",
      "TypeScript",
      "Open Source",
      "Automatización",
      "Data Analytics",
    ],
    focusEs: [
      "Supabase",
      "Postgres",
      "Javascript",
      "React JS",
      "Next.js",
      "TypeScript",
      "Open Source",
      "Automatización",
      "Data Analytics",
    ],
    members: 0,
    category: "Backend / Database",
    meetups: 2,
    image: "/supabase.png",
    state: "Tabasco",
    stateEs: "Tabasco",
    city: "Villahermosa",
    contacts: [
      {
        name: "Aarón López Sosa",
        role: "FrontEnd Engineer & Organizer",
        roleEs: "Building the web one script at a time 🚀",
        bio: "I am a Frontend Engineer with 7+ years of experience in JavaScript, React.js, and React Native, focused on building responsive and user-friendly web and mobile apps. I am passionate about creating clean, scalable code and collaborating across teams to deliver impactful, high-performance products. Always open to sharing ideas and exploring new opportunities.",
        bioEs:
          "Soy ingeniero frontend con más de 7 años de experiencia en JavaScript, React.js y React Native, especializado en el desarrollo de aplicaciones web y móviles responsivas y fáciles de usar. Me apasiona crear código limpio y escalable, y colaborar con otros equipos para desarrollar productos impactantes y de alto rendimiento. Siempre estoy abierto a compartir ideas y explorar nuevas oportunidades.",
        socials: {
          github: "https://github.com/alsvader",
          linkedin: "www.linkedin.com/in/aaronlopezsosa93",
          tiktok: "https://www.tiktok.com/@codewithaaron",
          email: "aaronlopezsosa@gmail.com",
        },
      },
    ],
    links: {
      twitter: "https://twitter.com/supabase",
      website: "https://supabase.com",
    },
  },
  {
    id: "kcd-mexico",
    name: "KCD Mexico",
    nameEs: "KCD México",
    description:
      "KCD Mexico is an official community event of the Cloud Native Computing Foundation (CNCF) that brings together developers, professionals, and enthusiasts of cloud native and open source technologies in the country.",
    descriptionEs:
      "KCD México es un evento comunitario oficial de la Cloud Native Computing Foundation (CNCF) que reúne a desarrolladores, profesionales y entusiastas de tecnologías cloud native y open source en el país.",
    focus: [
      "Kubernetes",
      "Helm",
      "Prometheus",
    ],
    focusEs: [
      "Kubernetes",
      "Helm",
      "Prometheus",
    ],
    members: 500,
    category: "Kubernetes / CNCF",
    meetups: 2,
    image: "/kcd-mexico.png",
    state: "Jalisco",
    stateEs: "Jalisco",
    city: "Guadalajara",
    contacts: [
      {
        name: "Eduardo Salazar",
        role: "SRE & Organizer",
        roleEs: "SRE y Organizador",
        bio: "Eduardo Salazar Carrillo is a Site Reliability Engineer with extensive experience in cloud native technologies, DevOps, and data analysis.",
        bioEs:
          "Eduardo Salazar Carrillo es un ingeniero especializado en confiabilidad de sitios (Site Reliability Engineer) con amplia experiencia en tecnologías cloud native, DevOps y análisis de datos.",
        socials: {
          github: "https://github.com/eduardoSalazarCarrillo",
          linkedin: "https://www.linkedin.com/in/eduardo-salazar-carrillo-1984-eric-blair/",
        },
      },
    ],
    links: {
      twitter: "https://x.com/kcd_mexico",
      linkedin: "https://www.linkedin.com/showcase/kcd-m%C3%A9xico/",
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
  { id: "TAB", name: "Tabasco", nameEs: "Tabasco" },
  { id: "TAMPS", name: "Tamaulipas", nameEs: "Tamaulipas" },
  { id: "COL", name: "Colima", nameEs: "Colima" },
];
