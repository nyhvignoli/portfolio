import styled from 'styled-components'
import { Spacing, Breakpoints } from '../../../../theme'

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${Spacing.MOBILE.XX_SMALL};
  padding: ${Spacing.TABLET.XX_SMALL};
  padding-top: 0;
  margin-top: auto;

  @media (${Breakpoints.TABLET.SMALL.MIN}) {
    padding: ${Spacing.DESKTOP.XX_SMALL};
    padding-top: 0;
  }
`
