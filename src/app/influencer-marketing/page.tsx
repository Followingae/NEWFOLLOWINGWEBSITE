"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { Marquee } from "@/components/ui/Marquee";
import { ExpertCard } from "@/components/sections/ExpertCard";

const pillars = [
  {
    number: "01",
    title: "Strategy & campaign framing",
    description:
      "Before we contact a single creator, we define your goals, audience, platform mix, and creative direction. This isn't overhead — it's the reason our campaigns outperform.",
  },
  {
    number: "02",
    title: "Creator sourcing & vetting",
    description:
      "Shortlists built for brand fit, audience quality, and engagement authenticity. Not follower counts — conviction. Every creator is someone who genuinely believes in what you're building.",
  },
  {
    number: "03",
    title: "Briefs & alignment",
    description:
      "Detailed creative briefs with brand guidelines, talking points, format specs, and reference content. Enough direction to stay on-brand. Enough freedom to stay authentic.",
  },
  {
    number: "04",
    title: "Coordination & approvals",
    description:
      "Full production oversight — timelines, revisions, approval workflows, and posting coordination. We manage the chaos so you don't have to.",
  },
  {
    number: "05",
    title: "Reporting & learnings",
    description:
      "Performance analytics, ROI attribution, creator scorecards, and iteration recommendations. We don't just report — we learn.",
  },
];

const deliverables = [
  "Reels",
  "Stories",
  "UGC Ads",
  "Launch campaigns",
  "Always-on",
  "Event coverage",
  "Brand integrations",
  "Whitelisting",
];

const approvalSteps = [
  { step: "01", label: "Brand confirms direction" },
  { step: "02", label: "Creators aligned & briefed" },
  { step: "03", label: "Content reviewed & approved" },
  { step: "04", label: "Publish & amplify" },
];

export default function InfluencerMarketingPage() {
  return (
    <>
      <ServicePageHero
        kicker="SERVICES / INFLUENCER MARKETING"
        headline="Find the voices, shape the story, own the moment"
      />

      {/* Pillars — rounded cards */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">WHAT WE HANDLE</p>
            <h2 className="headline-2 max-w-xl">
              Five pillars, zero guesswork
            </h2>
          </BlurFade>

          <div className="mt-16 space-y-3 md:mt-24">
            {pillars.map((pillar, i) => (
              <BlurFade key={i} delay={i * 0.06} inView>
                <div
                  className="rounded-xl p-6 md:p-8"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-[80px_1fr_2fr] md:items-center md:gap-8">
                    <span
                      className="flex h-12 w-12 items-center justify-center rounded-full text-sm font-bold"
                      style={{
                        backgroundColor: "rgba(var(--accent-rgb, 99,102,241), 0.08)",
                        color: "var(--accent)",
                      }}
                    >
                      {pillar.number}
                    </span>
                    <h3
                      className="text-lg font-semibold md:text-xl"
                      style={{ color: "var(--text)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="body-text">{pillar.description}</p>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* Deliverables marquee — dark band */}
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
              DELIVERABLES
            </p>
          </BlurFade>
        </Container>

        <div className="mt-8">
          <Marquee pauseOnHover speed={35}>
            {deliverables.map((d) => (
              <span
                key={d}
                className="whitespace-nowrap px-8 text-[clamp(24px,3vw,40px)] font-semibold text-white/15"
              >
                {d}
              </span>
            ))}
          </Marquee>
        </div>
      </section>

      {/* Approval process — glass cards */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">APPROVAL PROCESS</p>
            <h2 className="headline-3 mb-12 md:mb-16">
              Four steps, no bottlenecks
            </h2>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {approvalSteps.map((item) => (
                <div
                  key={item.step}
                  className="rounded-xl p-6 md:p-8"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="flex h-10 w-10 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor: "rgba(var(--accent-rgb, 99,102,241), 0.08)",
                      color: "var(--accent)",
                    }}
                  >
                    {item.step}
                  </span>
                  <p
                    className="mt-4 text-sm font-semibold"
                    style={{ color: "var(--text)" }}
                  >
                    {item.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Expert */}
      <ExpertCard
        name="Following Team"
        role="Campaign Strategists"
        topic="influencer marketing"
        email="hello@followingagency.com"
      />

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
                {"Ready to start\na movement?"}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  The right voice at the right moment doesn&apos;t just sell. It
                  shifts perception.
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
