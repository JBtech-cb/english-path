import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#ECEDE7",
        surface: "#F8F9F4",
        ink: "#15170F",
        muted: "#6B6D62",
        line: "#D3D5C8",
        marker: {
          DEFAULT: "#E7DE6B",
          soft: "#F1ECBE",
        },
        pen: "#B23E27",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "system-ui", "sans-serif"],
        mono: ["var(--font-mono)", "ui-monospace", "monospace"],
      },
      maxWidth: {
        page: "74rem",
      },
      letterSpacing: {
        tighter: "-0.035em",
      },
      borderRadius: {
        sheet: "5px",
      },
    },
  },
  plugins: [],
};

export default config;
