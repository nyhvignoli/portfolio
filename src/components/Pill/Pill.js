import React from 'react'
import { Wrapper } from './styles'

export const PILL_SIZES = {
  small: 'small',
  medium: 'medium'
}

export const Pill = ({ size = PILL_SIZES.medium, text, noBackground }) => {
  return (
    <Wrapper size={size} noBackground={noBackground}>
      {text}
    </Wrapper>
  )
}
