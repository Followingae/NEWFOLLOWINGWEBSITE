import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Link,
  Img,
  Row,
  Column,
  Preview,
} from "@react-email/components";

interface ConfirmationEmailProps {
  name: string;
  services: string[];
  budget: string;
  brand: string;
}

export default function ContactConfirmation({
  name = "there",
  services = [],
  budget = "",
  brand = "",
}: ConfirmationEmailProps) {
  const firstName = name.split(" ")[0];

  return (
    <Html>
      <Head>
        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=Manrope:wght@400;600;700;800&family=Playfair+Display:ital,wght@1,500&display=swap');
        `}</style>
      </Head>
      <Preview>We&apos;ve received your brief — expect to hear from us within 24 hours</Preview>
      <Body style={body}>
        {/* Dark hero section */}
        <Container style={heroContainer}>
          <Section style={heroInner}>
            {/* Logo */}
            <Text style={logoText}>following</Text>

            {/* Hero headline */}
            <Heading as="h1" style={heroHeadline}>
              We&apos;ve got your brief,
            </Heading>
            <Heading as="h1" style={heroHeadlineSerif}>
              {firstName}.
            </Heading>

            <Text style={heroSubline}>
              Our team is reviewing your submission and will get back to you within 24 hours with next steps.
            </Text>
          </Section>
        </Container>

        {/* Brief summary card */}
        <Container style={cardContainer}>
          <Section style={card}>
            <Text style={cardLabel}>YOUR BRIEF SUMMARY</Text>

            {services.length > 0 && (
              <Section style={fieldRow}>
                <Text style={fieldLabel}>Services</Text>
                <Text style={fieldValue}>{services.join(", ")}</Text>
              </Section>
            )}

            {budget && (
              <Section style={fieldRow}>
                <Text style={fieldLabel}>Budget</Text>
                <Text style={fieldValue}>{budget}</Text>
              </Section>
            )}

            {brand && (
              <Section style={fieldRow}>
                <Text style={fieldLabel}>Brand</Text>
                <Text style={fieldValue}>{brand}</Text>
              </Section>
            )}
          </Section>
        </Container>

        {/* Work showcase */}
        <Container style={workContainer}>
          <Text style={workHeading}>While you wait, see what we&apos;ve done</Text>

          <Section style={workGrid}>
            <Row>
              <Column style={workCard}>
                <Link href="https://following.ae/work/mocktail-launch" style={workLink}>
                  <Text style={workTitle}>Mocktail Cans Launch</Text>
                  <Text style={workStat}>859K reach · 4.1% ER</Text>
                </Link>
              </Column>
              <Column style={workCardSpacing} />
              <Column style={workCard}>
                <Link href="https://following.ae/work/gaming-collab-pr" style={workLink}>
                  <Text style={workTitle}>Gaming x F&B Collab</Text>
                  <Text style={workStat}>2M+ reach · 12 creators</Text>
                </Link>
              </Column>
            </Row>
          </Section>

          <Section style={{ textAlign: "center" as const, paddingTop: "16px" }}>
            <Link href="https://following.ae/work" style={viewAllLink}>
              View all work →
            </Link>
          </Section>
        </Container>

        {/* Footer */}
        <Container style={footerContainer}>
          <Hr style={footerHr} />

          <Text style={footerBrand}>following</Text>

          <Text style={footerText}>
            Influencer Marketing Agency · Dubai, UAE
          </Text>

          <Section style={socialRow}>
            <Link href="https://instagram.com/followingsocials" style={socialLink}>
              Instagram
            </Link>
            <Text style={socialDot}> · </Text>
            <Link href="https://www.linkedin.com/company/followingsocials/" style={socialLink}>
              LinkedIn
            </Link>
          </Section>

          <Text style={footerMuted}>
            hello@following.ae
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

/* ── Styles ── */

const body = {
  backgroundColor: "#f5f5f5",
  fontFamily: "'Manrope', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  margin: 0,
  padding: 0,
};

const heroContainer = {
  backgroundColor: "#0a0a0a",
  width: "100%",
  maxWidth: "100%",
  margin: 0,
  padding: 0,
};

const heroInner = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "60px 32px 50px",
  textAlign: "center" as const,
};

const logoText = {
  fontSize: "13px",
  fontWeight: 800 as const,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "rgba(255,255,255,0.3)",
  margin: "0 0 40px",
};

const heroHeadline = {
  fontSize: "32px",
  fontWeight: 800 as const,
  lineHeight: "1.1",
  letterSpacing: "-0.03em",
  color: "#ffffff",
  margin: "0",
  fontFamily: "'Manrope', sans-serif",
};

const heroHeadlineSerif = {
  fontSize: "36px",
  fontWeight: 500 as const,
  lineHeight: "1.1",
  letterSpacing: "-0.02em",
  color: "#ffffff",
  margin: "4px 0 0",
  fontFamily: "'Playfair Display', Georgia, serif",
  fontStyle: "italic" as const,
};

const heroSubline = {
  fontSize: "14px",
  lineHeight: "1.6",
  color: "rgba(255,255,255,0.45)",
  margin: "24px 0 0",
  maxWidth: "380px",
  marginLeft: "auto",
  marginRight: "auto",
};

const cardContainer = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "0 16px",
};

const card = {
  backgroundColor: "#ffffff",
  borderRadius: "16px",
  padding: "32px",
  marginTop: "-24px",
  boxShadow: "0 8px 30px rgba(0,0,0,0.08), 0 1px 3px rgba(0,0,0,0.04)",
};

const cardLabel = {
  fontSize: "10px",
  fontWeight: 700 as const,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#999999",
  margin: "0 0 20px",
};

const fieldRow = {
  marginBottom: "12px",
};

const fieldLabel = {
  fontSize: "11px",
  fontWeight: 600 as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "#999999",
  margin: "0 0 2px",
};

const fieldValue = {
  fontSize: "15px",
  fontWeight: 600 as const,
  color: "#111111",
  margin: "0",
};

const workContainer = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 16px 0",
};

const workHeading = {
  fontSize: "13px",
  fontWeight: 700 as const,
  color: "#111111",
  textAlign: "center" as const,
  margin: "0 0 20px",
};

const workGrid = {
  width: "100%",
};

const workCard = {
  backgroundColor: "#0a0a0a",
  borderRadius: "12px",
  padding: "24px",
  width: "48%",
  verticalAlign: "top" as const,
};

const workCardSpacing = {
  width: "4%",
};

const workLink = {
  textDecoration: "none",
};

const workTitle = {
  fontSize: "14px",
  fontWeight: 700 as const,
  color: "#ffffff",
  margin: "0 0 6px",
};

const workStat = {
  fontSize: "12px",
  color: "rgba(255,255,255,0.4)",
  margin: "0",
};

const viewAllLink = {
  fontSize: "13px",
  fontWeight: 600 as const,
  color: "#111111",
  textDecoration: "none",
};

const footerContainer = {
  maxWidth: "560px",
  margin: "0 auto",
  padding: "40px 32px 48px",
  textAlign: "center" as const,
};

const footerHr = {
  borderColor: "#e5e5e5",
  margin: "0 0 32px",
};

const footerBrand = {
  fontSize: "12px",
  fontWeight: 800 as const,
  letterSpacing: "0.2em",
  textTransform: "uppercase" as const,
  color: "#111111",
  margin: "0 0 8px",
};

const footerText = {
  fontSize: "12px",
  color: "#999999",
  margin: "0 0 12px",
};

const socialRow = {
  textAlign: "center" as const,
  margin: "0 0 12px",
};

const socialLink = {
  fontSize: "12px",
  color: "#666666",
  textDecoration: "none",
};

const socialDot = {
  fontSize: "12px",
  color: "#cccccc",
  margin: "0",
  display: "inline" as const,
};

const footerMuted = {
  fontSize: "11px",
  color: "#cccccc",
  margin: "0",
};
