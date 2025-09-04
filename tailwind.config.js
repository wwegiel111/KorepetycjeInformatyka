/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['ui-sans-serif', 'system-ui', 'Inter', 'Poppins', 'sans-serif']
      },
      colors: {
        brand: {
          DEFAULT: '#6c63ff',
          50: '#f2f2ff',
          100: '#e8e7ff',
          200: '#cfcfff',
          300: '#b3b1ff',
          400: '#9a94ff',
          500: '#6c63ff',
          600: '#5a50f0',
          700: '#4a41cf',
          800: '#3a34a9',
          900: '#2d2984'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,.08)'
      },
      backgroundImage: {
        'grid': 'linear-gradient(to right, rgba(0,0,0,.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,.06) 1px, transparent 1px)',
        'radial': 'radial-gradient(60rem 60rem at -10% -20%, rgba(108,99,255,.15), transparent 50%), radial-gradient(50rem 50rem at 120% -10%, rgba(0,194,255,.12), transparent 45%)'
      }
    },
  },
  plugins: [],
}
