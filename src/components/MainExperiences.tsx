import React from 'react'
import './MainExperiences.scss'
import experienceData from '../assets/data/experiences.json'

interface IExperience {
  title: string
  company: {
    name: string
    logo: {
      url: string
      isLocal: boolean
    }
    site: string
  }
  period: string
  description: string
}

interface ExperiencesListProps {
  experiences: IExperience[]
}

const ExperienceItem = ({experience}: any) => {
  const { company, title, period, description } = experience
  const { logo } = company
  const imageUrl = logo.isLocal  
      ? require(`../assets/img/experiences/${company.logo.url}`)
      : company.logo.url 

  return (
    <li className="mainExperiences__experience">
      <img src={imageUrl} alt={`${company.name} Logo`}
          className="mainExperiences__experience__companyLogo" />
      <div>
        <h3 className="mainExperiences__experience__position">{title}</h3>
        <div className="mainExperiences__experience__company">
          <a href={company.site} className="mainExperiences__experience__companySite">
            {company.name}
          </a>
        </div>
        <div className="mainExperiences__experience__interval">{period}</div>
        <p className="mainExperiences__experience__description">
          {description}
        </p>
      </div>
  </li>
  )
}

const ExperiencesList = (props:ExperiencesListProps) => (
  <ul className="mainExperiences__list">
    {props.experiences.map((experience, key) => (
      <ExperienceItem experience={experience} key={key} />
    ))}
  </ul>
)

const MainExperiences = () => {
  return (
    <section className="mainExperiences">
      <h2>Principais experiências</h2>
      <ExperiencesList experiences={experienceData} />
    </section>
  )
}

export default MainExperiences
