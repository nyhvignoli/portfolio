import styled from 'styled-components'
import { Color, Spacing, Breakpoints } from '../../theme'

export const Wrapper = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: ${Color.GREY_700};
  padding: ${Spacing.MOBILE.HUGE} 0px;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    padding: ${Spacing.TABLET.HUGE} 0px;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    padding: ${Spacing.DESKTOP.HUGE} 0px;
  }
`
