import styled from 'styled-components'
import { Breakpoints } from '../../../theme'

export const Wrapper = styled.div`
  ${({ gridColumn, marginRightOverflow, styles }) => `
    grid-column: ${gridColumn?.mobile || 'span 7'};
    margin-right: ${marginRightOverflow.mobile || 0};

    @media (${Breakpoints.TABLET.SMALL.MIN}) {
      grid-column: ${gridColumn.tablet?.small || 'span 8'};
      margin-right: 0;
    }

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
      grid-column: ${gridColumn.tablet?.regular || 'span 8'};
    }

    @media (${Breakpoints.DESKTOP.LARGE}) {
      grid-column: ${gridColumn?.desktop || 'span 12'};
    }

    ${styles}
  `}
`
