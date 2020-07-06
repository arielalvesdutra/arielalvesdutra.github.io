import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import ExperienceList from './ExperienceList'


describe('Components: ExperienceList', () => {

  test('render should work', () => {
    render(<ExperienceList experiences={[]} />)
  })
  
})
