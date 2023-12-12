import { render, screen } from '@testing-library/react'
import { BaseCard } from './BaseCard'

describe('BaseCard', () => {
  test('renders with a CardHeader', () => {
    render(<BaseCard />)
    const cardHeader = screen.getByTestId('base-card-header')
    expect(cardHeader).toBeInTheDocument()
  })

  test('renders with a CardContent', () => {
    render(<BaseCard />)
    const cardContent = screen.getByTestId('base-card-content')
    expect(cardContent).toBeInTheDocument()
  })

  test('renders with a CardFooter', () => {
    render(<BaseCard />)
    const cardFooter = screen.getByTestId('base-card-footer')
    expect(cardFooter).toBeInTheDocument()
  })

  test('renders a BaseCard with no background', () => {
    render(<BaseCard noBackground />)
    const baseCardWrapper = screen.getByTestId('base-card-wrapper')
    expect(baseCardWrapper).toHaveStyle({
      backgroundColor: 'transparent',
      boxShadow: 'none'
    })
  })
})
