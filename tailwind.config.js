/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: "class",
  theme: {
    colors: {
      "primary-bg-color": {
        light: "#f7f8fa",
        dark: "#3d3d3d",
      },
      "secondary-bg-color": {
        light: "#f0f1f3",
        dark: "#1d1d1d",
      },
      "sidebar-bg-color": {
        light: "#ffffff",
        dark: "#282828",
      },
      "primary-text-color": {
        light: "#000000",
        dark: "#ffffff",
      },
      "secondary-text-color": "#c1bdce",
      "element-context-color": "#643fdb",
      "orange-color": "#ff8a00",
      "red-color": "#ff5655",
      "green-color": "#5be1c3",
      "purple-color": "#b37be7",
    },

    extend: {},
  },
  plugins: [],
};
