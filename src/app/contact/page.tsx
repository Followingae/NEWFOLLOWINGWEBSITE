"use client";

import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import { ContactWizard } from "@/components/contact/ContactWizard";

export default function ContactPage() {
  return (
    <>
      {/* Dark hero strip */}
      <section
        data-nav-theme="dark"
        className="relative overflow-hidden pb-24 pt-36 md:pb-32 md:pt-44"
        style={{
          background:
            "linear-gradient(160deg, #0a0a0c 0%, #141418 50%, #0a0a0c 100%)",
        }}
      >
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "radial-gradient(circle at 1px 1px, rgba(255,255,255,0.5) 1px, transparent 0)",
            backgroundSize: "32px 32px",
          }}
        />
        <Container className="relative z-10">
          <BlurFade inView>
            <div className="mx-auto max-w-2xl text-center">
              <h1
                className="text-[clamp(32px,5vw,56px)] font-bold leading-tight tracking-tight"
                style={{ color: "#fff" }}
              >
                <span style={{ fontFamily: "var(--font-sans)" }}>
                  Launch a{" "}
                </span>
                <span
                  style={{
                    fontFamily: "var(--font-serif)",
                    fontStyle: "italic",
                  }}
                >
                  campaign
                </span>
              </h1>
              <p
                className="mx-auto mt-4 max-w-sm text-sm leading-relaxed"
                style={{ color: "rgba(255,255,255,0.4)" }}
              >
                Fill in the details and we&apos;ll get back within 24 hours
              </p>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* Form — pulled up into the hero */}
      <section className="relative -mt-8 pb-20 md:-mt-12 md:pb-28">
        <Container>
          <BlurFade delay={0.15} inView>
            <div
              className="mx-auto max-w-2xl rounded-3xl border p-8 shadow-xl md:p-12"
              style={{
                borderColor: "var(--border)",
                backgroundColor: "var(--surface)",
              }}
            >
              <ContactWizard />
            </div>
          </BlurFade>
        </Container>
      </section>
    </>
  );
}
