"use client";

import { Button } from "@/components/ui/button";
import { useLanguage } from "@/hooks/useLanguage";
import { Languages } from "lucide-react";
import { cn } from "@/lib/utils";
import { useEffect, useRef, useState } from "react";

export function LanguageSwitch() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const menuRef = useRef<HTMLDivElement>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout>();

  const handleMouseEnter = () => {
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    closeTimeoutRef.current = setTimeout(() => {
      if (!containerRef.current?.contains(document.activeElement)) {
        setIsOpen(false);
      }
    }, 100);
  };

  const handleClick = () => {
    setIsOpen(true);
  };

  const handleLanguageSelect = (langCode: "en" | "fr" | "es") => {
    // Clear any pending timeouts
    if (closeTimeoutRef.current) {
      clearTimeout(closeTimeoutRef.current);
    }
    // Update language and close menu immediately
    setLanguage(langCode);
    setIsOpen(false);
    // Force blur the button to prevent focus states
    if (document.activeElement instanceof HTMLElement) {
      document.activeElement.blur();
    }
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        containerRef.current && 
        !containerRef.current.contains(event.target as Node) &&
        !menuRef.current?.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  useEffect(() => {
    return () => {
      if (closeTimeoutRef.current) {
        clearTimeout(closeTimeoutRef.current);
      }
    };
  }, []);

  const languages = [
    { code: "en", label: "EN", flag: "🇬🇧" },
    { code: "fr", label: "FR", flag: "🇫🇷" },
    { code: "es", label: "ES", flag: "🇲🇽" },
  ];

  return (
    <div
      ref={containerRef}
      className="relative"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onClick={handleClick}
    >
      <div 
        ref={menuRef}
        className={cn(
          "absolute bottom-full left-1/2 -translate-x-1/2 mb-2 transition-all duration-200 transform",
          "opacity-0 scale-95 pointer-events-none",
          isOpen && "opacity-100 scale-100 pointer-events-auto"
        )}
      >
        <div className="flex gap-2 p-2 bg-white dark:bg-background rounded-lg shadow-lg">
          {languages.map((lang) => (
            <Button
              key={lang.code}
              variant="ghost"
              size="sm"
              className={cn(
                "px-2 py-1 text-sm font-medium rounded flex items-center gap-1",
                language === lang.code && "bg-secondary"
              )}
              onClick={(e) => {
                e.stopPropagation();
                handleLanguageSelect(lang.code as "en" | "fr" | "es");
              }}
            >
              <span className="text-base">{lang.flag}</span>
              <span className="text-xs">{lang.label}</span>
            </Button>
          ))}
        </div>
      </div>
      <Button 
        variant="ghost" 
        size="icon" 
        className="w-9 h-9"
      >
        <Languages className="h-4 w-4" />
        <span className="sr-only">Switch language</span>
      </Button>
    </div>
  );
}
