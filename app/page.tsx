"use client";

import { NavbarComponent } from "@/components/layout/navbar";
import Projects from "@/components/layout/projects";
import Experiences from "@/components/layout/experiences";
import AboutMe from "@/components/layout/aboutme";
import Skills from "@/components/layout/skills";
import Footer from "@/components/layout/footer";

export default function Home() {
  return (
    <>
      <NavbarComponent />
      <main className="flex flex-col items-center min-h-screen p-4 sm:p-8">
        <AboutMe />
        <Experiences />
        <Projects />
        <Skills />
        <Footer />
      </main>
    </>
  );
}
