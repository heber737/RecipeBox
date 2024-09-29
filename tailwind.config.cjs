/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./index.html",
    "./src/main.jsx",
    "./src/App.jsx",
    "./src/components/NavBar.jsx",
    "./src/components/RecipeDisplay.jsx",
    "./src/components/RecipeModal.jsx",
  ],
  theme: {
    extend: {},
  },
  plugins: [require('daisyui')],
}