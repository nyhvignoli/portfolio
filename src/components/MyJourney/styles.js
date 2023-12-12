import styled from 'styled-components'
import { Breakpoints, Color, Spacing } from '../../theme'

export const Wrapper = styled.section`
  padding: 2rem 5rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${Color.GREY_800};
  text-align: center;
  z-index: -3000;
  padding: ${Spacing.MOBILE.HUGE} 0px;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    padding: ${Spacing.TABLET.HUGE} 0px;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    padding: ${Spacing.DESKTOP.HUGE} 0px;
  }
`
