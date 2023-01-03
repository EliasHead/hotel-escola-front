import { styled } from '../../styles'

export const FooterContainer = styled('div', {
  width: '100%',
  margin: '4rem auto 0',
  padding: '0 0',
  backgroundColor: '$greenIFCE',
  borderTop: '1px solid $greenIFCE',
  borderBottom: '1px solid $greenIFCE',
  overflow: 'hidden',
})

export const Content = styled('div', {
  width: '100%',
  margin: '0 auto',
  padding: '0 1rem',
  maxWidth: '1024px',
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
