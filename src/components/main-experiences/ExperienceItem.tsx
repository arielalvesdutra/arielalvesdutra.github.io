import React from 'react'
import './MainExperiences.scss'

export interface IExperienceItem {
  experience: IExperience
}

export interface IExperience {
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
  description: string | string[]
}

const ExperienceItem = (props: IExperienceItem) => {
  const { company, title, period, description } = props.experience
  const { logo } = company
  const imageUrl = logo.isLocal
    ? require(`../../assets/img/experiences/${company.logo.url}`)
    : company.logo.url

  const ExperienceItemDescription = ({ description }: any) => {
    if (description && description instanceof Array) {
      return (
        <div className="mainExperiences__experience__description">
          <ul className="mainExperiences__experience__description__list">
            {description.map((descriptionBullet: any, key: any) => (
              <li key={key} className="mainExperiences__experience__description__item">
                {descriptionBullet}
              </li>
            ))}
          </ul>
        </div>
      )
    }

    return (
      <p className="mainExperiences__experience__description">
        {description}
      </p>
    )
  }


  return (
    <li className="mainExperiences__experience">
      <img src={imageUrl} alt={`${company.name} Logo`}
        className="mainExperiences__experience__companyLogo" />
      <div className="mainExperiences__experience__content">
        <h3 className="mainExperiences__experience__position">{title}</h3>
        <div className="mainExperiences__experience__company">
          <a href={company.site} className="mainExperiences__experience__companySite">
            {company.name}
          </a>
        </div>
        <div className="mainExperiences__experience__interval">{period}</div>
        <ExperienceItemDescription description={description} />
      </div>
    </li>
  )
}

export default ExperienceItem
