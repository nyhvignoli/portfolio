import styled from 'styled-components'
import { Spacing, Breakpoints, Color } from '../../../../theme'

export const Wrapper = styled.div`
  padding: ${Spacing.TABLET.XX_SMALL};
  color: ${Color.GREY_200};

  @media (${Breakpoints.TABLET.SMALL.MIN}) {
    padding: ${Spacing.DESKTOP.XX_SMALL};
  }
`
