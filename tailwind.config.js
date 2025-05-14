/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{vue,js}"],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        primary: {
          50: "oklch(0.962 0.018 272.314)",
          100: "oklch(0.93 0.034 272.788)",
          200: "oklch(0.87 0.065 274.039)",
          300: "oklch(0.785 0.115 274.713)",
          400: "oklch(0.673 0.182 276.935)",
          500: "oklch(0.585 0.233 277.117)",
          600: "oklch(0.511 0.262 276.966)",
          700: "oklch(0.457 0.24 277.023)",
          800: "oklch(0.398 0.195 277.366)",
          900: "oklch(0.359 0.144 278.697)",
          950: "oklch(0.257 0.09 281.288)",
        },
      },
      animation: {
        "bounce-slow": "bounce 3s infinite",
        "pulse-slow": "pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite",
        float: "float 6s ease-in-out infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0)" },
          "50%": { transform: "translateY(-10px)" },
        },
      },
    },
  },
  plugins: [],
};
