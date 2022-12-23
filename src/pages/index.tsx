import { Slider } from '../components/Slider'

export default function Home() {
  const imgs = [
    {
      url: '/../public/hotel/h1.jpeg',
    },
    {
      url: '/../public/hotel/h2.jpeg',
    },
    {
      url: '/../public/hotel/h3.jpeg',
    },
    {
      url: '/../public/hotel/h4.jpeg',
    },
    {
      url: '/../public/hotel/h5.jpeg',
    },
    {
      url: '/../public/hotel/h6.jpeg',
    },
    {
      url: '/../public/hotel/h7.jpeg',
    },
    {
      url: '/../public/hotel/h8.jpeg',
    },
    {
      url: '/../public/hotel/h9.jpeg',
    },
    {
      url: '/../public/hotel/h10.jpeg',
    },
  ]

  return (
    <>
      <Slider imgs={imgs} />
    </>
  )
}
