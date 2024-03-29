import styled from 'styled-components'
import profilePic from '../../assets/profile-aline-vignoli.jpg'
import { theme } from '../../theme'

const { colors } = theme

export const Wrapper = styled.section`
  width: 100%;
  display: flex;
  color: ${colors.white};
  background-color: ${colors.blue};

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`

export const InfoSection = styled.div`
  display: flex;
  flex-direction: column;
  flex-wrap: wrap;
  padding: 2rem;
  width: 55%;

  p {
    font-size: 1.4rem;
    opacity: 0.8;
  }

  @media (max-width: 1024px) {
    padding: 1rem;
    width: 100%;
  }
`

export const ImageSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-end;
  width: 100%;
  background-image: url(${profilePic});
  background-repeat: no-repeat;
  background-position: center;
  opacity: 0.5;
  height: 100%;

  @media (max-width: 1024px) {
    box-shadow: 2px 2px 6px 2px #012940;
  }
`

export const Filter = styled.div`
  background-color: ${colors.lightBlue};
  width: 45%;
  height: 592px;
  position: relative;

  @media (max-width: 1024px) {
    width: 592px;
    margin: auto;
  }
`

export const ButtonsLockup = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
  width: 100%;
  flex-wrap: wrap;
`
