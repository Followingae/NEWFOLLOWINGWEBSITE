"use client";

import { useRef, useEffect } from "react";
import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Search,
  ShieldCheck,
  StatsReport,
  Group,
  MediaVideoList,
  GraphUp,
  Brain,
  Language,
  Eye,
  ChatBubble,
  StatUp,
  UserStar,
  Refresh,
} from "iconoir-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const aiCapabilities = [
  { icon: ChatBubble, name: "Sentiment Analysis", description: "Emotional tone of captions, comments, and audience reactions." },
  { icon: ShieldCheck, name: "Fraud Detection", description: "Fake followers, bot engagement, and suspicious growth patterns." },
  { icon: UserStar, name: "Audience Quality", description: "Authenticity scoring that separates real engagement from noise." },
  { icon: Search, name: "Content Classification", description: "Automatic categorisation into fashion, tech, food, beauty, and more." },
  { icon: Group, name: "Demographics", description: "Age, gender, location, and interest breakdowns of any audience." },
  { icon: StatUp, name: "Trend Detection", description: "Rising content trends and viral potential before they peak." },
  { icon: Language, name: "Language Detection", description: "Multi-language analysis for regional and global targeting." },
  { icon: Eye, name: "Visual Analysis", description: "Aesthetics, composition consistency, and brand-fit scoring." },
  { icon: Refresh, name: "Behavioral Patterns", description: "Posting frequency, consistency, and engagement patterns over time." },
  { icon: Brain, name: "Advanced NLP", description: "Writing style, vocabulary, and emotional patterns in content." },
  { icon: GraphUp, name: "Performance Prediction", description: "Forecasted engagement and reach based on historical data." },
  { icon: StatsReport, name: "ROI Modelling", description: "Predicted return on creator partnerships based on audience data." },
];

const platformFeatures = [
  {
    icon: Search,
    title: "Creator Discovery & Vetting",
    description: "Search by engagement, category, location, audience quality. Every profile AI-scored before it reaches you.",
    stats: ["50+ data points per creator", "30-day analytics window"],
  },
  {
    icon: StatsReport,
    title: "Campaign Command Centre",
    description: "Creator assignments, deliverables, approvals, and live performance. One dashboard.",
    stats: ["Real-time tracking", "Full audit trail"],
  },
  {
    icon: GraphUp,
    title: "Post-Level Analytics",
    description: "Performance vs. average, comment sentiment, posting windows, content breakdown.",
    stats: ["Per-post AI analysis", "Comment sentiment scoring"],
  },
  {
    icon: MediaVideoList,
    title: "UGC Production Pipeline",
    description: "Brief to delivery. Review content, approve deliverables, track progress.",
    stats: ["End-to-end workflow", "Built-in approvals"],
  },
  {
    icon: Group,
    title: "Team Collaboration",
    description: "Shared workspace with role-based access. Review campaigns and analytics together.",
    stats: ["Role-based access", "Shared workspace"],
  },
  {
    icon: UserStar,
    title: "Influencer Proposals",
    description: "Curated shortlists with pricing. Review, compare, approve — all in one place.",
    stats: ["7 deliverable types", "Proposal workflow"],
  },
];

const stats = [
  { value: "50+", label: "Data Points Per Creator" },
  { value: "12", label: "AI Models Running" },
  { value: "Real-time", label: "Campaign Analytics" },
  { value: "6", label: "Core Modules" },
];

