"use client";

import { useRef, useState } from "react";
import { motion, useInView, AnimatePresence } from "framer-motion";
import AnimatedGradientBackground from "@/components/ui/AnimatedGradientBackground";
import { Container } from "@/components/ui/Container";
import { GlassButton } from "@/components/ui/glass-button";
import { Marquee } from "@/components/ui/Marquee";
import { clientLogos } from "@/content/site";
import { useWorld } from "@/components/world/WorldProvider";
import { heroContent } from "@/content/site";
import { useReducedMotion } from "@/hooks/use-reduced-motion";

/* Logo tooltip state */
interface TooltipState {
  name: string;
  x: number;
  y: number;
}

/* Line-by-line reveal — opacity + y shift, no overflow clip needed */
const lineReveal = {
  initial: { y: 40, opacity: 0, filter: "blur(8px)" },
  enter: (i: number) => ({
    y: 0,
    opacity: 1,
    filter: "blur(0px)",
    transition: {
      duration: 0.85,
      ease: [0.33, 1, 0.68, 1],
      delay: 0.15 * i + 0.6,
    },
  }),
};

export function HeroEditorial() {
  const { world } = useWorld();
  const content = heroContent[world];
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true });
  const reduced = useReducedMotion();
  const [tooltip, setTooltip] = useState<TooltipState | null>(null);

  return (
    <section
      ref={ref}
      data-nav-theme="dark"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={
        {
          "--text": "#ffffff",
          "--muted": "rgba(255,255,255,0.5)",
          "--border": "rgba(255,255,255,0.15)",
          "--bg": "#0a0a0a",
        } as React.CSSProperties
      }
    >
      {/* ─── Animated gradient scene ─── */}
      <AnimatedGradientBackground
        Breathing={true}
        startingGap={120}
        breathingRange={8}
        animationSpeed={0.03}
        topOffset={20}
        gradientColors={[
          "#0A0A0A",
          "#2979FF",
          "#FF80AB",
          "#FF6D00",
          "#FFD600",
          "#00E676",
          "#3D5AFE",
        ]}
        gradientStops={[35, 50, 60, 70, 80, 90, 100]}
        containerClassName="z-0"
      />

      {/* Grain texture */}
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          backgroundImage:
            'url("data:image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E")',
          backgroundRepeat: "repeat",
          backgroundSize: "180px",
          opacity: 0.04,
        }}
      />

      {/* ─── Content — centered ─── */}
      <Container className="relative z-10 py-28 pt-32 md:py-44">
        <div className="mx-auto max-w-4xl text-center">
          {/* Kicker with waving UAE flag */}
          <motion.div
            className="mb-6 flex items-center justify-center gap-2 text-[9px] font-medium uppercase tracking-[0.35em] md:mb-8"
            style={{ color: "rgba(255,255,255,0.2)" }}
            initial={reduced ? {} : { opacity: 0, y: 10 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5, delay: 0.3 }}
          >
            <span>{content.kicker}</span>
            <img src="https://flagcdn.com/w20/ae.png" alt="UAE" className="h-[9px] w-auto rounded-[1px] opacity-60" />
          </motion.div>

          {/* Headline — sans + serif mix, tight line spacing */}
          <h1>
            {content.headline.map((line, i) => (
              <div key={`${world}-${i}`}>
                {reduced ? (
                  <span
                    className="block"
                    style={{
                      fontSize: "clamp(48px, 9vw, 100px)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                      fontWeight: 800,
                      color: "#ffffff",
                      fontFamily:
                        i === 1 ? "var(--font-serif)" : "var(--font-sans)",
                      fontStyle: i === 1 ? "italic" : "normal",
                    }}
                  >
                    {line}
                  </span>
                ) : (
                  <motion.span
                    className="block"
                    style={{
                      fontSize: "clamp(48px, 9vw, 100px)",
                      lineHeight: 1.05,
                      letterSpacing: "-0.03em",
                      fontWeight: 800,
                      color: "#ffffff",
                      fontFamily:
                        i === 1 ? "var(--font-serif)" : "var(--font-sans)",
                      fontStyle: i === 1 ? "italic" : "normal",
                    }}
                    custom={i}
                    variants={lineReveal}
                    initial="initial"
                    animate={isInView ? "enter" : "initial"}
                  >
                    {line}
                  </motion.span>
                )}
              </div>
            ))}
          </h1>

          {/* Subline */}
          <motion.p
            className="mx-auto mt-6 max-w-md text-[clamp(15px,1.3vw,18px)] leading-relaxed md:mt-8"
            style={{ color: "rgba(255,255,255,0.45)" }}
            initial={reduced ? {} : { opacity: 0, y: 12 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            {content.subline}
          </motion.p>

        </div>
      </Container>

      {/* Client logos — bottom of hero */}
      <motion.div
        className="absolute bottom-10 left-0 right-0 z-10 py-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.8, duration: 0.6 }}
      >
        <div className="relative mx-auto max-w-3xl"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <Marquee pauseOnHover speed={6}>
            {clientLogos.map((brand) => (
              <div
                key={brand.name}
                className="mx-8 flex items-center py-4"
                onMouseEnter={(e) => {
                  const rect = e.currentTarget.getBoundingClientRect();
                  setTooltip({
                    name: brand.name,
                    x: rect.left + rect.width / 2,
                    y: rect.top - 8,
                  });
                }}
                onMouseLeave={() => setTooltip(null)}
              >
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ height: brand.height }}
                  className="w-auto object-contain brightness-0 invert opacity-25 transition-all duration-500 hover:brightness-100 hover:invert-0 hover:opacity-90"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </motion.div>

      {/* Fixed tooltip — renders outside marquee overflow */}
      <AnimatePresence>
        {tooltip && (
          <motion.div
            className="pointer-events-none fixed z-50 rounded-full bg-white/10 px-3 py-1 backdrop-blur-md"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.15 }}
            style={{
              left: tooltip.x,
              top: tooltip.y,
              transform: "translate(-50%, -100%)",
            }}
          >
            <span className="text-[10px] font-medium tracking-wide text-white/70">
              {tooltip.name}
            </span>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
