"use client";

import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { GlassButton } from "@/components/ui/glass-button";
import {
  Search,
  ShieldCheck,
  StatsReport,
  Group,
  MediaVideoList,
  GraphUp,
} from "iconoir-react";

const features = [
  {
    icon: Search,
    title: "Creator Discovery",
    description:
      "Deep creator analytics — engagement, demographics, and content fit — so every recommendation is backed by data, not guesswork.",
  },
  {
    icon: ShieldCheck,
    title: "Fraud Detection",
    description:
      "AI identifies fake followers, bot engagement, and suspicious growth — so every creator we recommend is verified.",
  },
  {
    icon: StatsReport,
    title: "Campaign Analytics",
    description:
      "Track every post, creator, and metric in real-time. Live ROI reporting that updates as your campaign runs.",
  },
  {
    icon: Group,
    title: "Audience Intelligence",
    description:
      "Age, gender, location, interests — full audience transparency on every creator we recommend.",
  },
  {
    icon: MediaVideoList,
    title: "UGC Production",
    description:
      "Review and approve content as it moves through production. Full pipeline visibility built into the platform.",
  },
  {
    icon: GraphUp,
    title: "Performance Prediction",
    description:
      "AI forecasts expected engagement and reach so we place your budget where it performs best.",
  },
];

export function PlatformShowcase() {
  return (
    <section
      data-nav-theme="dark"
      className="relative overflow-hidden py-section-mobile md:py-section"
      style={{
        background:
          "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
      }}
    >
      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.025]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      <Container className="relative z-10">
        {/* Header */}
        <BlurFade inView>
          <div className="mx-auto max-w-3xl text-center">
            <p
              className="kicker mb-6"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              THE PLATFORM
            </p>
            <h2 className="headline-2" style={{ color: "#ffffff" }}>
              <span style={{ fontFamily: "var(--font-sans)" }}>
                The platform behind{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                every campaign
              </span>
            </h2>
            <p
              className="mx-auto mt-5 max-w-xl text-[clamp(15px,1.3vw,18px)] leading-relaxed"
              style={{ color: "rgba(255,255,255,0.4)" }}
            >
              Complete visibility into every creator, every post, and every campaign.
              AI scores every recommendation before it reaches you.
            </p>
          </div>
        </BlurFade>

        {/* Feature grid with icons */}
        <div className="mt-14 grid grid-cols-1 gap-4 sm:grid-cols-2 md:mt-20 lg:grid-cols-3">
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <BlurFade key={i} delay={i * 0.06} inView>
                <div
                  className="group rounded-xl border p-6 transition-all duration-300 hover:border-white/10 hover:bg-white/[0.02] md:p-8"
                  style={{
                    borderColor: "rgba(255,255,255,0.04)",
                  }}
                >
                  <div
                    className="mb-5 flex h-10 w-10 items-center justify-center rounded-lg"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.05)",
                    }}
                  >
                    <Icon
                      width={20}
                      height={20}
                      strokeWidth={1.5}
                      color="rgba(255,255,255,0.6)"
                    />
                  </div>
                  <h3
                    className="text-base font-semibold md:text-lg"
                    style={{ color: "#ffffff" }}
                  >
                    {feature.title}
                  </h3>
                  <p
                    className="mt-3 text-sm leading-relaxed"
                    style={{ color: "rgba(255,255,255,0.4)" }}
                  >
                    {feature.description}
                  </p>
                </div>
              </BlurFade>
            );
          })}
        </div>

        {/* Dual CTAs */}
        <BlurFade inView>
          <div className="mt-14 flex flex-col items-center justify-center gap-4 sm:flex-row md:mt-20">
            <GlassButton href="/pricing" size="default">
              Try Platform Free
            </GlassButton>
            <a
              href="/platform"
              className="text-sm font-medium text-white/40 transition-colors duration-200 hover:text-white"
            >
              Learn more →
            </a>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
