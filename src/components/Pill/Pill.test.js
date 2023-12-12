import { render, screen } from '@testing-library/react'
import { Pill, PILL_SIZES } from './Pill'
import { Spacing, FontSize, LineHeight, FontWeight } from '../../theme'

describe('Pill', () => {
  test('renders with the correct text', () => {
    render(<Pill text={'foo'} />)
    const pillElement = screen.getByText('foo')
    expect(pillElement).toBeInTheDocument()
  })

  test('renders a small Pill', () => {
    const smallStyles = {
      fontSize: FontSize.MOBILE.BODY_5,
      lineHeight: LineHeight.MOBILE.BODY_5,
      fontWeight: FontWeight.X_LIGHT,
      padding: `${Spacing.MOBILE.X_TINY} ${Spacing.MOBILE.XX_SMALL}`
    }

    render(<Pill text={'foo'} size={PILL_SIZES.small} />)
    const pillElement = screen.getByText('foo')
    expect(pillElement).toHaveStyle(smallStyles)
  })
})
