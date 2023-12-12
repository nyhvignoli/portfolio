import React from 'react'
import { Wrapper } from './styles'

export const CalloutCard = ({
  alignment = 'left',
  border = { color: '', width: '' },
  backgroundColor = '',
  color = '',
  children
}) => {
  return (
    <Wrapper
      data-testid="callout-card-wrapper"
      alignment={alignment}
      border={border}
      backgroundColor={backgroundColor}
      color={color}
    >
      {children}
    </Wrapper>
  )
}
