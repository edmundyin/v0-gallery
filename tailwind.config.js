/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        '10xl': '15rem',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        libre: ["Libre Franklin", 'sans-serif'],
        world: ["NueueWorld", 'sans'],
        montreal: ["NeueMontreal", 'serif']
      },
      transformOrigin: {
        'zero': '0%'
      }
    },
  },
  plugins: [],
}

