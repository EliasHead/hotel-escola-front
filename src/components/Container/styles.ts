import { styled } from '../../styles'

export const Box = styled('div', {
  width: '100%',
  margin: '0 auto',
  padding: '0 1.6rem',

  li: {
    margin: '0 0 1.6rem 1.5rem',
    fontSize: '1.6rem',
  },

  'p, h3, h4, hr': {
    margin: '0 0 1.6rem',
  },

  h3: {
    fontSize: '1.8rem',
  },

  '@tablet': {
    padding: '0 3.2rem',

    li: {
      fontSize: '1.8rem',
    },

    h3: {
      fontSize: '2rem',
    },
  },

  '@laptop': {
    li: {
      fontSize: '2rem',
    },

    h3: {
      fontSize: '2.2rem',
    },
  },

  '@laptopL': {
    maxWidth: '102.4rem',

    li: {
      fontSize: '2.2rem',
    },

    h3: {
      fontSize: '$2xl',
    },
  },
})
