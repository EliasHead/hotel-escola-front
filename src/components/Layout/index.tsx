import { ReactNode } from 'react'
import { Navbar } from '../Navbar'
// import Footer from './footer'

type NavbarType = {
  children: ReactNode
}

export default function Layout({ children }: NavbarType) {
  return (
    <>
      <Navbar />
      <main>{children}</main>
      {/* <Footer /> */}
    </>
  )
}
