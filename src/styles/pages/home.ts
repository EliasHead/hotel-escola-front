import { styled } from '../../styles'

export const Container = styled('div', {
  width: '100%',
  margin: '0 auto',
  padding: '0 1.6rem',
  maxWidth: '1024px',

  '@bp6': {
    padding: '0 3.2rem',
  },

  '@bp5': {
    padding: '0 1.6rem',
  },
})

export const Content = styled('div', {
  width: '100%',
  margin: '0 auto',

  '@bp2': {
    width: '90%',
  },

  '@bp4': {
    width: '100%',
  },
})

export const Title = styled('h1', {
  fontSize: '$5xl',
  fontWeight: '$extrabold',
  lineHeight: 1,
  margin: '0 0 3rem',
  textAlign: 'center',
  letterSpacing: '-2.88px',

  '@bp3': {
    fontSize: '$6xl',
  },
})

export const Heading3 = styled('h3', {
  fontSize: '$lg',
  margin: '1.6rem 0',

  '@bp3': {
    fontSize: '2.2rem',
  },
})

export const Text = styled('p', {
  fontSize: '$md',
  margin: '1.6rem 0',

  '@bp3': {
    fontSize: '2rem',
  },
})
