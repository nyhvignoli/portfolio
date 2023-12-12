import React, { useState, useContext } from 'react'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import LanguageSelector from '../LanguageSelector/LanguageSelector'
import {
  StyledNav,
  LanguageMenu,
  MenuIcon,
  StyledList,
  ListItem,
  Anchor,
  Wrapper
} from './styles'
import { languagesIcon, menuIcon, cancelIcon } from '../../assets/system-icons'
import { GridLayout } from '../GridLayout'

const NavBar = () => {
  const [active, setActive] = useState(undefined)
  const [open, setOpen] = useState(false)
  const [drawerOpen, setDrawerOpen] = useState(false)
  const { dictionary } = useContext(LanguageContext)

  const handleActive = (menuItem) => {
    setActive(menuItem)
    setDrawerOpen(!drawerOpen)
  }

  const showSelect = () => {
    setOpen(true)
  }

  const hideSelect = () => {
    setOpen(false)
  }

  const showDrawer = () => {
    setDrawerOpen(!drawerOpen)
  }

  return (
    <StyledNav>
      <GridLayout width="100%">
        <Wrapper>
          <LanguageMenu
            aria-label="Language menu button"
            onMouseOver={showSelect}
            onMouseLeave={hideSelect}
            onFocus={showSelect}
            onBlur={hideSelect}
          >
            <img
              src={languagesIcon}
              alt={dictionary.alternativeText.icons.worldMap}
            />
            <LanguageSelector show={open} hideSelect={hideSelect} />
          </LanguageMenu>
          <StyledList hide={!drawerOpen}>
            <Anchor
              data-testid="about-me-item"
              onClick={() => handleActive('about-me')}
              active={active === 'about-me'}
              href="#top"
            >
              <ListItem>
                <Text tid="aboutMe" />
              </ListItem>
            </Anchor>
            <Anchor
              data-testid="knowledges"
              onClick={() => handleActive('knowledges')}
              active={active === 'knowledges'}
              href="#knowledges"
            >
              <ListItem>
                <Text tid="knowledges" />
              </ListItem>
            </Anchor>
            <Anchor
              data-testid="projects-item"
              onClick={() => handleActive('projects')}
              active={active === 'projects'}
              href="#projects"
            >
              <ListItem>
                <Text tid="projects" />
              </ListItem>
            </Anchor>
            <Anchor
              data-testid="contact-me-item"
              onClick={() => handleActive('contact-me')}
              active={active === 'contact-me'}
              href="#contact"
            >
              <ListItem>
                <Text tid="contactMe" />
              </ListItem>
            </Anchor>
          </StyledList>
          <MenuIcon
            onClick={showDrawer}
            src={drawerOpen ? cancelIcon : menuIcon}
            alt={
              dictionary.alternativeText.icons[drawerOpen ? 'cancel' : 'menu']
            }
          />
        </Wrapper>
      </GridLayout>
    </StyledNav>
  )
}

export default NavBar
