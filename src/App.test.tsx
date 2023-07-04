import App from './App'
import { screen, render } from '@testing-library/react'

function customRender(ui: React.ReactElement, options = {}) {
  return render(ui, {
    wrapper: ({ children }) => children,
    ...options,
  })
}

describe('Simple working test', () => {
  it('the title is visible', () => {
    customRender(<App />)
    expect(screen.getByText(/John Doe/i)).toBeInTheDocument()
  })
})
