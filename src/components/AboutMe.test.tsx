import React from 'react'
import { render } from '@testing-library/react'
import AboutMe from './AboutMe'

describe('Components: AboutMe', () => {

  test("render should work without crashing", () => {
    render(<AboutMe />)
  })

  test("render text should not be empty", () => {
    const { baseElement } = render(<AboutMe />)
    
    expect(baseElement.textContent).not.toBeNull();
    expect(baseElement.textContent).not.toBe('');
  })
})
