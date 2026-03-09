"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
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
        kicker="SERVICES / PRODUCTIONS"
        headline="We don't shoot content — we craft evidence"
      />

      {/* Production Showreel — video placeholder */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="relative flex aspect-[21/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #1b2838 0%, #171a21 50%, #1e2328 100%)" }}>
              <div className="text-center">
                <svg className="mx-auto mb-3 h-10 w-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">PRODUCTION SHOWREEL</p>
              </div>
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
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full text-xs font-bold"
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

      {/* Production stills — image placeholders */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
                <div className="text-center">
                  <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">BRAND FILM STILL</p>
                </div>
              </div>
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #2d1b69 0%, #11001c 50%, #200040 100%)" }}>
                <div className="text-center">
                  <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">PRODUCT SHOOT</p>
                </div>
              </div>
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)" }}>
                <div className="text-center">
                  <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">EVENT COVERAGE</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Formats — dark marquee band */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
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

      {/* CTA — dark */}
      <section
        className="relative overflow-hidden py-section-mobile md:py-section"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative z-10">
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  whiteSpace: "pre-line",
                }}
              >
                {"Ready to create\nevidence?"}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  From concept to delivery — content that proves what your brand believes.
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Start Something Bold
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>
    </>
  );
}
