import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import Projects from './Projects'

describe('Components: Projects', () => {

  test('render withuot projects should work', () => {
    render(<Projects projects={[]} />)
  })
  
})
