"use client";

import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BlurFade } from "@/components/ui/BlurFade";
import { useWorld } from "@/components/world/WorldProvider";
import { ctaContent } from "@/content/site";

export function FinalCTA() {
  const { world } = useWorld();
  const cta = ctaContent[world];

  return (
    <section
      className="relative overflow-hidden py-section-mobile md:py-section"
      style={{
        background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
      }}
    >
      {/* Subtle dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      <Container className="relative z-10">
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <h2
              className="headline-1"
              style={{ whiteSpace: "pre-line", color: "#ffffff" }}
            >
              {cta.headline}
            </h2>
            <div className="md:text-right">
              <p
                className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {cta.subline}
              </p>
              <MagneticButton className="md:ml-auto inline-block">
                <Button href={cta.href} variant="primary" size="lg">
                  {cta.label}
                </Button>
              </MagneticButton>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
