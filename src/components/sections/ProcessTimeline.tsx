"use client";

import { useRef, useEffect } from "react";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { processSteps } from "@/content/site";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import {
  Compass,
  Search,
  EditPencil,
  Megaphone,
  StatsReport,
} from "iconoir-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const stepIcons = [Compass, Search, EditPencil, Megaphone, StatsReport];

export function ProcessTimeline() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lineRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current || !lineRef.current) return;

    const ctx = gsap.context(() => {
      /* Animate the vertical progress line */
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 60%",
            end: "bottom 70%",
            scrub: 0.5,
          },
        },
      );

      /* Animate each step card */
      const cards = containerRef.current!.querySelectorAll("[data-step-card]");
      cards.forEach((card, i) => {
        gsap.fromTo(
          card,
          { opacity: 0, x: i % 2 === 0 ? -40 : 40, scale: 0.95 },
          {
            opacity: 1,
            x: 0,
            scale: 1,
            duration: 0.8,
            ease: "power3.out",
            scrollTrigger: {
              trigger: card,
              start: "top 80%",
              toggleActions: "play none none reverse",
            },
          },
        );

        /* Animate the dot on the line */
        const dot = card.querySelector("[data-step-dot]");
        if (dot) {
          gsap.fromTo(
            dot,
            { scale: 0 },
            {
              scale: 1,
              duration: 0.4,
              ease: "back.out(2)",
              scrollTrigger: {
                trigger: card,
                start: "top 75%",
                toggleActions: "play none none reverse",
              },
            },
          );
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section className="py-section-mobile md:py-section">
      <Container>
        <BlurFade inView>
          <div className="mx-auto max-w-2xl text-center">
            <p className="kicker mb-4">OUR PROCESS</p>
            <h2 className="headline-2">
              <span style={{ fontFamily: "var(--font-sans)" }}>Five steps. </span>
              <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>
                Every time.
              </span>
            </h2>
          </div>
        </BlurFade>

        {/* Timeline */}
        <div ref={containerRef} className="relative mt-16 md:mt-24">
          {/* Vertical line — hidden on mobile */}
          <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 md:block" style={{ backgroundColor: "var(--border)" }}>
            <div
              ref={lineRef}
              className="h-full w-full origin-top"
              style={{ backgroundColor: "var(--text)", transformOrigin: "top" }}
            />
          </div>

          {/* Step cards — alternating left/right */}
          <div className="flex flex-col gap-12 md:gap-20">
            {processSteps.map((step, i) => {
              const Icon = stepIcons[i] || StatsReport;
              const isLeft = i % 2 === 0;

              return (
                <div
                  key={i}
                  data-step-card
                  className={`relative flex flex-col md:flex-row md:items-center ${isLeft ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Card */}
                  <div className={`w-full md:w-[calc(50%-40px)] ${isLeft ? "md:text-right md:pr-0" : "md:text-left md:pl-0"}`}>
                    <div
                      className="rounded-2xl border p-8 md:p-10"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--surface)",
                      }}
                    >
                      <div className={`flex items-center gap-4 ${isLeft ? "md:flex-row-reverse" : ""}`}>
                        <div
                          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl"
                          style={{ backgroundColor: "var(--bg-alt)" }}
                        >
                          <Icon width={24} height={24} strokeWidth={1.5} color="var(--text)" />
                        </div>
                        <div className={isLeft ? "md:text-right" : ""}>
                          <p className="text-[10px] font-semibold uppercase tracking-wider" style={{ color: "var(--muted)" }}>
                            Step {step.number}
                          </p>
                          <h3 className="text-lg font-bold md:text-xl" style={{ color: "var(--text)" }}>
                            {step.title}
                          </h3>
                        </div>
                      </div>

                      <p className={`body-text mt-5 ${isLeft ? "md:text-right" : ""}`}>
                        {step.description}
                      </p>

                      <div className={`mt-5 flex flex-wrap gap-2 ${isLeft ? "md:justify-end" : ""}`}>
                        {step.details.map((detail) => (
                          <span
                            key={detail}
                            className="rounded-full border px-3 py-1.5 text-[11px] font-medium"
                            style={{
                              borderColor: "var(--border)",
                              color: "var(--muted)",
                            }}
                          >
                            {detail}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Center dot — hidden on mobile */}
                  <div className="absolute left-1/2 top-1/2 hidden -translate-x-1/2 -translate-y-1/2 md:block">
                    <div
                      data-step-dot
                      className="flex h-10 w-10 items-center justify-center rounded-full"
                      style={{ backgroundColor: "var(--text)" }}
                    >
                      <span className="text-xs font-bold" style={{ color: "var(--bg)" }}>
                        {step.number}
                      </span>
                    </div>
                  </div>

                  {/* Empty spacer for the other side */}
                  <div className="hidden w-[calc(50%-40px)] md:block" />
                </div>
              );
            })}
          </div>
        </div>
      </Container>
    </section>
  );
}
