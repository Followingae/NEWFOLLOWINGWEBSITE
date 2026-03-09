"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import type { CaseStudy } from "@/content/work";

/* Card background gradients — simulate imagery until real photos are added */
const cardGradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #2d1b69 0%, #11001c 50%, #200040 100%)",
  "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)",
  "linear-gradient(135deg, #1b2838 0%, #171a21 50%, #1e2328 100%)",
  "linear-gradient(135deg, #1a0a2e 0%, #0a1628 50%, #0d0d1a 100%)",
  "linear-gradient(135deg, #0a1628 0%, #1a2a3e 50%, #0d1117 100%)",
];

function getGradient(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return cardGradients[Math.abs(hash) % cardGradients.length];
}

interface CaseCardProps {
  study: CaseStudy;
  variant?: "default" | "masonry";
}

export function CaseCard({ study, variant = "default" }: CaseCardProps) {
  const bg = getGradient(study.slug);

  if (variant === "masonry") {
    return (
      <Link href={`/work/${study.slug}`} className="group block h-full">
        <motion.div
          className="relative h-full overflow-hidden rounded-lg"
          whileHover={{ y: -4 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ background: bg }}
          />

          {/* Blur mask gradient at bottom */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 45%, transparent 70%)",
            }}
          />

          <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
            <div className="mb-2 flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-lg font-semibold text-white md:text-xl">
              {study.title}
            </h3>
            <p className="mt-1 text-sm text-white/50">{study.impact}</p>
          </div>

          {/* Hover arrow */}
          <div className="absolute top-5 right-5 z-20 flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </motion.div>
      </Link>
    );
  }

  // Default card — used on /work page
  return (
    <Link href={`/work/${study.slug}`} className="group block">
      <motion.div
        className="relative overflow-hidden rounded-lg"
        whileHover={{ y: -4 }}
        transition={{ duration: 0.3 }}
      >
        <div
          className="relative aspect-[4/3] overflow-hidden"
        >
          <div
            className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
            style={{ background: bg }}
          />

          {/* Blur mask gradient */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background: "linear-gradient(to top, rgba(0,0,0,0.7) 0%, rgba(0,0,0,0.15) 50%, transparent 75%)",
            }}
          />

          {/* Tags & content overlay */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-5">
            <div className="flex flex-wrap gap-1.5">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70"
                  style={{ backgroundColor: "rgba(255,255,255,0.1)" }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Hover arrow */}
          <div className="absolute top-4 right-4 z-20 flex h-9 w-9 items-center justify-center rounded-full opacity-0 transition-all duration-300 group-hover:opacity-100" style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none">
              <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        <div className="py-5">
          <h3
            className="text-lg font-semibold"
            style={{ color: "var(--text)" }}
          >
            {study.title}
          </h3>
          <p
            className="mt-1.5 text-sm leading-relaxed"
            style={{ color: "var(--muted)" }}
          >
            {study.impact}
          </p>
        </div>
      </motion.div>
    </Link>
  );
}
