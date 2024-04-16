/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "480px",
      md: "768px",
      lg: "1080px",
      xl: "1440px",
    },
    colors: {
      white: "#F8F0FB",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      gray: {
        100: "#302D37",
        200: "#211A1D",
      },
      purple: {
        100: "#6320EE",
        200: "#7236EF",
      },
    },

    extend: {},
  },
  plugins: [],
};
