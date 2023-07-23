import App from './App'
import { screen, render } from '@testing-library/react'

describe('App', () => {
  it('renders the credit card', () => {
    render(<App />)
    expect(screen.getByRole('img')).toHaveAccessibleName('Credit Card')
  })
})
