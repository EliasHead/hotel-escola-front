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
      md: '1.125rem',
      lg: '1.25rem',
      xl: '1.5rem',
      '2xl': '2rem',
    },
  },
  media: {
    bp1: '(min-width: 640px)', // large mobile
    bp2: '(min-width: 768px)', // tablet
    bp3: '(min-width: 1024px)', // laptop
    bp4: '(min-width: 1144px)', // laptop large
  },
})
