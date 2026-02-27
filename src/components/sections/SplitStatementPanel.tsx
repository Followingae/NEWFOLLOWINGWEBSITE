"use client";

import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { splitPanels } from "@/content/site";

export function SplitStatementPanel() {
  return (
    <section
      className="py-section-mobile md:py-section"
      style={{ backgroundColor: "var(--bg-alt)" }}
    >
      <Container>
        {splitPanels.map((panel, i) => (
          <BlurFade key={i} delay={i * 0.1} inView>
            <div
              className="grid grid-cols-1 gap-6 border-b py-14 md:grid-cols-[1fr_1.5fr] md:gap-20 md:py-20"
              style={{ borderColor: "var(--border)" }}
            >
              <h3
                className="headline-2 font-serif italic"
                style={{ fontFamily: "var(--font-serif)" }}
              >
                {panel.stat}
              </h3>
              <p className="body-large self-center">{panel.copy}</p>
            </div>
          </BlurFade>
        ))}
      </Container>
    </section>
  );
}
