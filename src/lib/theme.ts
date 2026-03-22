export type World = "influencer" | "production";
export type Theme = "light" | "dark";

export interface ThemeTokens {
  bg: string;
  surface: string;
  text: string;
  muted: string;
  border: string;
  accent: string;
  accentSecondary: string;
  accentText: string;
}

export const lightTokens: ThemeTokens = {
  bg: "#F6F3EF",
  surface: "#FFFFFF",
  text: "#0B0B0D",
  muted: "#5B5B63",
  border: "rgba(10,10,12,.12)",
  accent: "#d3ff02",
  accentSecondary: "#111111",
  accentText: "#0B0B0D",
};

export const darkTokens: ThemeTokens = {
  bg: "#0B0B0D",
  surface: "#161618",
  text: "#F6F3EF",
  muted: "#9C9CA4",
  border: "rgba(246,243,239,.12)",
  accent: "#d3ff02",
  accentSecondary: "#111111",
  accentText: "#0B0B0D",
};

export const worldAccents: Record<
  World,
  { accent: string; accentSecondary: string; accentText: string }
> = {
  influencer: {
    accent: "#d3ff02",
    accentSecondary: "#111111",
    accentText: "#0B0B0D",
  },
  production: {
    accent: "#d3ff02",
    accentSecondary: "#111111",
    accentText: "#0B0B0D",
  },
};
