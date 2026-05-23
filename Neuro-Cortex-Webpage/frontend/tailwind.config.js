/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "nc-base": "#0a0c0f",
        "nc-surface": "#0f1217",
        "nc-elevated": "#141920",
        "nc-border": "#1e2733",
        "nc-border-active": "#00d4aa",
        "nc-teal": "#00d4aa",
        "nc-purple": "#7c3aed",
        "nc-red": "#ef4444",
        "nc-amber": "#f59e0b",
        "nc-text-primary": "#e2e8f0",
        "nc-text-muted": "#64748b",
        "nc-text-code": "#00d4aa",
      },
      fontFamily: {
        mono: ['"JetBrains Mono"', '"Fira Code"', "monospace"],
        body: ['"IBM Plex Mono"', "monospace"],
      },
      animation: {
        blink: "blink 1s step-end infinite",
        "pulse-glow": "pulseGlow 2s ease-in-out infinite",
        glitch: "glitch 0.3s ease-in-out",
        scan: "scan 3s linear infinite",
        "count-up": "countUp 2s ease-out forwards",
        float: "float 3s ease-in-out infinite",
        typing: "typing 0.05s steps(1, end) forwards",
      },
      keyframes: {
        blink: { "0%,100%": { opacity: "1" }, "50%": { opacity: "0" } },
        pulseGlow: {
          "0%,100%": { boxShadow: "0 0 10px rgba(0,212,170,0.3)" },
          "50%": { boxShadow: "0 0 30px rgba(0,212,170,0.6)" },
        },
        glitch: {
          "0%": { transform: "translateX(0)", filter: "none" },
          "20%": {
            transform: "translateX(-3px)",
            filter: "drop-shadow(3px 0 #ef4444)",
          },
          "40%": {
            transform: "translateX(3px)",
            filter: "drop-shadow(-3px 0 #00d4aa)",
          },
          "60%": { transform: "translateX(-2px)" },
          "80%": { transform: "translateX(2px)", filter: "none" },
          "100%": { transform: "translateX(0)" },
        },
        scan: {
          "0%": { transform: "translateY(0)" },
          "100%": { transform: "translateY(100%)" },
        },
        countUp: {
          "0%": { counter: "num var(--num, 0)" },
          "100%": { counter: "num var(--num, 1)" },
        },
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        typing: {
          from: { width: "0" },
          to: { width: "100%" },
        },
      },
      backgroundImage: {
        "dot-grid": "radial-gradient(circle, #1e2733 1px, transparent 1px)",
        "nc-gradient": "linear-gradient(135deg, #0a0c0f 0%, #0f1217 100%)",
      },
      backgroundSize: {
        "dot-grid": "24px 24px",
      },
    },
  },
  plugins: [],
};
