import { styled } from '../../styles'

export const TerifasContainer = styled('div', {
  'h2, hr, table': {
    margin: '0 0 1.6rem',
  },

  h1: {
    margin: '1.6rem 0 0rem',
  },
})

export const TableContainer = styled('div', {
  overflowX: 'auto',
})

export const Table = styled('table', {
  borderCollapse: 'collapse',
  maxWidth: '900px',
  width: '100%',

  'td, th': {
    border: '1px solid #ddd',
    padding: '8px',
    whiteSpace: 'nowrap',
    fontSize: '16px',
  },

  '@laptop': {
    'td, th': {
      fontSize: '2.2rem',
    },
  },
})
