import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  description:
    "Looking for an apprenticeship in system administration, networking, and cybersecurity.",
  summary:
    "Second-year engineering student passionate about IT infrastructure, particularly networks and their security challenges. I aim to specialize in networking, system administration, and cybersecurity.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
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
      badges: ["Student job"],
      location: "Remote",
      title: "Multi-skilled Employee",
      logoUrl: "/biocoop_wb.png",
      start: "August 2024",
      end: "Present",
      description:
        "I work at Biocoop as a multi-skilled employee. I handle customer service, checkout operations, and restocking. I work in a team, often independently, and must manage high-traffic periods. I can multitask effectively, especially during checkout where I need to stay alert to prevent theft while maintaining focus on my primary tasks.",
    },
    {
      company: "Straway",
      badges: ["First-year internship"],
      href: "https://www.straway.fr/",
      location: "Remote",
      title: "Fullstack Developer",
      logoUrl: "/straway.png",
      start: "July 2024",
      end: "August 2024",
      description:
        "First-year internship at a startup aimed at bringing plants into homes through indoor plant sales. I contributed to the company's website development, particularly in transitioning from React.js to Next.js and implementing the Stripe API for payments.",
    },
    {
      company: "McDonald's",
      href: "",
      badges: ["Student job"],
      location: "Île-de-France",
      title: "Multi-skilled Employee",
      logoUrl: "/mcdonald.png",
      start: "February 2024",
      end: "May 2024",
      description: " "
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
      start: "October 2023",
      end: "Present",
      localisation: "Versailles",
      description: "Engineering school specializing in IT and digital transformation"
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
        "As part of an association project, I developed the website for the Fighting Beat MMA club.",
      technologies: [
        "PHP",
        "OOP",
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
