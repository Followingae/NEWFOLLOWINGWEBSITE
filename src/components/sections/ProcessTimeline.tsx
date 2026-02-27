"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { processSteps } from "@/content/site";

export function ProcessTimeline() {
  const [expanded, setExpanded] = useState<number | null>(0);

  return (
    <section className="py-section-mobile md:py-section">
      <Container>
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="kicker mb-4">OUR PROCESS</p>
              <h2 className="headline-2">Five steps. Every time.</h2>
            </div>
            <p className="body-large md:text-right">
              A systematic approach that scales across every campaign and production.
            </p>
          </div>
        </BlurFade>

        <div className="mt-16 md:mt-24">
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
          {processSteps.map((step, i) => (
            <BlurFade key={i} delay={i * 0.06} inView>
              <div className="border-b" style={{ borderColor: "var(--border)" }}>
                <button
                  className="group flex w-full items-center justify-between py-8 text-left md:py-10"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                >
                  <div className="flex items-center gap-6 md:gap-10">
                    <span
                      className="text-3xl font-bold tabular-nums md:text-4xl"
                      style={{
                        color: expanded === i ? "var(--accent)" : "var(--muted)",
                        opacity: expanded === i ? 1 : 0.4,
                        transition: "all 0.3s ease",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="text-xl font-semibold md:text-2xl"
                      style={{ color: "var(--text)" }}
                    >
                      {step.title}
                    </h3>
                  </div>
                  <motion.div
                    animate={{ rotate: expanded === i ? 45 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="shrink-0"
                  >
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="none"
                      style={{ color: "var(--muted)" }}
                    >
                      <path
                        d="M12 5v14M5 12h14"
                        stroke="currentColor"
                        strokeWidth="1.5"
                        strokeLinecap="round"
                      />
                    </svg>
                  </motion.div>
                </button>

                <AnimatePresence>
                  {expanded === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{
                        height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="pb-8 pl-16 md:pl-20">
                        <p className="body-text mb-6 max-w-2xl">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-3">
                          {step.details.map((detail) => (
                            <span
                              key={detail}
                              className="px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                              style={{
                                backgroundColor: "var(--bg-alt)",
                                border: "1px solid var(--border)",
                                color: "var(--muted)",
                              }}
                            >
                              {detail}
                            </span>
                          ))}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
