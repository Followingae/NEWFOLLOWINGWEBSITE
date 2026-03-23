"use client";

import { ServicePageHero } from "@/components/sections/ServicePageHero";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";

export default function CareersPage() {
  return (
    <>
      <ServicePageHero
        kicker="CAREERS"
        headline="We're always looking for driven, talented people"
      />

      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="mx-auto max-w-xl text-center">
            <BlurFade inView>
              <h2
                className="headline-3"
                style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}
              >
                Interested?
              </h2>
              <p
                className="mt-4 text-sm leading-relaxed"
                style={{ color: "var(--muted)" }}
              >
                We don&apos;t always have open roles listed, but we&apos;re
                always open to hearing from talented people in influencer
                marketing, production, and platform engineering.
              </p>
              <a
                href="mailto:hiring@following.ae"
                className="mt-8 inline-flex h-12 items-center rounded-full px-8 text-sm font-semibold transition duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: "var(--text)",
                  color: "var(--bg)",
                }}
              >
                hiring@following.ae
              </a>
              <p
                className="mt-6 text-xs"
                style={{ color: "var(--muted)" }}
              >
                Dubai, UAE — HQ &nbsp;·&nbsp; Karachi, Pakistan
              </p>
            </BlurFade>
          </div>
        </Container>
      </section>
    </>
  );
}
