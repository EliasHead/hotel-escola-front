import Image from 'next/image'
import { Navigation, Pagination, Autoplay, EffectCoverflow } from 'swiper'
import { SwiperS, SwiperSlideS } from './styles'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

type SliderType = {
  url: string
}

type ImgsProps = {
  imgs: SliderType[]
}

export function Slider({ imgs }: ImgsProps) {
  return (
    <>
      <SwiperS
        modules={[Navigation, Pagination, Autoplay, EffectCoverflow]}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          waitForTransition: true,
        }}
        effect="coverflow"
        coverflowEffect={{
          rotate: 20,
          stretch: 25,
          depth: 150,
          modifier: 1,
          slideShadows: false,
        }}
      >
        {imgs.map((img) => (
          <SwiperSlideS key={img.url}>
            <Image src={img.url} alt="" width={600} height={400} />
          </SwiperSlideS>
        ))}
      </SwiperS>
    </>
  )
}
