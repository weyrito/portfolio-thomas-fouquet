"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

import { SunFilledIcon, MoonFilledIcon } from "@/components/ui/Icons";

export function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <motion.button
      aria-label="Toggle theme"
      className="rounded-lg p-2 hover:bg-default-100"
      transition={{ type: "spring", stiffness: 400, damping: 17 }}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => setTheme(theme === "light" ? "dark" : "light")}
    >
      <AnimatePresence initial={false} mode="wait">
        <motion.div
          key={theme}
          animate={{ y: 0, opacity: 1, rotate: 0 }}
          exit={{ y: 20, opacity: 0, rotate: 90 }}
          initial={{ y: -20, opacity: 0, rotate: -90 }}
          transition={{ duration: 0.2 }}
        >
          {theme === "light" ? (
            <MoonFilledIcon size={22} />
          ) : (
            <SunFilledIcon size={22} />
          )}
        </motion.div>
      </AnimatePresence>
    </motion.button>
  );
}
