"use client";

import { useParams } from "next/navigation";
import { notFound } from "next/navigation";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { caseStudies } from "@/content/work";

export default function CaseStudyPage() {
  const params = useParams<{ slug: string }>();
  const study = caseStudies.find((s) => s.slug === params.slug);

  if (!study) {
    notFound();
  }

  const words = study.title.split(" ");

  return (
    <>
      {/* Hero */}
      <section className="pt-28 pb-20 md:pt-40 md:pb-32">
        <Container>
          <BlurFade inView>
            <div className="mb-6 flex flex-wrap gap-2">
              {study.tags.map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-1.5 text-[11px] font-semibold uppercase tracking-wider"
                  style={{
                    backgroundColor: "var(--bg-alt)",
                    border: "1px solid var(--border)",
                    color: "var(--muted)",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </BlurFade>

          <h1 className="headline-display max-w-[800px]">
            {words.map((word, i) => (
              <span key={i} className="mr-[0.22em] inline-block overflow-hidden py-[0.1em]">
                <motion.span
                  className="inline-block"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: "0%", opacity: 1 }}
                  transition={{
                    duration: 0.7,
                    ease: [0.16, 1, 0.3, 1],
                    delay: 0.1 + i * 0.05,
                  }}
                >
                  {word}
                </motion.span>
              </span>
            ))}
          </h1>

          <BlurFade delay={0.4} inView>
            <p
              className="mt-6 text-lg font-medium"
              style={{ color: "var(--accent)" }}
            >
              {study.impact}
            </p>
          </BlurFade>
        </Container>

        <div className="mt-16 md:mt-24">
          <div className="gradient-bar" />
        </div>
      </section>

      {/* Featured image placeholder */}
      <section className="px-4 md:px-8">
        <BlurFade inView>
          <div
            className="mx-auto max-w-[1280px] overflow-hidden"
            style={{
              height: "clamp(300px, 45vh, 520px)",
              background:
                "linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)",
              opacity: 0.08,
            }}
          />
        </BlurFade>
      </section>

      {/* Content sections */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="mx-auto max-w-3xl">
            {/* Overview / Challenge / Solution in editorial grid */}
            {[
              { label: "Overview", text: study.overview },
              { label: "Challenge", text: study.challenge },
              { label: "Solution", text: study.solution },
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
                <div className="flex flex-wrap gap-3">
                  {study.deliverables.map((d) => (
                    <span
                      key={d}
                      className="px-5 py-2.5 text-sm font-medium"
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

            {/* Gallery placeholders */}
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
                      className="aspect-square"
                      style={{
                        background:
                          "linear-gradient(135deg, var(--accent) 0%, var(--accent-secondary) 100%)",
                        opacity: 0.04 + i * 0.02,
                      }}
                    />
                  ))}
                </div>
              </div>
            </BlurFade>

            <div className="border-t mt-10 md:mt-14" style={{ borderColor: "var(--border)" }} />
          </div>
        </Container>
      </section>

      {/* CTA */}
      <section className="py-section-mobile md:py-section">
        <Container>
          <div className="gradient-bar mb-16 md:mb-24" />
          <BlurFade inView>
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
              <h2 className="headline-1">
                Start your
                <br />
                project.
              </h2>
              <div className="md:text-right">
                <p className="body-large mb-8 max-w-md md:ml-auto">
                  Ready to create something with structure and impact?
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Get Started
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
