"use client";

import { BlurFade } from "@/components/ui/BlurFade";
import { Container } from "@/components/ui/Container";

interface ExpertCardProps {
  name: string;
  role: string;
  topic: string;
  whatsappNumber?: string;
  email?: string;
}

export function ExpertCard({
  name,
  role,
  topic,
  whatsappNumber,
  email,
}: ExpertCardProps) {
  const whatsappUrl = whatsappNumber
    ? `https://wa.me/${whatsappNumber}?text=Hey%20Following%2C%20I'd%20like%20to%20discuss%20${encodeURIComponent(topic)}`
    : undefined;

  return (
    <section
      className="py-16 md:py-24"
      style={{
        background: "linear-gradient(160deg, #0b0b0d 0%, #111128 40%, #0b0b0d 100%)",
      }}
    >
      <Container>
        <BlurFade inView>
          <div
            className="rounded-xl p-8 md:p-12"
            style={{
              backgroundColor: "rgba(255,255,255,0.03)",
              border: "1px solid rgba(255,255,255,0.06)",
            }}
          >
            <div className="grid grid-cols-1 gap-8 md:grid-cols-[auto_1fr] md:items-center md:gap-12">
              {/* Avatar placeholder */}
              <div
                className="flex h-20 w-20 shrink-0 items-center justify-center rounded-full text-2xl font-bold"
                style={{
                  background:
                    "linear-gradient(135deg, var(--accent) 0%, rgba(var(--accent-rgb, 99,102,241), 0.5) 100%)",
                  color: "var(--accent-text)",
                }}
              >
                {name.charAt(0)}
              </div>

              <div>
                <p className="text-sm font-medium text-white/40">
                  Talk to {name} about {topic}
                </p>
                <h3 className="mt-1 text-xl font-semibold text-white md:text-2xl">
                  {name}
                </h3>
                <p className="text-sm text-white/40">{role}</p>

                <div className="mt-5 flex flex-wrap gap-3">
                  {whatsappUrl && (
                    <a
                      href={whatsappUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-80"
                      style={{ backgroundColor: "#25D366" }}
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="currentColor"
                      >
                        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z" />
                        <path d="M12 0C5.373 0 0 5.373 0 12c0 2.625.846 5.059 2.284 7.034L.789 23.492a.5.5 0 00.611.611l4.458-1.495A11.952 11.952 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 22c-2.387 0-4.594-.838-6.326-2.234l-.142-.113-3.332 1.118 1.118-3.332-.113-.142A9.935 9.935 0 012 12C2 6.477 6.477 2 12 2s10 4.477 10 10-4.477 10-10 10z" />
                      </svg>
                      WhatsApp
                    </a>
                  )}
                  {email && (
                    <a
                      href={`mailto:${email}`}
                      className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold text-white transition-all duration-200 hover:opacity-80"
                      style={{
                        border: "1px solid rgba(255,255,255,0.12)",
                        backgroundColor: "rgba(255,255,255,0.05)",
                      }}
                    >
                      Email
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        </BlurFade>
      </Container>
    </section>
  );
}
