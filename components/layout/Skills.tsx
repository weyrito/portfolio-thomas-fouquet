"use client";
import { Chip } from "@heroui/chip";
import { motion, useScroll, useTransform, useSpring } from "framer-motion";
import { useRef, useState } from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { Modal, ModalContent, ModalHeader, ModalBody } from "@heroui/modal";
import { isMobile } from "react-device-detect";

import projects from "@/data/projets.json";
import skills from "@/data/skills.json";
import { title } from "@/components/ui/primitives";
import { skillsAnimations, springScrollConfig } from "@/config/animation";
import Card from "@/components/ui/Card";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#8884d8",
  "#82ca9d",
];

const TECH_CATEGORIES: { [key: string]: string } = {
  "HTML/CSS": "Web",
  "React.js": "Web",
  "Next.js": "Web",
  "Tailwind CSS": "Web",
  Bootstrap: "Web",
  PHP: "Web",
  Symfony: "Web",
  "Firebase Auth": "Web",

  MySQL: "Base de donnée",
  PostgreSQL: "Base de donnée",

  "C/C++": "Software",

  Arduino: "Hardware",
  ESP32: "Hardware",
  "Circuit électronique": "Hardware",
  "Raspberry Pi": "Hardware",

  "Stripe API": "Services",
  Apache: "Services",
};

const calculateTechUsage = () => {
  const techByCategory: { [key: string]: string[] } = {};

  projects.projets.projets.forEach((project) => {
    project.technologies?.forEach((tech) => {
      const category = TECH_CATEGORIES[tech.name] || "Other";

      if (!techByCategory[category]) {
        techByCategory[category] = [];
      }
      if (!techByCategory[category].includes(tech.name)) {
        techByCategory[category].push(tech.name);
      }
    });
  });

  return Object.entries(techByCategory).map(([category, techs]) => ({
    name: category,
    value: techs.length,
    technologies: techs,
  }));
};

const modalVariants = {
  hidden: {
    opacity: 0,
    scale: 0.75,
    y: 20,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeOut",
    },
  },
  exit: {
    opacity: 0,
    scale: 0.95,
    transition: {
      duration: 0.1,
      ease: "easeIn",
    },
  },
};