/* ── GSAP-animated modules section ── */
function PlatformModules() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      const cards = sectionRef.current!.querySelectorAll("[data-module-card]");

      /* Staggered scale + fade entrance */
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, y: 60, scale: 0.92 },
          {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.7,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 85%",
              toggleActions: "play none none reverse",
            },
          },
        );

        /* Icon spins in */
        const icon = card.querySelector("[data-module-icon]");
        if (icon) {
          gsap.fromTo(
            icon,
            { scale: 0, rotation: -90 },
            {
              scale: 1,
              rotation: 0,
              duration: 0.5,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 80%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }

        /* Stats pills slide in */
        const pills = card.querySelectorAll("[data-module-pill]");
        gsap.fromTo(
          pills,
          { opacity: 0, x: 20 },
          {
            opacity: 1,
            x: 0,
            stagger: 0.1,
            duration: 0.4,
            ease: "power2.out",
            scrollTrigger: {
              trigger: card,
              start: "top 75%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });

      /* Connecting lines between cards */
      const lines = sectionRef.current!.querySelectorAll("[data-connect-line]");
      lines.forEach((line) => {
        gsap.fromTo(
          line,
          { scaleX: 0 },
          {
            scaleX: 1,
            duration: 0.6,
            ease: "power2.inOut",
            scrollTrigger: {
              trigger: line,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-section-mobile md:py-section" ref={sectionRef}>
      <Container>
        <BlurFade inView>
          <p className="kicker mb-4">WHAT THE PLATFORM DOES</p>
          <h2 className="headline-2 max-w-xl">
            Six modules.{" "}
            <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
              One dashboard.
            </span>
          </h2>
        </BlurFade>

        <div className="mt-12 md:mt-20">
          {platformFeatures.map((feature, i) => {
            const Icon = feature.icon;
            const isLast = i === platformFeatures.length - 1;

            return (
              <div key={i}>
                <div
                  data-module-card
                  className="flex flex-col gap-6 rounded-2xl border p-8 md:flex-row md:items-start md:gap-10 md:p-10"
                  style={{
                    borderColor: "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  {/* Icon */}
                  <div
                    data-module-icon
                    className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl"
                    style={{ backgroundColor: "var(--bg-alt)" }}
                  >
                    <Icon width={28} height={28} strokeWidth={1.5} color="var(--text)" />
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold md:text-2xl" style={{ color: "var(--text)" }}>
                      {feature.title}
                    </h3>
                    <p className="body-text mt-3">{feature.description}</p>
                    <div className="mt-5 flex flex-wrap gap-2">
                      {feature.stats.map((stat, j) => (
                        <span
                          data-module-pill
                          key={j}
                          className="rounded-full border px-4 py-1.5 text-[11px] font-semibold"
                          style={{ borderColor: "var(--border)", color: "var(--muted)" }}
                        >
                          {stat}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Module number */}
                  <span className="hidden text-5xl font-bold md:block" style={{ color: "var(--text)", opacity: 0.04 }}>
                    {String(i + 1).padStart(2, "0")}
                  </span>
                </div>

                {/* Connecting line between modules */}
                {!isLast && (
                  <div className="flex justify-center py-2">
                    <div
                      data-connect-line
                      className="h-8 w-px origin-top"
                      style={{ backgroundColor: "var(--border)" }}
                    />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}

export default function PlatformPage() {
  return (
    <>
      <ServicePageHero
        kicker="FOLLOWING PLATFORM"
        headline="The analytics platform behind every Following campaign"
        subline="Find creators, track campaigns, and measure ROI. All in one dashboard."
      />

      {/* Stats band */}
      <section className="border-b py-12 md:py-16" style={{ borderColor: "var(--border)" }}>
        <Container>
          <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
            {stats.map((stat, i) => (
              <BlurFade key={i} delay={i * 0.08} inView>
                <div className="text-center">
                  <div className="headline-3 font-bold" style={{ color: "var(--text)" }}>
                    {typeof stat.value === "string" && stat.value.match(/^\d/) ? (
                      <NumberTicker value={stat.value} />
                    ) : (
                      stat.value
                    )}
                  </div>
                  <p className="mt-1 text-sm font-medium" style={{ color: "var(--muted)" }}>
                    {stat.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* GSAP-animated modules */}
      <PlatformModules />

      {/* AI Intelligence Section */}
      <section
        data-nav-theme="dark"
        className="py-section-mobile md:py-section"
        style={{ background: "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)" }}
      >
        <Container>
          <BlurFade inView>
            <div className="mx-auto max-w-2xl text-center">
              <p className="kicker mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
                AI-POWERED INTELLIGENCE
              </p>
              <h2 className="headline-2" style={{ color: "#fff" }}>
                <span style={{ fontFamily: "var(--font-sans)" }}>12 AI models running </span>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  on every profile
                </span>
              </h2>
              <p className="body-large mx-auto mt-5 max-w-lg" style={{ color: "rgba(255,255,255,0.4)" }}>
                Fraud, sentiment, demographics, trends — all analysed before you see a result.
              </p>
            </div>
          </BlurFade>

          <div className="mx-auto mt-10 flex max-w-3xl flex-wrap justify-center gap-3 md:mt-14">
            {aiCapabilities.map((model, i) => {
              const Icon = model.icon;
              return (
                <BlurFade key={i} delay={i * 0.03} inView>
                  <div
                    className="flex items-center gap-2.5 rounded-full border px-4 py-2.5 transition-colors duration-300 hover:border-white/15 hover:bg-white/[0.03]"
                    style={{ borderColor: "rgba(255,255,255,0.06)" }}
                  >
                    <Icon width={14} height={14} strokeWidth={1.5} color="rgba(255,255,255,0.5)" />
                    <span className="text-[12px] font-medium text-white/60">{model.name}</span>
                  </div>
                </BlurFade>
              );
            })}
          </div>
        </Container>
      </section>

    </>
  );
}
