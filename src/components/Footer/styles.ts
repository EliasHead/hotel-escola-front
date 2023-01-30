import { styled } from '../../styles'

export const FooterContainer = styled('div', {
  width: '100%',
  margin: '4rem auto 0',
  padding: '0 0',
  backgroundColor: '$greenIFCE',
  borderTop: '1px solid $greenIFCE',
  borderBottom: '1px solid $greenIFCE',
})

export const Content = styled('div', {
  width: '100%',
  margin: '0 auto',
  padding: '0 1rem',
  maxWidth: '1024px',

  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  gap: '4rem',
})

export const FooterBox = styled('footer', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  height: '48px',

  span: {
    color: '$white',
    fontSize: '$lg',
  },
})

export const SocialBox = styled('div', {
  display: 'none',

  '@tablet': {
    display: 'flex',
    gap: '10px',
  },
})
