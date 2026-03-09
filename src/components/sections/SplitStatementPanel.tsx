"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { splitPanels } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

export function SplitStatementPanel() {
  return (
    <section className="py-section-mobile md:py-section">
      <Container>
        {splitPanels.map((panel, i) => (
          <SplitRow key={i} panel={panel} index={i} />
        ))}
      </Container>
    </section>
  );
}

function SplitRow({
  panel,
  index,
}: {
  panel: { stat: string; copy: string };
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-80px" });
  const reduced = useReducedMotion();

  return (
    <div
      ref={ref}
      className="grid grid-cols-1 gap-6 border-b py-14 md:grid-cols-[1fr_1.5fr] md:gap-20 md:py-20"
      style={{ borderColor: "var(--border)" }}
    >
      <motion.h3
        className="headline-2 font-serif italic"
        style={{ fontFamily: "var(--font-serif)", color: "var(--text)" }}
        initial={reduced ? {} : { opacity: 0, x: -30 }}
        animate={isInView ? { opacity: 1, x: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1], delay: index * 0.05 }}
      >
        {panel.stat}
      </motion.h3>
      <motion.p
        className="body-large self-center"
        initial={reduced ? {} : { opacity: 0, y: 20 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1], delay: 0.15 + index * 0.05 }}
      >
        {panel.copy}
      </motion.p>
    </div>
  );
}
