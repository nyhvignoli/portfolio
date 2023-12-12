import styled from 'styled-components'
import { Spacing, Breakpoints, Color } from '../../../../theme'

export const Wrapper = styled.div`
  background-color: ${Color.GREY_900};
  position: relative;
  padding: ${Spacing.TABLET.XX_SMALL};
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;

  @media (${Breakpoints.TABLET.SMALL.MIN}) {
    padding: ${Spacing.DESKTOP.XX_SMALL};
  }
`

export const Cover = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  opacity: 0.1;
  position: absolute;
  top: 0;
  left: 0;
  border-top-right-radius: inherit;
  border-top-left-radius: inherit;
`

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: ${Spacing.DESKTOP.X_TINY};
  position: relative;
  min-height: 116px;
`
