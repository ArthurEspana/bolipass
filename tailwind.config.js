/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F2F1',
          100: '#CCE5E3',
          200: '#99CBC7',
          300: '#66B1AB',
          400: '#33978F',
          500: '#2A9D8F', // primary
          600: '#227D72',
          700: '#1B5E56',
          800: '#133E39',
          900: '#0A1F1D',
        },
        secondary: {
          50: '#FCF3F1',
          100: '#F9E7E3',
          200: '#F3CFC7',
          300: '#EDB7AB',
          400: '#E79F8E',
          500: '#E76F51', // secondary
          600: '#B95941',
          700: '#8B4331',
          800: '#5C2C20',
          900: '#2E1610',
        },
        accent: {
          50: '#FCF8E9',
          100: '#F9F1D3',
          200: '#F3E3A7',
          300: '#EDD57B',
          400: '#E7C74F',
          500: '#E9C46A', // accent
          600: '#BA9D55',
          700: '#8C7540',
          800: '#5D4E2A',
          900: '#2F2715',
        },
        success: {
          500: '#10B981',
        },
        warning: {
          500: '#F59E0B',
        },
        error: {
          500: '#EF4444',
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        serif: ['Merriweather', 'serif'],
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
      },
    },
  },
  plugins: [],
};