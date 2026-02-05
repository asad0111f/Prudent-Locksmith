import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: {
          950: '#0B1116',
          900: '#111827',
          800: '#1F2937',
          700: '#374151'
        },
        teal: {
          600: '#0E8F8B',
          700: '#0B6F6C'
        },
        gold: {
          500: '#C9A227'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 17, 22, 0.08)'
      }
    }
  },
  plugins: []
};

export default config;
