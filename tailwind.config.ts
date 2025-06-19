import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary': {
          DEFAULT: '#2D1B69', // Violet foncé principal
          light: '#3D2B79',
          dark: '#1D0B59'
        },
        'accent': {
          DEFAULT: '#FFD700', // Or/Jaune pour les accents
          light: '#FFE44D',
          dark: '#B39700'
        },
        'secondary': {
          DEFAULT: '#4B3B89', // Violet plus clair
          light: '#5B4B99',
          dark: '#3B2B79'
        }
      }
    },
  },
  plugins: [],
}
export default config 