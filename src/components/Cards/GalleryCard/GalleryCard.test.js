import { render, screen } from '@testing-library/react'
import { GalleryCard } from './GalleryCard'

describe('GalleryCard', () => {
  test('renders with a CardHeader', () => {
    render(<GalleryCard />)
    const cardHeader = screen.getByTestId('gallery-card-header')
    expect(cardHeader).toBeInTheDocument()
  })

  test('renders with a CardContent', () => {
    render(<GalleryCard />)
    const cardContent = screen.getByTestId('gallery-card-content')
    expect(cardContent).toBeInTheDocument()
  })

  test('renders with a CardFooter', () => {
    render(<GalleryCard />)
    const cardFooter = screen.getByTestId('gallery-card-footer')
    expect(cardFooter).toBeInTheDocument()
  })

  test('renders a GalleryCard with no background', () => {
    render(<GalleryCard noBackground />)
    const galleryCardWrapper = screen.getByTestId('gallery-card-wrapper')
    expect(galleryCardWrapper).toHaveStyle({
      backgroundColor: 'transparent',
      boxShadow: 'none'
    })
  })
})
