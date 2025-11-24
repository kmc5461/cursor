/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ['Inter', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        brand: {
          50: '#f5f7ff',
          100: '#e2e8ff',
          200: '#c5cffc',
          300: '#9db0f7',
          400: '#6e86ef',
          500: '#495de5',
          600: '#3342c4',
          700: '#28349c',
          800: '#222c78',
          900: '#1f2660'
        }
      },
      boxShadow: {
        soft: '0 10px 30px rgba(0,0,0,0.06)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
};
