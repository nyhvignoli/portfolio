import styled from 'styled-components'
import { Breakpoints } from '../../theme'

export const Wrapper = styled.div`
  ${({ mobile, tablet, desktop }) => `
    margin: ${mobile.margin || 0};
    margin-top: ${mobile.marginTop || 0};
    margin-right: ${mobile.marginRight || 0};
    margin-bottom: ${mobile.marginBottom || 0};
    margin-left: ${mobile.marginLeft || 0};
    padding: ${mobile.padding || 0};
    padding-top: ${mobile.paddingTop || 0};
    padding-right: ${mobile.paddingRight || 0};
    padding-bottom: ${mobile.paddingBottom || 0};
    padding-left: ${mobile.paddingLeft || 0};

    @media (${Breakpoints.TABLET.REGULAR.MIN}) {
      margin: ${tablet.margin || null};
      margin-top: ${tablet.marginTop || null};
      margin-right: ${tablet.marginRight || null};
      margin-bottom: ${tablet.marginBottom || null};
      margin-left: ${tablet.marginLeft || null};
      padding: ${tablet.padding || null};
      padding-top: ${tablet.paddingTop || null};
      padding-right: ${tablet.paddingRight || null};
      padding-bottom: ${tablet.paddingBottom || null};
      padding-left: ${tablet.paddingLeft || null};
    }

    @media (${Breakpoints.DESKTOP.LARGE}) {
      margin: ${desktop.margin || null};
      margin-top: ${desktop.marginTop || null};
      margin-right: ${desktop.marginRight || null};
      margin-bottom: ${desktop.marginBottom || null};
      margin-left: ${desktop.marginLeft || null};
      padding: ${desktop.padding || null};
      padding-top: ${desktop.paddingTop || null};
      padding-right: ${desktop.paddingRight || null};
      padding-bottom: ${desktop.paddingBottom || null};
      padding-left: ${desktop.paddingLeft || null};
    }
  `}
`
