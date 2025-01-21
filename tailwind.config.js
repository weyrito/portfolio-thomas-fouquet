import { heroui } from "@heroui/theme"
import { defaultTheme } from 'tailwindcss'

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['var(--font-sourceCodePro)', ],
        mono: ['var(--font-mono)'],
      },
      backdropBlur: {
        xl: '20px',
      }
    },
  },
  darkMode: "class",
  plugins: [heroui()],
}