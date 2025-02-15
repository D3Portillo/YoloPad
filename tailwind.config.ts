import type { Config } from "tailwindcss"

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      opacity: {
        7: "0.07",
        3: "0.03",
      },
      zIndex: {
        1: "1",
        2: "2",
        3: "3",
      },
      colors: {
        yolo: {
          blue: {
            DEFAULT: "#0033EE",
            light: "#668CFF", // Lighter blue for contrast
            dark: "#001A80", // Deeper blue for contrast
          },
          green: {
            DEFAULT: "#00FF66",
            lime: "#A7FF00",
            mint: "#66FFC2", // Fresh, lighter green
            dark: "#007733", // Richer green for depth
          },
          purple: {
            DEFAULT: "#8000FF", // Vivid purple to contrast blue/green
            soft: "#C299FF", // Softer pastel purple
          },
          yellow: {
            DEFAULT: "#FFCC00", // Bright energy, fits Yolo’s vibe
            soft: "#FFE680", // Softer, pastel yellow
          },
          pink: {
            DEFAULT: "#FF007F", // Vibrant, fun pop color
            soft: "#FF99C2", // Softer pink for balance
          },
        },
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
        card: {
          DEFAULT: "hsl(var(--card))",
          foreground: "hsl(var(--card-foreground))",
        },
        popover: {
          DEFAULT: "hsl(var(--popover))",
          foreground: "hsl(var(--popover-foreground))",
        },
        primary: {
          DEFAULT: "hsl(var(--primary))",
          foreground: "hsl(var(--primary-foreground))",
        },
        secondary: {
          DEFAULT: "hsl(var(--secondary))",
          foreground: "hsl(var(--secondary-foreground))",
        },
        muted: {
          DEFAULT: "hsl(var(--muted))",
          foreground: "hsl(var(--muted-foreground))",
        },
        accent: {
          DEFAULT: "hsl(var(--accent))",
          foreground: "hsl(var(--accent-foreground))",
        },
        destructive: {
          DEFAULT: "hsl(var(--destructive))",
          foreground: "hsl(var(--destructive-foreground))",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        chart: {
          "1": "hsl(var(--chart-1))",
          "2": "hsl(var(--chart-2))",
          "3": "hsl(var(--chart-3))",
          "4": "hsl(var(--chart-4))",
          "5": "hsl(var(--chart-5))",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config
