import React from 'react'
import { render, screen } from '@testing-library/react'
import App from '../App'

describe('App smoke', () => {
  it('renders the application title', () => {
    render(<App />)
    const title = screen.getByText(/LoTUS-BF/i)
    expect(title).toBeInTheDocument()
  })
})
