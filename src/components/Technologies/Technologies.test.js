import { render, screen } from '@testing-library/react'
import { Technologies } from './Technologies'

describe('Technologies', () => {
  test('renders correctly', () => {
    render(<Technologies />)
    const technologies = screen.getByTestId('technologies-wrapper')
    expect(technologies).toBeInTheDocument()
  })
})
