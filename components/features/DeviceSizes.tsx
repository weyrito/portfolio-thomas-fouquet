"use client";

import { useState, useEffect } from "react";

interface DeviceSizes {
  isSmallDevice: boolean;
  isMediumDevice: boolean;
  isLargeDevice: boolean;
}

function useMediaQuery(query: string): boolean {
  const [matches, setMatches] = useState(false);

  useEffect(() => {
    const media = window.matchMedia(query);

    setMatches(media.matches);
    const listener = (e: MediaQueryListEvent) => setMatches(e.matches);

    media.addEventListener("change", listener);

    return () => media.removeEventListener("change", listener);
  }, [query]);

  return matches;
}

export function useDeviceSizes(): DeviceSizes {
  const isSmallDevice = useMediaQuery("(max-width: 768px)");
  const isMediumDevice = useMediaQuery(
    "(min-width: 769px) and (max-width: 992px)",
  );
  const isLargeDevice = useMediaQuery("(min-width: 993px)");

  return {
    isSmallDevice,
    isMediumDevice,
    isLargeDevice,
  };
}
