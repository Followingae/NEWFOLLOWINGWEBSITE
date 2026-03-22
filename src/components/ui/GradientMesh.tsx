"use client";

import { cn } from "@/lib/utils";

interface GradientMeshProps {
  className?: string;
}

export function GradientMesh({ className }: GradientMeshProps) {
  return (
    <div
      className={cn(
        "pointer-events-none absolute inset-0 overflow-hidden",
        className,
      )}
    >
      <div
        className="absolute h-[500px] w-[500px] rounded-full opacity-[0.07]"
        style={{
          background:
            "radial-gradient(circle, var(--accent), transparent 70%)",
          top: "-10%",
          left: "20%",
          filter: "blur(80px)",
          animation: "mesh-float-1 15s ease-in-out infinite",
        }}
      />
      <div
        className="absolute h-[400px] w-[400px] rounded-full opacity-[0.05]"
        style={{
          background:
            "radial-gradient(circle, var(--accent-secondary), transparent 70%)",
          bottom: "0%",
          right: "15%",
          filter: "blur(90px)",
          animation: "mesh-float-2 18s ease-in-out infinite",
        }}
      />
      <div
        className="absolute h-[300px] w-[300px] rounded-full opacity-[0.04]"
        style={{
          background:
            "radial-gradient(circle, var(--accent), transparent 70%)",
          top: "50%",
          left: "60%",
          filter: "blur(70px)",
          animation: "mesh-float-3 12s ease-in-out infinite",
        }}
      />
    </div>
  );
}
