import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Footer from './Footer'

describe('Containers: Footer', () => {

  test('render should work',  () => {
    const { getByText } = render(<Footer />)

    expect(getByText("LinkedIn")).toBeInTheDocument()
    expect(getByText("GitHub")).toBeInTheDocument()
  })
})
