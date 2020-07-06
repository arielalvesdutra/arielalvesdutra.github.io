import React from 'react'
import './MainExperiences.scss'
import ExperienceItem, { IExperience } from './ExperienceItem'

interface ExperienceListProps {
  experiences: IExperience[]
}

const ExperienceList = (props:ExperienceListProps) => (
  <ul className="mainExperiences__list">
    {props.experiences.map((experience, key) => (
      <ExperienceItem experience={experience} key={key} />
    ))}
  </ul>
)

export default ExperienceList
