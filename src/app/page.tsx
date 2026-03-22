"use client";

import { HeroEditorial } from "@/components/hero/HeroEditorial";
import { SplitStatementPanel } from "@/components/sections/SplitStatementPanel";
import { CinematicMediaBand } from "@/components/sections/CinematicMediaBand";
import { ServicesGrid } from "@/components/sections/ServicesGrid";
import { WorkPreviewGrid } from "@/components/sections/WorkPreviewGrid";
import { PlatformShowcase } from "@/components/sections/PlatformShowcase";

export default function HomePage() {
  return (
    <>
      <HeroEditorial />

      <SplitStatementPanel />
      <ServicesGrid />
      <CinematicMediaBand />
      <PlatformShowcase />
      <WorkPreviewGrid />
    </>
  );
}
