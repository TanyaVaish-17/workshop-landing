/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Nunito'", "sans-serif"],
        body: ["'Inter'", "sans-serif"],
      },
      colors: {
        brand: {
          purple: "#6C3FE8",
          violet: "#8B5CF6",
          indigo: "#4F46E5",
          pink: "#EC4899",
          orange: "#F97316",
          yellow: "#FBBF24",
          mint: "#10B981",
          bg: "#0D0A1F",
          card: "#13102B",
          border: "#2A2250",
        },
      },
    },
  },
  plugins: [],
};
