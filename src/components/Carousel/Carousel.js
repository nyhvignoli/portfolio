import React, { useContext, useEffect, useState } from 'react'
import { Wrapper, Slides, CarouselWrapper } from './styles'
import { IconButton } from '../Buttons'
import { Chevron } from '../Icons'
import { DIRECTIONS } from '../Icons/Chevron'
import { Body } from '../../global/styles'
import { LanguageContext } from '../../global/LanguagesContext'
import { GalleryCard } from '../Cards/GalleryCard'
import { ListWrapper } from '../Technologies/styles'
import { Pill, PILL_SIZES } from '../Pill'
import { Space } from '../Space'
import { Color, Spacing, Sizes } from '../../theme'
import { Stepper } from '../Stepper'
import { useSwipeable } from 'react-swipeable'
import { useCallback } from 'react'

const Carousel = ({ projects, handleGalleryOpen }) => {
  const { dictionary } = useContext(LanguageContext)
  const [firstRender, setFirstRender] = useState(true)
  const [activeStep, setActiveStep] = useState(0)
  const maxSteps = projects.length

  const handleStepChange = useCallback(
    (newStep) => {
      if (newStep >= 0 && newStep < maxSteps) setActiveStep(newStep)
      setFirstRender(false)
    },
    [maxSteps]
  )

  const handleCTAFocus = useCallback(
    (index) => {
      if (activeStep !== index) setActiveStep(index)
    },
    [activeStep]
  )

  const handlers = useSwipeable({
    onSwipedLeft: () => handleStepChange(activeStep + 1),
    onSwipedRight: () => handleStepChange(activeStep - 1)
  })

  const scrollTo = (activeStep) => {
    const element = document.getElementById(`slide-${activeStep}`)
    if (!!element.scrollIntoView)
      element?.scrollIntoView({
        inline: 'center',
        block: 'nearest',
        behavior: 'smooth'
      })
  }

  useEffect(() => {
    if (!firstRender) scrollTo(activeStep)
  }, [activeStep, firstRender])

  return (
    <Wrapper>
      <CarouselWrapper {...handlers} data-testid="carousel-wrapper">
        <IconButton
          testId="previous"
          onClick={() => handleStepChange(activeStep - 1)}
          disabled={activeStep === 0}
          hideOnMobile
        >
          <Chevron
            direction={DIRECTIONS.left}
            color={Color.GREY_800}
            dimensions={{
              width: Sizes.ICON.SQUARE.X_SMALL,
              height: Sizes.ICON.SQUARE.X_SMALL
            }}
          />
        </IconButton>
        <Slides>
          {projects.map((project, index, array) => {
            const id = `slide-${index}`
            const active = index === activeStep

            return (
              <GalleryCard
                active={active}
                id={id}
                key={id}
                hasMarginLeftOnMobile={index === 0}
                hasMarginRightOnMobile={index === array.length - 1}
                headerProps={{
                  title: project.title,
                  titleStyles: `text-align: center;`,
                  subtitle: project.type,
                  cover: !!project.images?.length && {
                    src: project.images[0].src,
                    alt: project.images[0].alt
                  },
                  cta: project.type !== 'Back-end' &&
                    !!project.images.length && {
                      text: dictionary.gallery,
                      onClick: () => handleGalleryOpen(index),
                      onFocus: () => handleCTAFocus(index)
                    }
                }}
                footerProps={{
                  ctas: project.ctas,
                  onFocus: () => handleCTAFocus(index)
                }}
              >
                <Space mobile={{ marginBottom: Spacing.MOBILE.X_SMALL }}>
                  <Body>{project.description}</Body>
                </Space>
                <ListWrapper>
                  {project.tags.map((item, index) => {
                    return (
                      <Pill
                        key={`${item}-${index}`}
                        noBackground
                        size={PILL_SIZES.small}
                        text={item}
                      />
                    )
                  })}
                </ListWrapper>
              </GalleryCard>
            )
          })}
        </Slides>
        <IconButton
          testId="next"
          onClick={() => handleStepChange(activeStep + 1)}
          disabled={activeStep === maxSteps - 1}
          hideOnMobile
        >
          <Chevron
            color={Color.GREY_800}
            dimensions={{
              width: Sizes.ICON.SQUARE.X_SMALL,
              height: Sizes.ICON.SQUARE.X_SMALL
            }}
          />
        </IconButton>
      </CarouselWrapper>
      <Stepper
        steps={projects.map((_, i) => i)}
        activeStep={activeStep}
        handleStepChange={handleStepChange}
        handleFocus={handleCTAFocus}
      />
    </Wrapper>
  )
}

export default Carousel
