import styled from 'styled-components'
import { Breakpoints, Spacing } from '../../theme'

export const BackgroundWrapper = styled.section`
  width: 100%;
  position: relative;
`

export const Wrapper = styled.div`
  position: relative;
  padding: ${Spacing.MOBILE.HUGE} 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  grid-column: 1/7;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    padding: ${Spacing.TABLET.HUGE} 0px;
    grid-column: 2/8;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    padding: ${Spacing.DESKTOP.HUGE} 0px;
    grid-column: 3/11;
  }
`

export const Content = styled.div`
  z-index: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: ${Spacing.MOBILE.SMALL};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    margin-bottom: ${Spacing.TABLET.SMALL};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    margin-bottom: ${Spacing.DESKTOP.SMALL};
  }
`
