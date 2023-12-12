import styled from 'styled-components'
import { Spacing, Color, FontSize, Breakpoints } from '../../theme'

export const Wrapper = styled.div`
  grid-column: span 7;
  font-size: ${FontSize.MOBILE.BODY_3};
  color: ${Color.GREY_200};

  @media (${Breakpoints.TABLET.SMALL.MIN}) {
    grid-column: span 7;
  }

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    grid-column: span 4;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    grid-column: span 6;
    font-size: ${FontSize.DESKTOP.BODY_3};
  }
`

export const ListWrapper = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-inline-start: 0;
  gap: ${Spacing.MOBILE.XX_SMALL};
`
