import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./lib/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#FAF6EF",
        surface: "#FFFDF8",
        ink: "#17150F",
        muted: "#6F6757",
        line: "#E4DCCD",
        accent: {
          DEFAULT: "#11584A",
          soft: "#DCEBE5",
          dark: "#0B3F35",
        },
        sun: "#E9A93C",
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
        display: ["var(--font-display)", "Georgia", "serif"],
      },
      maxWidth: {
        page: "72rem",
      },
      boxShadow: {
        card: "0 1px 2px rgba(23, 21, 15, 0.04), 0 12px 32px -16px rgba(23, 21, 15, 0.18)",
      },
      borderRadius: {
        xl2: "1.25rem",
      },
    },
  },
  plugins: [],
};

export default config;
