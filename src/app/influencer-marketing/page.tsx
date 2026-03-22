"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Marquee } from "@/components/ui/Marquee";
import { ExpertCard } from "@/components/sections/ExpertCard";
import {
  Compass,
  Search,
  EditPencil,
  Settings,
  StatsReport,
} from "iconoir-react";

const pillars = [
  {
    icon: Compass,
    title: "Strategy & Campaign Framing",
    description:
      "Goals, audience, platform mix, and creative direction — defined before a single creator is contacted.",
  },
  {
    icon: Search,
    title: "Creator Sourcing & Vetting",
    description:
      "Shortlists built for brand fit, audience quality, and engagement authenticity.",
  },
  {
    icon: EditPencil,
    title: "Briefs & Alignment",
    description:
      "Detailed creative briefs with brand guidelines, talking points, format specs, and reference content.",
  },
  {
    icon: Settings,
    title: "Coordination & Approvals",
    description:
      "Timelines, revisions, approval workflows, and posting coordination. Fully managed.",
  },
  {
    icon: StatsReport,
    title: "Reporting & Learnings",
    description:
      "Performance analytics, ROI attribution, creator scorecards, and iteration recommendations.",
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
        kicker="INFLUENCER MARKETING"
        headline="Full-service creator campaigns, brief to report"
      />

      {/* Pillars — rounded cards */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">WHAT WE HANDLE</p>
            <h2 className="headline-2 max-w-xl">
              <span style={{ fontFamily: "var(--font-sans)" }}>
                Five pillars.{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                One team.
              </span>
            </h2>
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            {pillars.map((pillar, i) => {
              const Icon = pillar.icon;
              return (
                <BlurFade key={i} delay={i * 0.06} inView>
                  <div
                    className="flex flex-col rounded-2xl border p-8 transition-colors duration-300 hover:border-[var(--text)]/10 md:p-10"
                    style={{
                      borderColor: "var(--border)",
                      backgroundColor: "var(--surface)",
                    }}
                  >
                    <div
                      className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl"
                      style={{ backgroundColor: "var(--bg-alt)" }}
                    >
                      <Icon
                        width={24}
                        height={24}
                        strokeWidth={1.5}
                        color="var(--text)"
                      />
                    </div>
                    <h3
                      className="text-lg font-semibold md:text-xl"
                      style={{ color: "var(--text)" }}
                    >
                      {pillar.title}
                    </h3>
                    <p className="body-text mt-3">{pillar.description}</p>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </Container>
      </section>

      {/* Deliverables marquee — dark band */}
      <section
        className="py-16 md:py-24"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
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
              <span style={{ fontFamily: "var(--font-sans)" }}>Four steps. </span>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>No bottlenecks.</span>
            </h2>
          </BlurFade>

          <BlurFade delay={0.1} inView>
            <div className="grid grid-cols-2 gap-3 md:grid-cols-4 md:gap-4">
              {approvalSteps.map((item, idx) => (
                <div
                  key={item.step}
                  className="rounded-2xl border p-6 md:p-8"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  <span
                    className="text-3xl font-bold md:text-4xl"
                    style={{ color: "var(--text)", opacity: 0.08 }}
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

    </>
  );
}
