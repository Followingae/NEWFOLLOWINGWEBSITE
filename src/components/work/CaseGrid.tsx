"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { FilterChips } from "./FilterChips";
import { CaseCard } from "./CaseCard";
import { caseStudies, filterOptions, type ServiceTag } from "@/content/work";

export function CaseGrid() {
  const [filter, setFilter] = useState<ServiceTag | null>(null);

  const filtered = filter
    ? caseStudies.filter((s) => s.tags.includes(filter))
    : caseStudies;

  return (
    <section className="py-section-mobile md:py-section">
      <Container>
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end mb-12 md:mb-16">
            <div>
              <p className="kicker mb-4">WORK</p>
              <h2 className="headline-2">Selected projects.</h2>
            </div>
            <div className="md:flex md:justify-end">
              <FilterChips
                options={filterOptions}
                active={filter}
                onSelect={setFilter}
              />
            </div>
          </div>
        </BlurFade>

        <motion.div
          className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3"
          layout
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((study) => (
              <motion.div
                key={study.slug}
                layout
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
              >
                <CaseCard study={study} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </Container>
    </section>
  );
}
