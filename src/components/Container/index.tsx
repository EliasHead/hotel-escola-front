import { ReactNode } from 'react'
import { Box } from './styles'

type ContainerType = {
  children: ReactNode
}
export function Container({ children }: ContainerType) {
  return <Box>{children}</Box>
}
