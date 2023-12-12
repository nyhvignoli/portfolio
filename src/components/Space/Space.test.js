import { render, screen } from '@testing-library/react'
import { Space } from './Space'

describe('Space', () => {
  test('renders correctly', () => {
    render(<Space />)
    const space = screen.getByTestId('space-wrapper')
    expect(space).toBeInTheDocument()
  })

  test('renders margin 0 by default', () => {
    render(<Space />)
    const space = screen.getByTestId('space-wrapper')
    expect(space).toHaveStyle({
      margin: '0px 0px 0px 0px',
      marginTop: 0,
      marginRight: 0,
      marginLeft: 0,
      marginBottom: 0,
      padding: '0px 0px 0px 0px',
      paddingTop: 0,
      paddingBottom: 0,
      paddingRight: 0,
      paddingLeft: 0
    })
  })
})
