"use client";

import { useRef } from "react";
import { motion, useInView, useScroll, useTransform } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { NumberTicker } from "@/components/ui/NumberTicker";
import { manifestoBlocks, manifestoHero, manifestoStats } from "@/content/manifesto";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

function ManifestoBlock({
  block,
  index,
}: {
  block: { headline: string; body: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  const words = block.headline.split(" ");
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-8 py-20 md:grid-cols-2 md:gap-16 md:py-28"
    >
      <div className={index % 2 === 1 ? "md:order-2" : ""}>
        <h2 className="headline-2">
          {words.map((word, i) => (
            <span
              key={i}
              className="mr-[0.18em] inline-block overflow-hidden"
            >
              <motion.span
                className="inline-block"
                initial={reduced ? {} : { y: "100%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
                transition={{
                  duration: 0.6,
                  ease: [0.16, 1, 0.3, 1],
                  delay: i * 0.04,
                }}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h2>
      </div>

      <motion.div
        className={`self-center ${index % 2 === 1 ? "md:order-1" : ""}`}
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <p className="body-large">{block.body}</p>
      </motion.div>
    </div>
  );
}

export default function ManifestoPage() {
  const heroRef = useRef<HTMLDivElement>(null);
  const heroInView = useInView(heroRef, { once: true });
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
          className="absolute top-1/3 left-0 z-[1] h-[400px] w-[400px] -translate-x-1/3 rounded-full opacity-[0.08]"
          style={{
            background: "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
          }}
        />

        <Container className="relative z-10 flex flex-col justify-end pb-16 pt-36 md:pb-24 md:pt-48">
          <motion.p
            className="mb-6 text-[11px] font-semibold uppercase tracking-[0.2em]"
            style={{ color: "rgba(255,255,255,0.35)" }}
            initial={reduced ? {} : { opacity: 0 }}
            animate={heroInView ? { opacity: 1 } : {}}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            {manifestoHero.kicker}
          </motion.p>

          <motion.h1
            className="max-w-[800px]"
            style={{
              fontSize: "clamp(36px, 5.5vw, 72px)",
              fontWeight: 700,
              lineHeight: 1.05,
              letterSpacing: "-0.03em",
              color: "#ffffff",
            }}
            initial={reduced ? {} : { y: 30, opacity: 0 }}
            animate={heroInView ? { y: 0, opacity: 1 } : {}}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 }}
          >
            {manifestoHero.headline}
          </motion.h1>

          <motion.p
            className="mt-6 max-w-xl text-[clamp(16px,1.4vw,20px)] leading-relaxed"
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {manifestoHero.subline}
          </motion.p>
        </Container>

      </section>

      {/* Manifesto Blocks — alternating with visual separators */}
      <section className="py-section-mobile md:py-section">
        <Container>
          {manifestoBlocks.map((block, i) => (
            <div key={i}>
              {i > 0 && (
                <div className="flex items-center gap-6">
                  <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
                  <span
                    className="text-[10px] font-bold uppercase tracking-widest"
                    style={{ color: "var(--muted)", opacity: 0.4 }}
                  >
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <div className="h-px flex-1" style={{ backgroundColor: "var(--border)" }} />
                </div>
              )}
              <ManifestoBlock block={block} index={i} />

              {/* Image placeholders after blocks 1, 3, and 5 (indices 0, 2, 4) */}
              {(i === 0 || i === 2 || i === 4) && (
                <BlurFade inView>
                  <div className="relative aspect-[21/9] overflow-hidden rounded-xl">
                    <img
                      src={["/images/red-ensemble.png", "/images/perfume-roses.png", "/images/silhouette-braids.png"][i % 3]}
                      alt=""
                      className="h-full w-full object-cover"
                    />
                  </div>
                </BlurFade>
              )}
            </div>
          ))}
        </Container>
      </section>

      {/* Counter Band — dark cinematic */}
      <section
        className="py-20 md:py-32"
        style={{
          background:
            "linear-gradient(160deg, #0b0b0d 0%, #1a1a2e 40%, #0b0b0d 100%)",
        }}
      >
        <Container>
          <BlurFade inView>
            <div className="text-center">
              <p
                className="mb-4 text-[11px] font-semibold uppercase tracking-[0.2em]"
                style={{ color: "rgba(255,255,255,0.3)" }}
              >
                {manifestoStats.label.toUpperCase()}
              </p>
              <p
                style={{
                  fontSize: "clamp(48px, 8vw, 120px)",
                  fontWeight: 700,
                  lineHeight: 1,
                  letterSpacing: "-0.03em",
                  color: "#ffffff",
                }}
              >
                <NumberTicker value={`${manifestoStats.startValue}+`} />
              </p>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* CTA — dark */}
      <section
        className="relative overflow-hidden py-section-mobile md:py-section"
        style={{
          background: "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
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
                {"Ready to stop\nplaying it safe?"}
              </h2>
              <div className="md:text-right">
                <p
                  className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                  style={{ color: "rgba(255,255,255,0.45)" }}
                >
                  We work with brands that believe in making things people
                  actually remember.
                </p>
                <MagneticButton className="md:ml-auto inline-block">
                  <Button href="/contact" variant="primary" size="lg">
                    Let&apos;s Talk
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
