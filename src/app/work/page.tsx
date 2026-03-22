"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { CaseGrid } from "@/components/work/CaseGrid";

export default function WorkPage() {
  return (
    <>
      <ServicePageHero
        kicker="OUR WORK"
        headline="Campaigns and results"
        subline="Selected work across influencer marketing, productions, UGC, and social"
      />
      <CaseGrid />
    </>
  );
}
