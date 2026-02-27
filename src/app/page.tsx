"use client";

import { HeroEditorial } from "@/components/hero/HeroEditorial";
import { SplitStatementPanel } from "@/components/sections/SplitStatementPanel";
import { CinematicMediaBand } from "@/components/sections/CinematicMediaBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { TestimonialSwitcher } from "@/components/sections/TestimonialSwitcher";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroEditorial />
      <SplitStatementPanel />
      <CinematicMediaBand />
      <ServicesGrid />
      <TestimonialSwitcher />
      <FinalCTA />
    </>
  );
}
