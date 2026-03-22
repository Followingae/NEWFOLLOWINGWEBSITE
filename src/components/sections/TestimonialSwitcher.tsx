"use client";

import { useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { testimonials } from "@/content/testimonials";

export function TestimonialSwitcher() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  /* Auto-rotate like Nimble's tab system */
  const advance = useCallback(() => {
    setActive((prev) => (prev + 1) % testimonials.length);
  }, []);

  useEffect(() => {
    const timer = setInterval(advance, 6000);
    return () => clearInterval(timer);
  }, [advance]);

  return (
    <section className="py-section-mobile md:py-section" style={{ backgroundColor: "var(--bg-alt)" }}>
      <Container>
        <BlurFade inView>
          <p className="kicker mb-12 md:mb-16">WHAT BRANDS SAY</p>
        </BlurFade>

        <div className="grid grid-cols-1 gap-12 md:grid-cols-[2fr_1fr] md:gap-20">
          {/* Quote */}
          <div className="min-h-[280px]">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={active}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -16 }}
                transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              >
                <p
                  className="font-serif italic"
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontSize: "clamp(22px, 3.2vw, 40px)",
                    lineHeight: 1.3,
                    color: "var(--text)",
                  }}
                >
                  &ldquo;{current.quote}&rdquo;
                </p>
                <footer className="mt-8 flex items-center gap-4">
                  {/* Avatar placeholder circle */}
                  <div
                    className="h-12 w-12 shrink-0 rounded-full"
                    style={{
                      background: "linear-gradient(135deg, #e0e0e0 0%, #c0c0c0 100%)",
                      opacity: 0.5,
                    }}
                  />
                  <div>
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {current.name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {current.role}, {current.company}
                    </p>
                  </div>
                </footer>
              </motion.blockquote>
            </AnimatePresence>
          </div>

          {/* Selector with progress bars — Nimble tab style */}
          <div className="flex flex-col gap-0">
            {testimonials.map((t, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className="group relative text-left"
              >
                <div
                  className="flex items-center gap-4 py-4 md:py-5"
                  style={{
                    borderBottom: `1px solid ${active === i ? "transparent" : "var(--border)"}`,
                  }}
                >
                  <div>
                    <p
                      className="text-sm font-semibold transition-colors duration-200"
                      style={{
                        color: active === i ? "var(--text)" : "var(--muted)",
                      }}
                    >
                      {t.name}
                    </p>
                    <p className="text-xs" style={{ color: "var(--muted)" }}>
                      {t.company}
                    </p>
                  </div>
                </div>
                {/* Progress bar that fills during auto-advance */}
                <div className="h-[2px] w-full overflow-hidden" style={{ backgroundColor: "var(--border)" }}>
                  {active === i && (
                    <motion.div
                      className="h-full"
                      style={{ backgroundColor: "var(--text)" }}
                      initial={{ width: "0%" }}
                      animate={{ width: "100%" }}
                      transition={{ duration: 6, ease: "linear" }}
                      key={`progress-${active}`}
                    />
                  )}
                </div>
              </button>
            ))}
          </div>
        </div>
      </Container>
    </section>
  );
}
