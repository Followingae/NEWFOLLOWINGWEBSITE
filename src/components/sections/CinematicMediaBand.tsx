"use client";

import { useRef, useState } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useMotionValueEvent,
} from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { useReducedMotion } from "@/hooks/use-reduced-motion";
import {
  Compass,
  Group,
  ColorFilter,
  Settings,
  Search,
  MediaVideoList,
  EditPencil,
  ShieldCheck,
  Megaphone,
  GraphUp,
  StatsReport,
  Refresh,
} from "iconoir-react";

const pillars = [
  {
    title: "Strategize",
    items: [
      { icon: Compass, label: "Campaign Framing" },
      { icon: Group, label: "Audience Mapping" },
      { icon: ColorFilter, label: "Creative Direction" },
      { icon: Settings, label: "KPI Setup" },
    ],
  },
  {
    title: "Create",
    items: [
      { icon: Search, label: "Creator Sourcing" },
      { icon: MediaVideoList, label: "Content Production" },
      { icon: EditPencil, label: "Briefs & Approvals" },
      { icon: ShieldCheck, label: "Quality Control" },
    ],
  },
  {
    title: "Amplify",
    items: [
      { icon: Megaphone, label: "Publishing" },
      { icon: GraphUp, label: "Paid Amplification" },
      { icon: StatsReport, label: "Performance Reporting" },
      { icon: Refresh, label: "Iteration" },
    ],
  },
];

export function CinematicMediaBand() {
  const containerRef = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const [activeStep, setActiveStep] = useState(0);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const xVal = useTransform(
    scrollYProgress,
    [0, 0.2, 0.4, 0.6, 0.8, 1],
    [0, 0, -33.333, -33.333, -66.666, -66.666],
  );
  const x = useTransform(xVal, (v) => `${v}%`);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    const next = latest < 0.3 ? 0 : latest < 0.7 ? 1 : 2;
    setActiveStep((prev) => prev === next ? prev : next);
  });

  const darkBg =
    "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)";
  const dotGrid = {
    backgroundImage:
      "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
    backgroundSize: "32px 32px",
  };

  return (
    <>
      {/* ── Mobile ── */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden py-section-mobile md:hidden"
        style={{ background: darkBg }}
      >
        <GradientMesh />
        <div className="absolute inset-0 opacity-[0.03]" style={dotGrid} />

        <Container className="relative z-10">
          <BlurFade inView>
            <p className="kicker mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>
              OUR PROCESS
            </p>
            <h2 style={{ color: "#fff" }}>
              <span className="headline-2" style={{ fontFamily: "var(--font-sans)" }}>
                Three steps.{" "}
              </span>
              <span className="headline-2" style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                Every campaign.
              </span>
            </h2>
          </BlurFade>

          <div className="mt-10 flex flex-col gap-8">
            {pillars.map((pillar, pi) => (
              <BlurFade key={pi} delay={pi * 0.12} inView>
                <h3 className="mb-4 text-xl font-bold text-white">
                  {pillar.title}
                </h3>
                <div className="grid grid-cols-2 gap-3">
                  {pillar.items.map((item) => {
                    const Icon = item.icon;
                    return (
                      <div
                        key={item.label}
                        className="flex flex-col items-center gap-3 rounded-xl p-5 text-center"
                        style={{
                          backgroundColor: "rgba(255,255,255,0.03)",
                          border: "1px solid rgba(255,255,255,0.06)",
                        }}
                      >
                        <Icon width={22} height={22} strokeWidth={1.5} color="rgba(255,255,255,0.5)" />
                        <span className="text-xs font-semibold text-white/60">
                          {item.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* ── Desktop: Horizontal scroll ── */}
      <section
        ref={containerRef}
        className="relative hidden md:block"
        style={{ height: "300vh" }}
      >
        <div
          data-nav-theme="dark"
          className="sticky top-0 h-screen overflow-hidden"
          style={{ background: darkBg }}
        >
          <GradientMesh />
          <div className="absolute inset-0 opacity-[0.03]" style={dotGrid} />

          {/* Fixed header */}
          <div className="absolute top-[8vh] right-0 left-0 z-20">
            <Container>
              <p className="kicker mb-3" style={{ color: "rgba(255,255,255,0.3)" }}>
                OUR PROCESS
              </p>
              <h2>
                <span className="headline-3" style={{ color: "#fff", fontFamily: "var(--font-sans)" }}>
                  Three steps.{" "}
                </span>
                <span className="headline-3" style={{ color: "#fff", fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                  Every campaign.
                </span>
              </h2>
            </Container>
          </div>

          {/* Horizontal panels */}
          <motion.div
            className="relative z-10 flex h-full items-center"
            style={{ x: reduced ? undefined : x, width: "300vw" }}
          >
            {pillars.map((pillar, pi) => (
              <div
                key={pi}
                className="flex h-full w-screen items-center justify-center px-8 lg:px-16"
              >
                <div className="w-full max-w-4xl">
                  {/* Step title */}
                  <h3
                    className="mb-10 text-5xl font-bold text-white xl:mb-14 xl:text-6xl"
                    style={{ letterSpacing: "-0.03em" }}
                  >
                    {pillar.title}
                  </h3>

                  {/* Icon cards — 2x2 grid, visual, scannable */}
                  <div className="grid grid-cols-2 gap-4 xl:grid-cols-4">
                    {pillar.items.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div
                          key={item.label}
                          className="group flex flex-col items-center justify-center gap-4 rounded-2xl p-8 text-center transition-all duration-300 hover:bg-white/[0.04] xl:p-10"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.02)",
                            border: "1px solid rgba(255,255,255,0.06)",
                          }}
                        >
                          <div
                            className="flex h-14 w-14 items-center justify-center rounded-xl transition-colors duration-300 group-hover:bg-white/10"
                            style={{ backgroundColor: "rgba(255,255,255,0.05)" }}
                          >
                            <Icon
                              width={26}
                              height={26}
                              strokeWidth={1.5}
                              color="rgba(255,255,255,0.7)"
                            />
                          </div>
                          <span className="text-sm font-semibold text-white/70">
                            {item.label}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            ))}
          </motion.div>

          {/* Step dots */}
          <div className="absolute bottom-[6vh] left-1/2 z-20 flex -translate-x-1/2 gap-3">
            {pillars.map((_, i) => (
              <div
                key={i}
                className="rounded-full transition-all duration-500"
                style={{
                  width: i === activeStep ? 32 : 8,
                  height: 8,
                  backgroundColor:
                    i === activeStep
                      ? "rgba(255,255,255,0.8)"
                      : "rgba(255,255,255,0.15)",
                }}
              />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
