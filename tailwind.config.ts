import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1440px",
      },
    },
    extend: {
      colors: {
        // Stratech brand colors from Figma
        stratech: {
          blue: "#3398DB",
          "text-blue": "#517193",
          "dark-text": "#151D26",
          background: "#FBFDFE",
          gray: "#C9C9C9",
          "dark-blue": "#2B3D4F",
        },
        // Keep existing shadcn colors for components
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        primary: {
          DEFAULT: "#3398DB",
          foreground: "#FFFFFF",
        },
        secondary: {
          DEFAULT: "#517193",
          foreground: "#FFFFFF",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        sidebar: {
          DEFAULT: "hsl(var(--sidebar-background))",
          foreground: "hsl(var(--sidebar-foreground))",
          primary: "hsl(var(--sidebar-primary))",
          "primary-foreground": "hsl(var(--sidebar-primary-foreground))",
          accent: "hsl(var(--sidebar-accent))",
          "accent-foreground": "hsl(var(--sidebar-accent-foreground))",
          border: "hsl(var(--sidebar-border))",
          ring: "hsl(var(--sidebar-ring))",
        },
      },
      fontFamily: {
        jaldi: ["Jaldi", "system-ui", "sans-serif"],
        geist: ["Geist", "system-ui", "sans-serif"],
        "geist-mono": ["Geist Mono", "monospace"],
      },
      fontSize: {
        // Custom sizes from Figma
        "90": ["90px", { lineHeight: "144px" }],
        "75": ["75px", { lineHeight: "89px" }],
        "74": ["74px", { lineHeight: "89px" }],
        "48": ["48px", { lineHeight: "30px" }],
        "28": ["28px", { lineHeight: "34px" }],
        "24": ["24px", { lineHeight: "33.6px" }],
        "22": ["22px", { lineHeight: "27px" }],
        "20": ["20px", { lineHeight: "27px" }],
        "18": ["18px", { lineHeight: "27px" }],
        "16": ["16px", { lineHeight: "16px" }],
      },
      spacing: {
        "90": "22.5rem",
        "112": "28rem",
        "132": "33rem",
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
      backgroundImage: {
        "grid-pattern":
          'url("data:image/svg+xml,%3Csvg width="78" height="78" viewBox="0 0 78 78" fill="none" xmlns="http://www.w3.org/2000/svg"%3E%3Cg opacity="0.1"%3E%3Cpath d="M0 0H78V78H0V0Z" stroke="%23517193" stroke-width="1"/%3E%3C/g%3E%3C/svg%3E")',
      },
      keyframes: {
        "accordion-down": {
          from: {
            height: "0",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
        "accordion-up": {
          from: {
            height: "var(--radix-accordion-content-height)",
          },
          to: {
            height: "var(--radix-accordion-content-height)",
          },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;
