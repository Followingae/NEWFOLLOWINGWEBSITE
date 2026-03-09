"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/* Nimble-style: 3-pillar methodology band (Strategize → Build → Grow adapted to Following) */
export function CinematicMediaBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  const pillars = [
    {
      number: "01",
      title: "Strategize",
      subtitle: "Find the right moment",
      items: ["Campaign framing", "Audience mapping", "Creative direction", "KPI setup"],
    },
    {
      number: "02",
      title: "Create",
      subtitle: "Craft the evidence",
      items: ["Creator sourcing", "Content production", "Briefs & approvals", "Quality control"],
    },
    {
      number: "03",
      title: "Amplify",
      subtitle: "Own the conversation",
      items: ["Publishing & coordination", "Paid amplification", "Performance reporting", "Iteration & learning"],
    },
  ];

  return (
    <section
      ref={ref}
      className="relative overflow-hidden py-section-mobile md:py-section"
      style={{
        background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <motion.div className="relative z-10" style={{ y: reduced ? 0 : y }}>
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              THE FOLLOWING WAY
            </p>
            <h2 className="headline-2 max-w-2xl" style={{ color: "#ffffff" }}>
              Three phases. Every project. No shortcuts.
            </h2>
          </BlurFade>

          <div className="mt-16 grid grid-cols-1 gap-6 md:mt-24 md:grid-cols-3 md:gap-4">
            {pillars.map((pillar, i) => (
              <BlurFade key={i} delay={i * 0.12} inView>
                <div
                  className="group rounded-xl p-8 transition-all duration-500 md:p-10"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="text-4xl font-bold md:text-5xl"
                    style={{ color: "var(--accent)", opacity: 0.3 }}
                  >
                    {pillar.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold text-white md:text-3xl">
                    {pillar.title}
                  </h3>
                  <p className="mt-2 text-sm" style={{ color: "rgba(255,255,255,0.4)" }}>
                    {pillar.subtitle}
                  </p>
                  <div className="mt-6 flex flex-col gap-2.5">
                    {pillar.items.map((item) => (
                      <div key={item} className="flex items-center gap-3">
                        <div
                          className="h-1 w-1 shrink-0 rounded-full"
                          style={{ backgroundColor: "var(--accent)", opacity: 0.5 }}
                        />
                        <span
                          className="text-sm font-medium"
                          style={{ color: "rgba(255,255,255,0.55)" }}
                        >
                          {item}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </motion.div>
    </section>
  );
}
