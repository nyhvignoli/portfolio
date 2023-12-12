import { render, screen } from '@testing-library/react'
import { CalloutCard } from './CalloutCard'

describe('CalloutCard', () => {
  test('renders correctly', () => {
    render(<CalloutCard />)
    const calloutCard = screen.getByTestId('callout-card-wrapper')
    expect(calloutCard).toBeInTheDocument()
  })
})
