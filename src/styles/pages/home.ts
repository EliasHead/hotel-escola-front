import { styled } from '../../styles'

export const Title = styled('h1', {
  fontSize: '$5xl',
  fontWeight: '$extrabold',
  lineHeight: 1,
  margin: '0 0 2.4rem',
  textAlign: 'center',
  letterSpacing: '-2.88px',

  '@laptop': {
    fontSize: '$6xl',
  },
})
