"use client";

import { NavbarComponent } from "@/components/layout/Navbar";
import Projects from "@/components/layout/Projects";
import Experiences from "@/components/layout/Experiences";
import AboutMe from "@/components/layout/AboutMe";
import Skills from "@/components/layout/Skills";
import Footer from "@/components/layout/Footer";

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
