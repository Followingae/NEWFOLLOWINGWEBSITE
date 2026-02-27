"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useRef } from "react";
import { floatingTiles } from "@/content/site";
import { tileFloat } from "@/lib/motion";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const positions = [
  { top: "12%", right: "8%", rotate: -3 },
  { top: "28%", right: "2%", rotate: 2 },
  { top: "55%", right: "6%", rotate: -1 },
  { bottom: "18%", right: "14%", rotate: 3 },
  { bottom: "8%", right: "0%", rotate: -2 },
];

export function FloatingTiles() {
  const reduced = useReducedMotion();
  const containerRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 20 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 20 });

  useEffect(() => {
    if (reduced) return;

    function handleMouse(e: globalThis.MouseEvent) {
      const { innerWidth, innerHeight } = window;
      mouseX.set((e.clientX / innerWidth - 0.5) * 20);
      mouseY.set((e.clientY / innerHeight - 0.5) * 20);
    }

    window.addEventListener("mousemove", handleMouse);
    return () => window.removeEventListener("mousemove", handleMouse);
  }, [reduced, mouseX, mouseY]);

  return (
    <div
      ref={containerRef}
      className="pointer-events-none absolute inset-0 hidden lg:block"
      aria-hidden
    >
      {floatingTiles.map((tile, i) => (
        <motion.div
          key={tile.label}
          className="pointer-events-auto absolute"
          style={{
            ...positions[i],
            x: springX,
            y: springY,
          }}
          variants={tileFloat}
          initial="hidden"
          animate="visible"
          custom={i}
        >
          <div
            className="flex w-44 flex-col overflow-hidden rounded-xl border"
            style={{
              borderColor: "var(--border)",
              backgroundColor: "var(--surface)",
              boxShadow: "var(--shadow-lg)",
            }}
          >
            {/* Placeholder image */}
            <div
              className="h-28 w-full"
              style={{
                background: `linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)`,
                opacity: 0.15 + i * 0.08,
              }}
            />
            {/* Label chip */}
            <div className="px-3 py-2.5">
              <span className="micro-label" style={{ color: "var(--text)" }}>
                {tile.label}
              </span>
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
