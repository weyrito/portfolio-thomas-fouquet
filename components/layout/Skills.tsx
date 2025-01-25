"use client";
import { Chip } from "@heroui/chip";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef } from "react";
import skills from "@/data/skills.json";
import { title } from "@/components/ui/primitives";
import { skillsAnimations, springScrollConfig } from "@/config/animation";
import Card from "@/components/ui/Card";

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springScrollConfig);
  const opacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  const { technical, soft: softSkills, languages } = skills.skills;

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-7xl px-4 sm:px-6 mt-8 mb-4"
      id="skills"
      style={{ opacity }}
      {...skillsAnimations.container}
    >
      <motion.div className="flex flex-col gap-2" viewport={{ once: true }}>
        <h2 className={title({ size: "sm" })}>Compétences</h2>
        <motion.div
          animate={{ width: "5rem" }}
          className="h-1 w-20 bg-primary rounded-lg"
          initial={{ width: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        />
      </motion.div>

      <motion.div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mt-6 sm:mt-8">
        {/* Technical Skills */}
        <Card
          body={
            <div className="flex flex-wrap gap-2 sm:gap-3">
              {technical.map((skill, index) => (
                <motion.div
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <Chip
                    variant="flat"
                    className="bg-primary/10 dark:bg-primary/20 text-sm sm:text-base max-w-[180px] sm:max-w-full"
                  >
                    <span className="line-clamp-2 text-center">{skill.name}</span>
                  </Chip>
                </motion.div>
              ))}
            </div>
          }
          className="p-4 sm:p-6"
          header={
            <motion.h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
              Compétences Techniques
            </motion.h3>
          }
        />

        <div className="space-y-4 sm:space-y-6">
          {/* Soft Skills */}
          <Card
            body={
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {softSkills.map((skill, index) => (
                  <motion.div
                    key={skill}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                  >
                    <Chip
                      variant="flat"
                      className="bg-neutral-100 dark:bg-neutral-800 text-sm sm:text-base max-w-[180px] sm:max-w-full"
                    >
                      <span className="line-clamp-2 text-center">{skill}</span>
                    </Chip>
                  </motion.div>
                ))}
              </div>
            }
            className="p-4 sm:p-6"
            header={
              <motion.h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Soft Skills
              </motion.h3>
            }
          />

          {/* Languages */}
          <Card
            body={
              <div className="flex flex-wrap gap-2 sm:gap-3">
                {languages.map((lang, index) => (
                  <motion.div
                    key={lang.name}
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-2"
                  >
                    <Chip
                      color="primary"
                      variant="flat"
                      className="text-sm sm:text-base max-w-[180px] sm:max-w-full"
                    >
                      <span className="line-clamp-2 text-center">
                        {lang.name} - {lang.level}
                      </span>
                    </Chip>
                  </motion.div>
                ))}
              </div>
            }
            className="p-4 sm:p-6"
            header={
              <motion.h3 className="text-base sm:text-lg font-bold mb-3 sm:mb-4">
                Langues
              </motion.h3>
            }
          />
        </div>
      </motion.div>
    </motion.div>
  );
}
