"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import Link from "next/link";
import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { caseStudies } from "@/content/work";

/* Dark gradient backgrounds for visual richness */
const heroGradients = [
  "linear-gradient(160deg, #0a0a0c 0%, #1a1a2e 35%, #0d0d1a 65%, #0a0a0c 100%)",
  "linear-gradient(160deg, #0a0a0c 0%, #2d1b69 35%, #0d0d1a 65%, #0a0a0c 100%)",
  "linear-gradient(160deg, #0a0a0c 0%, #0d2137 35%, #0a0a1a 65%, #0a0a0c 100%)",
  "linear-gradient(160deg, #0d0d0d 0%, #1b2838 35%, #0d0d1a 65%, #0a0a0c 100%)",
];

const galleryGradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #2d1b69 0%, #11001c 50%, #200040 100%)",
  "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)",
  "linear-gradient(135deg, #1b2838 0%, #171a21 50%, #1e2328 100%)",
  "linear-gradient(135deg, #1a0a2e 0%, #0a1628 50%, #0d0d1a 100%)",
  "linear-gradient(135deg, #0a1628 0%, #1a2a3e 50%, #0d1117 100%)",
];

function hashSlug(slug: string) {
  let hash = 0;
  for (let i = 0; i < slug.length; i++) {
    hash = slug.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === params.slug);
  const heroRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevStudy =
    caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  const heroGrad = heroGradients[hashSlug(study.slug) % heroGradients.length];

  return (
    <>
      {/* Dark cinematic hero */}
      <section ref={heroRef} className="relative overflow-hidden" style={{ minHeight: "clamp(480px, 65vh, 700px)" }}>
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: bgY, background: heroGrad }}
        />

        {/* Dot pattern */}
        <div
          className="absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10 flex flex-col justify-end pb-16 pt-36 md:pb-24 md:pt-48">
          <BlurFade inView>
            <div className="mb-5 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: "rgba(255,255,255,0.08)",
                    color: "rgba(255,255,255,0.6)",
                    border: "1px solid rgba(255,255,255,0.08)",
                  }}
                >
                  {tag}
                </span>
              ))}
              <span
                className="rounded-full px-4 py-1.5 text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "var(--accent)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {study.industry}
              </span>
            </div>
          </BlurFade>

          <motion.h1
            style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
              maxWidth: "800px",
            }}
            initial={{ y: 30, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {study.title}
          </motion.h1>

          <BlurFade delay={0.4} inView>
            <p
              className="mt-5 max-w-lg text-lg font-medium"
              style={{ color: "rgba(255,255,255,0.5)" }}
            >
              {study.impact}
            </p>
          </BlurFade>
        </Container>


      </section>

      {/* Featured image placeholder — rich dark gradient */}
      <section className="px-4 md:px-8">
        <BlurFade inView>
          <div
            className="relative mx-auto flex max-w-[1280px] items-center justify-center overflow-hidden rounded-2xl"
            style={{
              height: "clamp(300px, 45vh, 520px)",
              background: galleryGradients[hashSlug(study.slug) % galleryGradients.length],
            }}
          >
            <div className="text-center">
              <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
              </svg>
              <p className="text-xs font-semibold uppercase tracking-wider text-white/30">PROJECT HERO IMAGE</p>
            </div>
          </div>
        </BlurFade>
      </section>

      {/* Results Metrics — dark band */}
      {study.results && (
        <section
          className="py-16 md:py-24"
          style={{
            background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
          }}
        >
          <Container>
            <BlurFade inView>
              <div className="grid grid-cols-2 gap-6 md:grid-cols-4 md:gap-8">
                {study.results.map((result, i) => (
                  <div
                    key={i}
                    className="rounded-xl p-6 text-center md:p-10"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <p className="text-3xl font-bold text-white md:text-4xl">
                      {result.value}
                    </p>
                    <p className="mt-2 text-xs font-semibold uppercase tracking-wider text-white/40">
                      {result.label}
                    </p>
                  </div>
                ))}
              </div>
            </BlurFade>
          </Container>
        </section>
      )}

      {/* Content sections */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="mx-auto max-w-3xl">
            {[
              { label: "The Story", text: study.overview },
              { label: "The Challenge", text: study.challenge },
              { label: "The Work", text: study.solution },
            ].map((section, i) => (
              <BlurFade key={section.label} delay={i * 0.1} inView>
                <div
                  className="grid grid-cols-1 gap-4 border-t py-10 md:grid-cols-[160px_1fr] md:gap-12 md:py-14"
                  style={{ borderColor: "var(--border)" }}
                >
                  <h2
                    className="text-xs font-semibold uppercase tracking-wider"
                    style={{ color: "var(--muted)" }}
                  >
                    {section.label}
                  </h2>
                  <p className="body-text">{section.text}</p>
                </div>
              </BlurFade>
            ))}

            {/* Deliverables */}
            <BlurFade delay={0.3} inView>
              <div
                className="grid grid-cols-1 gap-4 border-t py-10 md:grid-cols-[160px_1fr] md:gap-12 md:py-14"
                style={{ borderColor: "var(--border)" }}
              >
                <h2
                  className="text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--muted)" }}
                >
                  Deliverables
                </h2>
                <div className="flex flex-wrap gap-2">
                  {study.deliverables.map((d) => (
                    <span
                      key={d}
                      className="rounded-full px-5 py-2 text-sm font-medium"
                      style={{
                        backgroundColor: "var(--bg-alt)",
                        border: "1px solid var(--border)",
                        color: "var(--text)",
                      }}
                    >
                      {d}
                    </span>
                  ))}
                </div>
              </div>
            </BlurFade>

            {/* Testimonial */}
            {study.testimonial && (
              <BlurFade delay={0.35} inView>
                <div
                  className="border-t py-12 md:py-16"
                  style={{ borderColor: "var(--border)" }}
                >
                  <blockquote
                    className="font-serif italic"
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontSize: "clamp(22px, 3vw, 36px)",
                      lineHeight: 1.3,
                      color: "var(--text)",
                    }}
                  >
                    &ldquo;{study.testimonial.quote}&rdquo;
                  </blockquote>
                  <footer className="mt-6">
                    <p
                      className="text-sm font-semibold"
                      style={{ color: "var(--text)" }}
                    >
                      {study.testimonial.name}
                    </p>
                    <p className="text-sm" style={{ color: "var(--muted)" }}>
                      {study.testimonial.role}
                    </p>
                  </footer>
                </div>
              </BlurFade>
            )}

            {/* Gallery — rich dark gradient cards */}
            <BlurFade delay={0.4} inView>
              <div
                className="border-t pt-10 md:pt-14"
                style={{ borderColor: "var(--border)" }}
              >
                <h2
                  className="mb-8 text-xs font-semibold uppercase tracking-wider"
                  style={{ color: "var(--muted)" }}
                >
                  Gallery
                </h2>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {study.gallery.map((_, i) => (
                    <div
                      key={i}
                      className="relative flex aspect-square items-center justify-center overflow-hidden rounded-xl"
                      style={{
                        background: galleryGradients[(hashSlug(study.slug) + i) % galleryGradients.length],
                      }}
                    >
                      <div className="text-center">
                        <svg className="mx-auto mb-3 h-8 w-8 text-white/20" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 15.75l5.159-5.159a2.25 2.25 0 013.182 0l5.159 5.159m-1.5-1.5l1.409-1.409a2.25 2.25 0 013.182 0l2.909 2.909M3.75 21h16.5a1.5 1.5 0 001.5-1.5V5.25a1.5 1.5 0 00-1.5-1.5H3.75a1.5 1.5 0 00-1.5 1.5v14.25a1.5 1.5 0 001.5 1.5z" />
                        </svg>
                        <p className="text-xs font-semibold uppercase tracking-wider text-white/30">PROJECT GALLERY</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </BlurFade>
          </div>
        </Container>
      </section>

      {/* Case Navigation — dark band */}
      <section
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <div className="grid grid-cols-2 gap-4 py-8 md:gap-6 md:py-12">
            <Link
              href={`/work/${prevStudy.slug}`}
              className="group rounded-xl p-6 transition-all duration-300 md:p-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
                Previous
              </p>
              <p className="mt-2 text-base font-semibold text-white transition-colors duration-200 group-hover:text-[var(--accent)] md:text-lg">
                {prevStudy.title}
              </p>
            </Link>
            <Link
              href={`/work/${nextStudy.slug}`}
              className="group rounded-xl p-6 text-right transition-all duration-300 md:p-10"
              style={{
                backgroundColor: "rgba(255,255,255,0.03)",
                border: "1px solid rgba(255,255,255,0.06)",
              }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
                Next
              </p>
              <p className="mt-2 text-base font-semibold text-white transition-colors duration-200 group-hover:text-[var(--accent)] md:text-lg">
                {nextStudy.title}
              </p>
            </Link>
          </div>
        </Container>
      </section>

      {/* CTA — dark */}
      <section
        className="relative overflow-hidden py-section-mobile md:py-section"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
        }}
      >
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
                style={{
                  fontSize: "clamp(32px, 4.5vw, 56px)",
                  fontWeight: 700,
                  lineHeight: 1.1,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                  whiteSpace: "pre-line",
                }}
              >
                {"Start your\nproject."}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  Ready to create something people actually remember?
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Let&apos;s Be Unreasonable
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
