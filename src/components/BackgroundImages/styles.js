import styled from 'styled-components'
import { Breakpoints } from '../../theme'

export const Image = styled.img`
  width: 60%;
  object-fit: cover;
  height: 100%;
  position: absolute;
  top: 0;
  z-index: 0;
  ${({ styles }) =>
    `
    opacity: ${styles.desktop.opacity};
    left: ${styles.desktop.left};

    @media (${Breakpoints.MOBILE.LARGE.MAX}) {
      opacity: ${styles.mobile.opacity};
      width: 100%;
      top: ${styles.mobile.top};
      left: 0;
    }
    `}
`
