// src/hooks/useTranslation.ts
import { useLanguage } from "@/hooks/useLanguage";
import { translations } from "@/data/translations";

export function useTranslation() {
  const { language } = useLanguage();
  return {
    t: (key: string) => {
      try {
        return translations[language][key as keyof typeof translations[typeof language]];
      } catch {
        return key;
      }
    }
  };
}