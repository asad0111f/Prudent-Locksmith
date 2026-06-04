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
          700: '#374151',
          600: '#4B5563',
          500: '#6B7280'
        },
        teal: {
          50: '#F0FDFC',
          100: '#CCFBF7',
          200: '#99F6EF',
          400: '#2DD4C8',
          500: '#14B8AA',
          600: '#0E8F8B',
          700: '#0B6F6C',
          800: '#095C5A',
          900: '#064340'
        },
        gold: {
          300: '#FCD34D',
          400: '#E8B84B',
          500: '#C9A227',
          600: '#A07D1C'
        },
        surface: {
          dark: '#0D1117',
          card: '#131A23',
          border: '#1E2A35'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Inter"', 'ui-sans-serif', 'system-ui', 'sans-serif']
      },
      boxShadow: {
        soft: '0 10px 30px rgba(11, 17, 22, 0.08)',
        card: '0 4px 20px rgba(11, 17, 22, 0.10)',
        'card-hover': '0 8px 40px rgba(11, 17, 22, 0.16)',
        'glow-teal': '0 0 0 3px rgba(14, 143, 139, 0.25), 0 8px 32px rgba(14, 143, 139, 0.18)',
        'glow-gold': '0 0 0 3px rgba(201, 162, 39, 0.25), 0 8px 32px rgba(201, 162, 39, 0.12)',
        'glow-sm': '0 4px 20px rgba(14, 143, 139, 0.2)'
      },
      backgroundImage: {
        'teal-shine': 'linear-gradient(135deg, #14B8AA 0%, #0E8F8B 50%, #0B6F6C 100%)',
        'dark-card': 'linear-gradient(145deg, #131A23 0%, #0D1117 100%)',
        'hero-dark': 'linear-gradient(135deg, #0B1116 0%, #0D1A24 60%, #091520 100%)'
      },
      animation: {
        'pulse-ring': 'pulse-ring 2s cubic-bezier(0.455, 0.03, 0.515, 0.955) infinite',
        'shimmer': 'shimmer 2.5s linear infinite',
        'float': 'float 4s ease-in-out infinite',
        'fade-up': 'fade-up 0.6s ease-out both',
        'slide-in-bottom': 'slide-in-bottom 0.4s cubic-bezier(0.22,1,0.36,1) both',
        'count': 'count 1.5s ease-out both'
      },
      keyframes: {
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '1' },
          '50%': { transform: 'scale(1.15)', opacity: '0.7' },
          '100%': { transform: 'scale(1)', opacity: '1' }
        },
        'shimmer': {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' }
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-8px)' }
        },
        'fade-up': {
          'from': { opacity: '0', transform: 'translateY(16px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        },
        'slide-in-bottom': {
          'from': { opacity: '0', transform: 'translateY(12px) scale(0.99)' },
          'to': { opacity: '1', transform: 'translateY(0) scale(1)' }
        },
        'count': {
          'from': { opacity: '0', transform: 'translateY(8px)' },
          'to': { opacity: '1', transform: 'translateY(0)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
