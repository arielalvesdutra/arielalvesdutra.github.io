import React from 'react'
import formationData from '../assets/data/scholarity.json'
import './Scholarity.scss'

interface IScholarity {
  title: string
  institution: {
    name: string
    site: string
    image: {
      url: string
      isLocal: boolean
    }
  }
  period: string
}

interface IScholarityListProps {
  formations: IScholarity[]
}

const ScholarityItem = (props:any) => {  
  const { institution, period, title } = props.formation
  const { image } = institution

  const imageUrl = image.isLocal
      ? require(`../assets/img/scholarity/${image.url}`)
      : image.url

  return (
    <li className="scholarity__course">
      <img className="scholarity__course__institutionImg" src={imageUrl}
              alt={`${institution.name} Logo`}/>
      <div>
        <h3 className="scholarity__course__name">{title}</h3>
        <div className="scholarity__course__institutionName">
          <a className="scholarity__course__institutionLink" href={institution.site}>
            {institution.name}
          </a>
        </div>
        <div className="scholarity__cource__period">{period}</div>
      </div>
    </li>
  )
}

const ScholarityList = (props: IScholarityListProps) => {
  return (
    <ul className="scholarity__list">
      {props.formations.map((formation, key) => (
        <ScholarityItem formation={formation} key={key} />
      ))}
    </ul>
  )
}

const Scholarity = () => {
  return (
    <section className="scholarity">
      <h2>Formação</h2>
      <ScholarityList formations={formationData} />
    </section>
  )
}

export default Scholarity
