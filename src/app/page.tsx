"use client";

import { HeroEditorial } from "@/components/hero/HeroEditorial";
import { ClientLogoBar } from "@/components/sections/ClientLogoBar";
import { SplitStatementPanel } from "@/components/sections/SplitStatementPanel";
import { CinematicMediaBand } from "@/components/sections/CinematicMediaBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WorkPreviewGrid } from "@/components/sections/WorkPreviewGrid";
import { TestimonialSwitcher } from "@/components/sections/TestimonialSwitcher";
import { FinalCTA } from "@/components/sections/FinalCTA";

export default function HomePage() {
  return (
    <>
      <HeroEditorial />
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
