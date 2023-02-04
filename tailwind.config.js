/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    fontFamily: {
      mont: ['var(--font-mont)'],
    },
    colors: {
      black: {
        100: '#3F3F46',
        200: '#343434',
        300: '#212529',
      },
      white: {
        100: '#CED4DA',
        200: '#E9ECEF',
        300: '#F8F8F8',
      },
      aqua: '#008DAA',
      'light-blue': 'A9F0FF',
      'dark-blue': '#0C2E4E',
      blue: '#00D4FF',
      'blue-gradient-1': '#000046',
      'blue-gradient-2': '#1CB5E0',
      red: '#FF2B00',
      orange: '#EB7F13',
      'orange-gradient': 'linear-gradient(180deg, #F2A65A 0%, #772F1A 100%)',
    },
    screens: {
      sm: '500px',
      md: '768px',
      lg: '992px',
      xl: '1200px',
      '2xl': '1536px',
      '3xl': '2000px',
    },
    extend: {
      animation: {
        wave: 'wave 2.1s 0.6s infinite',
      },
      boxShadow: {
        dropdown:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
      },
      keyframes: {
        wave: {
          '0%, 60%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%, 50%': { transform: 'rotate(16deg)' },
          '20%': { transform: 'rotate(-6deg)' },
          '40%': { transform: 'rotate(-4deg)' },
        },
      },
      transformOrigin: {
        wave: '70% 70%',
      },
    },
  },
  plugins: [require('daisyui')],
  daisyui: {
    themes: false,
  },
};
