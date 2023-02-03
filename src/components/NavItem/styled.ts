import { styled } from '../../styles'

import Link from 'next/link'

export const NavLink = styled(Link, {
  fontSize: '18px',
  position: 'relative',
  transition: 'all 0.2s',

  '&:hover': {
    fontWeight: 'bold',
  },

  '@bp2': {
    '&::before': {
      content: '',
      position: 'absolute',
      width: '0%',
      height: '6px',
      bottom: '-12px',
      left: 0,
      backgroundColor: 'white',
      transition: 'all 0.2s',
    },

    '&:hover::before': {
      width: '100%',
    },
  },
})
