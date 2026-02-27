"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/content/work";

export function CaseCard({ study }: { study: CaseStudy }) {
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <motion.div
        className="relative overflow-hidden"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        {/* Thumbnail placeholder */}
        <div className="relative aspect-[4/3] overflow-hidden" style={{ backgroundColor: "var(--bg-alt)" }}>
          <motion.div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)",
              opacity: 0.08,
            }}
            whileHover={{ scale: 1.04 }}
            transition={{ duration: 0.6 }}
          />

          {/* Tags overlay */}
          <div className="absolute bottom-4 left-4 flex flex-wrap gap-1.5 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
            {study.tags.map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: "var(--bg)",
                  color: "var(--text)",
                }}
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        <div className="border-b py-6" style={{ borderColor: "var(--border)" }}>
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text)" }}
          >
            {study.title}
          </h3>
          <p
            className="mt-2 text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {study.impact}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
