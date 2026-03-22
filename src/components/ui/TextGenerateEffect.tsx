"use client";

import { useEffect } from "react";
import { stagger, useAnimate, useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface TextGenerateEffectProps {
  words: string;
  className?: string;
  duration?: number;
  staggerDelay?: number;
  startDelay?: number;
}

export function TextGenerateEffect({
  words,
  className,
  duration = 0.4,
  staggerDelay = 0.04,
  startDelay = 0,
}: TextGenerateEffectProps) {
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope, { once: true });

  useEffect(() => {
    if (isInView) {
      const timeout = setTimeout(() => {
        animate(
          "span",
          { opacity: 1, filter: "blur(0px)" },
          { duration, delay: stagger(staggerDelay) },
        );
      }, startDelay * 1000);
      return () => clearTimeout(timeout);
    }
  }, [isInView, animate, duration, staggerDelay, startDelay]);

  const wordsArray = words.split(" ");

  return (
    <span ref={scope} className={cn("inline", className)}>
      {wordsArray.map((word, idx) => (
        <span
          key={`${word}-${idx}`}
          className="inline-block opacity-0"
          style={{ filter: "blur(8px)" }}
        >
          {word}&nbsp;
        </span>
      ))}
    </span>
  );
}
