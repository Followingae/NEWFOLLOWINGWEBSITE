"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";

export default function ProcessPage() {
  return (
    <>
      <ServicePageHero
        kicker="FOLLOWING / PROCESS"
        headline="How movements begin"
        subline="Every project follows the same five-step approach — listen, discover, ignite, amplify, prove"
      />

      {/* Behind the scenes — image placeholder */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="relative flex aspect-[21/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)" }}>
              <div className="text-center">
                <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                </svg>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">HOW WE WORK — BEHIND THE SCENES</p>
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>

      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
