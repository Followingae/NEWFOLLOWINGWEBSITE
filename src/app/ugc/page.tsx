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
        headline="UGC at scale. Directed professionally."
      />

      {/* 2x2 Grid — OMC bento-style */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div
            className="grid grid-cols-1 gap-px md:grid-cols-2"
            style={{ backgroundColor: "var(--border)" }}
          >
            {sections.map((section, i) => (
              <BlurFade key={i} delay={i * 0.08} inView>
                <div
                  className="p-8 md:p-14"
                  style={{ backgroundColor: i % 2 === 0 ? "var(--bg)" : "var(--bg-alt)" }}
                >
                  <span
                    className="text-[clamp(48px,5vw,72px)] font-bold leading-none"
                    style={{ color: "var(--accent)", opacity: 0.15 }}
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

      {/* Stats band */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "#0b0b0d" }}
      >
        <Container>
          <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-0 md:divide-x md:divide-white/10">
            {[
              { stat: "120+", label: "Assets per sprint" },
              { stat: "40%", label: "Lower CPA" },
              { stat: "3 wk", label: "Turnaround" },
              { stat: "18+", label: "Creators per project" },
            ].map((item, i) => (
              <BlurFade key={i} delay={i * 0.1} inView>
                <div className="text-center md:px-8">
                  <p className="text-[clamp(32px,4vw,48px)] font-bold text-white">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-xs uppercase tracking-widest text-white/40">
                    {item.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="gradient-bar mb-16 md:mb-24" />
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <h2 className="headline-1">
                Request UGC
                <br />
                package.
              </h2>
              <div className="md:text-right">
                <p className="body-large mb-8 max-w-md md:ml-auto">
                  Need high-performing creator content at volume? Let&apos;s talk.
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
