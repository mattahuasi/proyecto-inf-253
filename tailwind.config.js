/** @type {import('tailwindcss').Config} */
import forms from "@tailwindcss/forms";

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4880ff",
        secondary: "#202224",
        tertiary: "#84cc16",
        background: "#f5f6fa",
        border: "#d5d5d5",
      },
    },
  },
  plugins: [forms],
};
