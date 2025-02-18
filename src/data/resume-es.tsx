import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  description:
    "Buscando prácticas en administración de sistemas, redes y ciberseguridad.",
  summary:
    "Estudiante de segundo año de ingeniería apasionado por la infraestructura informática, especialmente las redes y sus desafíos de seguridad. Mi objetivo es especializarme en redes, administración de sistemas y ciberseguridad.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Inicio" },
  ],
  contact: {
    email: "thomasfouquet76@gmail.com",
    tel: "+33672635451",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/weyrito",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/thomas-fouquet/",
        icon: Icons.linkedin,

        navbar: true,
      },
      Email: {
        name: "Envoyer un Email",
        url: "mailto:thomasfouquet76@gmail.com",
        icon: Icons.email,

        navbar: true,
      },
    },
  },

  work: [
    {
      company: "Biocoop",
      href: "",
      badges: ["Trabajo estudiante"],
      location: "Remote",
      title: "Empleado polivalente",
      logoUrl: "/biocoop_wb.png",
      start: "Agosto 2024",
      end: "Presente",
      description:
        "Trabajo en Biocoop como empleado polivalente. Me encargo de la atención al cliente, operaciones de caja y reposición. Trabajo en equipo, a menudo de forma independiente, y debo gestionar períodos de alta afluencia. Puedo realizar múltiples tareas de manera efectiva, especialmente durante el cobro, donde debo estar alerta para prevenir robos mientras mantengo el enfoque en mis tareas principales.",
    },
    {
      company: "Straway",
      badges: ["Prácticas de primer año"],
      href: "https://www.straway.fr/",
      location: "Remote",
      title: "Desarrollador Fullstack",
      logoUrl: "/straway.png",
      start: "Julio 2024",
      end: "Agosto 2024",
      description:
        "Prácticas de primer año en una startup que busca llevar plantas a los hogares a través de la venta de plantas de interior. Participé en el desarrollo del sitio web de la empresa, especialmente en la transición de React.js a Next.js y la implementación de la API de Stripe para pagos.",
    },
    {
      company: "McDonald's",
      href: "",
      badges: ["Trabajo estudiante"],
      location: "Île-de-France",
      title: "Empleado polivalente",
      logoUrl: "/mcdonald.png",
      start: "Febrero 2024",
      end: "Mayo 2024",
      description:
        " "
    },
    {
      company: "L'Espiguette",
      href: "",
      badges: ["Travail saisonnier"],
      location: "Rouen",
      title: "Serveur - Plongeur - Commis",
      logoUrl: "/espiguette.jpg",
      start: "Juillet 2023",
      end: "Août 2023",
      description:
        " "
    },
  ],
  education: [
    {
      school: "École Hexagone",
      href: "https://www.ecole-hexagone.com/fr/fr/",
      degree: "Bachelor",
      logoUrl: "/hexagone.jpg",
      start: "Octubre 2023",
      end: "Presente",
      localisation: "Versailles",
      description: "Escuela de ingeniería especializada en TI y transformación digital"
    },
    {
      school: "Colegio Morelos Lizardi",
      href: "",
      degree: "Bac S",
      logoUrl: "/jeanne_darc.jpg",
      start: "Août 2022",
      end: "Juin 2023",
      localisation: "Mexique",
      description: " "}
  ],
  projects: [
    {
      title: "Fighting Beat",
      href: "https://fightingbeat.fr",
      dates: "",
      active: false,
      description:
        "Como parte de un proyecto asociativo, desarrollé el sitio web del club de MMA Fighting Beat.",
      technologies: [
        "PHP",
        "POO",
        "MVP",
        "MySQL",
        "Bootstrap",
        "Stripe API"
      ],
      links: [
        {
          type: "Site",
          href: "https://fightingbeat.fr",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/fb_wb.png",
      video:
        "",
    },
    {
      title: "Forum Normandie",
      href: "https://blog.thomas-fouquet.fr/",
      dates: "",
      active: true,
      description:
        "Développé lors du cours Symfony PHP, Forum Normandie est un forum de discussion sur la région Normandie.",
      technologies: [
        "Symfony",
        "PHP",
        "MySQL",
        "MVP",
        "Bootstrap",
      ],
      links: [
        {
          type: "Site",
          href: "Développé lors du cours Symfony PHP, Forum Normandie est un forum de discussion sur la région Normandie.",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/weyrito/blog-normandie",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/blog_wb.png",
      video: "",
    },
    {
      title: "Portfolio V2",
      href: "",
      dates: "",
      active: true,
      description:
        "Portfolio personnel réalisé avec Next.js, TailwindCSS et Magic UI",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "Magic UI",
      ],
      links: [
        {
          type: "Site",
          href: "https://thomas-fouquet.fr",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/weyrito/portfolio",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio_wb.png",
      video: "",
    },
    {
      title: "Portfolio V1",
      href: "",
      dates: "",
      active: true,
      description:
        "Portfolio personnel réalisé avec Next.js et HeroUI",
      technologies: [
        "Next.js",
        "Typescript",
        "TailwindCSS",
        "HeroUI",
      ],
      links: [
        {
          type: "Site",
          href: "https://thomas-fouquet.fr",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "thomas-fouquet.fr",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/portfolio_wb.png",
      video: "",
    }
    
  ],
  
} as const;
