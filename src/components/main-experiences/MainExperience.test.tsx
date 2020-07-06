import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import MainExperiences from './MainExperiences'


describe('Components: MainExperience', () => {

  test('render should work', () => {
    render(<MainExperiences />)
  })  
})
