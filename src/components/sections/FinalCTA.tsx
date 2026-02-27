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
    <section className="py-section-mobile md:py-section">
      <Container>
        <div className="gradient-bar mb-16 md:mb-24" />
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <h2 className="headline-1">
              Ready to
              <br />
              launch?
            </h2>
            <div className="md:text-right">
              <p className="body-large mb-8 max-w-md md:ml-auto">
                Tell us about your project. We&apos;ll build a plan around your goals,
                timeline, and budget.
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
