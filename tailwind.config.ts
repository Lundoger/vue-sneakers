import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        bgWhite: 'var(--bgWhite)',
        bgYellow: 'var(--bgYellow)',
        bgViolet: 'var(--bgViolet)',
        bgVioletTransparent: 'var(--bgVioletTransparent)',
        bgBurgerMenu: 'rgba(243, 244, 238, 1)',
        golden: 'rgba(255, 171, 11, 0.1)',
        btnDisabledBg: 'var(--btnDisabledBg)',
        btnDisabledText: 'var(--btnDisabledText)',
        beige: 'var(--beige)',
        violet: 'var(--violet)',
        lightViolet: 'var(--lightViolet)',
        lightVioletSecond: 'var(--lightVioletSecond)',
        mainViolet: 'var(--mainViolet)',
        textViolet: 'var(--textViolet)',
        darkGrey: 'var(--darkGrey)',
        red: 'var(--red)',
        yellow: 'var(--yellow)',
        yellowTransparent: 'var(--yellowTransparent)',
        customOverlay: 'rgba(202, 196, 226, 0.5)'
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
