import styled from 'styled-components'
import { theme } from '../../theme'

const { colors } = theme

export const Wrapper = styled.section`
  padding: 2rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  display: flex;
  background-color: ${colors.deepBlue};

  @media (max-width: 800px) {
    padding: 1rem 2rem;

    h2 {
      font-size: 2.5rem;
    }
  }
`

export const Content = styled.div`
  padding: 0;
  display: flex;
  justify-content: center;
  gap: 5rem;

  @media (max-width: 900px) {
    flex-direction: column;
    gap: 1rem;
  }
`
