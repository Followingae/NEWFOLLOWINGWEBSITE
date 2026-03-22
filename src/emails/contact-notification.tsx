import {
  Html,
  Head,
  Body,
  Container,
  Section,
  Text,
  Heading,
  Hr,
  Row,
  Column,
} from "@react-email/components";

interface ContactEmailProps {
  services: string[];
  budget: string;
  stage: string;
  name: string;
  email: string;
  phone: string;
  brand: string;
  website: string;
}

export default function ContactNotification({
  services = [],
  budget = "",
  stage = "",
  name = "",
  email = "",
  phone = "",
  brand = "",
  website = "",
}: ContactEmailProps) {
  return (
    <Html>
      <Head />
      <Body style={body}>
        <Container style={container}>
          <Heading style={logo}>following</Heading>
          <Hr style={hr} />

          <Heading as="h2" style={heading}>
            New Campaign Brief
          </Heading>

          <Section style={card}>
            <Text style={label}>Services</Text>
            <Text style={value}>{services.join(", ") || "—"}</Text>
          </Section>

          <Section style={card}>
            <Text style={label}>Budget</Text>
            <Text style={value}>{budget || "—"}</Text>
          </Section>

          <Section style={card}>
            <Text style={label}>Stage</Text>
            <Text style={value}>{stage || "—"}</Text>
          </Section>

          <Hr style={hr} />

          <Row>
            <Column>
              <Text style={label}>Name</Text>
              <Text style={value}>{name}</Text>
            </Column>
            <Column>
              <Text style={label}>Email</Text>
              <Text style={value}>{email}</Text>
            </Column>
          </Row>

          {phone && (
            <Section>
              <Text style={label}>Phone</Text>
              <Text style={value}>+971 {phone}</Text>
            </Section>
          )}

          <Row>
            <Column>
              <Text style={label}>Brand</Text>
              <Text style={value}>{brand || "—"}</Text>
            </Column>
            <Column>
              <Text style={label}>Website</Text>
              <Text style={value}>{website || "—"}</Text>
            </Column>
          </Row>

          <Hr style={hr} />
          <Text style={footer}>
            Sent from following.ae contact form
          </Text>
        </Container>
      </Body>
    </Html>
  );
}

const body = {
  backgroundColor: "#f5f5f5",
  fontFamily: "'Manrope', -apple-system, sans-serif",
};

const container = {
  backgroundColor: "#ffffff",
  margin: "40px auto",
  padding: "40px",
  borderRadius: "12px",
  maxWidth: "560px",
};

const logo = {
  fontSize: "14px",
  fontWeight: 700 as const,
  letterSpacing: "0.15em",
  textTransform: "uppercase" as const,
  color: "#111",
  margin: "0 0 20px",
};

const heading = {
  fontSize: "20px",
  fontWeight: 700 as const,
  color: "#111",
  margin: "20px 0",
};

const card = {
  marginBottom: "8px",
};

const label = {
  fontSize: "10px",
  fontWeight: 600 as const,
  textTransform: "uppercase" as const,
  letterSpacing: "0.1em",
  color: "#888",
  margin: "12px 0 2px",
};

const value = {
  fontSize: "15px",
  fontWeight: 500 as const,
  color: "#111",
  margin: "0 0 8px",
};

const hr = {
  borderColor: "#eee",
  margin: "24px 0",
};

const footer = {
  fontSize: "11px",
  color: "#aaa",
  textAlign: "center" as const,
  margin: "24px 0 0",
};
