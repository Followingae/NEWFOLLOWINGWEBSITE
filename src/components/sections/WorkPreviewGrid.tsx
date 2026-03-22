"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { caseStudies } from "@/content/work";

function StackCard({
  index,
  total,
  progress,
  study,
  image,
}: {
  index: number;
  total: number;
  progress: ReturnType<typeof useScroll>["scrollYProgress"];
  study: (typeof caseStudies)[0];
  image: string;
}) {
  const targetScale = 1 - (total - 1 - index) * 0.04;
  const range = [index / total, 1];
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      className="sticky h-[70vh]"
      style={{
        top: `calc(12vh + ${index * 25}px)`,
        zIndex: index + 1,
      }}
    >
      <motion.div
        style={{ scale, transformOrigin: "top center" }}
        className="relative h-full overflow-hidden rounded-2xl"
      >
        <Link
          href={`/work/${study.slug}`}
          className="group relative block h-full"
          data-cursor="View"
        >
          {/* Background image */}
          <img
            src={image}
            alt={study.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Noise texture */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
            }}
          />

          {/* Gradient overlay */}
          <div
            className="absolute inset-0 z-10"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.2) 40%, transparent 70%)",
            }}
          />

          {/* Content */}
          <div className="absolute inset-x-0 bottom-0 z-20 p-8 md:p-12">
            <div className="mb-3 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/70"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.1)",
                    backdropFilter: "blur(8px)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
            <h3 className="text-2xl font-semibold text-white md:text-4xl">
              {study.title}
            </h3>
            <p className="mt-2 max-w-lg text-sm text-white/50">
              {study.impact}
            </p>
          </div>

          {/* Hover arrow */}
          <div className="absolute top-6 right-6 z-20 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </Link>
      </motion.div>
    </div>
  );
}

export function WorkPreviewGrid() {
  const featured = caseStudies.slice(0, 4);
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const cardImages = featured.map((study) => study.thumbnail);

  return (
    <section ref={containerRef} className="relative pb-[10vh]">
      {/* Header */}
      <div className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
              <div>
                <p className="kicker mb-4">SELECTED WORK</p>
                <h2 className="headline-2">
                  Selected work
                </h2>
              </div>
              <div className="md:text-right">
                <Button href="/work" variant="secondary">
                  View All Work
                </Button>
              </div>
            </div>
          </BlurFade>
        </Container>
      </div>

      {/* Stacking cards */}
      <Container>
        {featured.map((study, i) => (
          <StackCard
            key={study.slug}
            index={i}
            total={featured.length}
            progress={scrollYProgress}
            study={study}
            image={cardImages[i]}
          />
        ))}
      </Container>
    </section>
  );
}
