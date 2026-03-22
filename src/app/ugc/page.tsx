"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import {
  EditPencil,
  ShieldCheck,
  Copy,
  ColorFilter,
} from "iconoir-react";

const sections = [
  {
    icon: EditPencil,
    title: "Creative Direction + Scripting",
    description:
      "Performance-tested script frameworks with hook structures, value props, and CTA sequences tailored to each platform.",
  },
  {
    icon: ShieldCheck,
    title: "Creator Guidance & QC",
    description:
      "Every creator gets detailed direction, reference examples, and brand guardrails. All content reviewed before delivery.",
  },
  {
    icon: Copy,
    title: "Variants for Performance",
    description:
      "Each piece delivered with hook variants, subtitle options, and format adaptations for A/B testing at scale.",
  },
  {
    icon: ColorFilter,
    title: "Editing Styles",
    description:
      "From raw and authentic to polished and branded — editing approach matched to platform and campaign objective.",
  },
];

export default function UGCPage() {
  return (
    <>
      <ServicePageHero
        kicker="UGC"
        headline="Creator-made content, directed by us, built for ads"
      />

      {/* Feature cards with icons */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">HOW IT WORKS</p>
            <h2 className="headline-2 max-w-xl">
              <span style={{ fontFamily: "var(--font-sans)" }}>
                Content that{" "}
              </span>
              <span
                style={{
                  fontFamily: "var(--font-serif)",
                  fontStyle: "italic",
                }}
              >
                converts
              </span>
            </h2>
          </BlurFade>

          <div className="mt-12 grid grid-cols-1 gap-4 md:mt-16 md:grid-cols-2">
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

      {/* Stats band */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {[
              { stat: "120+", label: "Assets per sprint" },
              { stat: "40%", label: "Lower CPA" },
              { stat: "3 wk", label: "Turnaround" },
              { stat: "18+", label: "Creators per project" },
            ].map((item, i) => (
              <BlurFade key={i} delay={i * 0.1} inView>
                <div
                  className="rounded-xl p-6 text-center md:p-8"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p className="text-[clamp(28px,4vw,44px)] font-bold text-white">
                    {item.stat}
                  </p>
                  <p className="mt-2 text-xs font-medium uppercase tracking-wider text-white/40">
                    {item.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

    </>
  );
}
