import React, { useContext, useState } from 'react'
import { Wrapper } from './styles'
import { Heading2 } from '../../global/styles'
import ScreenShotsGallery from '../ScreenShotsGallery/ScreenShotsGallery'
import { LanguageContext, Text } from '../../global/LanguagesContext'
import { DATA_TYPE, getData } from '../../data'
import Carousel from '../Carousel/Carousel'
import { GridLayout } from '../GridLayout'
import { Space } from '../Space'
import { Spacing } from '../../theme'

const Projects = () => {
  const { dictionary } = useContext(LanguageContext)
  const projects = getData(dictionary, DATA_TYPE.projects)
  const [galleryOpen, setGalleryOpen] = useState(false)
  const [selectedProject, setSelectedProject] = useState(0)

  const handleGalleryOpen = (projectIndex) => {
    setGalleryOpen(true)
    setSelectedProject(projectIndex)
  }

  const handleGalleryClose = () => {
    setGalleryOpen(false)
  }

  return (
    <Wrapper galleryOpen id="projects" data-testid="projects">
      <Space
        mobile={{ marginBottom: Spacing.MOBILE.SMALL }}
        tablet={{ marginBottom: Spacing.TABLET.SMALL }}
        desktop={{ marginBottom: Spacing.DESKTOP.SMALL }}
      >
        <Heading2>
          <Text tid="projects" />
        </Heading2>
      </Space>
      <GridLayout noPaddingOnMobile>
        <Carousel projects={projects} handleGalleryOpen={handleGalleryOpen} />
      </GridLayout>
      {galleryOpen && (
        <ScreenShotsGallery
          handleGalleryClose={handleGalleryClose}
          images={projects[selectedProject].images}
        />
      )}
    </Wrapper>
  )
}

export default Projects
