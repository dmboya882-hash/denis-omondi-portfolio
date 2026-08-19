import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        bg: "#0F1115",
        surface: "#171B22",
        "surface-2": "#1E232C",
        text: "#E7E5E0",
        "text-dim": "#9AA0AC",
        amber: "#E8A33D",
        teal: "#4FD1C5",
        border: "#262B35",
      },
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      backgroundImage: {
        blueprint:
          "linear-gradient(rgba(232,163,61,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(232,163,61,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
    },
  },
  plugins: [],
};
export default config;
