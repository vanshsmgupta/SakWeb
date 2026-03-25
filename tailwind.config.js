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
            DEFAULT: '#FF3D00',
            50: '#fff2ed',
            100: '#ffe0d6',
            200: '#ffbfaa',
            300: '#ff9e7e',
            400: '#ff7d52',
            500: '#FF3D00',
            600: '#cc3100',
            700: '#992500',
            800: '#661900',
            900: '#330c00',
          }
        },
        animation: {
          'marquee': 'marquee 30s linear infinite',
          'marquee-reverse': 'marquee-reverse 30s linear infinite',
        },
        keyframes: {
          marquee: {
            '0%': { transform: 'translateX(0)' },
            '100%': { transform: 'translateX(-50%)' },
          },
          'marquee-reverse': {
            '0%': { transform: 'translateX(-50%)' },
            '100%': { transform: 'translateX(0)' },
          },
        },
      },
    },
    plugins: [
      require('@tailwindcss/typography'),
    ],
  }
  