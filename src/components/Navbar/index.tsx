import {
  Header,
  LogoLink,
  NavbarContainer,
  NavMenuList,
  BurguerContainer,
  BurguerLine,
} from './styles'

import Image from 'next/image'

import logo from '../../../public/logo-react.svg'
import NavItem from '../NavItem'
import { useState } from 'react'

export function Navbar() {
  const [navActive, setNavActive] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)

  const MENU_LIST = [
    { text: 'Home', href: '/' },
    { text: 'Documentos', href: '/docs' },
    { text: 'Blog', href: '/blog' },
  ]

  return (
    <Header>
      <NavbarContainer>
        <LogoLink href="/">
          <Image src={logo} alt="logo react" width={20} height={20} />
          <span>React</span>
        </LogoLink>

        <BurguerContainer
          onClick={() => setNavActive(!navActive)}
          className={`${navActive ? 'active' : ''} `}
        >
          <BurguerLine></BurguerLine>
          <BurguerLine></BurguerLine>
          <BurguerLine></BurguerLine>
        </BurguerContainer>

        {/* <NavLink>
          <ALink href="/docs">Docs</ALink>
          <ALink href="/learn">Tutorial</ALink>
          <ALink href="/blog">Blog</ALink>
        </NavLink> */}

        <NavMenuList className={`${navActive ? 'active' : ''} `}>
          {MENU_LIST.map((menu, idx) => (
            <div
              onClick={() => {
                setActiveIdx(idx)
                setNavActive(false)
              }}
              key={menu.text}
            >
              <NavItem active={activeIdx === idx} {...menu} />
            </div>
          ))}
        </NavMenuList>
      </NavbarContainer>
    </Header>
  )
}
