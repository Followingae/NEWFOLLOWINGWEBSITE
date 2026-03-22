"use client";

import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { NumberTicker } from "@/components/ui/NumberTicker";

const stats = [
  { value: "200+", label: "Campaigns delivered" },
  { value: "95%", label: "Client retention" },
  { value: "3500+", label: "Creators activated" },
];

const pillars = [
  {
    title: "End-to-end",
    description: "Strategy, sourcing, production, publishing, reporting. One team handles everything.",
  },
  {
    title: "Creator-matched",
    description: "Matched by audience quality and brand fit. Not follower count.",
  },
  {
    title: "Ad-ready assets",
    description: "Every deliverable formatted for paid and organic from day one.",
  },
];

export function SplitStatementPanel() {
  return (
    <section className="py-section-mobile md:py-section">
      <Container>
        {/* Stats row */}
        <BlurFade inView>
          <div className="grid grid-cols-3 gap-4 md:gap-6">
            {stats.map((stat, i) => (
              <div key={i} className="text-center">
                <div className="headline-2 font-bold" style={{ color: "var(--text)" }}>
                  <NumberTicker value={stat.value} />
                </div>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </BlurFade>

        {/* Pillars row */}
        <div className="mt-14 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-3">
          {pillars.map((pillar, i) => (
            <BlurFade key={i} delay={i * 0.08} inView>
              <div
                className="rounded-2xl border p-8 md:p-10"
                style={{ borderColor: "var(--border)", backgroundColor: "var(--surface)" }}
              >
                <h3 className="text-lg font-bold md:text-xl" style={{ color: "var(--text)" }}>
                  {pillar.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed" style={{ color: "var(--muted)" }}>
                  {pillar.description}
                </p>
              </div>
            </BlurFade>
          ))}
        </div>
      </Container>
    </section>
  );
}
