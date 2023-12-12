import styled from 'styled-components'
import {
  Breakpoints,
  Color,
  Shadow,
  Spacing,
  Sizes,
  FontWeight,
  FontSize,
  Transition
} from '../../theme'

export const Wrapper = styled.div`
  height: ${Sizes.NAV.HEIGHT.DESKTOP.REGULAR};
  grid-column: 1/7;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    grid-column: 1/9;
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    grid-column: 1/13;
  }
`

export const StyledNav = styled.nav`
  position: sticky;
  top: 0;
  z-index: 3000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: ${Color.GREY_600};
  box-shadow: ${Shadow.NAV};
  color: ${Color.GREY_50};
  font-weight: ${FontWeight.SEMI_BOLD};
  font-size: ${FontSize.MOBILE.BODY_2};

  img {
    width: ${Sizes.ICON.WIDTH.DESKTOP.SMALL};
  }

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_2};
  }
`

export const LanguageMenu = styled.button`
  justify-self: flex-start;
  position: relative;
  background: none;
  color: inherit;
  border: none;
  padding: 4px;
  font: inherit;
  cursor: pointer;
`

export const MenuIcon = styled.img`
  z-index: 1;
  width: ${Sizes.ICON.WIDTH.DESKTOP.SMALL};
  transition: all 0.4s ease-in-out 0.1s;

  @media (${Breakpoints.TABLET.SMALL.MIN}) {
    display: none;
  }
`

export const StyledList = styled.ul`
  display: flex;
  list-style-type: none;
  justify-content: space-between;
  padding-inline-start: 0;
  width: 100%;
  max-width: 500px;
  min-width: 370px;
  height: 100%;
  align-items: center;

  @media (${Breakpoints.TABLET.REGULAR.MAX}) {
    max-width: 370px;
  }

  @media (${Breakpoints.MOBILE.LARGE.MAX}) {
    gap: ${Spacing.MOBILE.REGULAR};
    font-size: ${FontSize.MOBILE.BODY_1};
    justify-content: center;
    align-items: center;
    position: fixed;
    right: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    background-color: ${Color.GREY_900};
    height: 100vh;
    max-width: 100%;
    margin: 0;
    text-align: center;
    transition: all ${Transition.DURATION.FAST} ease-in-out ${
  Transition.DURATION.SUPER_FAST
};

    ${({ hide }) =>
      hide &&
      `
        transition: all ${Transition.DURATION.SLOW} ease-in-out ${Transition.DURATION.SUPER_FAST};
        left: 100%;
      `}
`

export const ListItem = styled.li``

export const Anchor = styled.a`
  padding: ${Spacing.MOBILE.TINY};
  box-sizing: border-box;
  text-decoration: none;
  color: ${Color.GREY_100};
  transform: scale(1);
  transition: all ${Transition.DURATION.FAST} ease;

  &:active {
    color: ${Color.JADE_GREEN_400};
  }

  ${({ active }) =>
    active
      ? `
    transform: scale(1.1);
    transition: all ${Transition.DURATION.FAST} ease;
    border-bottom: 2px solid ${Color.JADE_GREEN_400};`
      : `&:hover {
    opacity: 0.6;
    transform: scale(1.1) translateY(1px);
    transition: all ${Transition.DURATION.FAST} ease;
    border-bottom: 2px solid ${Color.JADE_GREEN_400};
  }
  &:focus {
    opacity: 0.6;
    transform: scale(1.1) translateY(1px);
    transition: all ${Transition.DURATION.FAST} ease;
  }
  `}
`
