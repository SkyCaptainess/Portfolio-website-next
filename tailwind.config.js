/** @type {import('tailwindcss').Config} */

module.exports = {
  darkMode: 'class',
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './sections/**/*.{js,ts,jsx,tsx}',
    '!./node_modules',
  ],
  theme: {
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)'],
      },
      colors: {
        black: {
          100: '#3F3F46',
          200: '#343434',
          300: '#212529',
          400: '#343A40',
          500: '#495057',
        },
        white: {
          100: '#CED4DA',
          200: '#F8F9FA',
          300: '#E9ECEF',
          400: '#F8F8F8',
          500: '#DEE2E6',
        },
        aqua: '#008DAA',
        'dark-aqua': '#00697f',
        'light-blue': '#A9F0FF',
        'dark-blue': '#0C2E4E',
        blue: '#00D4FF',
        'blue-gradient-1': '#000046',
        'blue-gradient-2': '#1CB5E0',
        orange: '#FFB26B',
        'light-orange': '#FFB26B',
        'orange-red': '#FF7B54',
      },
      screens: {
        sm: '500px',
        md: '768px',
        lg: '992px',
        xl: '1200px',
        '2xl': '1536px',
        '3xl': '2000px',
        'ipad-mini': '650px',
      },
      animation: {
        wave: 'wave 2.1s 0.6s infinite',
        slideDownAndFade: 'slideDownAndFade 0.3s linear 1',
        slideLeftAndFade: 'slideLeftAndFade 0.3s linear 1',
        slideRightAndFade: 'slideRightAndFade 0.3s linear 1',
      },
      boxShadow: {
        dropdown:
          'rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px',
        project:
          'rgba(6, 24, 44, 0.4) 0px 0px 0px 2px, rgba(6, 24, 44, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
        'project-dark':
          'rgba(20, 20, 20, 0.4) 0px 0px 0px 2px, rgba(20, 20, 20, 0.65) 0px 4px 6px -1px, rgba(255, 255, 255, 0.08) 0px 1px 0px inset',
        tooltip:
          ' hsl(206 22% 7% / 35%) 0 10px 38px -10px, hsl(206 22% 7% / 20%) 0 10px 20px -15px',
      },
      backgroundImage: {
        'orange-gradient': 'linear-gradient(to right, #f46b45, #eea849)',
        'dance-to-forget': 'linear-gradient(to left, #ff4e50, #f9d423)',
        'midnight-city': 'linear-gradient(to bottom, #343434, #212529)',
      },
      keyframes: {
        wave: {
          '0%, 60%, 100%': { transform: 'rotate(0deg)' },
          '10%, 30%, 50%': { transform: 'rotate(24deg)' },
          '20%': { transform: 'rotate(-6deg)' },
          '40%': { transform: 'rotate(-4deg)' },
        },
        slideDownAndFade: {
          '0%': { opacity: 0, transform: 'translateY(-2px)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        slideLeftAndFade: {
          '0%': { opacity: 0, transform: 'translateX(2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
        slideRightAndFade: {
          '0%': { opacity: 0, transform: 'translateX(-2px)' },
          '100%': { opacity: 1, transform: 'translateX(0)' },
        },
      },
      transitionProperty: {
        bgi: 'background-image',
        top: 'top',
      },
      transformOrigin: {
        wave: '70% 70%',
      },
      transitionTimingFunction: {
        tooltip: 'cubic-bezier(0.16, 1, 0.3, 1)',
      },
      willChange: {
        tooltip: 'transform, opacity',
      },
    },
  },
  plugins: [],
};
