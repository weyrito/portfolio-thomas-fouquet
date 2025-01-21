"use client";
import { Skeleton } from "@heroui/react";
import { Image } from "@heroui/image";
import { useState, useRef } from "react";
import { Github } from "lucide-react";
import { Link } from "@heroui/link";
import { Chip } from "@heroui/chip";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";

import Card from "@/components/ui/card";
import { title } from "@/components/ui/primitives";
import projets from "@/data/projets.json";
import {
  springScrollConfig,
  listAnimations,
  cardChildrenAnimations,
} from "@/config/animation";

export default function Projects() {
  const [loadedImages, setLoadedImages] = useState<Record<number, boolean>>({});
  const containerRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springScrollConfig);
  const opacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  const handleImageLoad = (index: number) => {
    setLoadedImages((prev) => ({ ...prev, [index]: true }));
  };

  const projectsList = projets.projets.projets;

  return (
    <>
      <motion.div
        ref={containerRef}
        className="w-full max-w-7xl mt-8 mb-4"
        id="projects"
        style={{ opacity }}
      >
        <motion.div className="flex flex-col gap-2" {...cardChildrenAnimations}>
          <h2 className={title({ size: "sm" })}>Projets</h2>
          <motion.div
            animate={{ width: "5rem" }}
            className="h-1 w-20 bg-primary rounded-lg"
            initial={{ width: 0 }}
            transition={{ duration: 1 }}
            viewport={{ once: true }}
          />
        </motion.div>
      </motion.div>
      <motion.div
        className="gap-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        {...listAnimations}
      >
        {projectsList.map((projet, index) => (
          <Card
            key={index}
            animationDelay={index * 0.1}
            aria-label={projet.title}
            body={
              <div>
                {(!loadedImages[index] || !projet.image) && (
                  <Skeleton className="rounded-xl">
                    <div className="h-[200px] w-full rounded-xl bg-default-300" />
                  </Skeleton>
                )}
                {projet.image && (
                  <Image
                    alt={`${projet.title} thumbnail`}
                    className={`object-cover rounded-xl ${!loadedImages[index] ? "opacity-0" : "opacity-100"}`}
                    height={200}
                    src={projet.image}
                    width="100%"
                    onLoad={() => handleImageLoad(index)}
                  />
                )}
                <p className="text-small text-default-500 my-3 text-justify">
                  {projet.description}
                </p>
                <div className="flex gap-2 flex-wrap">
                  {projet.technologies?.map((tech, techIndex) => (
                    <Chip
                      key={techIndex}
                      aria-label={tech.name}
                      className="px-2 py-4 text-sm whitespace-normal break-words"
                      content={tech.label}
                      size="sm"
                      variant="flat"
                    >
                      {tech.name}
                    </Chip>
                  ))}
                </div>
                <div className="flex flex-col gap-3 mt-4 w-full">
                  {projet.githubLink && (
                    <Link
                      isExternal
                      showAnchorIcon
                      aria-label="Voir le code source"
                      className="w-full bg-default-100 hover:bg-default-200 px-3 py-1 rounded-full text-small flex items-center justify-center gap-2"
                      href={projet.githubLink}
                      rel="noopener noreferrer"
                    >
                      <Github className="text-base" />
                      Code source
                    </Link>
                  )}
                  {projet.demoLink && (
                    <Link
                      isExternal
                      showAnchorIcon
                      aria-label="Voir le projet en ligne"
                      className="w-full bg-blue-700 hover:bg-blue-800 px-3 py-1 rounded-full text-small flex items-center justify-center gap-2 text-white"
                      href={projet.demoLink}
                      rel="noopener noreferrer"
                      target="_blank"
                    >
                      Démo
                    </Link>
                  )}
                </div>
              </div>
            }
            className="p-4"
            header={
              <>
                <p className="text-tiny uppercase font-bold">
                  {projet.category}
                </p>
                <h4 className="font-bold text-large">{projet.title}</h4>
              </>
            }
          />
        ))}
      </motion.div>
    </>
  );
}
