import { render, screen } from '@testing-library/react'
import AboutMe from './AboutMe'
import { dictionaryList } from '../../languages'
import { LanguageProvider } from '../../global/LanguagesContext'

describe('AboutMe', () => {
  const getAriaLabel = (language = 'pt') => {
    const { ariaLabels } = dictionaryList[language]
    return `${ariaLabels.viewResume} (${ariaLabels.opensAPDFDocumentInANewTab})`
  }

  const getHref = (language = 'pt') => `cv-aline-vignoli-${language}.pdf`

  test('should display resume in PT', () => {
    render(
      <LanguageProvider>
        <AboutMe />
      </LanguageProvider>
    )
    const ariaLabel = getAriaLabel('pt')
    const viewResumeButton = screen.getByLabelText(ariaLabel)
    expect(viewResumeButton).toBeInTheDocument()

    const href = getHref()
    expect(viewResumeButton).toHaveAttribute('href', href)
  })

  test('should display resume in EN', () => {
    render(
      <LanguageProvider defaultLanguage="en">
        <AboutMe />
      </LanguageProvider>
    )
    const ariaLabel = getAriaLabel('en')
    const viewResumeButton = screen.getByLabelText(ariaLabel)
    expect(viewResumeButton).toBeInTheDocument()

    const href = getHref('en')
    expect(viewResumeButton).toHaveAttribute('href', href)
  })
})
