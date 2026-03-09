"use client";

import { motion } from "framer-motion";
import { useWorld } from "./WorldProvider";

export function WorldToggle() {
  const { world, toggleWorld } = useWorld();

  return (
    <button
      onClick={toggleWorld}
      className="relative flex h-9 items-center rounded-full transition-colors duration-500"
      style={{
        backgroundColor: "var(--surface)",
        border: "1px solid var(--border)",
      }}
      aria-label={`Switch to ${world === "influencer" ? "Productions" : "Influencer"} mode`}
    >
      <motion.div
        className="absolute inset-y-[3px] rounded-full"
        style={{ backgroundColor: "var(--accent)" }}
        animate={{
          left: world === "influencer" ? "3px" : "calc(50%)",
          right: world === "influencer" ? "calc(50%)" : "3px",
        }}
        transition={{ type: "spring", stiffness: 350, damping: 30 }}
      />
      <span
        className="relative z-10 px-4 py-1.5 text-[11px] font-semibold tracking-wide transition-colors duration-300"
        style={{
          color:
            world === "influencer"
              ? "var(--accent-text)"
              : "var(--muted)",
        }}
      >
        Influencer
      </span>
      <span
        className="relative z-10 px-4 py-1.5 text-[11px] font-semibold tracking-wide transition-colors duration-300"
        style={{
          color:
            world === "production"
              ? "var(--accent-text)"
              : "var(--muted)",
        }}
      >
        Production
      </span>
    </button>
  );
}
