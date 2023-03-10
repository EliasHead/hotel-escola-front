import { keyframes, styled } from '../../styles'

import Link from 'next/link'

const line1Close = keyframes({
  '0%': { transform: 'translatey(8px)' },
  '50%': { transform: 'translatey(0px)' },
  '100%': { transform: 'translatey(0px) rotate(45deg)' },
})

const line2Close = keyframes({
  '0%': { transform: 'scale(100%)' },
  '100%': { transform: 'scale(0%)' },
})

const line3Close = keyframes({
  '0%': { transform: 'translatey(0px)' },
  '50%': { transform: 'translatey(-8px)' },
  '100%': { transform: 'translatey(-8px) rotate(135deg)' },
})

const line1 = keyframes({
  '0%': { transform: 'rotate(45deg)' },
  '50%': { transform: 'translatey(0px) rotate(0deg)' },
  '100%': { transform: 'translatey(-8px)' },
})

const line2 = keyframes({
  '0%': { transform: 'scale(0%)' },
  '100%': { transform: 'scale(100%)' },
})

const line3 = keyframes({
  '0%': { transform: 'rotate(135deg)' },
  '50%': { transform: 'translatey(0px) rotate(0deg)' },
  '100%': { transform: 'translatey(8px)' },
})

export const Header = styled('header', {
  backgroundColor: '$greenIFCE',
  color: '$white',
  width: '100%',
  position: 'sticky',
  zIndex: 30,
  top: 0,
  left: 0,

  variants: {
    color: {
      green: {
        backgroundColor: '$greenIFCE',
        color: '$white',

        'nav > :nth-child(2)': {
          ':nth-child(n)': {
            backgroundColor: '$white',
          },
        },

        'nav > :nth-child(3)': {
          backgroundColor: '$greenIFCE',
        },
      },

      white: {
        backgroundColor: '$white',
        color: '$black',
        img: {
          filter: 'invert(100%)',
        },

        'nav > :nth-child(2)': {
          ':nth-child(n)': {
            backgroundColor: '$black',
          },
        },
      },
    },
  },

  defaultVariants: {
    color: 'white',
  },
})

export const NavbarContainer = styled('nav', {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',

  padding: '0 1.6rem',
  margin: '0 auto',
  height: '6rem',

  '@tablet': {
    padding: '0 3.2rem',
    maxWidth: '102.4rem',
  },
})

export const BurguerContainer = styled('div', {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  position: 'relative',

  '@laptop': {
    display: 'none',
  },

  '&.active': {
    ':nth-child(1)': {
      animation: `${line1Close} 0.2s forwards`,
    },
    ':nth-child(2)': {
      animation: `${line2Close} 0.2s forwards`,
    },
    ':nth-child(3)': {
      animation: `${line3Close} 0.2s forwards`,
    },
  },

  ':nth-child(1)': {
    animation: `${line1} 0.2s forwards`,
  },

  ':nth-child(2)': {
    animation: `${line2} 0.2s forwards`,
  },

  ':nth-child(3)': {
    animation: `${line3} 0.2s forwards`,
  },
})

export const BurguerLine = styled('div', {
  width: '40px',
  height: '4px',
  borderRadius: '2px',
  // boxShadow: '0px 0px 4px #555',
})

export const LogoLink = styled(Link, {
  height: '100%',
  marginRight: '10px',

  display: 'flex',
  alignItems: 'center',

  span: {
    marginLeft: '10px',
    fontSize: '2rem',
    lineHeight: '2rem',
  },
})

export const NavMenuList = styled('div', {
  display: 'flex',
  flexDirection: 'column',
  position: 'fixed',
  top: '60px',
  width: '288px',
  rowGap: '24px',
  right: '-288px',
  padding: '24px 16px',
  transition: 'all 0.2s',
  minHeight: 'calc(100vh - 60px)',

  '&.active': {
    right: 0,
  },

  '@laptop': {
    position: 'unset',
    flexDirection: 'row',
    height: '100%',
    minHeight: 'fit-content',
    width: 'fit-content',
    columnGap: '24px',
    alignItems: 'center',
  },
})

export const Button = styled(Link, {
  backgroundColor: '$white',
  textAlign: 'center',
  color: '$greenIFCE',
  border: '1px solid $white',
  padding: '0.3rem 1rem',
  margin: 0,
  fontWeight: '$bold',
  fontSize: '$md',
  borderRadius: '0.5rem',
  cursor: 'pointer',
  whiteSpace: 'nowrap',
})
