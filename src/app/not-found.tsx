"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";

export default function NotFound() {
  return (
    <section
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        background:
          "linear-gradient(160deg, #0a0a0c 0%, #141418 35%, #0d0d1a 65%, #0a0a0c 100%)",
      }}
    >
      {/* Dot pattern */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* Gradient orb */}
      <div
        className="absolute top-1/2 left-1/2 h-[600px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-[0.06]"
        style={{
          background:
            "radial-gradient(circle, var(--accent) 0%, transparent 70%)",
        }}
      />

      <Container className="relative z-10 text-center">
        <motion.h1
          style={{
            fontSize: "clamp(80px, 15vw, 200px)",
            fontWeight: 700,
            lineHeight: 1,
            letterSpacing: "-0.05em",
            color: "rgba(255,255,255,0.06)",
          }}
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: "0%", opacity: 1 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
        >
          404
        </motion.h1>

        <motion.p
          className="mx-auto mt-6 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed"
          style={{ color: "rgba(255,255,255,0.45)" }}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          This page doesn&apos;t exist — let&apos;s get you back on track
        </motion.p>

        <motion.div
          className="mt-10 flex justify-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <MagneticButton>
            <Button href="/" variant="primary" size="lg">
              Go home
            </Button>
          </MagneticButton>
          <Button href="/contact" variant="ghost" size="lg">
            Get in touch
          </Button>
        </motion.div>
      </Container>
    </section>
  );
}
