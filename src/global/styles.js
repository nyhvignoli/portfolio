import styled from 'styled-components'
import {
  Border,
  Breakpoints,
  Color,
  FontFamily,
  FontSize,
  FontWeight,
  LineHeight,
  Shadow,
  Sizes,
  Spacing,
  Transition
} from '../theme'

// const { colors } = theme

/* Container */
export const BaseFlex = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`

/* Typography */
const headingCommon = `
  font-family: ${FontFamily.HEADING};
`

export const Title = styled.h1`
  ${headingCommon}
  font-size: ${FontSize.MOBILE.HEADING_1};
  line-height: ${LineHeight.MOBILE.HEADING_1};
  margin-bottom: ${Spacing.MOBILE.X_SMALL};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    margin-bottom: ${Spacing.TABLET.X_SMALL};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.HEADING_1};
    line-height: ${LineHeight.DESKTOP.HEADING_1};
    margin-bottom: ${Spacing.DESKTOP.X_SMALL};
  }
`

export const Heading2 = styled.h2`
  ${headingCommon}
  font-size: ${FontSize.MOBILE.HEADING_2};
  line-height: ${LineHeight.MOBILE.HEADING_2};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.HEADING_2};
    line-height: ${LineHeight.DESKTOP.HEADING_2};
  }
`

export const Heading3 = styled.h3`
  ${headingCommon}
  font-size: ${FontSize.MOBILE.HEADING_3};
  line-height: ${LineHeight.MOBILE.HEADING_3};
  color: ${Color.GREY_200};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.HEADING_3};
    line-height: ${LineHeight.DESKTOP.HEADING_3};
  }
`

const subheadCommon = `
  letter-spacing: 0.1em;
  font-family: ${FontFamily.SUBHEAD};
  color: ${Color.GREY_100};
  font-weight: ${FontWeight.MEDIUM};
`

export const Subhead = styled.h2`
  ${subheadCommon}
  ${({ noTextTransform }) =>
    `text-transform: ${noTextTransform ? 'inherit' : 'uppercase'}`};
  font-size: ${FontSize.MOBILE.SUBHEAD_1};
  line-height: ${LineHeight.MOBILE.SUBHEAD_1};
  margin-bottom: ${Spacing.MOBILE.SMALL};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    margin-bottom: ${Spacing.TABLET.SMALL};
  }

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.SUBHEAD_1};
    line-height: ${LineHeight.DESKTOP.SUBHEAD_1};
    margin-bottom: ${Spacing.DESKTOP.SMALL};
  }
`

export const Subhead2 = styled.h3`
  ${subheadCommon}
  text-transform: uppercase;
  font-size: ${FontSize.MOBILE.SUBHEAD_2};
  line-height: ${LineHeight.MOBILE.SUBHEAD_2};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.SUBHEAD_2};
    line-height: ${LineHeight.DESKTOP.SUBHEAD_2};
  }

  ${({ styles }) => styles}
`

export const Subhead3 = styled.h4`
  ${subheadCommon}
  letter-spacing: 0;
  font-size: ${FontSize.MOBILE.SUBHEAD_3};
  line-height: ${LineHeight.MOBILE.SUBHEAD_3};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.SUBHEAD_3};
    line-height: ${LineHeight.DESKTOP.SUBHEAD_3};
  }

  ${({ styles }) => styles}
`

const bodySmallStyles = `
  font-size: ${FontSize.DESKTOP.BODY_4};
  line-height: ${LineHeight.DESKTOP.BODY_4};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_4};
    line-height: ${LineHeight.DESKTOP.BODY_4};
  }
`

export const Body = styled.span`
  font-size: ${FontSize.MOBILE.BODY_3};
  line-height: ${LineHeight.MOBILE.BODY_3};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_3};
    line-height: ${LineHeight.DESKTOP.BODY_3};
  }

  ${({ small, align }) => `
    ${small && bodySmallStyles};
    text-align: ${align};
  `}
`

export const Body4 = styled.span`
  font-size: ${FontSize.MOBILE.BODY_4};
  line-height: ${LineHeight.MOBILE.BODY_4};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_4};
    line-height: ${LineHeight.DESKTOP.BODY_4};
  }
