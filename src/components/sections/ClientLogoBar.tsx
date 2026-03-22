"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { Marquee } from "@/components/ui/Marquee";
import { clientLogos } from "@/content/site";

export function ClientLogoBar() {
  return (
    <section className="border-b py-10 md:py-14" style={{ borderColor: "var(--border)" }}>
      <BlurFade inView>
        <div
          className="relative mx-auto max-w-3xl overflow-hidden"
          style={{
            maskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
            WebkitMaskImage: "linear-gradient(to right, transparent, black 15%, black 85%, transparent)",
          }}
        >
          <Marquee pauseOnHover speed={12}>
            {clientLogos.map((brand) => (
              <div key={brand.name} className="mx-8 flex h-10 items-center">
                <img
                  src={brand.logo}
                  alt={brand.name}
                  style={{ height: brand.height }}
                  className="w-auto object-contain opacity-30 grayscale transition-all duration-500 hover:opacity-100 hover:grayscale-0"
                />
              </div>
            ))}
          </Marquee>
        </div>
      </BlurFade>
    </section>
  );
}
