import styled from 'styled-components'
import { Breakpoints, Spacing } from '../../theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  gap: ${Spacing.MOBILE.SMALL};

  grid-column: 1/7;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    grid-column: 1/9;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    grid-column: 1/13;
  }
`

export const CarouselWrapper = styled.div`
  overflow: hidden;
  display: flex;
  align-items: center;
  width: 100%;
  gap: ${Spacing.MOBILE.SMALL};
`

export const Slides = styled.div`
  display: flex;
  gap: ${Spacing.MOBILE.SMALL};
  overflow-x: scroll;
  scroll-snap-type: x mandatory;
  scroll-behavior: smooth;
  -webkit-overflow-scrolling: touch;
  -ms-overflow-style: none;

  &::-webkit-scrollbar {
    display: none;
  }

  & > div {
    flex-shrink: 0;
    position: relative;
    scroll-snap-align: center;
    scroll-snap-stop: always;
    -webkit-scroll-snap-stop: always;
  }
`
