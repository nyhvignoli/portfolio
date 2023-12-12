import React, { useContext } from 'react'
import { Body, Body5, Subhead, CleanLink } from '../../global/styles'
import { SocialMedia } from '../SocialMedia'
import { StyledFooter, Icon, Divider } from './styles'
import { GridLayout, GridItem } from '../GridLayout'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { Space } from '../Space'
import { Spacing } from '../../theme'
import { email, whatsapp } from '../../assets/social-media-icons'

const Footer = () => {
  const { dictionary } = useContext(LanguageContext)

  return (
    <StyledFooter id="contact" data-testid="footer">
      <Space
        mobile={{
          paddingTop: Spacing.MOBILE.REGULAR,
          paddingBottom: Spacing.MOBILE.SMALL
        }}
        tablet={{
          paddingTop: Spacing.TABLET.REGULAR,
          paddingBottom: Spacing.TABLET.SMALL
        }}
        desktop={{
          paddingTop: Spacing.DESKTOP.REGULAR,
          paddingBottom: Spacing.DESKTOP.SMALL
        }}
      >
        <GridLayout width="100%">
          <GridItem
            gridColumn={{
              mobile: '1 / span 6',
              tablet: { regular: '1 / span 5', small: '1 / span 5' },
              desktop: '1 / span 8'
            }}
          >
            <Subhead noTextTransform>
              <Text tid="callToActionContactText" />
            </Subhead>
            <CleanLink
              flex
              decorationOnHover="underline"
              href="mailto:nyhv.contato@gmail.com"
            >
              <Icon
                src={email}
                alt={dictionary.alternativeText.icons.email}
                width="24px"
                height="24px"
              />
              <Body>nyhv.contato@gmail.com</Body>
            </CleanLink>
            <Space
              mobile={{ marginTop: Spacing.MOBILE.X_SMALL }}
              tablet={{ marginTop: Spacing.TABLET.XX_SMALL }}
              desktop={{ marginTop: Spacing.DESKTOP.TINY }}
            >
              <CleanLink
                flex
                decorationOnHover="underline"
                href="//wa.me/+5551997661364"
                target="_blank"
                aria-label={`Whatsapp (${dictionary.ariaLabels.opensInANewTab})`}
              >
                <Icon
                  src={whatsapp}
                  alt={dictionary.alternativeText.icons.whatsapp}
                  width="24px"
                  height="24px"
                />
                <Body>+55 (51) 99766-1364</Body>
              </CleanLink>
            </Space>
          </GridItem>
          <GridItem
            styles={`display: flex; flex-direction: column; justify-content: space-between;`}
            gridColumn={{
              mobile: '1 / span 6',
              tablet: { regular: '6 / span 3', small: '1 / span 6' },
              desktop: '9 / span 4'
            }}
          >
            <Divider />
            <Space
              mobile={{ paddingTop: Spacing.MOBILE.SMALL }}
              tablet={{ paddingTop: '0px' }}
            >
              <Subhead>Social</Subhead>
            </Space>
            <SocialMedia />
          </GridItem>
          <GridItem
            gridColumn={{
              mobile: '1 / span 6',
              tablet: { regular: '1 / span 5', small: '1 / span 5' },
              desktop: '1 / span 8'
            }}
          >
            <Space
              mobile={{ paddingTop: Spacing.MOBILE.SMALL }}
              tablet={{ paddingTop: Spacing.TABLET.SMALL }}
              desktop={{ paddingTop: Spacing.DESKTOP.XX_SMALL }}
            >
              <Body5>
                © 2021 ~ {Text({ tid: 'developedBy' })} Aline "Nyh" Vignoli
              </Body5>
            </Space>
          </GridItem>
        </GridLayout>
      </Space>
    </StyledFooter>
  )
}

export default Footer
