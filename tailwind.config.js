import typography from '@tailwindcss/typography';
import forms from '@tailwindcss/forms';
import aspectRatio from '@tailwindcss/aspect-ratio';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f9f4',
          100: '#dcf2e4',
          200: '#bce4cd',
          300: '#8dd0ac',
          400: '#57b584',
          500: '#0F5226', // Deep Forest Green - Main primary
          600: '#0d4721',
          700: '#0b3a1c',
          800: '#092e17',
          900: '#072512',
        },
        secondary: {
          50: '#fef7e6',
          100: '#fdecc0',
          200: '#fbde96',
          300: '#f9cd68',
          400: '#f7bc42',
          500: '#F2A01F', // Golden Amber - Main secondary
          600: '#d88e0f',
          700: '#b8780d',
          800: '#94620a',
          900: '#714d08',
        },
        accent: {
          red: '#C72C41', // Kitenge Red
          brown: '#5C3B1E', // Earth Brown
        },
        neutral: {
          sand: '#EFE7DA', // Soft Sand
          gray: '#F5F6F8',
          charcoal: '#2A2A2A',
        }
      },
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
        'inter': ['Inter', 'sans-serif'],
        'atkinson': ['Atkinson Hyperlegible', 'sans-serif'],
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'slide-down': 'slideDown 0.5s ease-out',
        'slide-left': 'slideLeft 0.5s ease-out',
        'slide-right': 'slideRight 0.5s ease-out',
        'bounce-gentle': 'bounceGentle 2s infinite',
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideDown: {
          '0%': { transform: 'translateY(-100%)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        slideLeft: {
          '0%': { transform: 'translateX(100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        slideRight: {
          '0%': { transform: 'translateX(-100%)', opacity: '0' },
          '100%': { transform: 'translateX(0)', opacity: '1' },
        },
        bounceGentle: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-20px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'african-pattern': "url('/src/assets/african-pattern.svg')",
      }
    },
  },
  plugins: [
    typography,
    forms,
    aspectRatio,
  ],
}