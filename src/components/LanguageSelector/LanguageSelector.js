import React, { useContext } from 'react'
import { LanguageContext } from '../../global/LanguagesContext'
import { LanguageMenu, MenuItem } from './styles'

const LanguageSelector = ({ show, hideSelect }) => {
  const { userLanguage, userLanguageChange } = useContext(LanguageContext)

  const handleItemClick = (language) => {
    userLanguageChange(language)
    hideSelect()
  }

  const onKeyDown = (e, language) =>
    e.key === 'Enter' && handleItemClick(language)

  return (
    <LanguageMenu aria-label="language-menu" show={show}>
      <MenuItem
        tabIndex={0}
        selected={userLanguage === 'en'}
        onClick={() => handleItemClick('en')}
        onKeyDown={(e) => onKeyDown(e, 'en')}
      >
        English
      </MenuItem>
      <MenuItem
        tabIndex={0}
        selected={userLanguage === 'pt'}
        onClick={() => handleItemClick('pt')}
        onKeyDown={(e) => onKeyDown(e, 'pt')}
      >
        Português
      </MenuItem>
    </LanguageMenu>
  )
}

export default LanguageSelector
