import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect' 
import ExperienceItem, { IExperience } from './ExperienceItem'

const invalidExperience = {} as IExperience
const defaultExperience: IExperience = {
  title: 'Test experience',
  company: {
    logo: {
      isLocal: true,
      url: 'generic-company.svg'
    },
    name: 'Some Company',
    site: 'none'
  },
  description: 'Some description',
  period: 'may/2010 - january 2017'
}


describe('Components: ExperienceItem', () => {

  test('experience with one description should render', () => {
    const { queryByText } = render(<ExperienceItem experience={defaultExperience} />)

    const companyName = queryByText(defaultExperience.company.name)
    const experienceTitle = queryByText(defaultExperience.title)
    const experienceDescription = queryByText(defaultExperience.description as string)

    expect(experienceTitle).not.toBeNull()
    expect(companyName).not.toBeNull()
    expect(experienceDescription).not.toBeNull()
    expect(experienceTitle?.tagName).toContain('H3')
    expect(experienceTitle?.textContent).toContain('Test experience')
    expect(companyName).not.toBeNull()
    expect(companyName?.tagName).toBe('A')    
    expect(experienceDescription).not.toBeNull()
    expect(experienceDescription?.tagName).toBe('P')    
  })

  test('experience with list of description should render', () => {
    const experienceWithListOfDescription = { ...defaultExperience }
    experienceWithListOfDescription.description = [
      'Created something',
      'Revenue was incresed by doing something'
    ]

    const [ description1, description2 ] = experienceWithListOfDescription.description
    const { queryByText } = render(<ExperienceItem experience={experienceWithListOfDescription} />)
    const firstDescription = queryByText(description1)
    const secondDescription = queryByText(description2)


    expect(firstDescription).not.toBeNull()
    expect(secondDescription).not.toBeNull()
    expect(firstDescription?.textContent).toBe(description1)
    expect(secondDescription?.textContent).toBe(description2)
    expect(secondDescription?.tagName).toBe('LI')
  })

  test("render without item parameters should crash", () => {
    const consoleError = console.error
    console.error = function() {}
    expect(() => render(<ExperienceItem experience={invalidExperience} />))
      .toThrow();
    console.error = consoleError
  })
})
