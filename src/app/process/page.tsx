"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function ProcessPage() {
  return (
    <>
      <ServicePageHero
        kicker="FOLLOWING / PROCESS"
        headline="Built around structure."
        subline="Every project follows the same systematic approach — from strategy to reporting."
      />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
