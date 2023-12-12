import styled from 'styled-components'
import { Color } from '../../theme'

export const Wrapper = styled.section`
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${Color.GREY_800};
`

const boxCommon = `
  width: 100%;
  height: 100px;
`

export const DarkBox = styled.div`
  ${boxCommon}
`

export const GreyBox = styled.div`
  ${boxCommon}
  background-color: ${Color.GREY_700};
`
