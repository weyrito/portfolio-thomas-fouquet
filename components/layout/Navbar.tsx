"use client";
import React from "react";
import {
  Navbar,
  NavbarContent,
  NavbarMenu,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@heroui/react";
import { Link } from "@heroui/link";
import { Button } from "@heroui/button";
import NextLink from "next/link";
import clsx from "clsx";
import { useState } from "react";
import { Github, Linkedin } from "lucide-react";

import { ThemeSwitch } from "@/components/features/ThemeSwitch";

const githubLink = "https://github.com/weyrito";
const linkedInLink = "https://www.linkedin.com/in/thomas-fouquet/";

const menuItems = [
  { label: "A propos", href: "#about" },
  { label: "Expériences", href: "#experiences" },
  { label: "Projets", href: "#projects" },
];

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

export const NavbarComponent = () => {
  const [activeSection] = useState<string>("");
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 640);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);

    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  return (
    <Navbar
      isBlurred
      className="bg-background/70 backdrop-blur-lg w-full fixed top-0 left-0 right-0"
      isBordered={false}
      isMenuOpen={isMenuOpen}
      position="sticky"
      shouldHideOnScroll={!isMenuOpen && !isMobile}
      style={{
        maxWidth: "100%",
      }}
      onMenuOpenChange={setIsMenuOpen}
    >
      <NavbarContent className="basis-1/5 sm:basis-full" justify="start">
        <NavbarBrand as="li" className="gap-3 max-w-fit">
          <NextLink
            className="flex justify-start items-center gap-1 text-black"
            href="/"
          >
            <p className="font-bold text-black dark:text-white">Portfolio</p>
          </NextLink>
        </NavbarBrand>
        <ul className="hidden lg:flex gap-4 justify-start ml-2">
          {menuItems.map((item) => (
            <NavbarItem
              key={item.href}
              isActive={activeSection === item.href.substring(1)}
            >
              <Link
                className={clsx("text-black dark:text-white")}
                href={item.href}
                onClick={(e) => handleAnchorClick(e, item.href)}
              >
                {item.label}
              </Link>
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent
        className="hidden sm:flex basis-1/5 sm:basis-full"
        justify="end"
      >
        <NavbarItem className="hidden sm:flex gap-4">
          <Link isExternal href={githubLink}>
            <Github className="text-default-500 hover:text-primary" />
          </Link>
          <Link isExternal href={linkedInLink}>
            <Linkedin className="text-default-500 hover:text-primary" />
          </Link>
          <ThemeSwitch />
        </NavbarItem>
        <NavbarItem>
          <Button
            as={Link}
            className="bg-green-700 text-white  dark:text-black font-bold"
            href="CV THOMAS FOUQUET.pdf"
            target="_blank"
            variant="flat"
          >
            Voir mon CV
          </Button>
        </NavbarItem>
      </NavbarContent>

      <NavbarContent className="sm:hidden basis-1" justify="end">
        <ThemeSwitch />
        <NavbarMenuToggle />
      </NavbarContent>

      <NavbarMenu className="pt-6 10max-h-full">
        <div className="pt-6 mx-4 mt-2 flex flex-col gap-4 ">
          {menuItems.map((item) => (
            <NavbarMenuItem key={item.href}>
              <Link
                className="w-full"
                href={item.href}
                size="lg"
                onClick={(e) => {
                  handleAnchorClick(e, item.href);
                  setIsMenuOpen(false);
                }}
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
          <NavbarMenuItem>
            <div className="flex gap-4 mt-4">
              <Link isExternal href={githubLink}>
                <Github className="text-default-500 hover:text-primary" />
              </Link>
              <Link isExternal href={linkedInLink}>
                <Linkedin className="text-default-500 hover:text-primary" />
              </Link>
            </div>
          </NavbarMenuItem>
        </div>
      </NavbarMenu>
    </Navbar>
  );
};
