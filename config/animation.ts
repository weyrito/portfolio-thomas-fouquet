// src/config/animations.ts

import { isMobile } from "react-device-detect";

export const cardAnimations = {
  initial: { opacity: 0, scale: 0.7 },
  whileInView: {
    opacity: isMobile ? 1 : 0.8,
    scale: 1,
  },
  whileHover: {
    scale: 1.02,
    transition: { duration: 0.02 },
    opacity: 1,
  },
  viewport: { once: true },
  transition: { duration: 0.02 },
} as const;

export const springScrollConfig = {
  stiffness: 100,
  damping: 30,
  restDelta: 0.001,
  viewport: { once: true },
} as const;

export const cardChildrenAnimations = {
  initial: { opacity: 0 },
  whileInView: { opacity: 1 },
  viewport: { once: true },
} as const;

export const listAnimations = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
} as const;

export const tooltipAnimations = {
  initial: { opacity: 0, scale: 0 },
  whileInView: { opacity: 1, scale: 1 },
  viewport: { once: true },
  transition: { duration: 0.2 },
} as const;

export const skillsAnimations = {
  container: {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6, ease: "easeOut" },
  },
  progressBar: {
    initial: { scaleX: 0, originX: 0 },
    whileInView: { scaleX: 1 },
    viewport: { once: true },
    transition: {
      duration: 1,
      ease: [0.87, 0, 0.13, 1], // Personnalisé pour une animation plus fluide
      type: "spring",
      stiffness: 100,
      damping: 30,
    },
  },
  skillCard: {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    whileHover: {
      y: -5,
      transition: { duration: 0.3, ease: "easeOut" },
    },
    transition: { duration: 0.8 },
    viewport: { once: true, margin: "-50px" },
  },
  skillItem: {
    initial: { opacity: 0, x: -20 },
    whileInView: { opacity: 1, x: 0 },
    transition: { type: "spring", stiffness: 100, damping: 20 },
    viewport: { once: true },
  },
  languageItem: {
    initial: { opacity: 0, x: 20 },
    whileInView: { opacity: 1, x: 0 },
    transition: {
      type: "spring",
      stiffness: 100,
      damping: 20,
    },
    viewport: { once: true },
  },
} as const;
