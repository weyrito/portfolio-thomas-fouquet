"use client";
import "@/styles/globals.css";
import {
  ParallaxProvider,
  ParallaxBanner,
  ParallaxBannerLayer,
} from "react-scroll-parallax";

import { Providers } from "./providers";

export default function RootLayoutClient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Providers themeProps={{ attribute: "class", defaultTheme: "light" }}>
      <ParallaxProvider>
        <div className="relative flex flex-col h-screen">
          <main className="container mx-auto max-w-7xl pt-4 px-6 flex-grow">
            <div className="fixed inset-0 z-[-1]">
              <ParallaxBanner style={{ height: "100%" }}>
                <ParallaxBannerLayer
                  image="/background.jpg"
                  speed={15}
                  style={{
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                  }}
                />
                <div className="absolute inset-0 bg-background/80 backdrop-blur-xl" />
              </ParallaxBanner>
            </div>
            {children}
          </main>
          <div className="w-full flex items-center justify-center py-2 sm:py-3 px-2 sm:px-4" />
        </div>
      </ParallaxProvider>
    </Providers>
  );
}
