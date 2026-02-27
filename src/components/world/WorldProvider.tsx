"use client";

import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { World } from "@/lib/theme";

interface WorldContextValue {
  world: World;
  setWorld: (w: World) => void;
  toggleWorld: () => void;
  isTransitioning: boolean;
}

const WorldContext = createContext<WorldContextValue>({
  world: "influencer",
  setWorld: () => {},
  toggleWorld: () => {},
  isTransitioning: false,
});

export function useWorld() {
  return useContext(WorldContext);
}

const STORAGE_KEY = "following_world";

export function WorldProvider({ children }: { children: ReactNode }) {
  const [world, setWorldState] = useState<World>("influencer");
  const [isTransitioning, setIsTransitioning] = useState(false);

  /* Hydrate from localStorage */
  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY) as World | null;
    if (stored === "influencer" || stored === "production") {
      setWorldState(stored);
      document.documentElement.setAttribute("data-world", stored);
    } else {
      document.documentElement.setAttribute("data-world", "influencer");
    }
    document.documentElement.setAttribute("data-theme", "light");
  }, []);

  const setWorld = useCallback((w: World) => {
    setWorldState(w);
    localStorage.setItem(STORAGE_KEY, w);
    document.documentElement.setAttribute("data-world", w);
  }, []);

  const toggleWorld = useCallback(() => {
    const prefersReduced = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReduced) {
      const next = world === "influencer" ? "production" : "influencer";
      setWorld(next);
      return;
    }

    setIsTransitioning(true);

    /* Phase 1: overlay covers (300ms), then swap, then reveal */
    setTimeout(() => {
      const next = world === "influencer" ? "production" : "influencer";
      setWorld(next);

      /* Phase 2: reveal after world swap */
      setTimeout(() => {
        setIsTransitioning(false);
      }, 300);
    }, 300);
  }, [world, setWorld]);

  return (
    <WorldContext.Provider
      value={{ world, setWorld, toggleWorld, isTransitioning }}
    >
      {children}
    </WorldContext.Provider>
  );
}
