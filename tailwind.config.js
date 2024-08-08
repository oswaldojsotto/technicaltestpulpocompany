/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      xs: "480px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
      "2xl": "1536px",
    },
    colors: {
      white: "#FFFFFF",
      black: "#000000",
      primary: "#00A9E0",
      primary_hover: "#028AC5",
      primary_pressed: "#006089",
      primary_disabled: "#00A9E0",
      primary_20: "#CCEEF9",
      secondary: "#1D1D1D",
      secondary_hover: "#1A1A1A",
      success_primary: "#08875D",
      warning_default: "#F6BD11",
    },
  },
  plugins: [],
};
