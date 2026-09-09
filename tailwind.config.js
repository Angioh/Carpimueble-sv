/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      fontFamily: {
        display: ['"Manrope"', 'sans-serif'],
        sans: ['"Inter"', 'sans-serif'],
      },
      colors: {
        forest: {
          500: '#3f7a45',
          600: '#356938',
          700: '#2b5730',
        },
        ink: '#1c1712',
      },
    },
  },
  plugins: [],
}
