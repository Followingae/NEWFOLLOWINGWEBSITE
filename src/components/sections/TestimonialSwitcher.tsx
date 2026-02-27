"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { testimonials } from "@/content/testimonials";

export function TestimonialSwitcher() {
  const [active, setActive] = useState(0);
  const current = testimonials[active];

  return (
    <section
      className="py-section-mobile md:py-section"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <Container>
        <div className="grid grid-cols-1 gap-16 md:grid-cols-[2fr_1fr] md:gap-24">
          {/* Quote — large, editorial */}
          <BlurFade inView>
            <div>
              <AnimatePresence mode="wait">
                <motion.blockquote
                  key={active}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -12 }}
                  transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                >
                  <p
                    className="font-serif italic"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(28px, 4vw, 52px)",
                      lineHeight: 1.2,
                      color: "var(--text)",
                    }}
                  >
                    &ldquo;{current.quote}&rdquo;
                  </p>
                  <footer className="mt-10">
                    <p className="text-sm font-semibold" style={{ color: "var(--text)" }}>
                      {current.name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {current.role}
                    </p>
                  </footer>
                </motion.blockquote>
              </AnimatePresence>
            </div>
          </BlurFade>

          {/* Selector — minimal vertical list */}
          <BlurFade delay={0.1} inView>
            <div className="flex flex-row gap-4 md:flex-col md:gap-0">
              {testimonials.map((t, i) => (
                <button
                  key={i}
                  onClick={() => setActive(i)}
                  className="group flex items-center gap-4 border-b py-5 text-left transition-all duration-300 md:py-6"
                  style={{
                    borderColor:
                      active === i ? "var(--accent)" : "var(--border)",
                  }}
                >
                  {/* Indicator dot */}
                  <div
                    className="h-2.5 w-2.5 shrink-0 rounded-full transition-colors duration-300"
                    style={{
                      backgroundColor:
                        active === i ? "var(--accent)" : "var(--border)",
                    }}
                  />
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
                      {t.role}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </BlurFade>
        </div>
      </Container>
    </section>
  );
}
