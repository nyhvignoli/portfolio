import styled from 'styled-components'
import {
  Border,
  Color,
  Spacing,
  Shadow,
  Breakpoints,
  FontSize
} from '../../../theme'

export const Wrapper = styled.div`
  ${({ noBackground, align }) => `
    height: 100%;
    background-color: ${noBackground ? 'transparent' : Color.GREY_700};
    border-radius: ${Border.RADIUS.X_SMALL};
    box-shadow: ${noBackground ? 'none' : Shadow.CARD.normal(Color.GREY_700)};
    padding: ${Spacing.TABLET.XX_SMALL};
    display: flex;
    flex-direction: column;
    grid-column: span 7;
    justify-content: ${align || 'start'};
    font-size: ${FontSize.MOBILE.BODY_3};
    color: ${Color.GREY_200};

    @media (${Breakpoints.TABLET.SMALL.MIN}) {
      padding: ${Spacing.DESKTOP.XX_SMALL};
      grid-column: span 7;
    }

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
      grid-column: span 4;
    }
  
    @media (${Breakpoints.DESKTOP.LARGE}) {
      grid-column: span 6;
      font-size: ${FontSize.DESKTOP.BODY_3};
    }
  `}
`

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  justify-content: flex-end;
  ${({ alignment }) => `align-items: ${alignment}`}
`
