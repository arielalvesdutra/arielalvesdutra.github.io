import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import Slider from './Slider'

describe('Components: Slider', () => {

  test('render should work', () => {
    render(<Slider items={[]} itemsPerSlide={1} />)
  })
  
})