`

export const Body5 = styled.span`
  font-size: ${FontSize.MOBILE.BODY_5};
  line-height: ${LineHeight.MOBILE.BODY_5};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_5};
    line-height: ${LineHeight.DESKTOP.BODY_5};
  }
`

/* List */
export const StackList = styled.ul`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  list-style-type: none;
  padding-inline-start: 0;
  gap: 1rem;
  align-self: self-start;

  ${({ small }) => small && `gap: 0.5rem;`}

  @media (max-width: 900px) {
    gap: 0.5rem;
  }
`

export const ListItem = styled.li`
  opacity: 0.8;
  border: 1px solid #fff;
  padding: 0.3rem 1rem;
  border-radius: 2rem;

  ${({ small }) =>
    small &&
    `
      font-size: 1rem;
      padding: 0.2rem 0.8rem ;
      border: 1px solid rgba(0, 67, 108, 0.64);
    `}

  @media (max-width: 800px) {
    font-size: 1rem;
    padding: 0.2rem 0.8rem;
  }
`

/* CTA */
const buttonCommon = `
  border: none;
  background-color: ${Color.JADE_GREEN_400};
  padding: ${Spacing.DESKTOP.TINY} ${Spacing.DESKTOP.REGULAR};
  border-radius: ${Border.RADIUS.REGULAR};
  font-size: 16px;
  font-family: 'Open Sans', sans-serif;
  font-weight: ${FontWeight.SEMI_BOLD};
  min-width: ${Sizes.BUTTON.WIDTH.DESKTOP.REGULAR};
  cursor: pointer;
  transition: all ${Transition.DURATION.SUPER_FAST} ease;

  &:hover {
    opacity: 0.8;
    box-shadow: ${Shadow.GENERIC.LIGHT};
    transition: all ${Transition.DURATION.SUPER_FAST} ease;
  }

  &:active {
    background-color: ${Color.JADE_GREEN_300};
  }

  @media (${Breakpoints.MOBILE.LARGE.MAX}) {
    width: 100%;
  }
`

export const PrimaryButton = styled.button`
  ${buttonCommon}
`

export const SecondaryButton = styled.button`
  ${buttonCommon}
  background-color: transparent;
  border: ${Border.WIDTH.LIGHT} solid ${Color.GREY_100};
  color: ${Color.GREY_100};
  outline-offset: 2px;

  &:focus,
  &:hover {
    border: ${Border.WIDTH.LIGHT} solid ${Color.JADE_GREEN_300};
    background-color: ${Color.GREY_700};
  }

  ${({ small }) =>
    small &&
    `
    padding: ${Spacing.DESKTOP.X_TINY} ${Spacing.DESKTOP.SMALL};
    border-radius: ${Border.RADIUS.SMALL};
    min-width: ${Sizes.BUTTON.WIDTH.DESKTOP.SMALL};
  `}
`

export const ButtonLink = styled.a`
  ${buttonCommon}
  color: ${Color.GREY_900};
  text-decoration: none;
  text-align: center;
`

export const InlineLink = styled.a`
  ${({ flex }) => flex && `display: flex; width: fit-content;`};
  color: ${Color.JADE_GREEN_300};
  transition: all ${Transition.DURATION.SUPER_FAST} ease;

  &:hover {
    text-decoration: none;
    opacity: 0.8;
    transition: all ${Transition.DURATION.SUPER_FAST} ease;
  }
`

export const CleanLink = styled.a`
  ${({ flex }) => flex && `display: flex; align-items: center;`};
  text-decoration: none;
  color: inherit;
  width: fit-content;

  &:visited {
    color: ${Color.JADE_GREEN_500};
  }

  &:hover {
    ${({ decorationOnHover }) =>
      decorationOnHover && `text-decoration: ${decorationOnHover};`}
  }
`

/* TO BE DEPRACATED */
export const Anchor = styled.a`
  color: ${Color.JADE_GREEN_300};

  &:hover {
    text-decoration: none;
    opacity: 0.8;
  }

  @media (${Breakpoints.MOBILE.LARGE.MAX}) {
    width: 100%;
  }
`
