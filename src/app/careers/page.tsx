"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { Accordion } from "@/components/sections/Accordion";
import { jobListings, coreValues, careersFaq } from "@/content/careers";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export default function CareersPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  return (
    <>
      {/* Dark cinematic hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ minHeight: "clamp(480px, 60vh, 650px)" }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{
            y: reduced ? 0 : bgY,
            background:
              "linear-gradient(160deg, #0a0a0c 0%, #141418 35%, #0d0d1a 65%, #0a0a0c 100%)",
          }}
        />

        <div
          className="absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <div
          className="absolute top-1/2 right-0 z-[1] h-[500px] w-[500px] -translate-y-1/2 translate-x-1/3 rounded-full opacity-[0.07]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />

        <Container className="relative z-10 flex flex-col justify-end pb-16 pt-36 md:pb-24 md:pt-48">
          <motion.p
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.35)" }}
            initial={reduced ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            CAREERS
          </motion.p>

          <motion.h1
            className="max-w-[900px]"
            style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
            initial={reduced ? {} : { y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            We&apos;re hiring people who do the work others won&apos;t
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-[clamp(16px,1.4vw,20px)] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            We&apos;re looking for people who think structure is creative, who ship
            fast without cutting corners, and who believe good enough never is.
          </motion.p>
        </Container>

      </section>

      {/* Team culture — image placeholders */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <img src="/images/red-ensemble.png" alt="Team event" className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <img src="/images/production/bts.png" alt="Office culture" className="h-full w-full object-cover" />
              </div>
              <div className="relative aspect-[16/9] overflow-hidden rounded-xl">
                <img src="/images/production/event.png" alt="Team" className="h-full w-full object-cover" />
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Open Roles — card-based */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">OPEN ROLES</p>
            <h2 className="headline-3 mb-12 md:mb-16">Find your place</h2>
          </BlurFade>

          <div className="space-y-3">
            {jobListings.map((job, i) => (
              <BlurFade key={i} delay={i * 0.06} inView>
                <div
                  className="group rounded-xl p-6 transition-all duration-300 hover:shadow-lg md:p-8"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <div className="grid grid-cols-1 gap-4 md:grid-cols-[1fr_1fr_2fr_auto] md:items-center md:gap-8">
                    <div>
                      <h3
                        className="text-lg font-semibold"
                        style={{ color: "var(--text)" }}
                      >
                        {job.title}
                      </h3>
                    </div>
                    <div className="flex flex-wrap gap-2">
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                        style={{
                          backgroundColor: "rgba(var(--accent-rgb, 99,102,241), 0.08)",
                          color: "var(--accent)",
                        }}
                      >
                        {job.department}
                      </span>
                      <span
                        className="rounded-full px-3 py-1 text-[10px] font-medium"
                        style={{
                          backgroundColor: "var(--bg)",
                          color: "var(--muted)",
                        }}
                      >
                        {job.location} &middot; {job.type}
                      </span>
                    </div>
                    <p
                      className="text-sm leading-relaxed"
                      style={{ color: "var(--muted)" }}
                    >
                      {job.description}
                    </p>
                    <Button href="/contact" variant="secondary" size="sm">
                      Apply
                    </Button>
                  </div>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* Core Values — dark band with glass cards */}
      <section
        className="py-section-mobile md:py-section"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #1a1a2e 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <BlurFade inView>
            <p
              className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]"
              style={{ color: "rgba(255,255,255,0.3)" }}
            >
              HOW WE WORK
            </p>
            <h2
              className="mb-12 md:mb-16"
              style={{
                fontSize: "clamp(28px, 3.5vw, 44px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.02em",
                color: "#ffffff",
              }}
            >
              What we believe
            </h2>
          </BlurFade>

          <BlurFade inView>
            <div className="relative mb-12 aspect-[21/9] overflow-hidden rounded-xl">
              <img src="/images/red-portrait.png" alt="Our values" className="h-full w-full object-cover" />
            </div>
          </BlurFade>

          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
            {coreValues.map((value, i) => (
              <BlurFade key={i} delay={i * 0.06} inView>
                <div
                  className="rounded-xl p-8 md:p-10"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span
                    className="text-3xl font-bold"
                    style={{ color: "var(--accent)", opacity: 0.6 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {value.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/40">
                    {value.description}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* FAQ */}
      <section className="py-section-mobile md:py-section">
        <Container className="max-w-3xl">
          <BlurFade inView>
            <p className="kicker mb-4">FAQ</p>
            <h2 className="headline-3 mb-12 md:mb-16">Common questions</h2>
          </BlurFade>

          <Accordion items={careersFaq} />
        </Container>
      </section>

    </>
  );
}
