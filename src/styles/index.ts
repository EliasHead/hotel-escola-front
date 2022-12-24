import { createStitches } from '@stitches/react'

export const {
  config,
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
} = createStitches({
  theme: {
    colors: {
      white: '#fff',
      black: '#000000',

      gray900: '#121214',
      gray800: '#202024',
      gray300: '#c4c4cc',
      gray100: '#e1e1e6',

      green200: '#2f9e41',
      green300: '#00b37e',

      greenIFCE: '#2f9e41',
      redIFCE: '#cd191e',

      blue600: '#0284c7',

      zinc800: '#27272a',
    },
    fontSizes: {
      xs: '1.2rem',
      sm: '1.4rem',
      md: '1.6rem',
      lg: '1.8rem',
      xl: '2rem',
      '2xl': '2.4rem',
      '3xl': '3rem',
      '4xl': '3.6rem',
      '5xl': '4.8rem',
      '6xl': '6rem',
      '7xl': '7.2rem',
      '8xl': '9.6rem',
      '9xl': '12.8rem',
    },
    fontWeights: {
      thin: 100,
      extralight: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    lineHeights: {
      xs: '1.6rem',
      sm: '2rem',
      md: '2.4rem',
      lg: '2.8rem',
      xl: '2.8rem',
      '2xl': '3.2rem',
      '3xl': '3.6rem',
      '4xl': '4rem',
      '5xl': '5.8rem',
      '6xl': 1,
      '7xl': 1,
      '8xl': 1,
      '9xl': 1,
    },
  },
  media: {
    bp1: '(min-width: 640px)', // large mobile
    bp2: '(min-width: 768px)', // tablet
    bp3: '(min-width: 1024px)', // laptop
    bp4: '(min-width: 1144px)', // laptop large
  },
})
