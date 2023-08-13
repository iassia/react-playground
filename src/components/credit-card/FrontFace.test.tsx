import FrontFace from './FrontFace'
import { screen, render } from '@testing-library/react'

describe('FrontFace', () => {
  it('presents dimmed placeholder texts', () => {
    render(<FrontFace name='' number='' validThru='' />)

    expect(
      getComputedStyle(screen.getByText('•••• •••• •••• ••••')).opacity,
    ).toBe('0.5')
    expect(getComputedStyle(screen.getByText('your name here')).opacity).toBe(
      '0.5',
    )
    expect(getComputedStyle(screen.getByText('••/••')).opacity).toBe('0.5')
  })

  it('presents opaque texts when data is provided', () => {
    render(
      <FrontFace
        name='John Doe'
        number='1234 5678 9012 3456'
        validThru='12/34'
      />,
    )

    expect(
      getComputedStyle(screen.getByText('1234 5678 9012 3456')).opacity,
    ).toBe('1')
    expect(getComputedStyle(screen.getByText('John Doe')).opacity).toBe('1')
    expect(getComputedStyle(screen.getByText('12/34')).opacity).toBe('1')
  })
})
