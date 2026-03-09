"use client";

import { useParams, notFound } from "next/navigation";
import Link from "next/link";
import { motion } from "framer-motion";
import { useRef } from "react";
import { useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { articles } from "@/content/insights";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

const heroGradients = [
  "linear-gradient(160deg, #0a0a0c 0%, #1a1a2e 35%, #0d0d1a 65%, #0a0a0c 100%)",
  "linear-gradient(160deg, #0a0a0c 0%, #2d1b69 35%, #0d0d1a 65%, #0a0a0c 100%)",
  "linear-gradient(160deg, #0a0a0c 0%, #0d2137 35%, #0a0a1a 65%, #0a0a0c 100%)",
];

const imageGradients = [
  "linear-gradient(135deg, #1a1a2e 0%, #16213e 50%, #0f3460 100%)",
  "linear-gradient(135deg, #2d1b69 0%, #11001c 50%, #200040 100%)",
  "linear-gradient(135deg, #0d1117 0%, #1a1e24 50%, #2a2e34 100%)",
  "linear-gradient(135deg, #1b2838 0%, #171a21 50%, #1e2328 100%)",
];

function hashStr(s: string) {
  let hash = 0;
  for (let i = 0; i < s.length; i++) {
    hash = s.charCodeAt(i) + ((hash << 5) - hash);
  }
  return Math.abs(hash);
}

export default function ArticlePage() {
  const params = useParams<{ slug: string }>();
  const article = articles.find((a) => a.slug === params.slug);
  const heroRef = useRef<HTMLDivElement>(null);
  const isInView = useInView(heroRef, { once: true });
  const reduced = useReducedMotion();

  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  if (!article) {
    notFound();
  }

  const relatedArticles = articles
    .filter((a) => a.slug !== article.slug)
    .slice(0, 3);

  const heroGrad = heroGradients[hashStr(article.slug) % heroGradients.length];
  const imgGrad = imageGradients[hashStr(article.slug) % imageGradients.length];

  return (
    <>
      {/* Dark cinematic hero */}
      <section
        ref={heroRef}
        className="relative overflow-hidden"
        style={{ minHeight: "clamp(420px, 55vh, 580px)" }}
      >
        <motion.div
          className="absolute inset-0 z-0"
          style={{ y: reduced ? 0 : bgY, background: heroGrad }}
        />

        <div
          className="absolute inset-0 z-[1] opacity-[0.03]"
          style={{
            backgroundImage: "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />

        <Container className="relative z-10 flex max-w-3xl flex-col justify-end pb-16 pt-36 md:pb-24 md:pt-48">
          <motion.div
            className="mb-5 flex flex-wrap items-center gap-3"
            initial={reduced ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {article.tags.map((tag) => (
              <span
                key={tag}
                className="rounded-full px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
                style={{
                  backgroundColor: "rgba(255,255,255,0.08)",
                  color: "var(--accent)",
                  border: "1px solid rgba(255,255,255,0.08)",
                }}
              >
                {tag}
              </span>
            ))}
            <span
              className="text-[10px] font-medium"
              style={{ color: "rgba(255,255,255,0.35)" }}
            >
              {article.readTime} read
            </span>
          </motion.div>

          <motion.h1
            style={{
              fontSize: "clamp(28px, 4vw, 52px)",
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: "-0.02em",
              color: "#ffffff",
            }}
            initial={reduced ? {} : { y: 30, opacity: 0 }}
            animate={isInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.15 }}
          >
            {article.title}
          </motion.h1>

          <motion.div
            className="mt-5 flex items-center gap-4"
            initial={reduced ? {} : { opacity: 0 }}
            animate={isInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.4 }}
          >
            <p className="text-sm" style={{ color: "rgba(255,255,255,0.35)" }}>
              {article.author} &middot;{" "}
              {new Date(article.date).toLocaleDateString("en-US", {
                year: "numeric",
                month: "long",
                day: "numeric",
              })}
            </p>
          </motion.div>
        </Container>

      </section>

      {/* Featured image — rich dark gradient */}
      <section className="px-4 md:px-8">
        <BlurFade inView>
          <div
            className="mx-auto max-w-4xl overflow-hidden rounded-2xl"
            style={{
              height: "clamp(200px, 35vh, 400px)",
              background: imgGrad,
            }}
          />
        </BlurFade>
      </section>

      {/* Article Body */}
      <section className="py-section-mobile md:py-section">
        <Container className="max-w-3xl">
          {article.body.map((paragraph, i) => (
            <BlurFade key={i} delay={i * 0.05} inView>
              <p
                className="mb-8 text-[clamp(16px,1.3vw,19px)] leading-[1.8]"
                style={{ color: i === 0 ? "var(--text)" : "var(--muted)" }}
              >
                {paragraph}
              </p>
            </BlurFade>
          ))}
        </Container>
      </section>

      {/* Related Articles — dark band */}
      {relatedArticles.length > 0 && (
        <section
          className="py-section-mobile md:py-section"
          style={{
            background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
          }}
        >
          <Container>
            <BlurFade inView>
              <p
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                KEEP READING
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
                More insights
              </h2>
            </BlurFade>

            <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
              {relatedArticles.map((related, idx) => (
                <BlurFade key={related.slug} inView>
                  <Link
                    href={`/insights/${related.slug}`}
                    className="group block rounded-xl p-6 transition-all duration-300 md:p-8"
                    style={{
                      backgroundColor: "rgba(255,255,255,0.03)",
                      border: "1px solid rgba(255,255,255,0.06)",
                    }}
                  >
                    <div className="mb-3 flex gap-2">
                      {related.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full px-2.5 py-1 text-[10px] font-semibold uppercase tracking-wider text-white/50"
                          style={{ backgroundColor: "rgba(255,255,255,0.06)" }}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                    <h3 className="text-base font-semibold leading-snug text-white transition-colors duration-200 group-hover:text-[var(--accent)]">
                      {related.title}
                    </h3>
                    <p className="mt-2 text-sm text-white/30">
                      {related.readTime}
                    </p>
                  </Link>
                </BlurFade>
              ))}
            </div>
          </Container>
        </section>
      )}

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
                {"Ready to put\nthis into practice?"}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  We don&apos;t just write about it. We do it. Let&apos;s talk about your
                  next campaign.
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Get in Touch
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
