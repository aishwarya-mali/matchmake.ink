/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./index.html"],
  theme: {
    extend: {
      fontFamily: {
        body: ["Rubik", "sans-serif"],
        splatoon: ["ProjectPaintball", "sans-serif"],
      },
      colors: {
        turquois: {
          50: "#f1fcfa",
          100: "#cef9f0",
          200: "#9df2e0",
          300: "#64e4cf",
          400: "#35ccb8",
          500: "#1ec0ad",
          600: "#138e82",
          700: "#147169",
          800: "#155a55",
          900: "#164b48",
          950: "#062d2c",
        },
        red: {
          50: "#fef4f2",
          100: "#fde7e3",
          200: "#fcd4cc",
          300: "#f9b5a8",
          400: "#f48975",
          500: "#e9634a",
          600: "#d74b31",
          700: "#b43821",
          800: "#95311f",
          900: "#7c2e20",
          950: "#43150c",
        },
        blue: {
          50: "#f1f3ff",
          100: "#e6ebff",
          200: "#d0d9ff",
          300: "#abb9ff",
          400: "#7b8aff",
          500: "#4651ff",
          600: "#2123ff",
          700: "#100ff2",
          800: "#0d0ddc",
          900: "#0c0ca6",
          950: "#040871",
        },
        background: {
          lighter: "#3b3b4d",
          light: "#2f2f3d",
          normal: "#24242f",
          dark: "#1c1c24",
          darker: "#141418",
        },
      },
    },
  },
  plugins: [],
};
