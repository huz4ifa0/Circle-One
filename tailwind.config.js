/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
    "./index.html",
  ],
  theme: {
    extend: {
      colors: {
        luxury: {
          bg: "#FAFAFA",
          "bg-alt": "#F8F9FA",
          surface: "#FFFFFF",
          frosted: "rgba(255, 255, 255, 0.92)",
          glass: "rgba(255, 255, 255, 0.84)",
        },
        gold: {
          DEFAULT: "#C5A059",
          light: "#D8B878",
          warm: "#E6CB90",
          dark: "#A37F35",
          subtle: "rgba(197, 160, 89, 0.12)",
          glow: "rgba(197, 160, 89, 0.35)",
          border: "rgba(197, 160, 89, 0.24)",
        },
        corporate: {
          navy: "#0A1128",
          slate: "#1C2541",
          charcoal: "#1E293B",
          body: "#334155",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Outfit", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Cinzel", "Georgia", "serif"],
        display: ["Cinzel", "Outfit", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "luxury-sm": "0 4px 16px rgba(11, 19, 43, 0.03), 0 1px 2px rgba(197, 160, 89, 0.04)",
        "luxury-card": "0 16px 40px -10px rgba(11, 19, 43, 0.05), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.95)",
        "luxury-hover": "0 24px 50px -12px rgba(197, 160, 89, 0.22), 0 12px 30px -8px rgba(11, 19, 43, 0.06), inset 0 1px 0 #ffffff",
        "luxury-gold": "0 8px 24px rgba(197, 160, 89, 0.32)",
      },
      keyframes: {
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
        marqueeReverse: {
          "0%": { transform: "translateX(-50%)" },
          "100%": { transform: "translateX(0%)" },
        },
        floatCard: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
        pulseBeacon: {
          "0%": { boxShadow: "0 0 0 0 rgba(197, 160, 89, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(197, 160, 89, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(197, 160, 89, 0)" },
        },
        shimmer: {
          "100%": { transform: "translateX(100%)" },
        },
      },
      animation: {
        marquee: "marquee 34s linear infinite",
        "marquee-reverse": "marqueeReverse 36s linear infinite",
        "float-card": "floatCard 6s ease-in-out infinite",
        "pulse-beacon": "pulseBeacon 2.2s infinite",
      },
    },
  },
  plugins: [],
};
