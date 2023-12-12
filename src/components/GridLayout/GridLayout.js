import React from 'react'
import { Grid } from './styles'

export const GridLayout = ({
  children,
  width = 'auto',
  position = 'initial',
  noPaddingOnMobile
}) => {
  return (
    <Grid
      noPaddingOnMobile={noPaddingOnMobile}
      width={width}
      position={position}
    >
      {children}
    </Grid>
  )
}
