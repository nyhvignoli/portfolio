import React from 'react'
import { Wrapper } from './styles'

export const CardContent = ({ children }) => {
  return <Wrapper data-testid="gallery-card-content">{children}</Wrapper>
}
