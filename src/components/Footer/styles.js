import styled from 'styled-components'
import { Color, Spacing, Breakpoints } from '../../theme'

export const StyledFooter = styled.footer`
  background-color: ${Color.GREY_900};
`

export const ContactInfos = styled.div`
  padding: 2rem 12rem;
  display: flex;
  flex-direction: column;
  text-align: center;
  position: relative;

  @media (max-width: 800px) {
    padding: 2rem;
  }
`

export const Icon = styled.img`
  margin-right: ${Spacing.MOBILE.XX_SMALL};
`

export const Divider = styled.hr`
  display: block;
  border-style: solid;
  border-color: ${Color.GREY_500};

  @media (${Breakpoints.TABLET.REGULAR.MIN}) {
    display: none;
  }
`
