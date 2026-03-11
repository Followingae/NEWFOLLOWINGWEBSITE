"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { CaseGrid } from "@/components/work/CaseGrid";

export default function WorkPage() {
  return (
    <>
      <ServicePageHero
        kicker="FOLLOWING / WORK"
        headline="Work that moves people"
        subline="Campaigns, shoots, and content systems that made brands the ones people talk about"
      />
      <CaseGrid />
    </>
  );
}
