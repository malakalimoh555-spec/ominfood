/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    // Same default breakpoints, written in em, so arbitrary `max-[75em]:` variants
    // (the original media queries use em) can be mixed with them.
    screens: {
      sm: "40em",
      md: "48em",
      lg: "64em",
      xl: "80em",
      "2xl": "96em",
    },
    extend: {
      // Rubik is loaded from Google Fonts in index.html
      fontFamily: {
        sans: ["Rubik", "sans-serif"],
      },
      // Original CSS used the browser default `ease`; Tailwind's default is a different curve
      transitionTimingFunction: {
        DEFAULT: "ease",
      },
      colors: {
        primary: {
          DEFAULT: "#e67e22",
          dark: "#cf711f",
          light: "#eb984e",
        },
        cream: {
          DEFAULT: "#fdf2e9",
          dark: "#fae5d3",
        },
        brown: "#45260a",
        grey: {
          900: "#333",
          700: "#555",
          500: "#6f6f6f",
          400: "#767676",
          300: "#888",
        },
      },
    },
  },
  plugins: [],
};
