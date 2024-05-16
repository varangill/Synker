/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "550px",
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
      red: "#d1001f",
      yellow: "#e5de00",
      gray: {
        100: "#302D37",
        200: "#211A1D",
        300: "#2C2932",
        400: "#6E676E",
      },
      purple: {
        100: "#6320EE",
        200: "#7236EF",
      },
      200: "#7236EF",
    },
  },

  extend: {
    spacing: {
      128: "60rem",
    },

    gridTemplateColumns: {
      "auto-fill-100": "repeat(auto-fill, minmax(150px, 1fr))",
      "auto-fit-100": "repeat(auto-fit, minmax(150px, 1fr))",
    },
  },
  plugins: [],
};
