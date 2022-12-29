import { styled } from '../../styles'

export const HeadContato = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',

  '@laptop': {
    flexDirection: 'row',
  },
})

export const Text = styled('div', {
  flex: 1,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignContent: 'center',

  h1: {
    margin: '1.6rem 0 1.6rem',
  },

  h2: {
    color: '$blue600',
    margin: '0 0 1.6rem',
  },

  '@laptop': {
    margin: '2rem 0 3rem',
  },
})

export const Icon = styled('div', {
  flex: 1,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',

  margin: '0 0 4rem',
})

export const ContatoContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'column',
  gap: '2rem',
  height: '100vh',

  h3: {
    fontSize: '$2xl',
    margin: '0 0 1.6rem',
  },

  '@laptop': {
    flexDirection: 'row',
    height: '50vh',
  },
})

export const Box = styled('div', {
  display: 'flex',
  gap: '2rem',
  alignItems: 'center',

  p: {
    margin: '0 0 1.6rem',
  },

  '@tablet': {
    p: {
      margin: '0 0 1.6rem',
    },
  },

  '@laptop': {
    p: {
      margin: '0 0 1.6rem',
    },
  },

  '@laptopL': {
    maxWidth: '102.4rem',
  },
})

export const Map = styled('div', {
  '@tablet': {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
})
