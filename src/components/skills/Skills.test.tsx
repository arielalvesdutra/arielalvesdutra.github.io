import React from 'react'
import { render } from '@testing-library/react'
import '@testing-library/jest-dom/extend-expect'
import Skills from './Skills'
import ISkill from '../../interfaces/ISkill'

const defaultSkill: ISkill = {
  image: {
    isLocal: true,
    url: 'default.jpg'
  },
  name: "React.js",
  site: 'https://reactjs.org'
}

const mockLocalImageLoader = () => '/default.jpg'

describe('Components: Skills', () => {

  test('render without skills should work', async () => {
    const { getByText } = render(<Skills skills={[]} />)

    const title = getByText('Competências')
    const noSkillsDescriptipon = getByText(/Nenhuma habilidade para ser listada./)

    expect(title).not.toBeNull()
    expect(title.textContent).toBe('Competências')
    expect(title.tagName).toBe('H2')
    expect(noSkillsDescriptipon).not.toBeNull()
  })

  test('render with skills should show skills', async () => {
    const { getByAltText, getByText } = render(
      <Skills
        skills={[defaultSkill]}
        localImageLoader={mockLocalImageLoader}
        useLoaderOnImages={false} />)

    const title = getByText('Competências')
    const skillName = getByText(/React.js/)
    const skillImage = getByAltText('React.js')

    expect(title).not.toBeNull()
    expect(title.textContent).toBe('Competências')
    expect(title.tagName).toBe('H2')
    expect(skillName).not.toBeNull()
    expect(skillImage).toBeInTheDocument()
    expect(skillImage.tagName).toBe('IMG')
    expect(skillImage.title).toBe('React.js')
  })

})
