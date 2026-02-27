"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface ServicePageHeroProps {
  kicker: string;
  headline: string;
  subline?: string;
}

export function ServicePageHero({
  kicker,
  headline,
  subline,
}: ServicePageHeroProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();

  const words = headline.split(" ");

  return (
    <section ref={ref} className="pt-28 pb-20 md:pt-40 md:pb-32">
      <Container>
        <motion.p
          className="kicker mb-8"
          initial={reduced ? {} : { opacity: 0 }}
          animate={isInView ? { opacity: 1 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
        >
          {kicker}
        </motion.p>

        <h1 className="headline-display max-w-[800px]">
          {words.map((word, i) => (
            <span key={i} className="mr-[0.22em] inline-block overflow-hidden py-[0.1em]">
              <motion.span
                className="inline-block"
                initial={reduced ? {} : { y: "100%", opacity: 0 }}
                animate={isInView ? { y: "0%", opacity: 1 } : {}}
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

        {subline && (
          <motion.p
            className="body-large mt-8 max-w-xl"
            initial={reduced ? {} : { opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            {subline}
          </motion.p>
        )}
      </Container>

      {/* Gradient bar */}
      <div className="mt-16 md:mt-24">
        <div className="gradient-bar" />
      </div>
    </section>
  );
}
