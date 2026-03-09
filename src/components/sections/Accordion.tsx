"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface AccordionItem {
  question: string;
  answer: string;
}

interface AccordionProps {
  items: AccordionItem[];
}

export function Accordion({ items }: AccordionProps) {
  const [expanded, setExpanded] = useState<number | null>(null);

  return (
    <div>
      <div className="border-t" style={{ borderColor: "var(--border)" }} />
      {items.map((item, i) => (
        <div
          key={i}
          className="border-b"
          style={{ borderColor: "var(--border)" }}
        >
          <button
            className="group flex w-full items-center justify-between py-6 text-left md:py-8"
            onClick={() => setExpanded(expanded === i ? null : i)}
            aria-expanded={expanded === i}
          >
            <h3
              className="pr-8 text-lg font-semibold md:text-xl"
              style={{ color: "var(--text)" }}
            >
              {item.question}
            </h3>
            <motion.div
              animate={{ rotate: expanded === i ? 45 : 0 }}
              transition={{ duration: 0.3 }}
              className="shrink-0"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                style={{ color: "var(--muted)" }}
              >
                <path
                  d="M12 5v14M5 12h14"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                />
              </svg>
            </motion.div>
          </button>

          <AnimatePresence>
            {expanded === i && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{
                  height: { duration: 0.4, ease: [0.16, 1, 0.3, 1] },
                  opacity: { duration: 0.3 },
                }}
                className="overflow-hidden"
              >
                <p className="body-text max-w-2xl pb-6 md:pb-8">
                  {item.answer}
                </p>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      ))}
    </div>
  );
}
