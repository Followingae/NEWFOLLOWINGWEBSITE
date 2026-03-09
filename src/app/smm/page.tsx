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
        headline="Your feed isn't a brochure — it's a living brand"
      />

      {/* Feed example placeholders */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
                <div className="text-center">
                  <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">FEED EXAMPLE — FASHION</p>
                </div>
              </div>
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #2d1b69 0%, #11001c 50%, #200040 100%)" }}>
                <div className="text-center">
                  <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">FEED EXAMPLE — BEAUTY</p>
                </div>
              </div>
              <div className="relative flex aspect-[16/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)" }}>
                <div className="text-center">
                  <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                  </svg>
                  <p className="text-xs font-semibold uppercase tracking-wider text-white/30">FEED EXAMPLE — F&B</p>
                </div>
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Alternating split sections — card-based */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="space-y-4">
            {sections.map((section, i) => (
              <BlurFade key={i} delay={i * 0.06} inView>
                <div
                  className="overflow-hidden rounded-xl"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div
                    className={`grid grid-cols-1 gap-6 p-6 md:grid-cols-2 md:gap-12 md:p-10 ${
                      i % 2 === 1 ? "md:direction-rtl" : ""
                    }`}
                  >
                    <div className={i % 2 === 1 ? "md:order-2" : ""}>
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
                        className="mt-5 text-xl font-semibold md:text-2xl"
                        style={{ color: "var(--text)" }}
                      >
                        {section.title}
                      </h3>
                    </div>
                    <div className={`self-center ${i % 2 === 1 ? "md:order-1" : ""}`}>
                      <p className="body-large">{section.description}</p>
                      <p
                        className="mt-3 rounded-lg px-4 py-2 text-sm font-medium"
                        style={{
                          color: "var(--accent)",
                          backgroundColor: "rgba(var(--accent-rgb, 99,102,241), 0.06)",
                        }}
                      >
                        {section.detail}
                      </p>
                    </div>
                  </div>
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
                {"Ready to own\nyour feed?"}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  A content system that builds your brand — not just fills your calendar.
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
