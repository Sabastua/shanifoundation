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
      backgroundImage: {
        'brand': 'linear-gradient(135deg, #4A0A38 0%, #7A0F5A 45%, #A3277A 100%)',
        'bloom': 'linear-gradient(135deg, #7A0F5A 0%, #A3277A 55%, #E8A33D 130%)',
        'growth': 'linear-gradient(135deg, #2E5A2B 0%, #3F7D2B 55%, #8DB63C 100%)',
        'sunrise': 'linear-gradient(180deg, #FCF1DC 0%, #F6E4F0 100%)',
        'gold-linear': 'linear-gradient(90deg, #E8A33D 0%, #F3C566 50%, #E8A33D 100%)',
        'focus-menstrual': 'linear-gradient(135deg, #A3277A 0%, #7A0F5A 100%)',
        'focus-empowerment': 'linear-gradient(135deg, #E8A33D 0%, #F3C566 100%)',
        'focus-climate': 'linear-gradient(135deg, #3F7D2B 0%, #8DB63C 100%)',
        'focus-child': 'linear-gradient(135deg, #7A0F5A 0%, #4A0A38 100%)',
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
      transitionTimingFunction: {
        'ease-out-organic': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'ease-in-out-organic': 'cubic-bezier(0.65, 0, 0.35, 1)',
      },
      transitionDuration: {
        'fast': '150ms',
        'base': '400ms',
        'slow': '700ms',
      },
    },
  },
  plugins: [],
}
