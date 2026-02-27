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
        headline="Production designed for social."
      />

      {/* Production types — accordion list */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
              <div>
                <p className="kicker mb-4">PRODUCTION TYPES</p>
                <h2 className="headline-2">What we produce.</h2>
              </div>
              <p className="body-large md:text-right">
                Seven production capabilities designed for social-first output.
              </p>
            </div>
          </BlurFade>

          <div className="mt-16 md:mt-24">
            <div className="border-t" style={{ borderColor: "var(--border)" }} />
            {productionTypes.map((type, i) => (
              <BlurFade key={i} delay={i * 0.04} inView>
                <div className="border-b" style={{ borderColor: "var(--border)" }}>
                  <button
                    className="group flex w-full items-center justify-between py-8 text-left md:py-10"
                    onClick={() => setExpanded(expanded === i ? null : i)}
                    aria-expanded={expanded === i}
                  >
                    <div className="flex items-center gap-6 md:gap-10">
                      <span
                        className="text-sm font-bold tabular-nums"
                        style={{ color: "var(--muted)" }}
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
                        <p className="body-text max-w-2xl pb-8 pl-14 md:pl-16">
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

      {/* Formats — marquee */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--bg-alt)" }}
      >
        <Container>
          <BlurFade inView>
            <p className="kicker mb-2">DELIVERABLE FORMATS</p>
          </BlurFade>
        </Container>
        <div className="mt-8">
          <Marquee pauseOnHover speed={25}>
            {formats.map((f) => (
              <span
                key={f}
                className="whitespace-nowrap px-8 text-[clamp(24px,3vw,40px)] font-semibold"
                style={{ color: "var(--text)", opacity: 0.15 }}
              >
                {f}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* CTA */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="gradient-bar mb-16 md:mb-24" />
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <h2 className="headline-1">
                Request a
                <br />
                shoot.
              </h2>
              <div className="md:text-right">
                <p className="body-large mb-8 max-w-md md:ml-auto">
                  From concept to delivery — social-first production with structure.
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Get Started
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
