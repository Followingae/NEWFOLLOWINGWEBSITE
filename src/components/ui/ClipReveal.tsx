"use client";

import { useRef } from "react";
import { useInView } from "framer-motion";
import { cn } from "@/lib/utils";

interface ClipRevealProps {
  children: React.ReactNode;
  className?: string;
}

export function ClipReveal({ children, className }: ClipRevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-10%" });

  return (
    <div
      ref={ref}
      className={cn(
        "transition-all duration-[1.2s] ease-[cubic-bezier(0.16,1,0.3,1)]",
        className,
      )}
      style={{
        clipPath: isInView
          ? "inset(0% 0% 0% 0% round 0px)"
          : "inset(5% 2% 5% 2% round 16px)",
        opacity: isInView ? 1 : 0,
        transform: isInView ? "scale(1)" : "scale(0.97)",
      }}
    >
      {children}
    </div>
  );
}
