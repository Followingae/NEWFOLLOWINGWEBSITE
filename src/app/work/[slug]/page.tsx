"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { caseStudies } from "@/content/work";
import {
  BookmarkBook,
  WarningTriangle,
  Flash,
  DeliveryTruck,
} from "iconoir-react";

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  const currentIndex = caseStudies.findIndex((s) => s.slug === study.slug);
  const nextStudy = caseStudies[(currentIndex + 1) % caseStudies.length];
  const prevStudy =
    caseStudies[(currentIndex - 1 + caseStudies.length) % caseStudies.length];

  const sections = [
    { icon: BookmarkBook, label: "THE BRIEF", text: study.overview },
    { icon: WarningTriangle, label: "THE CHALLENGE", text: study.challenge },
    { icon: Flash, label: "WHAT WE DID", text: study.solution },
  ];

  return (
    <>
      {/* Hero — full-width thumbnail with overlay */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden"
        style={{ height: "clamp(400px, 60vh, 650px)" }}
      >
        <img
          src={study.thumbnail}
          alt={study.title}
          className="absolute inset-0 h-full w-full object-cover"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.3) 50%, rgba(0,0,0,0.15) 100%)",
          }}
        />

        <Container className="relative z-10 flex h-full flex-col justify-end pb-12 md:pb-16">
          <motion.div
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          >
            <div className="mb-4 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/60"
                >
                  {tag}
                </span>
              ))}
              <span className="rounded-full border border-white/10 px-3 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/40">
                {study.industry}
              </span>
            </div>

            <h1
              style={{
                fontSize: "clamp(32px, 5vw, 64px)",
                fontWeight: 700,
                lineHeight: 1.1,
                letterSpacing: "-0.03em",
                color: "#fff",
              }}
            >
              {study.title}
            </h1>

            <p className="mt-4 max-w-lg text-base text-white/50 md:text-lg">
              {study.impact}
            </p>
          </motion.div>
        </Container>
      </section>

      {/* Results grid */}
      <section
        className="py-14 md:py-20"
        style={{ backgroundColor: "var(--bg-alt)" }}
      >
        <Container>
          <div className="grid grid-cols-2 gap-4 md:grid-cols-4 md:gap-6">
            {study.results.map((result, i) => (
              <BlurFade key={i} delay={i * 0.08} inView>
                <div className="text-center">
                  <p
                    className="text-3xl font-bold md:text-4xl"
                    style={{ color: "var(--text)" }}
                  >
                    {result.value}
                  </p>
                  <p
                    className="mt-1 text-xs font-medium uppercase tracking-wider"
                    style={{ color: "var(--muted)" }}
                  >
                    {result.label}
                  </p>
                </div>
              </BlurFade>
            ))}
          </div>
        </Container>
      </section>

      {/* Content cards with icons */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
              {sections.map((section, i) => {
                const Icon = section.icon;
                return (
                  <BlurFade key={section.label} delay={i * 0.1} inView>
                    <div
                      className="flex flex-col rounded-2xl border p-8 md:p-10"
                      style={{
                        borderColor: "var(--border)",
                        backgroundColor: "var(--surface)",
                      }}
                    >
                      <div
                        className="mb-5 flex h-11 w-11 items-center justify-center rounded-xl"
                        style={{ backgroundColor: "var(--bg-alt)" }}
                      >
                        <Icon
                          width={22}
                          height={22}
                          strokeWidth={1.5}
                          color="var(--text)"
                        />
                      </div>
                      <p className="kicker mb-3">{section.label}</p>
                      <p className="body-text">{section.text}</p>
                    </div>
                  </BlurFade>
                );
              })}
            </div>

            {/* Deliverables */}
            <BlurFade delay={0.3} inView>
              <div
                className="mt-12 rounded-2xl border p-8 md:mt-16 md:p-10"
                style={{
                  borderColor: "var(--border)",
                  backgroundColor: "var(--surface)",
                }}
              >
                <div className="flex items-start gap-5">
                  <div
                    className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl"
                    style={{ backgroundColor: "var(--bg-alt)" }}
                  >
                    <DeliveryTruck
                      width={22}
                      height={22}
                      strokeWidth={1.5}
                      color="var(--text)"
                    />
                  </div>
                  <div>
                    <p className="kicker mb-4">DELIVERABLES</p>
                    <div className="flex flex-wrap gap-2">
                      {study.deliverables.map((d) => (
                        <span
                          key={d}
                          className="rounded-full border px-4 py-2 text-[13px] font-medium"
                          style={{
                            borderColor: "var(--border)",
                            color: "var(--text)",
                          }}
                        >
                          {d}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </BlurFade>

            {/* Testimonial */}
            {study.testimonial && (
              <BlurFade delay={0.35} inView>
                <div
                  className="mt-16 border-t pt-14 md:mt-20 md:pt-16"
                  style={{ borderColor: "var(--border)" }}
                >
                  <blockquote
                    style={{
                      fontFamily: "var(--font-serif)",
                      fontStyle: "italic",
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
          </div>
        </Container>
      </section>

      {/* Nav — previous / next */}
      <section
        data-nav-theme="dark"
        style={{
          background:
            "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <div className="grid grid-cols-2 gap-4 py-8 md:gap-6 md:py-12">
            <Link
              href={`/work/${prevStudy.slug}`}
              className="group rounded-xl p-6 transition-all duration-300 hover:bg-white/[0.03] md:p-10"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
                Previous
              </p>
              <p className="mt-2 text-base font-semibold text-white/70 transition-colors duration-200 group-hover:text-white md:text-lg">
                {prevStudy.title}
              </p>
            </Link>
            <Link
              href={`/work/${nextStudy.slug}`}
              className="group rounded-xl p-6 text-right transition-all duration-300 hover:bg-white/[0.03] md:p-10"
              style={{ border: "1px solid rgba(255,255,255,0.06)" }}
            >
              <p className="text-[10px] font-semibold uppercase tracking-wider text-white/30">
                Next
              </p>
              <p className="mt-2 text-base font-semibold text-white/70 transition-colors duration-200 group-hover:text-white md:text-lg">
                {nextStudy.title}
              </p>
            </Link>
          </div>
        </Container>
      </section>
    </>
  );
}
