import { NavLink } from './styled'

type NavItemProps = {
  text: string
  href: string
  active: boolean
}

const NavItem = ({ text, href, active }: NavItemProps) => {
  return <NavLink href={href}>{text}</NavLink>
}

export default NavItem
