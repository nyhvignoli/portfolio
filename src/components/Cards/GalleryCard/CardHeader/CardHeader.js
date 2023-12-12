import React from 'react'
import { Cover, Header, Wrapper } from './styles'
import { SecondaryButton, Subhead2, Subhead3 } from '../../../../global/styles'
import { Space } from '../../../Space'

export const CardHeader = ({
  title,
  subtitle,
  titleStyles = '',
  cover = { src: '', alt: '' },
  cta = { text: '', arialLabel: '', onClick: null, onFocus: null }
}) => {
  return (
    <Wrapper data-testid="gallery-card-header">
      {!!cover.src && <Cover src={cover.src} alt={cover.alt} />}
      <Header>
        <Subhead2 styles={titleStyles}>{title}</Subhead2>
        <Subhead3>{`{ ${subtitle} }`}</Subhead3>
        {!!cta.text && (
          <Space mobile={{ marginTop: 'auto' }}>
            <SecondaryButton small onClick={cta.onClick} onFocus={cta.onFocus}>
              {cta.text}
            </SecondaryButton>
          </Space>
        )}
      </Header>
    </Wrapper>
  )
}
