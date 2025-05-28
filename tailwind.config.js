/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'pretendard': ['Pretendard', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          50: '#fef7ff',
          100: '#fdeeff',
          200: '#fcdeff',
          300: '#f9c2ff',
          400: '#f596ff',
          500: '#ed5bff',
          600: '#dc36ee',
          700: '#c024d2',
          800: '#9e21aa',
          900: '#821e87',
        }
      }
    },
  },
  plugins: [],
} 