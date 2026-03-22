"use client";

import { motion } from "framer-motion";
import { Container } from "@/components/ui/Container";
import { Button } from "@/components/ui/Button";
import { MagneticButton } from "@/components/ui/MagneticButton";
import { BlurFade } from "@/components/ui/BlurFade";
import { GradientMesh } from "@/components/ui/GradientMesh";
import { useWorld } from "@/components/world/WorldProvider";
import { ctaContent } from "@/content/site";

export function FinalCTA() {
  const { world } = useWorld();
  const cta = ctaContent[world];

  return (
    <section
      data-nav-theme="dark"
      className="relative overflow-hidden py-section-mobile md:py-section"
      style={{
        background:
          "linear-gradient(160deg, #0b0b0d 0%, #141418 40%, #0b0b0d 100%)",
      }}
    >
      {/* Animated gradient mesh background */}
      <GradientMesh />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.02]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Lamp glow effect — top edge */}
      <div className="absolute top-0 left-1/2 w-full max-w-3xl -translate-x-1/2">
        <motion.div
          className="mx-auto h-px"
          initial={{ width: "15rem", opacity: 0 }}
          whileInView={{ width: "40rem", opacity: 1 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{
            background:
              "linear-gradient(90deg, transparent, var(--accent), transparent)",
          }}
        />
        <motion.div
          className="mx-auto rounded-full blur-3xl"
          initial={{ width: "10rem", height: "6rem", opacity: 0 }}
          whileInView={{ width: "24rem", height: "8rem", opacity: 0.15 }}
          transition={{ delay: 0.2, duration: 1, ease: "easeInOut" }}
          viewport={{ once: true }}
          style={{ backgroundColor: "var(--accent)" }}
        />
      </div>

      {/* Animated beam lines */}
      <div className="absolute inset-0 overflow-hidden opacity-[0.03]">
        {[...Array(5)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute h-px"
            style={{
              background:
                "linear-gradient(90deg, transparent, var(--accent), transparent)",
              top: `${20 + i * 15}%`,
              left: "-100%",
              width: "200%",
            }}
            animate={{ x: ["0%", "100%"] }}
            transition={{
              duration: 8 + i * 2,
              repeat: Infinity,
              ease: "linear",
              delay: i * 1.5,
            }}
          />
        ))}
      </div>

      <Container className="relative z-10">
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:items-center">
            <h2
              className="headline-1"
              style={{ whiteSpace: "pre-line", color: "#ffffff" }}
            >
              {cta.headline}
            </h2>
            <div className="md:text-right">
              <p
                className="mb-8 max-w-md text-[clamp(16px,1.4vw,20px)] leading-relaxed md:ml-auto"
                style={{ color: "rgba(255,255,255,0.45)" }}
              >
                {cta.subline}
              </p>
              <MagneticButton className="inline-block md:ml-auto">
                <Button href={cta.href} variant="primary" size="lg">
                  {cta.label}
                </Button>
              </MagneticButton>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
