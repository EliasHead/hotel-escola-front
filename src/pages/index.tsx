import { Slider } from '../components/Slider'

export default function Home() {
  const imgs = [
    {
      url: '/hotel/h1.jpeg',
    },
    {
      url: '/hotel/h2.jpeg',
    },
    {
      url: '/hotel/h3.jpeg',
    },
    {
      url: '/hotel/h4.jpeg',
    },
    {
      url: '/hotel/h5.jpeg',
    },
    {
      url: '/hotel/h6.jpeg',
    },
    {
      url: '/hotel/h7.jpeg',
    },
    {
      url: '/hotel/h8.jpeg',
    },
    {
      url: '/hotel/h9.jpeg',
    },
    {
      url: '/hotel/h10.jpeg',
    },
  ]

  return (
    <>
      <Slider imgs={imgs} />
    </>
  )
}
