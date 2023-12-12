import styled from 'styled-components'
import { Border, Breakpoints, Color, Spacing, Transition } from '../../theme'

export const Wrapper = styled.div`
  list-style-type: none;
  padding-inline-start: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: ${Spacing.MOBILE.X_SMALL};
  height: 32px;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
  }
`

export const Step = styled.button`
  ${({ active }) => `
    width: 12px;
    height: 12px;
    border: none;
    border-radius: ${Border.RADIUS.CIRCLE};
    background-color: ${Color.VIOLET_PINK_400};
    opacity: 0.3;
    transition: all ease ${Transition.DURATION.FAST};
    ${active && `transform: scale(1.5); opacity: 1`};
    cursor: pointer;

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    
    }

    @media (${Breakpoints.DESKTOP.LARGE}) {
  
    }
  `}
`
