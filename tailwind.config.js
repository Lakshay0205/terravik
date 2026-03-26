/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terravik: {
          50: '#f1f5e8',
          100: '#e0ebd0',
          200: '#c1d7a0',
          300: '#a2c371',
          400: '#7cb342',
          500: '#558b2f',
          600: '#2d5016',
          700: '#1b3a0a',
          800: '#0f2305',
          900: '#051100',
        },
        hawaiAgro: {
          50: '#f1f5e8',
          100: '#dce8d0',
          200: '#b8d1a0',
          300: '#95ba71',
          400: '#558b2f',
          500: '#1b5e20',
          600: '#145a1a',
          700: '#0d3a10',
          800: '#061f08',
          900: '#020d03',
        },
      },
      fontFamily: {
        sans: ['system-ui', 'Segoe UI', 'Roboto', 'Helvetica Neue', 'Arial', 'sans-serif'],
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
}
