import {
  Header,
  LogoLink,
  NavbarContainer,
  NavMenuList,
  BurguerContainer,
  BurguerLine,
  Button,
} from './styles'

import Image from 'next/image'

import logo from '../../../public/logo-ifce.png'
import NavItem from '../NavItem'
import { useState } from 'react'

export function Navbar() {
  const [navActive, setNavActive] = useState(false)
  const [activeIdx, setActiveIdx] = useState(-1)

  const MENU_LIST = [
    { text: 'Principal', href: '/' },
    // { text: 'Sobre Nós', href: '/sobre' },
    { text: 'Acomodações', href: '/acomodacoes' },
    { text: 'Tarifas', href: '/tarifas' },
    { text: 'Regulamento', href: '/regulamento' },
    { text: 'Contato', href: '/contato' },
  ]

  return (
    <Header color="green">
      <NavbarContainer>
        <LogoLink href="/">
          <Image
            src={logo}
            alt="logo Hotel Escola IFCE"
            width={40}
            height={40}
          />
          <span>
            Hotel <strong>Escola</strong> Guaramiranga
          </span>
        </LogoLink>

        <BurguerContainer
          onClick={() => setNavActive(!navActive)}
          className={`${navActive ? 'active' : ''} `}
        >
          <BurguerLine></BurguerLine>
          <BurguerLine></BurguerLine>
          <BurguerLine></BurguerLine>
        </BurguerContainer>

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
          <Button href="https://admin.hotelescola.ifce.edu.br/users/sign_in">
            RESERVE AQUI
          </Button>
        </NavMenuList>
      </NavbarContainer>
    </Header>
  )
}
