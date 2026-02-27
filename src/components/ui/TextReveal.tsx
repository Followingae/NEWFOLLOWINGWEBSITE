"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

interface TextRevealProps {
  text: string;
  className?: string;
  delay?: number;
  as?: "h1" | "h2" | "h3" | "p" | "span";
}

export function TextReveal({
  text,
  className,
  delay = 0,
  as: Tag = "h1",
}: TextRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const reduced = useReducedMotion();

  const words = text.split(" ");

  if (reduced) {
    return <Tag className={className}>{text}</Tag>;
  }

  return (
    <Tag ref={ref} className={cn("flex flex-wrap", className)}>
      {words.map((word, i) => (
        <span key={i} className="mr-[0.25em] inline-block overflow-hidden">
          <motion.span
            className="inline-block"
            initial={{ y: "100%", opacity: 0, filter: "blur(8px)" }}
            animate={
              isInView
                ? { y: "0%", opacity: 1, filter: "blur(0px)" }
                : { y: "100%", opacity: 0, filter: "blur(8px)" }
            }
            transition={{
              duration: 0.5,
              ease: [0.16, 1, 0.3, 1],
              delay: delay + i * 0.04,
            }}
          >
            {word}
          </motion.span>
        </span>
      ))}
    </Tag>
  );
}
