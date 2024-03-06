/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,html}"],
  mode: "jit",
  theme: {
    extend: {
      colors: {
        primary: "#ffffff"
      }
    },
  },
  plugins: [],
}

