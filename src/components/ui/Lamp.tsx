"use client";

import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface LampProps {
  children?: React.ReactNode;
  className?: string;
  color?: string;
}

export function Lamp({ children, className, color = "var(--accent)" }: LampProps) {
  return (
    <div
      className={cn(
        "relative flex min-h-[400px] flex-col items-center justify-center overflow-hidden w-full",
        className,
      )}
    >
      <div className="relative flex w-full flex-1 items-center justify-center isolate z-0">
        {/* Left gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), ${color}20 0%, transparent 60%)`,
            "--conic-position": "from 70deg at center top",
          } as React.CSSProperties}
          className="absolute right-1/2 top-0 h-56 w-[30rem] bg-gradient-to-b from-transparent via-transparent to-transparent [--conic-position:from_70deg_at_center_top]"
        >
          <div
            className="absolute bottom-0 left-0 z-20 h-40 w-full"
            style={{
              background: "linear-gradient(to top, var(--bg), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 left-0 z-20 h-full w-40"
            style={{
              background: "linear-gradient(to right, var(--bg), transparent)",
            }}
          />
        </motion.div>

        {/* Right gradient cone */}
        <motion.div
          initial={{ opacity: 0.5, width: "15rem" }}
          whileInView={{ opacity: 1, width: "30rem" }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          style={{
            backgroundImage: `conic-gradient(var(--conic-position), transparent 0%, ${color}20 40%)`,
            "--conic-position": "from 290deg at center top",
          } as React.CSSProperties}
          className="absolute left-1/2 top-0 h-56 w-[30rem] [--conic-position:from_290deg_at_center_top]"
        >
          <div
            className="absolute bottom-0 right-0 z-20 h-40 w-full"
            style={{
              background: "linear-gradient(to top, var(--bg), transparent)",
            }}
          />
          <div
            className="absolute bottom-0 right-0 z-20 h-full w-40"
            style={{
              background: "linear-gradient(to left, var(--bg), transparent)",
            }}
          />
        </motion.div>

        {/* Top glow line */}
        <div className="absolute top-0 z-50 h-px w-full">
          <motion.div
            initial={{ width: "15rem", opacity: 0 }}
            whileInView={{ width: "30rem", opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
            className="mx-auto h-px"
            style={{
              background: `linear-gradient(90deg, transparent, ${color}, transparent)`,
            }}
          />
        </div>

        {/* Blur glow */}
        <motion.div
          initial={{ width: "8rem", opacity: 0 }}
          whileInView={{ width: "16rem", opacity: 0.6 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 z-30 mx-auto h-28 rounded-full blur-2xl"
          style={{ backgroundColor: color }}
        />

        <motion.div
          initial={{ width: "15rem", opacity: 0 }}
          whileInView={{ width: "30rem", opacity: 0.4 }}
          transition={{ delay: 0.3, duration: 0.8, ease: "easeInOut" }}
          className="absolute top-0 z-30 mx-auto h-0.5 rounded-full blur-sm"
          style={{ backgroundColor: color }}
        />
      </div>

      {/* Content */}
      <div className="relative z-50 -mt-40 flex flex-col items-center px-5">
        {children}
      </div>
    </div>
  );
}
