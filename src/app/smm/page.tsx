"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import {
  Calendar,
  MediaVideoList,
  ColorFilter,
  Refresh,
  StatsReport,
} from "iconoir-react";

const sections = [
  {
    icon: Calendar,
    title: "Content Planning",
    description:
      "Content calendars aligned with campaigns and audience behavior. Every post mapped to a business objective.",
  },
  {
    icon: MediaVideoList,
    title: "Batch Production",
    description:
      "Dedicated shoot days to produce a full month of content. Pre-planned shot lists, maximum output.",
  },
  {
    icon: ColorFilter,
    title: "Creative Direction",
    description:
      "Consistent visual and tonal direction across platforms. Design systems that scale across content types.",
  },
  {
    icon: Refresh,
    title: "Iteration Loop",
    description:
      "Weekly optimization based on performance. What works gets amplified, what doesn't gets replaced.",
  },
  {
    icon: StatsReport,
    title: "Reporting",
    description:
      "Weekly snapshots, monthly deep-dives, quarterly reviews. Full transparency on what's working.",
  },
];

export default function SMMPage() {
  return (
    <>
      <ServicePageHero
        kicker="SOCIAL MEDIA MANAGEMENT"
        headline="Monthly content systems that grow your brand"
      />

      {/* Feature cards with icons */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">WHAT WE HANDLE</p>
            <h2 className="headline-2 max-w-xl">
              <span style={{ fontFamily: "var(--font-sans)" }}>
                Your feed,{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                systematised
              </span>
            </h2>
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 md:mt-16">
            {sections.map((section, i) => {
              const Icon = section.icon;
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
                      {section.title}
                    </h3>
                    <p className="body-text mt-3">{section.description}</p>
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
