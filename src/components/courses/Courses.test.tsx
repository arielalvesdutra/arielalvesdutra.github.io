import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import Courses from './Courses'
import ICourse from '../../interfaces/ICourse'

const defaultCourse: ICourse = {
  title: 'Java Course',
  institutionLogo: {
    isLocal:true,
    url: 'image.jpg'
  },
  link: 'http://site.com/certificate/23123/',
}

const mockLocalImageLoader = () => {}

describe('Components: Courses', () => {

  test('render without courses should work', () => {
    const { queryByText } = render(<Courses courses={[]} />)

    const sectionTitle = queryByText('Cursos realizados')
    const noCoursesDescription = queryByText('Nenhum curso encontrado.')

    expect(sectionTitle).toBeInTheDocument()
    expect(sectionTitle.tagName).toBe('H2')
    expect(noCoursesDescription).toBeInTheDocument()
  })

  test('render with courses should work', () => {

    const { queryByText, queryByAltText } = render(<Courses 
        courses={[defaultCourse]} localImageLoader={mockLocalImageLoader} />)

    const sectionTitle = queryByText('Cursos realizados')
    const courseDescription = queryByText('Java Course')
    const courseImage = queryByAltText('Java Course Logo')

    expect(sectionTitle).toBeInTheDocument()
    expect(sectionTitle.tagName).toBe('H2')    
    expect(courseDescription).toBeInTheDocument()
    expect(courseDescription.tagName).toBe('SPAN')
    expect(courseImage).toBeInTheDocument()
    expect(courseImage.tagName).toBe('IMG')    
    expect(courseImage.parentElement.tagName).toBe('A')    
  })

})
