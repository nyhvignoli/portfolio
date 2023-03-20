import React from 'react'
import { Wrapper } from './styles'
import { Subhead } from '../../../global/styles'

const CommunitiesContent = ({ site, logo, name, description }) => {
  return (
    <Wrapper data-aos="zoom-in-up" data-aos-duration="500">
      <a href={site} target="_blank" rel="noreferrer">
        <img src={logo.image} alt={logo.alt} />
        <Subhead>{name}</Subhead>
      </a>
      <p>{description}</p>
    </Wrapper>
  )
}

export default CommunitiesContent
