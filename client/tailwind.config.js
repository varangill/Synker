/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    screens: {
      sm: "300px",
      md: "650px",
      lg: "1080px",
      xl: "1440px",
    },
    colors: {
      white: "#F8F0FB",
      blue: "#1fb6ff",
      pink: "#ff49db",
      orange: "#ff7849",
      green: "#13ce66",
      red: "#F72536",
      gold: "#F2841A",
      yellow: "#e5de00",
      primary: {
        100: "#302D37",
        200: "#211A1D",
        300: "#2C2932",
        400: "#6E676E",
      },
      accent: {
        100: "#6320EE",
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
  },
  plugins: [
    function ({ addUtilities, theme }) {
      const newUtilities = {
        ".title": {
          color: "var(--btn-text-color)",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          paddingTop: "0.5rem",
          paddingBottom: "0.5rem",
          fontSize: theme("fontSize.base"),
          "@screen sm": {
            fontSize: theme("fontSize.xl"),
          },
          "@screen md": {
            fontSize: theme("fontSize.base"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.2xl"),
          },
          "@screen xl": {
            fontSize: theme("fontSize.2xl"),
          },
        },
        ".btn-text": {
          color: "var(--btn-text-color)",
          height: "2rem",
          fontWeight: "bold",
          display: "flex",
          alignItems: "center",
          fontSize: theme("fontSize.base"),
          "@screen sm": {
            fontSize: theme("fontSize.sm"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.xl"),
          },
        },
        ".text": {
          color: "var(--btn-text-color)",
          height: "2rem",
          fontWeight: "",
          display: "flex",
          alignItems: "center",
          fontSize: theme("fontSize.base"),
          "@screen sm": {
            fontSize: theme("fontSize.xs"),
          },
          "@screen md": {
            fontSize: theme("fontSize.xs"),
          },
          "@screen lg": {
            fontSize: theme("fontSize.base"),
          },
        },
      };

      addUtilities(newUtilities, ["responsive"]);
    },
  ],
};
