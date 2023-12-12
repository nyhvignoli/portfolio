import styled from 'styled-components'
import Paper from '@material-ui/core/Paper'
import { Color } from '../../theme'

export const Background = styled.div`
  background-color: ${Color.TRANSPARENT('0.95')};
  width: 100vw;
  height: 100vh;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  z-index: 3000;
`

export const Wrapper = styled.div`
  height: 100%;
  width: 80%;
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  flex-grow: 1;

  @media (max-width: 420px) {
    width: 100%;
  }
`

export const Header = styled(Paper)`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 20px;
`

export const ImageWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  max-height: calc(100% - 100px);
  overflow: auto;
`

export const Image = styled.img`
  width: 100%;
  max-height: inherit;
  object-fit: contain;
  transition: all 0.2s ease-in-out;
`
