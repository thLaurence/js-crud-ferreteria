/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/views/**/*.{hbs,js}",
            "./src/views/*.{hbs,js}",
            "./src/views/layouts/main.hbs",
            "./src/views/notas/*{hbs,js}."],
  theme: {
    extend: {},
  },
  plugins: [],
}