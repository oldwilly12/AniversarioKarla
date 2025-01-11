/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'inicio-foto': "url('/BG_inicio2.jpeg')",
      },
    },
  },
  plugins: [],
}

