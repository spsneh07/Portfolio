import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        base: "#080A12",
        surface: "#0F1424",
        "surface-2": "#151B32",
        border: "#232B47",
        indigo: {
          DEFAULT: "#6366F1",
          bright: "#818CF8",
        },
        violet: {
          DEFAULT: "#8B5CF6",
        },
        signal: "#38BDF8",
        ink: "#E7E9F3",
        muted: "#8B93AC",
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      backgroundImage: {
        "grad-hero":
          "radial-gradient(60% 50% at 50% 0%, rgba(99,102,241,0.18) 0%, rgba(8,10,18,0) 60%)",
        "grad-card":
          "linear-gradient(180deg, rgba(255,255,255,0.04) 0%, rgba(255,255,255,0.01) 100%)",
      },
      boxShadow: {
        glow: "0 0 40px -10px rgba(99,102,241,0.45)",
      },
    },
  },
  plugins: [],
};
export default config;
