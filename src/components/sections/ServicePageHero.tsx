"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ServicePageHeroProps {
  kicker: string;
  headline: string;
  subline?: string;
}

export function ServicePageHero({
  kicker,
  headline,
  subline,
}: ServicePageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <section
      ref={ref}
      className="relative overflow-hidden"
      style={{ minHeight: "clamp(420px, 55vh, 600px)" }}
    >
      {/* Dark cinematic background */}
      <motion.div
        className="absolute inset-0 z-0"
        style={{
          y: reduced ? 0 : bgY,
          background:
            "linear-gradient(160deg, #0a0a0c 0%, #111128 35%, #0d0d1a 65%, #0a0a0c 100%)",
        }}
      />

      {/* Dot pattern */}
      <div
        className="absolute inset-0 z-[1] opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Subtle gradient orb */}
      <div
        className="absolute top-1/2 right-0 z-[1] h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      {/* Content */}
      <Container className="relative z-10 flex flex-col justify-end pb-16 pt-36 md:pb-24 md:pt-48">
        <motion.p
          className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em]"
          style={{ color: "rgba(255,255,255,0.35)" }}
          initial={reduced ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {kicker}
        </motion.p>

        <motion.h1
          className="max-w-[800px]"
          style={{
            fontSize: "clamp(36px, 5.5vw, 72px)",
            fontWeight: 700,
            lineHeight: 1.05,
            letterSpacing: "-0.03em",
            color: "#ffffff",
          }}
          initial={reduced ? {} : { y: 30, opacity: 0 }}
          animate={isInView ? { y: 0, opacity: 1 } : {}}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
        >
          {headline}
        </motion.h1>

        {subline && (
          <motion.p
            className="mt-6 max-w-xl text-[clamp(16px,1.4vw,20px)] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            {subline}
          </motion.p>
        )}
      </Container>
    </section>
  );
}
