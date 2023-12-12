import styled from 'styled-components'
import { Spacing } from '../../theme'

export const SocialMediaWrapper = styled.div`
  display: grid;
  gap: 8px;
  row-gap: ${Spacing.MOBILE.X_SMALL};
  grid-template-columns: repeat(2, 1fr);
  max-width: 360px;
  flex-wrap: wrap;
`

export const Icon = styled.img`
  margin-right: ${Spacing.MOBILE.XX_SMALL};
`
