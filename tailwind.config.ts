import type { Config } from 'tailwindcss'
import { fontFamily } from 'tailwindcss/defaultTheme'

const config: Config = {
  darkMode: ['class'],
  content: [
    './app/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './lib/**/*.{ts,tsx}'
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem'
    },
    extend: {
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      colors: {
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#111827',
          foreground: '#f9fafb'
        },
        secondary: {
          DEFAULT: '#1f2937',
          foreground: '#e5e7eb'
        },
        muted: {
          DEFAULT: '#f3f4f6',
          foreground: '#6b7280'
        },
        accent: {
          DEFAULT: '#111827',
          foreground: '#f9fafb'
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#111827'
        }
      },
      boxShadow: {
        soft: '0 10px 40px rgba(0,0,0,0.08)'
      }
    }
  },
  plugins: [require('tailwindcss-animate')]
}

export default config
