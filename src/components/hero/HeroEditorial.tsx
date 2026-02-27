"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { useWorld } from "@/components/world/WorldProvider";
import { heroContent } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function HeroEditorial() {
  const { world } = useWorld();
  const content = heroContent[world];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  const wordVariants = {
    hidden: { y: "100%", opacity: 0 },
    visible: (i: number) => ({
      y: "0%",
      opacity: 1,
      transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: 0.1 + i * 0.05 },
    }),
  };

  const allWords = content.headline.join(" ").split(" ");

  return (
    <section
      ref={ref}
      className="relative flex min-h-screen flex-col justify-center pt-20"
    >
      <Container>
        {/* Kicker */}
        <motion.p
          className="kicker mb-8 md:mb-10"
          initial={reduced ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {content.kicker}
        </motion.p>

        {/* Massive headline — viewport-filling */}
        <h1 className="headline-display max-w-[900px]">
          {allWords.map((word, i) => (
            <span key={`${world}-${i}`} className="mr-[0.22em] inline-block overflow-hidden py-[0.1em]">
              <motion.span
                className="inline-block"
                variants={wordVariants}
                initial="hidden"
                animate={isInView ? "visible" : "hidden"}
                custom={i}
                key={`${world}-word-${i}`}
              >
                {word}
              </motion.span>
            </span>
          ))}
        </h1>

        {/* Subline + CTAs in a split layout */}
        <motion.div
          className="mt-12 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:items-end"
          initial={reduced ? {} : { opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <p className="body-large max-w-md" key={`${world}-subline`}>
            {content.subline}
          </p>

          <div className="flex flex-wrap gap-4 md:justify-end">
            <MagneticButton>
              <Button href={content.ctaPrimary.href} variant="primary" size="lg">
                {content.ctaPrimary.label}
              </Button>
            </MagneticButton>
            <Button href={content.ctaSecondary.href} variant="secondary" size="lg">
              {content.ctaSecondary.label}
            </Button>
          </div>
        </motion.div>
      </Container>

      {/* Bottom accent gradient bar */}
      <div className="absolute bottom-0 left-0 right-0">
        <div className="gradient-bar" />
      </div>
    </section>
  );
}
