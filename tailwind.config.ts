import type { Config } from "tailwindcss";

export default {
  darkMode: "class",
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        canvas: { DEFAULT: "#0e1117", alt: "#121620" },
        card: { DEFAULT: "#181e2a", hover: "#202838", border: "#273144" },
        accent: {
          DEFAULT: "#ff8a3d",
          cyan: "#00d4ff",
          amber: "#ff8a3d",
          "amber-light": "#ffab66",
          teal: "#2dd4bf",
        },
        ink: { text: "#e6ebf5", muted: "#9ba6bc", subtle: "#626f86" },
        // Legacy aliases so canvas/detail components stay on the unified palette.
        bg: { DEFAULT: "#0e1117", soft: "#121620", raised: "#181e2a" },
        text: { DEFAULT: "#e6ebf5", dim: "#9ba6bc" },
        primary: "#00d4ff",
        success: "#2dd4bf",
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 212, 255, 0.35)",
        "glow-accent": "0 0 24px rgba(255, 138, 61, 0.4)",
      },
      fontFamily: {
        display: ["Space Grotesk", "sans-serif"],
        body: ["Plus Jakarta Sans", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      keyframes: {
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(16px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.6s cubic-bezier(0.22,1,0.36,1) both",
      },
    },
  },
  plugins: [],
} satisfies Config;
