"use client";
import { Card, CardHeader, CardBody, CardFooter } from "@heroui/card";
import { Link } from "@heroui/link";
import { Divider } from "@heroui/divider";
import { Chip } from "@heroui/chip";
import { Image } from "@heroui/image";
import { Skeleton } from "@heroui/skeleton";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";

import {
  cardAnimations,
  springScrollConfig,
  listAnimations,
  cardChildrenAnimations,
} from "@/config/animation";
import { title } from "@/components/ui/primitives";
import experiences from "@/data/experiences.json";

const MotionCard = motion(Card);

export default function Experiences() {
  const experiencesList = experiences.experiences.experiences;
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

  return (
    <>
      <motion.div
        ref={containerRef}
        className="w-full max-w-7xl mt-4 sm:mt-8 mb-4"
        id="experiences"
        style={{ opacity }}
      >
        <motion.div className="flex flex-col gap-2" {...cardChildrenAnimations}>
          <h2 className={title({ size: "sm" })}>Expériences</h2>
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
        className="gap-2 sm:gap-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 w-full"
        {...listAnimations}
      >
        {experiencesList.map((experience, index) => (
          <MotionCard
            key={index}
            className="p-2 sm:p-4"
            {...cardAnimations}
            transition={{
              ...cardAnimations.transition,
              delay: index * 0.1, // Ajouter un délai progressif
            }}
          >
            <CardHeader className="flex flex-col sm:flex-row justify-between items-start gap-2 sm:gap-4">
              <div className="flex flex-col flex-1">
                <h3 className="text-lg sm:text-xl font-bold mr-2">
                  {experience.position}
                </h3>
                {experience.companyUrl ? (
                  <Link
                    isExternal
                    showAnchorIcon
                    className="text-primary text-sm sm:text-base"
                    href={experience.companyUrl}
                  >
                    {experience.company}
                  </Link>
                ) : (
                  <h2 className="text-sm sm:text-base">{experience.company}</h2>
                )}
              </div>
              <p className="text-default-500 text-sm sm:text-base whitespace-normal break-words">
                {experience.period}
              </p>
            </CardHeader>
            <Divider />
            <CardBody>
              <p
                className={`text-default-600 text-sm sm:text-base whitespace-pre-wrap break-words`}
              >
                {experience.description}
              </p>
            </CardBody>
            <CardFooter className="flex justify-between items-center">
              <div className="flex gap-1 sm:gap-2 flex-wrap flex-1">
                {experience.technologies?.map((tech, techIndex) => (
                  <Chip
                    key={techIndex}
                    className="px-1 sm:px-2 py-4 text-xs sm:text-sm break-words"
                    content={tech.label}
                    size="sm"
                    variant="flat"
                  >
                    {tech.name}
                  </Chip>
                ))}
              </div>

              {experience.logo && (
                <div className="block w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 relative shrink-0 ml-4">
                  {!loadedImages[index] && (
                    <Skeleton className="rounded-full">
                      <div className="w-20 h-20 sm:w-28 sm:h-28 lg:w-32 lg:h-32 rounded-full bg-default-300" />
                    </Skeleton>
                  )}
                  <Image
                    alt={`${experience.company} logo`}
                    className={`object-contain transition-opacity duration-300 ${
                      !loadedImages[index] ? "opacity-0" : "opacity-100"
                    }`}
                    height={96}
                    src={experience.logo}
                    width={96}
                    onLoad={() => handleImageLoad(index)}
                  />
                </div>
              )}
            </CardFooter>
          </MotionCard>
        ))}
      </motion.div>
    </>
  );
}
