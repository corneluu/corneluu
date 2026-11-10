import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0c",
        foreground: "#ededee",
        card: "#121214",
        "card-foreground": "#ededee",
        popover: "#121214",
        "popover-foreground": "#ededee",
        primary: "#f0b35a",
        "primary-foreground": "#0b0b0c",
        secondary: "#1b1b1e",
        "secondary-foreground": "#ededee",
        muted: "#1b1b1e",
        "muted-foreground": "#a3a3ab",
        faint: "#7d7d86",
        accent: "#1b1b1e",
        "accent-foreground": "#ededee",
        destructive: "#f87171",
        "destructive-foreground": "#0b0b0c",
        border: "#232326",
        input: "#232326",
        ring: "#f0b35a",
      },
      borderRadius: {
        DEFAULT: "0.5rem",
      },
      fontFamily: {
        sans: ["var(--font-geist-sans)"],
        mono: ["var(--font-geist-mono)"],
      },
      transitionTimingFunction: {
        out: "cubic-bezier(0.16, 1, 0.3, 1)",
      },
    },
  },
  plugins: [],
};

export default config;
