import { styled } from '../../styles'

export const Box = styled('div', {
  width: '100%',
  margin: '0 auto',
  padding: '0 1.6rem',

  'p, h3, h4, hr, ul, li': {
    margin: '0 0 1.6rem',
  },

  'p, li': {
    fontSize: '1.6rem',
  },

  h3: {
    fontSize: '1.8rem',
  },

  '@tablet': {
    padding: '0 3.2rem',

    'p, li': {
      fontSize: '1.8rem',
    },

    h3: {
      fontSize: '2rem',
    },
  },

  '@laptop': {
    'p, li': {
      fontSize: '2rem',
    },

    h3: {
      fontSize: '2.2rem',
    },
  },

  '@laptopL': {
    maxWidth: '102.4rem',

    'p, li': {
      fontSize: '2.2rem',
    },

    h3: {
      fontSize: '$2xl',
    },
  },
})
