"use client";
import { Image } from "@heroui/image";
import { Link } from "@heroui/link";
import { useState, useEffect } from "react";

import { useDeviceSizes} from "../features/DeviceSizes";

import { subtitle } from "@/components/ui/primitives";
export default function AboutMe() {
  const { isSmallDevice, isMediumDevice, isLargeDevice } = useDeviceSizes();

  
  const [text, setText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const words = ["alternance", "opportunités", "aventures"];
  const [wordIndex, setWordIndex] = useState(0);
  const [delta, setDelta] = useState(200);
  const handleAnchorClick = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
  ) => {
    e.preventDefault();

    const targetId = href.replace("#", "");
    const element = document.getElementById(targetId);

    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  useEffect(() => {
    let timer: NodeJS.Timeout;

    const tick = () => {
      const currentWord = words[wordIndex];

      if (isDeleting) {
        setText((prev) => prev.substring(0, prev.length - 1));
        setDelta(100);
      } else {
        setText(currentWord.substring(0, text.length + 1));
        setDelta(125);
      }

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && text === "") {
        setIsDeleting(false);
        setWordIndex((prev) => (prev + 1) % words.length);
      }
    };

    timer = setTimeout(tick, delta);

    return () => clearTimeout(timer);
  }, [text, delta, isDeleting, wordIndex, words]);

  return (
    <>
      <div
        className="inline-block max-w-xl text-center justify-center mt-9"
        id="about"
      >
        <div className="text-center flex flex-col gap-2">
          <span className="text-4xl text-black-700">En recherche</span>
          <div className="flex justify-center items-center gap-2 mb-4">
            <span className="text-4xl">d&apos;</span>
            <span className="text-green-700 text-4xl">{text}</span>
            <span className="text-green-700 text-4xl">|</span>
          </div>
        </div>
        <div className={subtitle({ class: "hidden sm:block" })}>
          Dans l&apos;administration système, le réseau et la cybersécurité.
          <br />
        </div>
      </div>
      <div className="flex flex-col md:flex-row items-center gap-8 w-full max-w-7xl">
        <div className="md:w-1/2 lg:1-3 w-full">
          <Image
            isBlurred
            alt="Photo de profil"
            className="w-full h-full object-cover rounded-full"
            src="/me.jpeg"
          />
        </div>

        <div className="flex-1 space-y-4 text-center md:text-left">
          {(isMediumDevice || isLargeDevice) && (
            <p className="text-lg text-default-600 p-4 leading-relaxed text-justify">
              Étudiant en deuxième année d’école d&apos;ingénieur, je suis passionné par les infrastructures informatiques, notamment les réseaux et leurs enjeux de sécurité. Je souhaite me spécialiser dans les réseaux, l&apos;administration système et la cybersécurité.

            </p>
          )}
          <div className="flex flex-col sm:flex-row gap-4 sm:gap-4 justify-center md:justify-start mt-6 py-4">
            <Link
              isExternal
              as={Link}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-white font-medium transition-all duration-200 hover:bg-primary-600 hover:scale-105"
              href="mailto:alternance@thomas-fouquet.fr"
            >
              Me contacter
            </Link>
            <Link
              as={Link}
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border-2 border-secondary text-secondary font-medium transition-all duration-200 hover:bg-green-500 hover:border-none hover:text-white hover:scale-105"
              href="#projects"
              onClick={(e) => handleAnchorClick(e, "#projects")}
            >
              <p>Voir mes projets</p>
            </Link>
          </div>
          {isSmallDevice && (
            <p className="text-lg text-default-600 p-4 leading-relaxed text-justify">
              Passionné par le développement web, je suis un développeur
              full-stack spécialisé dans la création d&apos;applications web.
              Mon expertise couvre React, Next.js, et les dernières technologies
              front-end.
            </p>
          )}
        </div>
      </div>
    </>
  );
}
