"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { CaseGrid } from "@/components/work/CaseGrid";

export default function WorkPage() {
  return (
    <>
      <ServicePageHero
        kicker="FOLLOWING / WORK"
        headline="Selected projects."
        subline="A curated look at campaigns, shoots, and content systems we've delivered."
      />
      <CaseGrid />
    </>
  );
}
