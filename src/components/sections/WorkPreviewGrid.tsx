"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/content/work";

/* Nimble-style masonry: 2 cols with staggered rows, image cards with blur-mask overlay */
export function WorkPreviewGrid() {
  const featured = caseStudies.slice(0, 4);

  /* Unique gradient backgrounds to simulate real images until replaced */
  const cardBgs = [
    "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
    "linear-gradient(135deg, #2d1b69 0%, #11001c 50%, #200040 100%)",
    "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)",
    "linear-gradient(135deg, #1b2838 0%, #171a21 50%, #1e2328 100%)",
  ];

  return (
    <section className="py-section-mobile md:py-section">
      <Container>
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="kicker mb-4">SELECTED WORK</p>
              <h2 className="headline-2">
                Work that moves people.
                <br />
                And moves product.
              </h2>
            </div>
            <div className="md:text-right">
              <Button href="/work" variant="secondary">
                View All Work
              </Button>
            </div>
          </div>
        </BlurFade>

        {/* Nimble-style masonry grid */}
        <div className="mt-12 md:mt-20">
          <div
            className="grid gap-4"
            style={{
              gridTemplateColumns: "1fr 1fr",
              gridTemplateRows: "360px 360px 360px",
              gridTemplateAreas: `"a b" "a d" "c d"`,
            }}
          >
            {featured.map((study, i) => {
              const areas = ["a", "b", "d", "c"];
              return (
                <BlurFade key={study.slug} delay={i * 0.1} inView>
                  <Link
                    href={`/work/${study.slug}`}
                    className="group relative block h-full overflow-hidden rounded-lg"
                    style={{ gridArea: areas[i] }}
                  >
                    <motion.div
                      className="absolute inset-0 transition-transform duration-700 group-hover:scale-[1.04]"
                      style={{ background: cardBgs[i] }}
                    />

                    {/* Noise texture */}
                    <div
                      className="absolute inset-0 opacity-[0.04]"
                      style={{
                        backgroundImage:
                          "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
                      }}
                    />

                    {/* Blur mask gradient — Nimble-style bottom overlay */}
                    <div
                      className="absolute inset-0 z-10"
                      style={{
                        background:
                          "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.25) 40%, transparent 70%)",
                      }}
                    />

                    {/* Content at bottom */}
                    <div className="absolute inset-x-0 bottom-0 z-20 p-6 md:p-8">
                      <div className="mb-3 flex flex-wrap gap-2">
                        {study.tags.map((tag) => (
                          <span
                            key={tag}
                            className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70"
                            style={{ backgroundColor: "rgba(255,255,255,0.1)", backdropFilter: "blur(8px)" }}
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-white md:text-2xl">
                        {study.title}
                      </h3>
                      <p className="mt-1.5 text-sm text-white/50 line-clamp-2">
                        {study.impact}
                      </p>
                    </div>

                    {/* Hover arrow */}
                    <div className="absolute top-6 right-6 z-20 opacity-0 transition-all duration-300 group-hover:opacity-100 group-hover:translate-x-0 -translate-x-2">
                      <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M7 17L17 7M17 7H7M17 7V17" stroke="white" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </div>
                  </Link>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
