import React from 'react'
import technologiesData from '../assets/data/technologies.json'
import './Technologies.scss'

interface ITechnology {
  name: string
  image: {
    url: string
    isLocal: boolean
  }
  site: string
}

interface ITechnologiesListProps {
  technologies: ITechnology[]
}

const TechnologiesItem =( {technology}: any) => {
  const imageUrl = technology.image.isLocal 
      ? require(`../assets/img/technologies/${technology.image.url}`)
      : technology.image.url

  return (
    <li className="technologies__technology">
      <img className="technologies__list__item" src={imageUrl} alt="Somas"
          title={technology.name}/>
    </li>
  )
}

const TechnologiesList = (props: ITechnologiesListProps) => (
  <ul className="technologies__list">
    {props.technologies.map((technology, key) => (
      <TechnologiesItem technology={technology} key={key} />
    ))}
  </ul>
)

const Technologies = () => {
  return (
    <section className="technologies">
      <h2>Principais tecnologias</h2>
      <div className="technologies__description">
        <p>
          Abaixo eu listo as principais tecnologias de backend, frontend, integração contínua e deploy contínuo que eu domino atualmente.
        </p>
      </div>
      <TechnologiesList  technologies={technologiesData} />
    </section>
  )
}

export default Technologies
