import { screen, render } from '@testing-library/react'

import FrontFace from './FrontFace'
import { FrontFields } from './types.ts'

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
        validThru='10/11'
      />,
    )

    expect(
      getComputedStyle(screen.getByText('1234 5678 9012 3456')).opacity,
    ).toBe('1')
    expect(getComputedStyle(screen.getByText('John Doe')).opacity).toBe('1')
    expect(getComputedStyle(screen.getByText('10/11')).opacity).toBe('1')
  })

  it.each([
    [FrontFields.NAME, '700', '400', '400'],
    [FrontFields.NUMBER, '400', '700', '400'],
    [FrontFields.VALID_THRU, '400', '400', '700'],
  ])(
    'presents bolder font when focused on %s',
    (focus, nameWeight, numberWeight, validThruWeight) => {
      render(
        <FrontFace name='John' number='6789' validThru='10/11' focus={focus} />,
      )

      expect(getComputedStyle(screen.getByText('John')).fontWeight).toBe(
        nameWeight,
      )
      expect(getComputedStyle(screen.getByText('6789')).fontWeight).toBe(
        numberWeight,
      )
      expect(getComputedStyle(screen.getByText('10/11')).fontWeight).toBe(
        validThruWeight,
      )
    },
  )
})
