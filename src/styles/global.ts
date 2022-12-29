import { globalCss } from '.'

export const globalStyles = globalCss({
  '*': {
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
  },

  html: {
    /* a cada 1rem será considera 10px */
    fontSize: '62.5%',
  },

  body: {
    // backgroundColor: '$gray900',
    height: '100vh',
    // color: '$gray100',
    '-webkit-font-smoothing': 'antialiased',

    p: {
      fontSize: '1.6rem',

      '@tablet': {
        fontSize: '1.8rem',
      },

      '@laptop': {
        fontSize: '2rem',
      },

      '@laptopL': {
        fontSize: '2.4rem',
      },
    },

    h1: {
      fontSize: '3.2rem',

      '@tablet': {
        fontSize: '4.8rem',
      },

      '@laptop': {
        fontSize: '6rem',
      },
    },

    h2: {
      fontSize: '2.4rem',

      '@tablet': {
        fontSize: '3.6rem',
      },

      '@laptop': {
        fontSize: '4.8rem',
      },
    },
  },

  'body, input, textarea, button': {
    fontFamily: 'Roboto',
    fontWeight: 400,
  },

  a: {
    color: 'inherit',
    textDecoration: 'none',
  },
})
