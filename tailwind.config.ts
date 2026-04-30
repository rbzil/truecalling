import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: "#0A1628",
        surface: "#1B3A5C",
        accent: "#E91E8C",
        ink: {
          DEFAULT: "#FFFFFF",
          muted: "#94A3B8",
        },
        deep: "#050B14",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
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
  plugins: [],
};

export default config;
