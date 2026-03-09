"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function ProcessPage() {
  return (
    <>
      <ServicePageHero
        kicker="FOLLOWING / PROCESS"
        headline="How movements begin"
        subline="Every project follows the same five-step approach. Listen, discover, ignite, amplify, prove. No shortcuts."
      />
      <ProcessTimeline />
      <FinalCTA />
    </>
  );
}
