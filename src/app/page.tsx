"use client";

import BlurFade from "@/components/magicui/blur-fade";
import BlurFadeText from "@/components/magicui/blur-fade-text";
import { ProjectCard } from "@/components/project-card";
import { ResumeCard } from "@/components/resume-card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { useLanguage } from "@/hooks/useLanguage";
import { DATA as resumeFr } from "@/data/resume-fr";
import { DATA as resumeEn } from "@/data/resume-en";
import { DATA as resumeEs } from "@/data/resume-es";
import { fixResume } from "@/data/fixResume";
import Link from "next/link";
import Markdown from "react-markdown";
import TypingAnimation from "@/components/magicui/typing-animation";
import { useTranslation } from '@/hooks/useTranslations';
import { Background } from "@/components/ui/background";

const BLUR_FADE_DELAY = 0.04;

const TYPING_SPEEDS = {
  title: 30,      
  subtitle: 20,   
  text: 15,       
  description: 10 
} as const;

export default function Page() {
  const { language } = useLanguage();
  const { t } = useTranslation();
  const resume = {
    en: resumeEn,
    fr: resumeFr,
    es: resumeEs
  }[language]

  return (
    <>
      <Background />
      <main className="relative flex flex-col min-h-[100dvh] space-y-6 md:space-y-10 px-4 sm:px-6 md:px-8">
        <section id="hero" className="min-h-[25dvh] sm:min-h-[30dvh] flex items-center">
          <div className="mx-auto w-full max-w-2xl space-y-6 md:space-y-8">
            <div className="flex flex-col items-center gap-4 sm:gap-6">
              <BlurFade delay={BLUR_FADE_DELAY}>
                <Avatar className="size-20 sm:size-24 md:size-28 border">
                  <AvatarImage alt={fixResume.name} src={fixResume.avatarUrl} />
                  <AvatarFallback>{fixResume.initials}</AvatarFallback>
                </Avatar>
              </BlurFade>
              <div className="flex-col flex w-full space-y-1.5 text-center">
                <TypingAnimation
                  delay={BLUR_FADE_DELAY}
                  duration={TYPING_SPEEDS.title}
                  className="font-bold tracking-tighter text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl min-h-[6rem] sm:min-h-[7rem] md:min-h-[8rem]"
                  startOnView={true}
                >
                  {`${t('greeting')} ${fixResume.name.split(" ")[0]} 👋`}
                </TypingAnimation>
                <TypingAnimation
                  className="max-w-[600px] mx-auto text-sm sm:text-base md:text-xl min-h-[3rem] sm:min-h-[4rem]"
                  delay={BLUR_FADE_DELAY}
                  duration={TYPING_SPEEDS.description}
                  startOnView={true}
                >
                  {resume.description}
                </TypingAnimation>
              </div>
            </div>
          </div>
        </section>
        <section id="about" className="min-h-[15dvh] sm:min-h-[20dvh]">
          <BlurFade delay={BLUR_FADE_DELAY * 3}>
            <TypingAnimation
              delay={BLUR_FADE_DELAY * 3}
              duration={TYPING_SPEEDS.subtitle}
              className="text-xl font-bold "
              startOnView={true}
            >
              {t('about')}
            </TypingAnimation>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY * 4}>
            <TypingAnimation
              delay={BLUR_FADE_DELAY * 4}
              duration={TYPING_SPEEDS.description}
              className="prose max-w-full text-pretty font-sans text-sm text-muted-foreground dark:prose-invert min-h-[8rem] sm:min-h-[6rem]"
              startOnView={true}
            >
              {resume.summary}
            </TypingAnimation>
          </BlurFade>
        </section>
        <section id="work" className="min-h-[25dvh]">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 5}>
              <TypingAnimation
                delay={BLUR_FADE_DELAY * 3}
                duration={TYPING_SPEEDS.title}
                className="text-xl font-bold lang-transition"
                startOnView={true}
              >
                {t('workTitle')}
              </TypingAnimation>
            </BlurFade>
            {resume.work.map((work, id) => (
              <BlurFade
                key={work.company}
                delay={BLUR_FADE_DELAY * 6 + id * 0.05}
              >
                <ResumeCard
                  key={work.company}
                  logoUrl={work.logoUrl}
                  altText={work.company}
                  title={work.company}
                  subtitle={work.title}
                  href={work.href}
                  badges={work.badges}
                  period={`${work.start} - ${work.end ?? "Present"}`}
                  description={work.description}
                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="education" className="min-h-[20dvh]">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 7}>
              <TypingAnimation
                delay={BLUR_FADE_DELAY * 3}
                duration={TYPING_SPEEDS.title}
                className="text-xl font-bold"
                startOnView={true}
              >
                {t('educationTitle')}
              </TypingAnimation>
            </BlurFade>
            {resume.education.map((education, id) => (
              <BlurFade
                key={education.school}
                delay={BLUR_FADE_DELAY * 8 + id * 0.05}
              >
                <ResumeCard
                  key={education.school}
                  href={education.href}
                  logoUrl={education.logoUrl}
                  altText={education.school}
                  title={education.school}
                  subtitle={education.degree}
                  period={`${education.start} - ${education.end}`}
                  localisation={education.localisation}
                  description={education.description}                />
              </BlurFade>
            ))}
          </div>
        </section>
        <section id="skills" className="min-h-[10dvh]">
          <div className="flex min-h-0 flex-col gap-y-3">
            <BlurFade delay={BLUR_FADE_DELAY * 9}>
              <h2 className="text-xl font-bold">{t('skillsTitle')}</h2>
            </BlurFade>
            <div className="flex flex-wrap gap-1">
              {fixResume.skills.map((skill, id) => (
                <BlurFade key={skill} delay={BLUR_FADE_DELAY * 10 + id * 0.05}>
                  <Badge key={skill}>{skill}</Badge>
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="projects" className="min-h-[30dvh]">
          <div className="space-y-8 md:space-y-12 w-full py-4 md:py-6">
            <BlurFade delay={BLUR_FADE_DELAY * 11}>
              <div className="flex flex-col items-center justify-center space-y-3 md:space-y-4 text-center">
                <div className="space-y-2">
                  <TypingAnimation
                    delay={BLUR_FADE_DELAY * 3}
                    duration={TYPING_SPEEDS.subtitle}
                    className="text-2xl sm:text-3xl font-bold tracking-tighter sm:text-5xl"
                    startOnView={true}
                  >
                    {t('projectsTitle')}
                  </TypingAnimation>
                  <TypingAnimation
                    delay={BLUR_FADE_DELAY * 3}
                    duration={TYPING_SPEEDS.description}
                    className="text-sm sm:text-base text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                    startOnView={true}
                  >
                    {t('projectsDescription')}
                  </TypingAnimation>
                </div>
              </div>
            </BlurFade>
            <div className="flex flex-col gap-4 sm:gap-6 max-w-[90dvw] mx-auto">
              {resume.projects.map((project, id) => (
                <BlurFade
                  key={project.title}
                  delay={BLUR_FADE_DELAY * 12 + id * 0.05}
                >
                  <ProjectCard
                    href={project.href}
                    key={project.title}
                    title={project.title}
                    description={project.description}
                    dates={project.dates}
                    tags={project.technologies}
                    image={project.image}
                    video={project.video}
                    links={project.links}
                  />
                </BlurFade>
              ))}
            </div>
          </div>
        </section>
        <section id="contact" className="min-h-[15dvh]">
          <div className="grid items-center justify-center gap-3 sm:gap-4 px-4 text-center md:px-6 w-full py-8 md:py-12">
            <BlurFade delay={BLUR_FADE_DELAY * 16}>
              <div className="space-y-3">
                <div className="inline-block rounded-lg bg-foreground text-background px-3 py-1 text-sm">
                  {t('contactTitle')}
                </div>
                <TypingAnimation
                  delay={BLUR_FADE_DELAY * 3}
                  duration={TYPING_SPEEDS.subtitle}
                  className="text-3xl font-bold tracking-tighter sm:text-5xl"
                  startOnView={true}
                >
                  {t('contactSubtitle')}
                </TypingAnimation>
                <TypingAnimation
                  delay={BLUR_FADE_DELAY * 3}
                  duration={TYPING_SPEEDS.description}
                  className="mx-auto max-w-[600px] text-muted-foreground md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed"
                  startOnView={true}
                >
                  {t('contactDescription')}
                </TypingAnimation>
              </div>
            </BlurFade>
          </div>
        </section>
        
      </main>
    </>
  );
}
