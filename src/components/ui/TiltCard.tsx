"use client";

import { useRef, useState, useCallback } from "react";
import {
  motion,
  useMotionValue,
  useMotionTemplate,
  useSpring,
} from "framer-motion";
import { cn } from "@/lib/utils";

interface TiltCardProps {
  children: React.ReactNode;
  className?: string;
  style?: React.CSSProperties;
}

export function TiltCard({ children, className, style: customStyle }: TiltCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovering, setIsHovering] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useMotionValue(0);
  const rotateY = useMotionValue(0);

  const springRotateX = useSpring(rotateX, { stiffness: 150, damping: 20 });
  const springRotateY = useSpring(rotateY, { stiffness: 150, damping: 20 });

  const glare = useMotionTemplate`radial-gradient(350px circle at ${mouseX}px ${mouseY}px, rgba(255,255,255,0.07), transparent 60%)`;
  const glow = useMotionTemplate`radial-gradient(400px circle at ${mouseX}px ${mouseY}px, var(--accent) 0%, transparent 70%)`;

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!ref.current) return;
      const rect = ref.current.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;

      mouseX.set(x);
      mouseY.set(y);
      rotateX.set(((y - centerY) / centerY) * -8);
      rotateY.set(((x - centerX) / centerX) * 8);
    },
    [mouseX, mouseY, rotateX, rotateY],
  );

  const handleMouseLeave = useCallback(() => {
    setIsHovering(false);
    rotateX.set(0);
    rotateY.set(0);
  }, [rotateX, rotateY]);

  return (
    <div style={{ perspective: "1000px" }}>
      <motion.div
        ref={ref}
        className={cn(
          "group relative transition-shadow duration-500",
          className,
        )}
        style={{
          ...(customStyle as Record<string, unknown>),
          rotateX: springRotateX,
          rotateY: springRotateY,
          transformStyle: "preserve-3d" as const,
        }}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setIsHovering(true)}
        onMouseLeave={handleMouseLeave}
      >
        {/* Glass sheen overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-500"
          style={{ background: glare, opacity: isHovering ? 1 : 0 }}
        />

        {/* Accent glow overlay */}
        <motion.div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-500"
          style={{ background: glow, opacity: isHovering ? 0.04 : 0 }}
        />

        {/* Glow border on hover */}
        <div
          className="pointer-events-none absolute inset-0 z-10 rounded-[inherit] transition-opacity duration-500"
          style={{
            boxShadow:
              "inset 0 0 0 1px rgba(255,255,255,0.08), 0 0 30px rgba(211,255,2,0.04)",
            opacity: isHovering ? 1 : 0,
          }}
        />

        {children}
      </motion.div>
    </div>
  );
}
