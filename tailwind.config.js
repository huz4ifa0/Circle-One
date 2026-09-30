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
        // Official Circle One Logo Palette
        royal: {
          DEFAULT: "#004AAD", // Primary brand shade: Headings, trust elements, borders
          light: "#1A67D2",
          dark: "#003680",
          deep: "#002766",
          subtle: "rgba(0, 74, 173, 0.08)",
          border: "rgba(0, 74, 173, 0.16)",
          glow: "rgba(0, 74, 173, 0.32)",
        },
        orange: {
          DEFAULT: "#FF6B00", // Vibrant Orange: Action CTAs, badges, warm accents
          light: "#FF8533",
          dark: "#E05E00",
          warm: "#FFA34D",
          subtle: "rgba(255, 107, 0, 0.10)",
          border: "rgba(255, 107, 0, 0.28)",
          glow: "rgba(255, 107, 0, 0.40)",
        },
        luxury: {
          bg: "#FAFAFA",
          "bg-alt": "#F8F9FA",
          surface: "#FFFFFF",
          frosted: "rgba(255, 255, 255, 0.94)",
          glass: "rgba(255, 255, 255, 0.86)",
        },
        corporate: {
          navy: "#0A1128",
          dark: "#0F172A",
          body: "#334155",
          muted: "#64748B",
          subtle: "#94A3B8",
        },
      },
      fontFamily: {
        sans: ["Plus Jakarta Sans", "Outfit", "Inter", "sans-serif"],
        serif: ["Playfair Display", "Cinzel", "Georgia", "serif"],
        heading: ["Outfit", "Plus Jakarta Sans", "sans-serif"],
        display: ["Cinzel", "Outfit", "serif"],
        mono: ["JetBrains Mono", "monospace"],
      },
      boxShadow: {
        "luxury-sm": "0 4px 16px rgba(0, 74, 173, 0.04), 0 1px 2px rgba(0, 0, 0, 0.02)",
        "luxury-card": "0 16px 40px -10px rgba(0, 74, 173, 0.06), 0 2px 6px rgba(0, 0, 0, 0.02), inset 0 1px 0 rgba(255, 255, 255, 0.95)",
        "luxury-hover": "0 24px 50px -12px rgba(0, 74, 173, 0.16), 0 10px 25px -6px rgba(255, 107, 0, 0.12), inset 0 1px 0 #ffffff",
        "orange-glow": "0 10px 28px rgba(255, 107, 0, 0.40)",
        "royal-glow": "0 10px 28px rgba(0, 74, 173, 0.32)",
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
          "0%": { boxShadow: "0 0 0 0 rgba(255, 107, 0, 0.7)" },
          "70%": { boxShadow: "0 0 0 10px rgba(255, 107, 0, 0)" },
          "100%": { boxShadow: "0 0 0 0 rgba(255, 107, 0, 0)" },
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
