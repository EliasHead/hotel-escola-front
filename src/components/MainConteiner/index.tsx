import { ReactNode } from 'react'
import { Footer } from '../Footer'
import { Navbar } from '../Navbar'

type MainContainerType = {
  children: ReactNode
}

export function MainContainer({ children }: MainContainerType) {
  return (
    <>
      <Navbar />
      <div>{children}</div>
      <Footer />
    </>
  )
}
