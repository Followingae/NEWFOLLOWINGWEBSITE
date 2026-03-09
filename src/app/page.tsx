"use client";

import { HeroEditorial } from "@/components/hero/HeroEditorial";
import { ClientLogoBar } from "@/components/sections/ClientLogoBar";
import { SplitStatementPanel } from "@/components/sections/SplitStatementPanel";
import { CinematicMediaBand } from "@/components/sections/CinematicMediaBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WorkPreviewGrid } from "@/components/sections/WorkPreviewGrid";
import { TestimonialSwitcher } from "@/components/sections/TestimonialSwitcher";
import { FinalCTA } from "@/components/sections/FinalCTA";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";

export default function HomePage() {
  return (
    <>
      <HeroEditorial />

      {/* Brand Showreel — video placeholder */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="relative flex aspect-[21/9] items-center justify-center overflow-hidden rounded-xl" style={{ background: "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)" }}>
              <div className="text-center">
                <svg className="mx-auto mb-3 h-10 w-10 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.91 11.672a.375.375 0 010 .656l-5.603 3.113a.375.375 0 01-.557-.328V8.887c0-.286.307-.466.557-.327l5.603 3.112z" />
                </svg>
                <p className="text-xs font-semibold uppercase tracking-wider text-white/30">BRAND SHOWREEL</p>
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>

      <ClientLogoBar />
      <SplitStatementPanel />
      <ServicesGrid />
      <CinematicMediaBand />
      <WorkPreviewGrid />
      <TestimonialSwitcher />
      <FinalCTA />
    </>
  );
}
