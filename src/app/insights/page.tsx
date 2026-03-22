"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { articles, insightsTags } from "@/content/insights";

/* Article card images */
const cardImages = [
  "/images/fountain-pen.png",
  "/images/notebook.png",
  "/images/red-portrait.png",
  "/images/silhouette-braids.png",
  "/images/perfume-roses.png",
];

export default function InsightsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles;

  return (
    <>
      <ServicePageHero
        kicker="INSIGHTS"
        headline="From the team"
        subline="Strategy, craft, and perspective on influencer marketing"
      />

      <section className="py-section-mobile md:py-section">
        <Container>
          {/* Filter tags — rounded pills */}
          <BlurFade inView>
            <div className="mb-12 flex flex-wrap gap-2 md:mb-16">
              <button
                onClick={() => setActiveTag(null)}
                className="rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                style={{
                  backgroundColor: activeTag === null ? "var(--text)" : "transparent",
                  border: `1px solid ${activeTag === null ? "var(--text)" : "var(--border)"}`,
                  color: activeTag === null ? "var(--bg)" : "var(--muted)",
                }}
              >
                All
              </button>
              {insightsTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className="rounded-full px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-all duration-200"
                  style={{
                    backgroundColor: activeTag === tag ? "var(--text)" : "transparent",
                    border: `1px solid ${activeTag === tag ? "var(--text)" : "var(--border)"}`,
                    color: activeTag === tag ? "var(--bg)" : "var(--muted)",
                  }}
                >
                  {tag}
                </button>
              ))}
            </div>
          </BlurFade>

          {/* Article grid — rich cards */}
          <motion.div
            className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3"
            layout
          >
            <AnimatePresence mode="popLayout">
              {filtered.map((article, idx) => (
                <motion.div
                  key={article.slug}
                  layout
                  initial={{ opacity: 0, scale: 0.97 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.97 }}
                  transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                >
                  <Link
                    href={`/insights/${article.slug}`}
                    className="group block overflow-hidden rounded-xl"
                    style={{
                      backgroundColor: "var(--bg-alt)",
                      border: "1px solid var(--border)",
                    }}
                  >
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <motion.img
                        src={cardImages[idx % cardImages.length]}
                        alt={article.title}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                      />
                      {/* Blur mask */}
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 60%)",
                        }}
                      />
                      {/* Tags overlay */}
                      <div className="absolute inset-x-0 bottom-0 z-10 p-4">
                        <div className="flex flex-wrap gap-1.5">
                          {article.tags.map((tag) => (
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
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="mb-2 flex items-center gap-2">
                        <span
                          className="text-[10px] font-medium uppercase tracking-wider"
                          style={{ color: "var(--muted)" }}
                        >
                          {article.readTime}
                        </span>
                      </div>

                      <h3
                        className="text-base font-semibold leading-snug transition-colors duration-200 group-hover:text-[var(--accent)]"
                        style={{ color: "var(--text)" }}
                      >
                        {article.title}
                      </h3>
                      <p
                        className="mt-2 line-clamp-2 text-sm leading-relaxed"
                        style={{ color: "var(--muted)" }}
                      >
                        {article.excerpt}
                      </p>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </Container>
      </section>
    </>
  );
}
