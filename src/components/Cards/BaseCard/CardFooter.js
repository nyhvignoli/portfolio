import React from 'react'
import { Footer } from './styles'

export const CardFooter = ({ children, alignment = 'center' }) => {
  return (
    <Footer data-testid="base-card-footer" alignment={alignment}>
      {children}
    </Footer>
  )
}
