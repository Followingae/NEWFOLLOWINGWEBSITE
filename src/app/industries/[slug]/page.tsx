"use client";

import { useParams, notFound } from "next/navigation";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { ExpertCard } from "@/components/sections/ExpertCard";
import { industries } from "@/content/industries";
import { caseStudies } from "@/content/work";
import { CaseCard } from "@/components/work/CaseCard";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export default function IndustryPage() {
  const params = useParams<{ slug: string }>();
  const industry = industries.find((ind) => ind.slug === params.slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!industry) {
    notFound();
  }

  const relevantCases = caseStudies.filter(
    (c) =>
      c.industry.toLowerCase() === industry.name.toLowerCase() ||
      c.industry === industry.name
  );

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
            background:
              "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
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
            {industry.kicker}
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
            {industry.headline}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-[clamp(16px,1.4vw,20px)] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {industry.subline}
          </motion.p>
        </Container>

      </section>

      {/* Industry showcase — image placeholder */}
      <section className="py-8 md:py-12">
        <Container>
          <BlurFade inView>
            <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
              <img
                src={`/images/industry/${industry.slug === "food-beverage" ? "food" : industry.slug}.png`}
                alt={industry.name}
                className="h-full w-full object-cover"
              />
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Stats — dark glass cards */}
      <section
        className="py-16 md:py-24"
        style={{
          background:
            "linear-gradient(160deg, #0b0b0d 0%, #1a1a2e 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {industry.stats.map((stat, i) => (
                <div
                  key={i}
                  className="rounded-xl p-8 text-center md:p-12"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.03)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <p
                    className="text-[clamp(32px,4vw,48px)] font-bold"
                    style={{ color: "var(--accent)" }}
                  >
                    <NumberTicker value={stat.value} />
                  </p>
                  <p className="mt-2 text-sm font-medium text-white/40">
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Insight — centered blockquote */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <div className="mx-auto max-w-3xl text-center">
              <p className="kicker mb-6">INDUSTRY INSIGHT</p>
              <blockquote
                className="font-serif italic"
                style={{
                  fontFamily: "var(--font-serif)",
                  fontSize: "clamp(24px, 3.5vw, 44px)",
                  lineHeight: 1.25,
                  color: "var(--text)",
                }}
              >
                &ldquo;{industry.insight}&rdquo;
              </blockquote>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Capabilities — rounded cards */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <BlurFade inView>
            <p className="kicker mb-4">
              WHAT WE DO FOR {industry.name.toUpperCase()}
            </p>
            <h2 className="headline-3 mb-12 md:mb-16">Capabilities</h2>
          </BlurFade>

          <div className="grid grid-cols-1 gap-3 md:grid-cols-2">
            {industry.capabilities.map((cap, i) => (
              <BlurFade key={i} delay={i * 0.05} inView>
                <div
                  className="flex items-center gap-4 rounded-xl p-5 md:p-6"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                  }}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full text-xs font-bold"
                    style={{
                      backgroundColor:
                        "rgba(var(--accent-rgb, 99,102,241), 0.08)",
                      color: "var(--accent)",
                    }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <p
                    className="text-sm font-semibold md:text-base"
                    style={{ color: "var(--text)" }}
                  >
                    {cap}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* Relevant Case Studies */}
      {relevantCases.length > 0 && (
        <section className="py-section-mobile md:py-section">
          <Container>
            <BlurFade inView>
              <p className="kicker mb-4">SELECTED WORK</p>
              <h2 className="headline-3 mb-12 md:mb-16">
                {industry.name} projects
              </h2>
            </BlurFade>

            <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {relevantCases.map((study) => (
                <CaseCard key={study.slug} study={study} />
              ))}
            </div>
          </Container>
        </section>
      )}

      {/* Expert Card */}
      <ExpertCard
        name="Following Team"
        role="Industry Specialists"
        topic={industry.name}
        email="hello@followingagency.com"
      />

      {/* CTA — dark */}
      <section
        className="relative overflow-hidden py-section-mobile md:py-section"
        style={{
          background:
            "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "40px 40px",
          }}
        />
        <Container className="relative z-10">
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <h2
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  whiteSpace: "pre-line",
                }}
              >
                {`Let's move\n${industry.name.toLowerCase()}.`}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Ready to build a {industry.name.toLowerCase()} campaign that
                  people actually remember?
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Start a Conversation
                  </Button>
                </MagneticButton>
              </div>
            </div>
          </BlurFade>
        </Container>
      </section>
    </>
  );
}
