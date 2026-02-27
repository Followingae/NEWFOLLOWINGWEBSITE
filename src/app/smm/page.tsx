"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

const sections = [
  {
    number: "01",
    title: "Monthly content planning",
    description:
      "Strategic content calendars aligned with brand campaigns, cultural moments, and audience behavior patterns.",
    detail: "We map every post to a business objective — no filler content.",
  },
  {
    number: "02",
    title: "Batch production",
    description:
      "Dedicated production days to create a month's worth of content in efficient, organized shoots.",
    detail: "Maximise output per shoot day with pre-planned shot lists and setups.",
  },
  {
    number: "03",
    title: "Creative direction",
    description:
      "Consistent visual and tonal direction that builds brand equity while staying native to each platform.",
    detail: "Platform-specific design systems that scale across content types.",
  },
  {
    number: "04",
    title: "Iteration loop",
    description:
      "Weekly creative optimization based on performance data — what works gets amplified, what doesn't gets replaced.",
    detail: "Data-informed creative decisions, not guesswork.",
  },
  {
    number: "05",
    title: "Reporting cadence",
    description:
      "Weekly snapshots, monthly deep-dives, and quarterly strategy reviews to keep everything aligned.",
    detail: "Full transparency on what's working and what's next.",
  },
];

export default function SMMPage() {
  return (
    <>
      <ServicePageHero
        kicker="SERVICES / SOCIAL MEDIA MANAGEMENT"
        headline="Content systems, not random posting."
      />

      {/* Alternating split sections — editorial */}
      <section className="py-section-mobile md:py-section">
        <Container>
          {sections.map((section, i) => (
            <BlurFade key={i} delay={i * 0.06} inView>
              <div
                className={`grid grid-cols-1 gap-8 border-t py-14 md:grid-cols-2 md:gap-20 md:py-20 ${
                  i % 2 === 1 ? "md:direction-rtl" : ""
                }`}
                style={{ borderColor: "var(--border)" }}
              >
                <div className={i % 2 === 1 ? "md:order-2" : ""}>
                  <span
                    className="text-[clamp(48px,6vw,80px)] font-bold leading-none"
                    style={{ color: "var(--accent)", opacity: 0.2 }}
                  >
                    {section.number}
                  </span>
                  <h3 className="mt-4 text-2xl font-semibold md:text-3xl" style={{ color: "var(--text)" }}>
                    {section.title}
                  </h3>
                </div>
                <div className={`self-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                  <p className="body-large">{section.description}</p>
                  <p className="mt-4 text-sm font-medium" style={{ color: "var(--accent)" }}>
                    {section.detail}
                  </p>
                </div>
              </div>
            </BlurFade>
          ))}
          <div className="border-t" style={{ borderColor: "var(--border)" }} />
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="gradient-bar mb-16 md:mb-24" />
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <h2 className="headline-1">
                Plan my
                <br />
                month.
              </h2>
              <div className="md:text-right">
                <p className="body-large mb-8 max-w-md md:ml-auto">
                  Ready for a content system that actually builds your brand?
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
