import Link from 'next/link'
import { InstagramLogo, WhatsappLogo } from 'phosphor-react'
import React from 'react'
import { FooterContainer, Content, FooterBox, SocialBox } from './styles'

export function Footer() {
  return (
    <FooterContainer>
      <Content>
        <FooterBox>
          <span>&copy; Copyright 2023 Instituto Federal do Ceará. </span>
        </FooterBox>
        <SocialBox>
          <Link href="https://www.instagram.com/hotelescolaifce/">
            <InstagramLogo size={32} color="#ffffff" />
          </Link>
          <Link href="https://api.whatsapp.com/send?phone=5585994098657&text=Gostaria%20de%20mais%20informa%C3%A7%C3%B5es%20sobre%20o%20Hotel.">
            <WhatsappLogo size={32} color="#ffffff" />
          </Link>
        </SocialBox>
      </Content>
    </FooterContainer>
  )
}
