import styled from 'styled-components'
import {
  Border,
  Color,
  Spacing,
  Shadow,
  Breakpoints,
  FontSize
} from '../../../theme'

export const Wrapper = styled.div`
  ${({ alignment, border, backgroundColor, color }) => `
    border-left: ${border.width || Border.WIDTH.MEDIUM} solid ${
    border.color || Color.JADE_GREEN_500
  };
    background-color: ${backgroundColor || Color.GREY_600};
    border-radius: ${Border.RADIUS.X_SMALL};
    box-shadow: ${Shadow.CARD.normal(Color.GREY_700)};
    padding: ${Spacing.TABLET.XX_SMALL};
    display: flex;
    flex-direction: column;
    text-align: ${alignment || 'left'};
    font-size: ${FontSize.MOBILE.BODY_3};
    color: ${color || Color.GREY_100};

    @media (${Breakpoints.TABLET.SMALL.MIN}) {
      padding: ${Spacing.DESKTOP.XX_SMALL};
    }

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    }

    @media (${Breakpoints.DESKTOP.LARGE}) {
      font-size: ${FontSize.DESKTOP.BODY_3};
    }
  `}
`
