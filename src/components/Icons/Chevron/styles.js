import styled from 'styled-components'

const Direction = {
  right: null,
  left: 'transform: rotate(180deg);',
  top: 'transform: rotate(-90deg);',
  bottom: 'transform: rotate(90deg);'
}

export const Svg = styled.svg`
  opacity: inherit;
  ${({ direction }) => Direction[direction]}
`
