import React from 'react'
import './MainExperiences.scss'
import experienceData from '../../assets/data/experiences.json'
import ExperienceList from './ExperienceList'

const MainExperiences = () => {
  return (
    <section className="mainExperiences">
      <h2>Principais experiências</h2>
      <ExperienceList experiences={experienceData} />
    </section>
  )
}

export default MainExperiences
