/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  theme: {
    extend: {
      colors: {
        primary: "#007bff", // Updated for a sharper blue
        secondary: "#ffc107", // Updated to a bolder yellow
        accent: "#e63946", // Optional new accent color
        neutral: "#f8f9fa", // A light background option
      },
      fontFamily: {
        sans: ["Inter", "Roboto", "Arial", "sans-serif"], // Added fallback fonts
        heading: ["Poppins", "sans-serif"], // Optional heading font
      },
      spacing: {
        72: "18rem", // Extended spacing utility for large paddings/margins
        84: "21rem",
        96: "24rem",
      },
      borderRadius: {
        xl: "1.25rem", // Slightly larger border-radius for smooth corners
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/aspect-ratio"),
    require("@tailwindcss/line-clamp"),
  ],
};
