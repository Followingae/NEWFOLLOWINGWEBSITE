"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Button } from "@/components/ui/Button";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function CinematicMediaBand() {
  const ref = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [40, -40]);

  return (
    <section ref={ref} className="relative overflow-hidden">
      <div
        className="relative"
        style={{
          height: "clamp(500px, 60vh, 700px)",
          background: "linear-gradient(160deg, #0b0b0d 0%, #1a1a2e 40%, #0b0b0d 100%)",
        }}
      >
        {/* Content — centered */}
        <motion.div
          className="absolute inset-0 flex flex-col items-center justify-center px-8 text-center"
          style={{ y: reduced ? 0 : y }}
        >
          <p className="kicker mb-6" style={{ color: "rgba(255,255,255,0.4)" }}>
            SELECTED WORK
          </p>
          <h2
            className="headline-1 max-w-3xl"
            style={{ color: "#ffffff" }}
          >
            Work that looks expensive — and performs.
          </h2>
          <div className="mt-10">
            <Button href="/work" variant="primary" size="lg">
              Explore Work
            </Button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
