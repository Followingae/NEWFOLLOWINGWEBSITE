"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { WaveBackground } from "@/components/ui/WaveBackground";
import { useWorld } from "@/components/world/WorldProvider";
import { heroContent } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroEditorial() {
  const { world } = useWorld();
  const content = heroContent[world];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{ backgroundColor: "var(--bg)" }}
    >
      {/* Wave background — subtle on light */}
      <WaveBackground
        strokeColor={
          world === "influencer"
            ? "rgba(0,0,0,0.04)"
            : "rgba(81,0,243,0.04)"
        }
        backgroundColor="transparent"
      />

      {/* Content — centered like Nimble */}
      <Container className="relative z-10 py-32">
        <div className="mx-auto max-w-4xl text-center">
          {/* Kicker */}
          <motion.p
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.25em]"
            style={{ color: "var(--muted)" }}
            initial={reduced ? {} : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {content.kicker}
          </motion.p>

          {/* Headline */}
          <motion.h1
            style={{
              fontSize: "clamp(40px, 7vw, 96px)",
              lineHeight: 1.05,
              letterSpacing: "-0.035em",
              fontWeight: 700,
              color: "var(--text)",
            }}
            initial={reduced ? {} : { y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{
              duration: 0.8,
              ease: [0.16, 1, 0.3, 1],
              delay: 0.2,
            }}
          >
            {content.headline.map((line, i) => (
              <span key={`${world}-${i}`}>
                {line}
                {i < content.headline.length - 1 && <br />}
              </span>
            ))}
          </motion.h1>

          {/* Subline */}
          <motion.p
            className="mx-auto mt-8 max-w-lg text-[clamp(15px,1.3vw,19px)] leading-relaxed"
            style={{ color: "var(--muted)" }}
            initial={reduced ? {} : { opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
            key={`${world}-subline`}
          >
            {content.subline}
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-wrap items-center justify-center gap-4"
            initial={reduced ? {} : { opacity: 0, y: 15 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <MagneticButton>
              <Button
                href={content.ctaPrimary.href}
                variant="primary"
                size="lg"
              >
                {content.ctaPrimary.label}
              </Button>
            </MagneticButton>
            <Button
              href={content.ctaSecondary.href}
              variant="secondary"
              size="lg"
            >
              {content.ctaSecondary.label}
            </Button>
          </motion.div>
        </div>
      </Container>

      {/* Scroll indicator */}
      <motion.div
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 0.3 }}
        transition={{ delay: 1.5, duration: 0.6 }}
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        >
          <svg width="20" height="30" viewBox="0 0 20 30" fill="none">
            <rect
              x="1"
              y="1"
              width="18"
              height="28"
              rx="9"
              stroke="var(--muted)"
              strokeWidth="1.5"
              opacity="0.3"
            />
            <motion.circle
              cx="10"
              cy="10"
              r="3"
              fill="var(--muted)"
              opacity="0.4"
              animate={{ cy: [8, 16, 8] }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </svg>
        </motion.div>
      </motion.div>
    </section>
  );
}
