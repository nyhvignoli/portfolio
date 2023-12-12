import styled from 'styled-components'
import { Breakpoints, Spacing } from '../../theme'

export const Grid = styled.div`
  ${({ width, position, noPaddingOnMobile }) => `
    display: grid;
    width: ${width};
    position: ${position};
    grid-template-columns: repeat(6, 1fr);
    grid-gap: ${Spacing.MOBILE.SMALL};
    max-width: 1124px;
    margin: auto;
    padding: ${noPaddingOnMobile ? 0 : `0px ${Spacing.MOBILE.X_SMALL}`};

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
      grid-template-columns: repeat(8, 1fr);
      padding: 0px ${Spacing.TABLET.X_SMALL};
    }

    @media (${Breakpoints.DESKTOP.LARGE}) {
      grid-template-columns: repeat(12, 1fr);
      padding: 0px ${Spacing.DESKTOP.X_SMALL};
    }
  `}
`
