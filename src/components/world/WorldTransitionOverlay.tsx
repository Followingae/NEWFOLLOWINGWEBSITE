"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useWorld } from "./WorldProvider";

export function WorldTransitionOverlay() {
  const { isTransitioning, world } = useWorld();

  return (
    <AnimatePresence>
      {isTransitioning && (
        <motion.div
          className="fixed inset-0 z-[9998] origin-top"
          style={{
            backgroundColor:
              world === "influencer" ? "#111111" : "#d3ff02",
          }}
          initial={{ scaleY: 0 }}
          animate={{ scaleY: 1 }}
          exit={{ scaleY: 0, originY: 1 }}
          transition={{ duration: 0.3, ease: [0.76, 0, 0.24, 1] }}
        >
          {/* Grain texture on overlay */}
          <div
            className="absolute inset-0 opacity-10"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
              backgroundSize: "256px 256px",
            }}
          />
        </motion.div>
      )}
    </AnimatePresence>
  );
}
