"use client";

import { useEffect, useRef } from "react";
import { useInView, useMotionValue, useSpring } from "framer-motion";
import { cn } from "@/lib/utils";

interface NumberTickerProps {
  value: string;
  direction?: "up" | "down";
  delay?: number;
  className?: string;
  decimalPlaces?: number;
}

export function NumberTicker({
  value,
  direction = "up",
  delay = 0,
  className,
}: NumberTickerProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  // Extract numeric part from value (e.g., "3.2M" -> 3.2, "12x" -> 12)
  const numericMatch = value.match(/[\d.]+/);
  const numericValue = numericMatch ? parseFloat(numericMatch[0]) : 0;
  const prefix = value.substring(0, value.indexOf(numericMatch?.[0] || ""));
  const suffix = value.substring(
    (value.indexOf(numericMatch?.[0] || "") || 0) + (numericMatch?.[0]?.length || 0),
  );
  const hasDecimal = numericMatch?.[0]?.includes(".") || false;
  const decimalPlaces = hasDecimal
    ? (numericMatch?.[0]?.split(".")[1]?.length || 0)
    : 0;

  const motionValue = useMotionValue(direction === "down" ? numericValue : 0);
  const springValue = useSpring(motionValue, {
    damping: 60,
    stiffness: 100,
  });

  useEffect(() => {
    if (isInView) {
      setTimeout(() => {
        motionValue.set(direction === "down" ? 0 : numericValue);
      }, delay * 1000);
    }
  }, [motionValue, isInView, delay, numericValue, direction]);

  useEffect(() => {
    const unsubscribe = springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent =
          prefix + Intl.NumberFormat("en-US", {
            minimumFractionDigits: decimalPlaces,
            maximumFractionDigits: decimalPlaces,
          }).format(Number(latest.toFixed(decimalPlaces))) + suffix;
      }
    });
    return () => unsubscribe();
  }, [springValue, prefix, suffix, decimalPlaces]);

  return (
    <span
      className={cn(
        "inline-block tabular-nums tracking-wider",
        className,
      )}
      ref={ref}
    >
      {value}
    </span>
  );
}
