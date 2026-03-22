"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { TiltCard } from "@/components/ui/TiltCard";
import { BorderBeam } from "@/components/ui/BorderBeam";
import { useWorld } from "@/components/world/WorldProvider";
import { servicesInfluencer, servicesProduction } from "@/content/site";
import type { ServiceCard } from "@/content/site";

function ServiceCardComponent({
  card,
  index,
}: {
  card: ServiceCard;
  index: number;
}) {
  return (
    <BlurFade delay={index * 0.1} inView>
      <Link href={card.href} className="block h-full" data-cursor="View">
        <TiltCard
          className="relative h-full min-h-[320px] overflow-hidden rounded-2xl md:min-h-[360px]"
        >
          {/* Background image */}
          <img
            src={card.image}
            alt={card.title}
            className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
          />

          {/* Dark overlay for readability */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(to top, rgba(0,0,0,0.85) 0%, rgba(0,0,0,0.4) 50%, rgba(0,0,0,0.2) 100%)",
            }}
          />

          {/* Content */}
          <div className="relative z-10 flex h-full flex-col justify-end p-8 md:p-10">
            <span
              className="mb-4 text-5xl font-bold md:text-6xl"
              style={{ color: "rgba(255,255,255,0.1)" }}
            >
              {String(index + 1).padStart(2, "0")}
            </span>

            <span
              className="mb-3 inline-block w-fit rounded-full border px-3 py-1 text-[10px] font-semibold uppercase tracking-wider"
              style={{
                borderColor: "rgba(255,255,255,0.15)",
                color: "rgba(255,255,255,0.6)",
              }}
            >
              {card.tag}
            </span>

            <h3 className="text-xl font-semibold text-white md:text-2xl">
              {card.title}
            </h3>

            <p className="mt-2 text-sm leading-relaxed text-white/50">
              {card.description}
            </p>
          </div>

          {/* Hover arrow */}
          <div className="absolute top-6 right-6 z-10 -translate-x-2 opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none">
              <path
                d="M7 17L17 7M17 7H7M17 7V17"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </TiltCard>
      </Link>
    </BlurFade>
  );
}

export function ServicesGrid() {
  const { world } = useWorld();
  const services =
    world === "influencer" ? servicesInfluencer : servicesProduction;

  return (
    <section id="services" className="py-section-mobile md:py-section">
      <Container>
        <BlurFade inView>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 md:items-end">
            <div>
              <p className="kicker mb-4">OUR SERVICES</p>
              <h2 className="headline-2">
                Four services.
                <br />
                Each one end-to-end.
              </h2>
            </div>
            <p className="body-large md:text-right">
              Use one or all four. Each runs independently with its own team,
              timeline, and reporting.
            </p>
          </div>
        </BlurFade>

        {/* 2×2 Tilt Card Grid */}
        <div className="mt-12 grid grid-cols-1 gap-4 md:mt-20 md:grid-cols-2">
          {services.map((card, i) => (
            <ServiceCardComponent
              key={`${world}-${card.title}`}
              card={card}
              index={i}
            />
          ))}
        </div>
      </Container>
    </section>
  );
}
