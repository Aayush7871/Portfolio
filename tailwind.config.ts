import type { Config } from 'tailwindcss'

export default {
  content: ['./index.html', './src/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0b0d10',
        panel: '#12161c',
        line: '#242b35',
        mist: '#a6afbc',
        signal: '#7dd3fc',
      },
      boxShadow: {
        lift: '0 16px 45px rgba(0, 0, 0, 0.22)',
      },
    },
  },
  plugins: [],
} satisfies Config
