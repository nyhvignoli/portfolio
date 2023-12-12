import React from 'react'
import { Wrapper } from './styles'

export const GridItem = ({
  children,
  styles,
  gridColumn = { mobile: '', tablet: { small: '', regular: '' }, desktop: '' },
  marginRightOverflow = { mobile: '' }
}) => {
  return (
    <Wrapper
      styles={styles}
      gridColumn={gridColumn}
      marginRightOverflow={marginRightOverflow}
    >
      {children}
    </Wrapper>
  )
}
