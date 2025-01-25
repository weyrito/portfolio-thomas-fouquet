"use client";

import type { ReactNode } from "react";

import { isMobile } from "react-device-detect";
import {
  Card as NextUICard,
  CardHeader,
  CardBody,
  CardFooter,
} from "@heroui/card";
import { motion } from "framer-motion";

const MotionCard = motion(NextUICard);

interface CardProps {
  header?: ReactNode;
  body?: ReactNode;
  footer?: ReactNode;
  animationDelay?: number;
  className?: string;
  children?: ReactNode;
}

export default function Card({
  header,
  body,
  footer,
  className = "",
  children,
}: CardProps) {
  return (
    <MotionCard
      className={`p-4 ${className}`}
      initial={{ opacity: 0, scale: 0.7 }}
      transition={{ duration: 0.02 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.02,
        opacity: 1,
        transition: { duration: 0.02 },
      }}
      whileInView={{
        opacity: isMobile ? 1 : 0.9,
        scale: 1,
      }}
    >
      {header && (
        <CardHeader className="pb-0 pt-2 px-4 flex-col items-start">
          {header}
        </CardHeader>
      )}
      {body && <CardBody className="overflow-visible py-2">{body}</CardBody>}
      {footer && <CardFooter>{footer}</CardFooter>}
      {children}
    </MotionCard>
  );
}
