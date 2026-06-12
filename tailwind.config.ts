import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        espresso: {
          DEFAULT: "#2A1710",
          light: "#3D2418",
          dark: "#1A0E09",
        },
        cream: {
          DEFAULT: "#F8F4EE",
          dark: "#EDE8DF",
        },
        gold: {
          DEFAULT: "#D4A017",
          light: "#E8B832",
          dark: "#B8890F",
        },
        kenya: {
          red: "#C41E3A",
          "red-light": "#E63946",
          green: "#1B7A4E",
          "green-light": "#2D9B6A",
        },
      },
      fontFamily: {
        display: ["var(--font-oswald)", "sans-serif"],
        body: ["var(--font-barlow)", "sans-serif"],
      },
      letterSpacing: {
        badge: "0.18em",
        perk: "0.14em",
        title: "0.1em",
        display: "0.06em",
      },
      backgroundImage: {
        "hero-gradient":
          "radial-gradient(ellipse at 30% 50%, rgba(212, 160, 23, 0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 80%, rgba(42, 23, 16, 0.8) 0%, transparent 60%)",
        "gold-gradient": "linear-gradient(135deg, #D4A017 0%, #E8B832 50%, #B8890F 100%)",
        "kenya-gradient": "linear-gradient(135deg, #1B7A4E 0%, #2D9B6A 50%, #1B7A4E 100%)",
        "hero-kenya":
          "radial-gradient(ellipse at 20% 50%, rgba(27, 122, 78, 0.12) 0%, transparent 50%), radial-gradient(ellipse at 80% 30%, rgba(196, 30, 58, 0.08) 0%, transparent 45%)",
        "glass-gradient":
          "linear-gradient(135deg, rgba(248, 244, 238, 0.1) 0%, rgba(248, 244, 238, 0.05) 100%)",
      },
      boxShadow: {
        premium: "0 25px 50px -12px rgba(42, 23, 16, 0.25)",
        "premium-lg": "0 35px 60px -15px rgba(42, 23, 16, 0.35)",
        gold: "0 10px 40px -10px rgba(212, 160, 23, 0.4)",
        glass: "0 8px 32px rgba(42, 23, 16, 0.12)",
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        "float-delayed": "float 6s ease-in-out 2s infinite",
        steam: "steam 4s ease-out infinite",
        "steam-delayed": "steam 4s ease-out 1.5s infinite",
        "pulse-gold": "pulseGold 3s ease-in-out infinite",
        shimmer: "shimmer 2.5s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(0deg)" },
          "50%": { transform: "translateY(-20px) rotate(5deg)" },
        },
        steam: {
          "0%": { opacity: "0", transform: "translateY(0) scale(1)" },
          "15%": { opacity: "0.6" },
          "100%": { opacity: "0", transform: "translateY(-80px) scale(1.5)" },
        },
        pulseGold: {
          "0%, 100%": { boxShadow: "0 0 0 0 rgba(212, 160, 23, 0.4)" },
          "50%": { boxShadow: "0 0 0 15px rgba(212, 160, 23, 0)" },
        },
        shimmer: {
          "0%": { backgroundPosition: "-200% 0" },
          "100%": { backgroundPosition: "200% 0" },
        },
      },
    },
  },
  plugins: [],
};

export default config;
