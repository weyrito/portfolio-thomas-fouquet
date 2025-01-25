import type { Metadata } from "next";

import { Source_Code_Pro } from "next/font/google";
import clsx from "clsx";

import RootLayoutClient from "./layoutClient";

import { fontSans } from "@/config/fonts";
const sourceCodePro = Source_Code_Pro({
  subsets: ["latin"],
  weight: ["200", "300", "400", "600", "700", "900"],
  variable: "--font-sourceCodePro",
});

export const metadata: Metadata = {
  title: "Thomas Fouquet - Portfolio",
  description: "Développeur full-stack spécialisé en React et Next.js",
  keywords: ["portfolio", "développeur", "react", "next.js", "full-stack"],
  authors: [{ name: "Thomas Fouquet" }],
  openGraph: {
    title: "Thomas Fouquet - Portfolio",
    description: "Développeur full-stack spécialisé en React et Next.js",
    url: "https://thomas-fouquet.fr",
    siteName: "Thomas Fouquet Portfolio",
    images: [
      {
        url: "/me.jpeg",
        width: 1200,
        height: 630,
        alt: "Thomas Fouquet",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fr" suppressHydrationWarning>
      <head>
        <link
          href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>👨‍💻</text></svg>"
          rel="icon"
        />
      </head>
      <body
        className={clsx(
          "min-h-screen bg-background font-sans antialiased bg-transparent",
          fontSans.variable,
          sourceCodePro.variable
        )}
      >
        <RootLayoutClient>{children}</RootLayoutClient>
      </body>
    </html>
  );
}
