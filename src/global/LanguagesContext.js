import React, { useState, createContext, useContext } from 'react'
import { languageOptions, dictionaryList } from '../languages'

// create the language context with default selected language
export const LanguageContext = createContext({
  userLanguage: 'pt',
  dictionary: dictionaryList.pt
})

// it provides the language context to app
export const LanguageProvider = ({
  children,
  defaultLanguage = window.localStorage.getItem('rcml-lang')
}) => {
  const [userLanguage, setUserLanguage] = useState(defaultLanguage || 'pt')

  const provider = {
    userLanguage,
    dictionary: dictionaryList[userLanguage],
    userLanguageChange: (selected) => {
      const newLanguage = languageOptions[selected] ? selected : 'pt'
      setUserLanguage(newLanguage)
      window.localStorage.setItem('rcml-lang', newLanguage)
    }
  }

  return (
    <LanguageContext.Provider value={provider}>
      {children}
    </LanguageContext.Provider>
  )
}

// get text according to id & current language
export const Text = ({ tid }) => {
  const languageContext = useContext(LanguageContext)

  return languageContext.dictionary[tid] || tid
}
