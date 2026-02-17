import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // Vibrant primary colors
        primary: {
          50: '#f0fdf9',
          100: '#ccfbf1',
          200: '#99f6e4',
          300: '#5eead4',
          400: '#2dd4bf',
          500: '#14b8a6', // Main teal
          600: '#0d9488', // Darker teal
          700: '#0f766e',
          800: '#115e59',
          900: '#134e4a',
        },
        // Vibrant accent colors
        accent: {
          orange: '#f97316',
          'orange-dark': '#ea580c',
          coral: '#fb7185',
          purple: '#8b5cf6',
          'purple-dark': '#7c3aed',
          yellow: '#fbbf24',
          'yellow-dark': '#f59e0b',
        },
        // Background colors
        cream: '#fef7ed', // Warm cream with orange tint
        'cream-light': '#fff7ed',
        'cream-dark': '#federb',
        ivory: '#fafaf9',
        pearl: '#f5f5f4',
        sand: '#f0e9d8',
        // Text colors
        charcoal: '#1c1917',
        'charcoal-light': '#292524',
        ink: '#0c0a09',
        // Gray scale
        gray: {
          50: '#fafaf9',
          100: '#f5f5f4',
          200: '#e7e5e4',
          300: '#d6d3d1',
          400: '#a8a29e',
          500: '#78716c',
          600: '#57534e',
          700: '#44403c',
          800: '#292524',
          900: '#1c1917',
          950: '#0c0a09',
        },
        // Brand colors
        brand: {
          red: '#ef4444', // Vibrant red for "UN"
          'red-dark': '#dc2626',
          'red-light': '#f87171',
          teal: '#14b8a6',
          'teal-dark': '#0d9488',
        },
        // Semantic colors
        border: '#e7e5e4',
        success: '#10b981',
        warning: '#f59e0b',
        error: '#ef4444',
        info: '#3b82f6',
      },
      fontFamily: {
        primary: ['Crimson Text', 'Georgia', 'serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
        ui: ['Inter', 'system-ui', 'sans-serif'],
      },
      spacing: {
        'xs': '0.5rem',
        'sm': '1rem',
        'md': '1.5rem',
        'lg': '2rem',
        'xl': '3rem',
        '2xl': '4rem',
        '3xl': '6rem',
      },
      transitionDuration: {
        '250': '250ms',
        '350': '350ms',
      },
      animation: {
        'fade-in': 'fadeIn 0.5s ease-in-out',
        'slide-up': 'slideUp 0.5s ease-out',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { transform: 'translateY(10px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
    },
  },
  plugins: [],
}
export default config
