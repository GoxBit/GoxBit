import type { Config } from "tailwindcss";

export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        bg: {
          DEFAULT: "#0B0F14",
          soft: "#0F151C",
          raised: "#141C26",
        },
        primary: "#00D4FF",
        accent: "#6E56CF",
        success: "#00FFA3",
        text: {
          DEFAULT: "#F5F7FA",
          dim: "#9BA7B4",
        },
      },
      fontFamily: {
        sans: ["Inter", "system-ui", "sans-serif"],
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
      },
      boxShadow: {
        glow: "0 0 24px rgba(0, 212, 255, 0.35)",
        "glow-accent": "0 0 24px rgba(110, 86, 207, 0.4)",
      },
      keyframes: {
        "pulse-ring": {
          "0%, 100%": { opacity: "0.35" },
          "50%": { opacity: "0.9" },
        },
      },
      animation: {
        "pulse-ring": "pulse-ring 3s ease-in-out infinite",
      },
    },
  },
  plugins: [],
} satisfies Config;
