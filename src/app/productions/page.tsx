"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Marquee } from "@/components/ui/Marquee";

const productionTypes = [
  {
    title: "Brand films / commercials",
    description:
      "Cinematic brand storytelling optimized for social-first distribution. Hero content with modular cutdown strategy.",
  },
  {
    title: "Product / studio shoots",
    description:
      "Clean, high-quality product photography and video with modular set systems for maximum output per shoot day.",
  },
  {
    title: "Performance ads",
    description:
      "Direct-response video creative built with hook testing frameworks and rapid iteration capability.",
  },
  {
    title: "Editing & color",
    description:
      "Post-production services including editorial, color grading, and format adaptation across aspect ratios.",
  },
  {
    title: "Motion graphics packages",
    description:
      "Branded motion systems — lower thirds, transitions, intro/outro, and templated social graphics.",
  },
  {
    title: "Photography",
    description:
      "Campaign photography, lifestyle shoots, product stills, and behind-the-scenes documentation.",
  },
  {
    title: "Event coverage",
    description:
      "Real-time event content production with same-day editing workflow for immediate social posting.",
  },
];

const formats = ["9:16", "1:1", "16:9", "Cutdowns", "Hook variants", "Stills", "Motion"];

export default function ProductionsPage() {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <>
      <ServicePageHero
        kicker="PRODUCTIONS"
        headline="Shoots planned for social, built for performance"
      />

      {/* Production Showreel — video placeholder */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
              <img src="/images/production/hero.png" alt="Production showreel" className="h-full w-full object-cover" />
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Production types — rounded accordion cards */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
              <div>
                <p className="kicker mb-4">PRODUCTION TYPES</p>
                <h2 className="headline-2">What we produce</h2>
              </div>
              <p className="body-large md:text-right">
                Seven production capabilities designed for social-first output.
              </p>
            </div>
          </BlurFade>

          <div className="mt-16 space-y-3 md:mt-24">
            {productionTypes.map((type, i) => (
              <BlurFade key={i} delay={i * 0.04} inView>
                <div
                  className="overflow-hidden rounded-xl transition-all duration-300"
                  style={{
                    backgroundColor:
                      expanded === i
                        ? "var(--bg-alt)"
                        : "var(--bg-alt)",
                    border: `1px solid ${expanded === i ? "var(--text)" : "var(--border)"}`,
                  }}
                >
                  <button
                    className="group flex w-full items-center justify-between px-6 py-6 text-left md:px-8 md:py-8"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    aria-expanded={expanded === i}
                  >
                    <div className="flex items-center gap-5 md:gap-8">
                      <span
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                        style={{
                          backgroundColor:
                            expanded === i
                              ? "var(--text)"
                              : "var(--bg-alt)",
                          color:
                            expanded === i
                              ? "var(--bg)"
                              : "var(--text)",
                          transition: "all 0.3s ease",
                        }}
                      >
                        {String(i + 1).padStart(2, "0")}
                      </span>
                      <h3
                        className="text-lg font-semibold md:text-xl"
                        style={{ color: "var(--text)" }}
                      >
                        {type.title}
                      </h3>
                    </div>
                    <motion.div
                      animate={{ rotate: expanded === i ? 45 : 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="none" style={{ color: "var(--muted)" }}>
                        <path d="M12 5v14M5 12h14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                      </svg>
                    </motion.div>
                  </button>

                  <AnimatePresence>
                    {expanded === i && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] }, opacity: { duration: 0.3 } }}
                        className="overflow-hidden"
                      >
                        <p className="body-text max-w-2xl px-6 pb-6 pl-[4.25rem] md:px-8 md:pb-8 md:pl-[5.25rem]">
                          {type.description}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* Formats — dark marquee band */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <BlurFade inView>
            <p
              className="mb-2 text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              DELIVERABLE FORMATS
            </p>
          </BlurFade>
        </Container>
        <div className="mt-8">
          <Marquee pauseOnHover speed={25}>
            {formats.map((f) => (
              <span
                key={f}
                className="whitespace-nowrap px-8 text-[clamp(24px,3vw,40px)] font-semibold text-white/15"
              >
                {f}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

    </>
  );
}
