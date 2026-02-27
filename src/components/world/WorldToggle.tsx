"use client";

import { motion } from "framer-motion";
import { useWorld } from "./WorldProvider";

export function WorldToggle() {
  const { world, toggleWorld } = useWorld();

  return (
    <button
      onClick={toggleWorld}
      className="relative flex h-8 items-center gap-1 rounded-full border px-1"
      style={{
        borderColor: "var(--border)",
        backgroundColor: "var(--surface)",
      }}
      aria-label={`Switch to ${world === "influencer" ? "Productions" : "Influencer Marketing"} mode`}
    >
      <span
        className="relative z-10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300"
        style={{
          color:
            world === "influencer"
              ? "var(--accent-text)"
              : "var(--muted)",
        }}
      >
        IM
      </span>
      <span
        className="relative z-10 px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider transition-colors duration-300"
        style={{
          color:
            world === "production"
              ? "var(--accent-text)"
              : "var(--muted)",
        }}
      >
        Prod
      </span>
      <motion.div
        className="absolute top-0.5 bottom-0.5 rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
        animate={{
          left: world === "influencer" ? "2px" : "50%",
          width: world === "influencer" ? "calc(50% - 2px)" : "calc(50% - 2px)",
        }}
        transition={{ type: "spring", stiffness: 300, damping: 30 }}
      />
    </button>
  );
}
