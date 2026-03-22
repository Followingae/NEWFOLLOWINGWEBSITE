"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { ProcessTimeline } from "@/components/sections/ProcessTimeline";

export default function ProcessPage() {
  return (
    <>
      <ServicePageHero
        kicker="OUR PROCESS"
        headline="How every campaign runs"
        subline="Five steps from brief to final report"
      />
      <ProcessTimeline />
    </>
  );
}
