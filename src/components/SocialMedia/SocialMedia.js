import React, { useContext } from 'react'
import { SocialMediaWrapper, Icon } from './styles'
import {
  linkedin,
  github,
  instagram,
  twitter
} from '../../assets/social-media-icons'
import { Body4, CleanLink } from '../../global/styles'
import { LanguageContext } from '../../global/LanguagesContext'

export const SocialMedia = () => {
  const { dictionary } = useContext(LanguageContext)

  return (
    <SocialMediaWrapper>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://github.com/nyhvignoli"
        target="_blank"
        rel="noreferrer noopener"
        aria-label={`Github (${dictionary.ariaLabels.opensInANewTab})`}
      >
        <Icon src={github} alt="" aria-hidden="true" />
        <Body4>GitHub</Body4>
      </CleanLink>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://www.linkedin.com/in/nyhvignoli/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon src={linkedin} alt="" aria-hidden="true" />
        <Body4>LinkedIn</Body4>
      </CleanLink>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://www.instagram.com/nyh_v/"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon src={instagram} alt="" aria-hidden="true" />
        <Body4>Instagram</Body4>
      </CleanLink>
      <CleanLink
        flex
        decorationOnHover="underline"
        href="https://twitter.com/nyhdevignoli"
        target="_blank"
        rel="noreferrer noopener"
      >
        <Icon src={twitter} alt="" aria-hidden="true" />
        <Body4>Twitter</Body4>
      </CleanLink>
    </SocialMediaWrapper>
  )
}
