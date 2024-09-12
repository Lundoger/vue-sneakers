import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgWhite: 'var(--bgWhite)',
        primaryGray: 'var(--gray)',
        textGray: 'var(--textGray)'
      },
      screens: {
        xs: '390px',
        sm: '430px',
        md: '768px',
        ml: '1024px',
        lg: '1280px',
        xl: '1440px',
        '2xl': '1920px'
      }
    }
  }
}

export default config
