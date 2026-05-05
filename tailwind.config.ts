import type { Config } from "tailwindcss";
import typography from "@tailwindcss/typography";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Channel-based RGB tokens so `bg-ink/40`, `text-bg/60` etc. work in both themes.
        // The variables hold "R G B" triplets (no commas, no rgb() wrapper) — see globals.css.
        bg: "rgb(var(--bg) / <alpha-value>)",
        surface: "rgb(var(--surface) / <alpha-value>)",
        deep: "rgb(var(--deep) / <alpha-value>)",
        accent: "rgb(var(--accent) / <alpha-value>)",
        ink: {
          DEFAULT: "rgb(var(--ink) / <alpha-value>)",
          muted: "rgb(var(--ink-muted) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        serif: ["var(--font-serif)", "Georgia", "serif"],
        "serif-he": ["var(--font-serif-he)", "Georgia", "serif"],
      },
      letterSpacing: {
        tighter2: "-0.02em",
      },
      boxShadow: {
        glow: "0 0 0 1px rgba(233,30,140,0.45), 0 8px 30px rgba(233,30,140,0.18)",
        soft: "0 12px 40px rgba(0,0,0,0.45)",
      },
      animation: {
        "blob-1": "blob1 22s ease-in-out infinite",
        "blob-2": "blob2 26s ease-in-out infinite",
        "pulse-soft": "pulseSoft 1.6s ease-in-out infinite",
      },
      keyframes: {
        blob1: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "33%": { transform: "translate(40px,-30px) scale(1.1)" },
          "66%": { transform: "translate(-30px,20px) scale(0.95)" },
        },
        blob2: {
          "0%,100%": { transform: "translate(0,0) scale(1)" },
          "50%": { transform: "translate(-50px,40px) scale(1.15)" },
        },
        pulseSoft: {
          "0%,100%": { opacity: "0.4" },
          "50%": { opacity: "1" },
        },
      },
    },
  },
  plugins: [typography],
};

export default config;
