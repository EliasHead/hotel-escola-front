import { styled } from '../../styles'

import { Swiper, SwiperSlide } from 'swiper/react'

export const SwiperS = styled(Swiper, {
  width: '80%',
  height: '60vh',
  margin: '0 auto',

  '@bp4': {
    maxWidth: '1440px',
  },
})

export const SwiperSlideS = styled(SwiperSlide, {
  width: '90%',

  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',

  img: {
    objectFit: 'cover',
    borderRadius: '0.8rem',
  },

  '@bp4': {
    margin: '0 auto',
    padding: '1rem',

    img: {
      objectFit: 'cover',
      borderRadius: '0.8rem',
      width: '90%',
      height: '90%',
    },
  },
})
