import { Icons } from "@/components/icons";
import { log } from "console";
import { HomeIcon, LogOut, NotebookIcon } from "lucide-react";

export const DATA = {
  description:
    "En recherche d'alternance dans l'administration système, le réseau et la cybersécurité.",
  summary:
    "Étudiant en deuxième année d’école d'ingénieur, je suis passionné par les infrastructures informatiques, notamment les réseaux et leurs enjeux de sécurité. Je souhaite me spécialiser dans les réseaux, l'administration système et la cybersécurité.",
  navbar: [
    { href: "/", icon: HomeIcon, label: "Accueil" },
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
      badges: ["Job étudiant"],
      location: "Remote",
      title: "Employé polyvalent",
      logoUrl: "/biocoop_wb.png",
      start: "Août 2024",
      end: "Aujourd'hui",
      description:
        "Je travaille chez Biocoop en tant qu'employé polyvalent. Je m'occupe de l'accueil des clients, de l'encaissement et de la remise en rayon. Je travaille en équipe, souvent en autonomie et je dois être capable de gérer des périodes de forte affluence. Je suis capable de faire plusieurs choses à la fois, notamment lors de l'encaissement où je dois être attentif à ce qui se passe autour de moi pour éviter les vols, tout en restant concentré sur ce que je fais.",
    },
    {
      company: "Straway",
      badges: ["Stage de première année"],
      href: "https://www.straway.fr/",
      location: "Remote",
      title: "Développeur fullstack",
      logoUrl: "/straway.png",
      start: "Juillet 2024",
      end: "Août 2024",
      description:
        "Stage de première année dans une startup dont l'ambition est de végétaliser les foyers à travers la vente de plantes d'intérieur. J'ai participé au développement du site web de l'entreprise notamment en faisant la transition de React.js à Next.js et en intégrant l'API Stripe pour les paiements.",
    },
    {
      company: "McDonald's",
      href: "",
      badges: ["Job étudiant"],
      location: "Île-de-France",
      title: "Employé polyvalent",
      logoUrl: "/mcdonald.png",
      start: "Février 2024",
      end: "Mai 2024",
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
        "J'ai travaillé dans le restaurant l'Espiguette afin de financer un (deuxième) voyage au Mexique. J'ai pu apprendre à travailler en équipe, à gérer le stress et à être autonome."
    },
  ],
  education: [
    {
      school: "École Hexagone",
      href: "https://www.ecole-hexagone.com/fr/fr/",
      degree: "Bachelor",
      logoUrl: "/hexagone.jpg",
      start: "Octobre 2023",
      end: "Aujourd'hui",
      localisation: "Versailles",
      description: "sdfqsdf"
    },
    {
      school: "Colegio Morelos Lizardi",
      href: "",
      degree: "",
      logoUrl: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR1HyjATNcJ--zWQcwr4rOhs69DZ84EDcOr_A&s",
      start: "Août 2022",
      end: "Juin 2023",
      localisation: "Mexique",
      description: "J'ai eu la chance de partir un an au Mexique pour étudier dans un lycée local. J'ai pu découvrir une nouvelle culture, apprendre une nouvelle langue et rencontrer des gens formidables."},
      {
        school : "Lycée général",
        href : "",
        degree : "Baccalauréat scientifique",
        logoUrl : "",
        start : "Septembre 2019",
        end : "Juillet 2022",
        localisation : "",
        description : "Baccalauréat scientifique obtenu avec mention bien.\nSpécialités : **Mathématiques**, **Sciences de l'ingénieur**, **Physique-Chimie**.\nOptions : **Classe européenne** (anglais) et **Mathématiques expertes**."
      }
  ],
  projects: [
    {
      title: "Fighting Beat",
      href: "https://fightingbeat.fr",
      dates: "",
      active: false,
      description:
        "Dans le cadre d'un projet associatif, j'ai développé le site web du club de MMA Fighting Beat.",
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
