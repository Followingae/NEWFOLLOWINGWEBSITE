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
              <p className="kicker mb-4">HOW MOVEMENTS BEGIN</p>
              <h2 className="headline-2">Five steps, every time</h2>
            </div>
            <p className="body-large md:text-right">
              A systematic approach that scales across every campaign and
              production. No shortcuts. No surprises.
            </p>
          </div>
        </BlurFade>

        <div className="mt-16 space-y-3 md:mt-24">
          {processSteps.map((step, i) => (
            <BlurFade key={i} delay={i * 0.06} inView>
              <div
                className="overflow-hidden rounded-xl transition-all duration-300"
                style={{
                  backgroundColor:
                    expanded === i
                      ? "rgba(var(--accent-rgb, 99,102,241), 0.04)"
                      : "var(--bg-alt)",
                  border: `1px solid ${expanded === i ? "rgba(var(--accent-rgb, 99,102,241), 0.12)" : "var(--border)"}`,
                }}
              >
                <button
                  className="group flex w-full items-center justify-between px-6 py-6 text-left md:px-8 md:py-8"
                  onClick={() => setExpanded(expanded === i ? null : i)}
                  aria-expanded={expanded === i}
                >
                  <div className="flex items-center gap-5 md:gap-8">
                    <span
                      className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full text-sm font-bold md:h-14 md:w-14 md:text-base"
                      style={{
                        backgroundColor:
                          expanded === i
                            ? "var(--accent)"
                            : "rgba(var(--accent-rgb, 99,102,241), 0.08)",
                        color:
                          expanded === i
                            ? "var(--accent-text)"
                            : "var(--accent)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {step.number}
                    </span>
                    <h3
                      className="text-lg font-semibold md:text-xl"
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
                        height: {
                          duration: 0.4,
                          ease: [0.16, 1, 0.3, 1],
                        },
                        opacity: { duration: 0.3 },
                      }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 pl-[4.5rem] md:px-8 md:pb-8 md:pl-[5.5rem]">
                        <p className="body-text mb-6 max-w-2xl">
                          {step.description}
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {step.details.map((detail) => (
                            <span
                              key={detail}
                              className="rounded-full px-4 py-2 text-xs font-semibold uppercase tracking-wider"
                              style={{
                                backgroundColor: "rgba(var(--accent-rgb, 99,102,241), 0.06)",
                                border: "1px solid rgba(var(--accent-rgb, 99,102,241), 0.1)",
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
