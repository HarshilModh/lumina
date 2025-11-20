import { heroui } from "@heroui/theme"

/** @type {import('tailwindcss').Config} */
const config = {
  content: [
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    "./node_modules/@heroui/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-jakarta)", "sans-serif"],
        heading: ["var(--font-outfit)", "sans-serif"],
        mono: ["var(--font-mono)"],
      },
      colors: {
        background: "#ffffff",
      },
    },
  },
  darkMode: "class",
  plugins: [
    heroui({
      themes: {
        light: {
          colors: {
            background: "#ffffff", // White
            foreground: "#0f172a", // Slate 900
            primary: {
              DEFAULT: "#6366f1", // Indigo 500
              foreground: "#ffffff",
            },
            secondary: {
              DEFAULT: "#f1f5f9", // Slate 100
              foreground: "#64748b",
            },
            focus: "#6366f1",
          },
        },
      },
    }),
  ],
}

module.exports = config;