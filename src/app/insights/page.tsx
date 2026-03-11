"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { articles, insightsTags } from "@/content/insights";

/* Dark gradient backgrounds for article cards */
const cardGradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #2d1b69 0%, #11001c 50%, #200040 100%)",
  "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)",
  "linear-gradient(135deg, #1b2838 0%, #171a21 50%, #1e2328 100%)",
  "linear-gradient(135deg, #1a0a2e 0%, #0a1628 50%, #0d0d1a 100%)",
];

export default function InsightsPage() {
  const [activeTag, setActiveTag] = useState<string | null>(null);

  const filtered = activeTag
    ? articles.filter((a) => a.tags.includes(activeTag))
    : articles;

  return (
    <>
      <ServicePageHero
        kicker="FOLLOWING / INSIGHTS"
        headline="Thoughts worth stealing"
        subline="Strategy, craft, and opinions from the team — no fluff, no filler"
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
                    {/* Image placeholder — dark gradient */}
                    <div className="relative aspect-[16/9] overflow-hidden">
                      <motion.div
                        className="flex h-full w-full items-center justify-center"
                        style={{
                          background: cardGradients[idx % cardGradients.length],
                        }}
                        whileHover={{ scale: 1.03 }}
                        transition={{ duration: 0.5 }}
                      >
                        <div className="text-center">
                          <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                          </svg>
                          <p className="text-xs font-semibold uppercase tracking-wider text-white/30">ARTICLE THUMBNAIL</p>
                        </div>
                      </motion.div>
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
