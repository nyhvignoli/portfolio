import styled from 'styled-components'
import {
  Border,
  Spacing,
  Color,
  FontSize,
  FontWeight,
  LineHeight,
  Breakpoints
} from '../../theme'
import { PILL_SIZES } from './Pill'

export const smallStyles = `
  font-size: ${FontSize.MOBILE.BODY_5};
  line-height: ${LineHeight.MOBILE.BODY_5};
  font-weight: ${FontWeight.X_LIGHT};
  padding: ${Spacing.MOBILE.X_TINY} ${Spacing.MOBILE.XX_SMALL};

  @media (${Breakpoints.DESKTOP.LARGE}) {
    font-size: ${FontSize.DESKTOP.BODY_5};
    line-height: ${LineHeight.DESKTOP.BODY_5};
    padding: ${Spacing.MOBILE.TINY} ${Spacing.MOBILE.X_SMALL};
  }
`

export const Wrapper = styled.div`
  ${({ size, noBackground }) => `
    border: ${Border.WIDTH.THIN} solid ${Color.GREY_200};
    border-radius: ${Border.RADIUS.PILL};
    font-size: ${FontSize.MOBILE.BODY_3};
    padding: ${Spacing.MOBILE.XX_SMALL} ${Spacing.MOBILE.SMALL};
    background-color: ${noBackground ? 'transparent' : Color.GREY_700};
    color: ${Color.GREY_200};

    ${size === PILL_SIZES.small && smallStyles}
  `}
`