export default function Skills() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const smoothProgress = useSpring(scrollYProgress, springScrollConfig);
  const opacity = useTransform(smoothProgress, [0, 0.2], [0, 1]);

  const { soft: softSkills, languages } = skills.skills;

  const techData = calculateTechUsage();

  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <motion.div
      ref={containerRef}
      className="w-full max-w-7xl mt-8 mb-4"
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

      <motion.div
        className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8"
        viewport={{ once: true }}
      >
        <div
          aria-label="Ouvrir le détail des technologies"
          className="w-full cursor-pointer transform transition-all duration-300 hover:scale-[1.02] hover:shadow-xl active:scale-[0.98]"
          role="button"
          tabIndex={0}
          onClick={() => setIsModalOpen(true)}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              setIsModalOpen(true);
            }
          }}
        >
          <Card
            body={
              <div className="w-full h-[300px] cursor-pointer">
                <ResponsiveContainer
                  className="cursor-pointer"
                  height="100%"
                  width="100%"
                >
                  <PieChart className="cursor-pointer">
                    <Pie
                      cx="50%"
                      cy="50%"
                      data={techData}
                      dataKey="value"
                      fill="#8884d8"
                      innerRadius={isMobile ? 40 : 60}
                      labelLine={false}
                      outerRadius={isMobile ? 80 : 120}
                      paddingAngle={2}
                    >
                      {techData.map((entry, index) => (
                        <Cell
                          key={`cell-${index}`}
                          fill={COLORS[index % COLORS.length]}
                        />
                      ))}
                    </Pie>
                    <Tooltip
                      content={({ payload }) => {
                        if (payload && payload.length) {
                          const { name, technologies } = payload[0].payload;

                          return (
                            <div className="bg-white p-2 rounded shadow max-w-[200px]">
                              <p className="font-bold">{name}</p>
                              <ul className="list-disc pl-4 text-sm">
                                {technologies.map((tech: string) => (
                                  <li key={tech}>{tech}</li>
                                ))}
                              </ul>
                            </div>
                          );
                        }

                        return null;
                      }}
                    />
                    <Legend
                      align="center"
                      layout="horizontal"
                      verticalAlign="bottom"
                      wrapperStyle={{
                        fontSize: isMobile ? "12px" : "14px",
                        paddingLeft: isMobile ? "0" : "20px",
                        bottom: isMobile ? "0" : "10px",
                      }}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            }
            className="p-4 cursor-pointer"
            header={
              <motion.h3
                className="text-lg font-bold cursor-pointer"
                initial={{ opacity: 0 }}
                transition={{ delay: 0.2 }}
                viewport={{ once: true }}
                whileInView={{ opacity: 1 }}
              >
                Technologies maîtrisées
              </motion.h3>
            }
          />
        </div>

        <Modal
          classNames={{
            base: "max-w-[95vw] h-auto max-h-[95vh] md:max-h-[90vh]",
            header: "border-b border-neutral-200 dark:border-neutral-700",
            body: "p-3 md:p-6",
          }}
          isOpen={isModalOpen}
          size="5xl"
          onClose={() => setIsModalOpen(false)}
        >
          <ModalContent>
            {(_onClose) => (
              <motion.div
                animate="visible"
                exit="exit"
                initial="hidden"
                variants={modalVariants}
              >
                <ModalHeader className="text-lg md:text-xl font-bold">
                  Technologies maîtrisées
                </ModalHeader>
                <ModalBody>
                  <div className="grid grid-cols-1 lg:grid-cols-2 gap-3 md:gap-6 w-full">
                    <motion.div
                      animate={{ opacity: 1, y: 0 }}
                      className="h-[250px] sm:h-[300px] lg:h-[400px] w-full"
                      initial={{ opacity: 0, y: 20 }}
                      transition={{ delay: 0.1 }}
                      viewport={{ once: true }}
                    >
                      <ResponsiveContainer height="100%" width="100%">
                        <PieChart>
                          <Pie
                            cx="50%"
                            cy="50%"
                            data={techData}
                            dataKey="value"
                            innerRadius={isMobile ? "60%" : "60%"}
                            label={({ name }) => name}
                            labelLine={false}
                            outerRadius={isMobile ? "70%" : "80%"}
                            paddingAngle={2}
                          >
                            {techData.map((entry, index) => (
                              <Cell
                                key={`cell-${index}`}
                                fill={COLORS[index % COLORS.length]}
                              />
                            ))}
                          </Pie>
                          <Tooltip
                            content={({ payload }) => {
                              if (payload && payload.length) {
                                const { name, technologies } =
                                  payload[0].payload;

                                return (
                                  <div className="bg-white p-2 rounded shadow max-w-[200px]">
                                    <p className="font-bold">{name}</p>
                                    <ul className="list-disc pl-4 text-sm">
                                      {technologies.map((tech: string) => (
                                        <li key={tech}>{tech}</li>
                                      ))}
                                    </ul>
                                  </div>
                                );
                              }

                              return null;
                            }}
                          />
                          {isMobile && (
                            <Legend height={36} verticalAlign="bottom" />
                          )}
                        </PieChart>
                      </ResponsiveContainer>
                    </motion.div>

                    {/* Detailed list with improved mobile scrolling */}
                    <motion.div
                      animate={{ opacity: 1, x: 0 }}
                      className="space-y-3 md:space-y-4 overflow-y-auto max-h-[300px] md:max-h-[400px] pr-2"
                      initial={{ opacity: 0, x: 20 }}
                      transition={{ delay: 0.2 }}
                      viewport={{ once: true }}
                    >
                      {techData.map((category, index) => (
                        <motion.div
                          key={category.name}
                          animate={{ opacity: 1, y: 0 }}
                          className="p-3 md:p-4 rounded-lg border dark:border-neutral-700"
                          initial={{ opacity: 0, y: 10 }}
                          transition={{ delay: 0.3 + index * 0.1 }}
                          viewport={{ once: true }}
                        >
                          <h4
                            className="font-bold mb-2 text-sm md:text-base"
                            style={{ color: COLORS[index % COLORS.length] }}
                          >
                            {category.name}
                          </h4>
                          <div className="flex flex-wrap gap-1.5 md:gap-2">
                            {category.technologies.map((tech) => (
                              <Chip
                                key={tech}
                                className="transition-all hover:scale-105 text-xs md:text-sm"
                                size={isMobile ? "sm" : "md"}
                                variant="flat"
                              >
                                {tech}
                              </Chip>
                            ))}
                          </div>
                        </motion.div>
                      ))}
                    </motion.div>
                  </div>
                </ModalBody>
              </motion.div>
            )}
          </ModalContent>
        </Modal>

        {/* Soft Skills Card */}
        <Card
          body={
            <div className="flex flex-wrap gap-2">
              {softSkills.map((skill, index) => (
                <motion.div
                  key={skill}
                  initial={{ opacity: 0, scale: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  whileInView={{ opacity: 1, scale: 1 }}
                >
                  <Chip variant="flat">{skill}</Chip>
                </motion.div>
              ))}
            </div>
          }
          className="p-4"
          header={
            <motion.h3
              className="text-lg font-bold"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
            >
              Savoir-être
            </motion.h3>
          }
        />

        {/* Languages Card */}
        <Card
          body={
            <div className="flex flex-col gap-2">
              {languages.map((lang, index) => (
                <motion.div
                  key={lang.name}
                  className="flex justify-between items-center"
                  {...skillsAnimations.languageItem}
                  transition={{
                    ...skillsAnimations.languageItem.transition,
                    delay: 0.8 + index * 0.15,
                  }}
                >
                  <span className="font-medium">{lang.name}</span>
                  <Chip color="primary" variant="flat">
                    {lang.level}
                  </Chip>
                </motion.div>
              ))}
            </div>
          }
          className="p-4"
          header={
            <motion.h3
              className="text-lg font-bold"
              initial={{ opacity: 0 }}
              transition={{ delay: 0.6 }}
              viewport={{ once: true }}
              whileInView={{ opacity: 1 }}
            >
              Langues
            </motion.h3>
          }
        />
      </motion.div>
    </motion.div>
  );
}
