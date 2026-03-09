"use client";

import { motion } from "framer-motion";
import type { ServiceTag } from "@/content/work";

interface FilterChipsProps {
  options: ServiceTag[];
  active: ServiceTag | null;
  onSelect: (tag: ServiceTag | null) => void;
}

export function FilterChips({ options, active, onSelect }: FilterChipsProps) {
  return (
    <div className="flex flex-wrap gap-2">
      <button
        onClick={() => onSelect(null)}
        className="relative overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
        style={{
          backgroundColor: active === null ? "var(--text)" : "transparent",
          border: `1px solid ${active === null ? "var(--text)" : "var(--border)"}`,
          color: active === null ? "var(--bg)" : "var(--muted)",
        }}
      >
        {active === null && (
          <motion.div
            className="absolute inset-0 rounded-full"
            style={{ backgroundColor: "var(--text)" }}
            layoutId="filter-bg"
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
          />
        )}
        <span className="relative z-10">All</span>
      </button>
      {options.map((tag) => (
        <button
          key={tag}
          onClick={() => onSelect(tag)}
          className="relative overflow-hidden rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
          style={{
            backgroundColor: active === tag ? "var(--text)" : "transparent",
            border: `1px solid ${active === tag ? "var(--text)" : "var(--border)"}`,
            color: active === tag ? "var(--bg)" : "var(--muted)",
          }}
        >
          {active === tag && (
            <motion.div
              className="absolute inset-0 rounded-full"
              style={{ backgroundColor: "var(--text)" }}
              layoutId="filter-bg"
              transition={{ type: "spring", stiffness: 300, damping: 30 }}
            />
          )}
          <span className="relative z-10">{tag}</span>
        </button>
      ))}
    </div>
  );
}
