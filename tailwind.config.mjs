/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        background: "#0b0b0b",
        surface: "#1a1a1a",
        text: "#e0e0e0",
        primary: "#8f00ff",
        secondary: "#00bfff"
      }
    }
  },
  plugins: []
};