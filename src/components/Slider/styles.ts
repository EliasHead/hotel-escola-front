import { styled } from '../../styles'

import { Swiper, SwiperSlide } from 'swiper/react'

export const SwiperS = styled(Swiper, {
  width: '100%',
  height: '40vh',
  margin: '0 auto',

  '@bp2': {
    // table view TODO
    margin: '0 auto',
    width: '90%',
    height: '60vh',
  },

  '@bp3': {
    // table view TODO
    margin: '0 auto',
    width: '90%',
    height: '60vh',
  },

  '@bp4': {
    width: '100%',
    height: '60vh',
  },
})

export const SwiperSlideS = styled(SwiperSlide, {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    width: 'inherit',
    height: '100%',
    padding: '1rem 0',
    borderRadius: '2rem',
  },

  '@bp2': {
    margin: '0 auto',
    padding: '1rem',
    img: {
      padding: '1rem',
    },
  },

  '@bp3': {
    img: {
      padding: '1rem',
    },
  },

  '@bp4': {
    margin: '0 auto',
    padding: '1rem',

    img: {
      objectFit: 'cover',
      borderRadius: '2rem',
      width: '90%',
      height: '100%',
      padding: '1rem',
    },
  },
})
