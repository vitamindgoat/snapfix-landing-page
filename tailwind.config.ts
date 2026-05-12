import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFF8F0",
        surface: "#FFFFFF",
        foreground: "#1A1A1A",
        muted: "#6B6B6B",
        border: "#E0D5C7",
        primary: {
          DEFAULT: "#E85D04",
          fg: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#C2410C",
          fg: "#FFFFFF",
        },
        success: "#D97706",
        warning: "#E85D04",
        danger: "#D00000",
        card: "#FFFFFF",
        "card-foreground": "#1A1A1A",
      },
      fontFamily: {
        sans: ["var(--font-space-grotesk)", "system-ui", "sans-serif"],
      },
      fontSize: {
        "2xs": "12px",
        xs: "14px",
        base: "16px",
        lg: "20px",
        xl: "24px",
        "2xl": "32px",
        "3xl": "40px",
        "4xl": "48px",
        "5xl": "60px",
        "6xl": "72px",
      },
      spacing: {
        1: "4px",
        2: "8px",
        3: "12px",
        4: "16px",
        6: "24px",
        8: "32px",
        12: "48px",
        16: "64px",
      },
      borderRadius: {
        sm: "4px",
        md: "12px",
        lg: "24px",
        full: "9999px",
      },
      boxShadow: {
        subtle: "0 2px 4px rgba(232, 93, 4, 0.08)",
        medium: "0 4px 16px rgba(232, 93, 4, 0.12)",
        strong: "0 12px 40px rgba(232, 93, 4, 0.18)",
      },
      keyframes: {
        spotlight: {
          "0%": { opacity: "0", transform: "translate(-72%, -62%) scale(0.5)" },
          "100%": {
            opacity: "1",
            transform: "translate(-50%, -40%) scale(1)",
          },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(12px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        spotlight: "spotlight 2s ease 0.2s 1 forwards",
        "fade-up": "fade-up 0.6s ease forwards",
      },
    },
  },
  plugins: [],
};
export default config;
