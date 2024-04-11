/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        'minHero868px': ' 54.25rem'
      },
      backgroundImage: {
        'hero-pattern': "url('/image/homePc.svg')",
        'diferences-pattern': "url('/image/diferences.svg')"
      },
      colors: {
        primary: '#FD7E14',
        secundaria: '#0056B3', 
        textosNeutros: '#5C6978'
      },
    },
  },
  plugins: [],
}

