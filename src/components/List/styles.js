import styled from 'styled-components'
import { Spacing, FontSize, Breakpoints } from '../../theme'
import { LIST_VARIANTS } from './List'

const listCommon = `
  display: flex;
  flex-direction: column;
  gap: ${Spacing.DESKTOP.TINY};
  margin-bottom: ${Spacing.MOBILE.XX_SMALL};
`

const checkMarkLI = `
  li {
    padding-left: ${Spacing.MOBILE.XX_SMALL};
  }

  li::marker {
    content: '✓';
    font-size: ${FontSize.MOBILE.BODY_1};

    @media (${Breakpoints.DESKTOP.LARGE}) {
      font-size: ${FontSize.DESKTOP.BODY_1};
    }
  }
`

export const OrderedList = styled.ol`
  ${listCommon}
`

export const UnorderedList = styled.ul`
  ${listCommon}
  ${({ variant, color, paddingInlineStartSmall }) => `
    ${variant === LIST_VARIANTS.checkmark && checkMarkLI};
    ${
      paddingInlineStartSmall &&
      `padding-inline-start: ${Spacing.MOBILE.X_SMALL}`
    };
    color: ${color};
  `}
`
