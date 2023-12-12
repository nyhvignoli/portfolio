import React from 'react'
import { Color, Sizes } from '../../../theme'
import { Svg } from './styles'

export const DIRECTIONS = {
  right: 'right',
  left: 'left',
  top: 'top',
  bottom: 'bottom'
}

export const Chevron = ({
  direction = DIRECTIONS.right,
  color = Color.JADE_GREEN_300,
  dimensions = {
    width: Sizes.ICON.SQUARE.XX_SMALL,
    height: Sizes.ICON.SQUARE.XX_SMALL
  }
}) => {
  const { width, height } = dimensions

  return (
    <Svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      direction={direction}
    >
      <title>{`Chevron ${direction}`}</title>
      <path
        d="M9.29006 6.71002C8.90006 7.10002 8.90006 7.73002 9.29006 8.12002L13.1701 12L9.29006 15.88C8.90006 16.27 8.90006 16.9 9.29006 17.29C9.68006 17.68 10.3101 17.68 10.7001 17.29L15.2901 12.7C15.6801 12.31 15.6801 11.68 15.2901 11.29L10.7001 6.70002C10.3201 6.32002 9.68006 6.32002 9.29006 6.71002Z"
        fill={color}
      />
    </Svg>
  )
}
