import React, { useContext } from 'react'
import { Wrapper, Step } from './styles'
import { LanguageContext } from '../../global/LanguagesContext'

export const Stepper = ({
  steps,
  activeStep,
  handleStepChange,
  handleFocus
}) => {
  const { dictionary } = useContext(LanguageContext)

  return (
    <Wrapper>
      {steps.map((step, index) => {
        return (
          <Step
            key={step}
            aria-label={`${dictionary.ariaLabels.goTo} slide ${step + 1}`}
            active={step === activeStep}
            onClick={() => handleStepChange(step)}
            onFocus={() => handleFocus(index)}
          />
        )
      })}
    </Wrapper>
  )
}
