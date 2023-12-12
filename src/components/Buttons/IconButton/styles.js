import styled from 'styled-components'
import {
  Color,
  Border,
  Transition,
  Shadow,
  Breakpoints,
  Spacing
} from '../../../theme'

export const Button = styled.button`
  ${({ hideOnMobile }) =>
    hideOnMobile &&
    `
    display: none;
  `}

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    display: flex;
    align-items: center;
    justify-content: center;
    border: none;
    background-color: ${Color.JADE_GREEN_400};
    border-radius: ${Border.RADIUS.CIRCLE};
    cursor: pointer;
    transition: all ${Transition.DURATION.SUPER_FAST} ease;
    padding: ${Spacing.TABLET.X_TINY};
  ${({ disabled }) =>
    disabled
      ? `
    opacity: 0.3; 
    cursor: not-allowed;
  `
      : `
    &:hover {
      opacity: 0.8;
      box-shadow: ${Shadow.GENERIC.LIGHT};
      transition: all ${Transition.DURATION.SUPER_FAST} ease;
    }

    &:active {
      background-color: ${Color.JADE_GREEN_300};
    }
  `}

  @media (${Breakpoints.DESKTOP.LARGE}) {
    padding: ${Spacing.DESKTOP.X_TINY};
`
