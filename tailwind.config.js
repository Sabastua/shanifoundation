/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        plum: {
          900: '#4A0A38',
          700: '#7A0F5A',
          800: '#5F0C49',
        },
        magenta: {
          500: '#A3277A',
          600: '#8A1F67',
          100: '#F6E4F0',
          50: '#FDF6FB',
        },
        leaf: {
          600: '#3F7D2B',
          500: '#8DB63C',
          100: '#EAF5DF',
        },
        forest: {
          800: '#2E5A2B',
          900: '#1F3F1D',
        },
        gold: {
          500: '#E8A33D',
          600: '#CC8A2B',
          100: '#FCF1DC',
          50: '#FEFAF3',
        },
        ink: {
          900: '#231A21',
          600: '#5B4F58',
          400: '#8C7D88',
        },
        cream: {
          50: '#FFFDFA',
          100: '#F9F5EE',
        },
      },
      fontFamily: {
        serif: ['"Fraunces"', '"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', '"DM Sans"', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'organic': '24px',
        'organic-lg': '32px',
        'organic-xl': '40px',
      },
      boxShadow: {
        'brand': '0 10px 30px rgba(74, 10, 56, 0.08)',
        'brand-hover': '0 16px 40px rgba(74, 10, 56, 0.14)',
        'brand-gold': '0 10px 30px rgba(232, 163, 61, 0.15)',
        'brand-green': '0 10px 30px rgba(63, 125, 43, 0.15)',
      },
    },
  },
  plugins: [],
}
