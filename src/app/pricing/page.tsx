"use client";

import Link from "next/link";
import { Container } from "@/components/ui/Container";
import { BlurFade } from "@/components/ui/BlurFade";
import {
  Search,
  ShieldCheck,
  StatsReport,
  Group,
  MediaVideoList,
  GraphUp,
} from "iconoir-react";

const plans = [
  {
    name: "Free",
    price: "$0",
    sub: "Get started",
    features: [
      "5 profile unlocks",
      "100 credits",
      "1 team member",
      "Basic analytics",
    ],
    cta: "Start Free",
    href: "https://app.following.ae/signup",
    featured: false,
  },
  {
    name: "Standard",
    price: "$199",
    sub: "For growing brands",
    features: [
      "500 profile unlocks",
      "2,000 credits",
      "2 team members",
      "Full analytics + AI",
      "Campaign management",
      "Data export",
    ],
    cta: "Start Trial",
    href: "https://app.following.ae/signup?plan=standard",
    featured: true,
  },
  {
    name: "Premium",
    price: "$499",
    sub: "For teams at scale",
    features: [
      "2,000 profile unlocks",
      "5,000 credits",
      "5 team members",
      "Everything in Standard",
      "20% credit discount",
      "Priority support",
    ],
    cta: "Talk to Sales",
    href: "/contact",
    featured: false,
  },
];

const capabilities = [
  { icon: Search, label: "Creator Discovery" },
  { icon: ShieldCheck, label: "Fraud Detection" },
  { icon: StatsReport, label: "Campaign Analytics" },
  { icon: Group, label: "Audience Intelligence" },
  { icon: MediaVideoList, label: "UGC Pipeline" },
  { icon: GraphUp, label: "Performance AI" },
];

export default function PricingPage() {
  return (
    <>
      {/* Hero — compact, no ServicePageHero (lighter) */}
      <section data-nav-theme="dark" className="relative overflow-hidden pb-16 pt-32 md:pb-24 md:pt-40"
        style={{ background: "linear-gradient(160deg, #0a0a0c 0%, #141418 50%, #0a0a0c 100%)" }}
      >
        <Container>
          <div className="mx-auto max-w-2xl text-center">
            <BlurFade inView>
              <p className="kicker mb-4" style={{ color: "rgba(255,255,255,0.3)" }}>PLATFORM PRICING</p>
              <h1 className="headline-2" style={{ color: "#fff" }}>
                <span style={{ fontFamily: "var(--font-sans)" }}>Start free. </span>
                <span style={{ fontFamily: "var(--font-serif)", fontStyle: "italic" }}>Scale when ready.</span>
              </h1>
              <p className="mx-auto mt-4 max-w-md text-sm leading-relaxed" style={{ color: "rgba(255,255,255,0.4)" }}>
                AI-powered creator analytics, campaign management, and reporting
              </p>
              <p className="mt-6 text-[13px]" style={{ color: "rgba(255,255,255,0.3)" }}>
                Already a member?{" "}
                <a href="https://app.following.ae" className="font-semibold text-white/60 transition-colors hover:text-white">
                  Log in →
                </a>
              </p>
            </BlurFade>
          </div>
        </Container>
      </section>

      {/* Pricing cards — tight, above the fold */}
      <section className="py-14 md:py-20">
        <Container>
          <div className="mx-auto grid max-w-4xl grid-cols-1 gap-5 md:grid-cols-3">
            {plans.map((plan, i) => (
              <BlurFade key={plan.name} delay={i * 0.08} inView>
                <div
                  className={`relative flex flex-col rounded-2xl p-7 md:p-8 ${plan.featured ? "border-2" : "border"}`}
                  style={{
                    borderColor: plan.featured ? "var(--text)" : "var(--border)",
                    backgroundColor: "var(--surface)",
                  }}
                >
                  {plan.featured && (
                    <span
                      className="absolute -top-3 left-6 rounded-full px-3 py-1 text-[10px] font-bold uppercase tracking-wider"
                      style={{ backgroundColor: "var(--text)", color: "var(--bg)" }}
                    >
                      Popular
                    </span>
                  )}

                  <p className="text-sm font-semibold" style={{ color: "var(--muted)" }}>{plan.name}</p>
                  <p className="mt-1 text-4xl font-bold" style={{ color: "var(--text)" }}>
                    {plan.price}<span className="text-sm font-normal" style={{ color: "var(--muted)" }}>/mo</span>
                  </p>
                  <p className="mt-1 text-xs" style={{ color: "var(--muted)" }}>{plan.sub}</p>

                  <ul className="mt-6 flex flex-1 flex-col gap-2.5 text-[13px]" style={{ color: "var(--muted)" }}>
                    {plan.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round">
                          <path d="M20 6L9 17l-5-5" />
                        </svg>
                        {f}
                      </li>
                    ))}
                  </ul>

                  <a
                    href={plan.href}
                    className={`mt-6 inline-flex h-10 items-center justify-center rounded-full text-[13px] font-semibold transition-all duration-200 ${plan.featured ? "hover:opacity-90" : "hover:bg-[var(--text)] hover:text-[var(--bg)]"}`}
                    style={{
                      backgroundColor: plan.featured ? "var(--text)" : "transparent",
                      color: plan.featured ? "var(--bg)" : "var(--text)",
                      border: plan.featured ? "none" : "1px solid var(--border)",
                    }}
                  >
                    {plan.cta}
                  </a>
                </div>
              </BlurFade>
            ))}
          </div>

          {/* Agency cross-sell — prominent */}
          <BlurFade delay={0.25} inView>
            <div className="mx-auto mt-12 max-w-2xl rounded-2xl border p-6 md:flex md:items-center md:justify-between md:p-8"
              style={{ borderColor: "var(--border)", backgroundColor: "var(--bg-alt)" }}
            >
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>
                  Want us to run your campaigns?
                </p>
                <p className="mt-1 text-[13px]" style={{ color: "var(--muted)" }}>
                  End-to-end managed influencer marketing
                </p>
              </div>
              <Link
                href="/contact"
                className="mt-4 inline-flex h-10 items-center rounded-full border px-6 text-[13px] font-semibold transition-colors duration-200 hover:bg-[var(--text)] hover:text-[var(--bg)] md:mt-0"
                style={{ borderColor: "var(--border)", color: "var(--text)" }}
              >
                Talk to our team →
              </Link>
            </div>
          </BlurFade>
        </Container>
      </section>

      {/* What's included — compact strip */}
      <section className="border-t py-14 md:py-20" style={{ borderColor: "var(--border)" }}>
        <Container>
          <div className="mx-auto max-w-4xl">
            <div className="flex flex-col items-center justify-between gap-6 md:flex-row">
              <div>
                <p className="text-sm font-bold" style={{ color: "var(--text)" }}>All plans include</p>
                <p className="mt-1 text-[13px]" style={{ color: "var(--muted)" }}>12 AI models on every creator profile</p>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                {capabilities.map((c) => {
                  const Icon = c.icon;
                  return (
                    <div
                      key={c.label}
                      className="flex items-center gap-2 rounded-full border px-4 py-2"
                      style={{ borderColor: "var(--border)" }}
                    >
                      <Icon width={14} height={14} strokeWidth={1.5} color="var(--muted)" />
                      <span className="text-[12px] font-medium" style={{ color: "var(--muted)" }}>{c.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            <div className="mt-8 text-center">
              <Link
                href="/platform"
                className="text-[13px] font-semibold transition-opacity hover:opacity-70"
                style={{ color: "var(--text)" }}
              >
                See the full platform details →
              </Link>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
