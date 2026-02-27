"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";

const pillars = [
  {
    number: "01",
    title: "Strategy & campaign framing",
    description:
      "Define goals, audience, platform mix, and creative direction before creator outreach begins.",
  },
  {
    number: "02",
    title: "Creator sourcing & vetting",
    description:
      "Shortlists built for brand fit, audience quality, engagement authenticity, and campaign intent.",
  },
  {
    number: "03",
    title: "Briefs & alignment",
    description:
      "Detailed creative briefs with brand guidelines, talking points, format specs, and reference content.",
  },
  {
    number: "04",
    title: "Coordination & approvals",
    description:
      "Full production oversight — timelines, revisions, approval workflows, and posting coordination.",
  },
  {
    number: "05",
    title: "Reporting & learnings",
    description:
      "Performance analytics, ROI attribution, creator scorecards, and iteration recommendations.",
  },
];

const deliverables = [
  "Reels", "Stories", "UGC Ads", "Launch campaigns",
  "Always-on", "Event coverage", "Brand integrations", "Whitelisting",
];

const approvalSteps = [
  { step: "01", label: "Brand confirms direction" },
  { step: "02", label: "Creators aligned" },
  { step: "03", label: "Content reviewed" },
  { step: "04", label: "Publish" },
];

export default function InfluencerMarketingPage() {
  return (
    <>
      <ServicePageHero
        kicker="SERVICES / INFLUENCER MARKETING"
        headline="Fully managed influencer campaigns."
      />

      {/* Pillars — alternating editorial layout */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">WHAT WE HANDLE</p>
            <h2 className="headline-2 max-w-xl">
              Five pillars of execution.
            </h2>
          </BlurFade>

          <div className="mt-16 md:mt-24">
            {pillars.map((pillar, i) => (
              <BlurFade key={i} delay={i * 0.06} inView>
                <div
                  className="grid grid-cols-1 gap-6 border-t py-10 md:grid-cols-[80px_1fr_2fr] md:gap-12 md:py-14"
                  style={{ borderColor: "var(--border)" }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "var(--accent)", opacity: 0.5 }}
                  >
                    {pillar.number}
                  </span>
                  <h3 className="text-xl font-semibold" style={{ color: "var(--text)" }}>
                    {pillar.title}
                  </h3>
                  <p className="body-text">{pillar.description}</p>
                </div>
              </BlurFade>
            ))}
            <div className="border-t" style={{ borderColor: "var(--border)" }} />
          </div>
        </Container>
      </section>

      {/* Deliverables — infinite marquee strip */}
      <section
        className="py-16 md:py-24"
        style={{ backgroundColor: "var(--bg-alt)" }}
      >
        <Container>
          <BlurFade inView>
            <p className="kicker mb-2">DELIVERABLES</p>
          </BlurFade>
        </Container>

        <div className="mt-8">
          <Marquee pauseOnHover speed={35}>
            {deliverables.map((d) => (
              <span
                key={d}
                className="whitespace-nowrap px-8 text-[clamp(24px,3vw,40px)] font-semibold"
                style={{ color: "var(--text)", opacity: 0.15 }}
              >
                {d}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Approval process — horizontal flow */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">APPROVAL PROCESS</p>
            <h2 className="headline-3 mb-12 md:mb-16">How approvals work.</h2>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 gap-px md:grid-cols-4" style={{ backgroundColor: "var(--border)" }}>
              {approvalSteps.map((item) => (
                <div
                  key={item.step}
                  className="p-6 md:p-10"
                  style={{ backgroundColor: "var(--bg)" }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "var(--accent)", opacity: 0.4 }}
                  >
                    {item.step}
                  </span>
                  <p className="mt-3 text-sm font-semibold" style={{ color: "var(--text)" }}>
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="gradient-bar mb-16 md:mb-24" />
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <h2 className="headline-1">
                Start a
                <br />
                campaign.
              </h2>
              <div className="md:text-right">
                <p className="body-large mb-8 max-w-md md:ml-auto">
                  Ready to launch a structured, high-performing influencer campaign?
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
