"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

const sections = [
  {
    number: "01",
    title: "Creative direction + scripting",
    description:
      "We develop performance-tested script frameworks with hook structures, value props, and CTA sequences tailored to each platform.",
  },
  {
    number: "02",
    title: "Creator guidance & QC",
    description:
      "Every creator receives detailed direction, reference examples, and brand guardrails. All content goes through quality review before delivery.",
  },
  {
    number: "03",
    title: "Variants for performance",
    description:
      "Each piece of content is delivered with hook variants, subtitle options, and format adaptations for A/B testing at scale.",
  },
  {
    number: "04",
    title: "Editing styles",
    description:
      "From raw and authentic to polished and branded — we match editing approach to platform context and campaign objective.",
  },
];

export default function UGCPage() {
  return (
    <>
      <ServicePageHero
        kicker="SERVICES / UGC"
        headline="Real people, real proof — manufactured authenticity is dead"
      />

      {/* 2x2 Grid — glass-morphism bento */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
            {sections.map((section, i) => (
              <BlurFade key={i} delay={i * 0.08} inView>
                <div
                  className="rounded-xl p-8 md:p-12"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="flex h-14 w-14 items-center justify-center rounded-full text-lg font-bold"
                    style={{
                      backgroundColor: "rgba(var(--accent-rgb, 99,102,241), 0.08)",
                      color: "var(--accent)",
                    }}
                  >
                    {section.number}
                  </span>
                  <h3
                    className="mt-6 text-xl font-semibold md:text-2xl"
                    style={{ color: "var(--text)" }}
                  >
                    {section.title}
                  </h3>
                  <p className="body-text mt-4">{section.description}</p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* Stats band — dark cinematic */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { stat: "120+", label: "Assets per sprint" },
              { stat: "40%", label: "Lower CPA" },
              { stat: "3 wk", label: "Turnaround" },
              { stat: "18+", label: "Creators per project" },
            ].map((item, i) => (
              <BlurFade key={i} delay={i * 0.1} inView>
                <div
                  className="rounded-xl p-6 text-center md:p-8"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-[clamp(28px,4vw,44px)] font-bold text-white">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-widest text-white/40">
                    {item.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
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
                {"Need proof\nat scale?"}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Creator content that converts — not just content that exists.
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Let&apos;s Be Unreasonable
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
