"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { Marquee } from "@/components/ui/Marquee";
import { clientLogos } from "@/content/site";

export function ClientLogoBar() {
  return (
    <section className="border-b py-10 md:py-14" style={{ borderColor: "var(--border)" }}>
      <BlurFade inView>
        <Marquee pauseOnHover speed={25}>
          {clientLogos.map((name) => (
            <div
              key={name}
              className="mx-10 flex h-12 items-center"
            >
              {/* Logo placeholder — replace with actual SVG/images */}
              <div
                className="flex h-8 items-center justify-center rounded-md px-6 py-1.5"
                style={{ backgroundColor: "var(--bg-alt)" }}
              >
                <span
                  className="whitespace-nowrap text-[13px] font-semibold uppercase tracking-[0.12em]"
                  style={{ color: "var(--muted)", opacity: 0.5 }}
                >
                  {name}
                </span>
              </div>
            </div>
          ))}
        </Marquee>
      </BlurFade>
    </section>
  );
}
