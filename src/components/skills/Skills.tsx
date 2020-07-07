import React from 'react'
import skillsData from '../../assets/data/skills.json'
import './Skills.scss'
import Slider from '../shared/Slider'

interface ISkill {
  name: string
  image: {
    url: string
    isLocal: boolean
  }
  site: string
}

interface ISkillsListProps {
  skills: ISkill[]
}

const prepareSkillItemsToSlider = (skills: ISkill[]) => {
  return skills.map((skill, key) => <SkillsItem skill={skill} key={key} />)
}

const SkillsItem = ({ skill }: any) => {
  const imageUrl = skill.image.isLocal
    ? require(`../../assets/img/skills/${skill.image.url}`)
    : skill.image.url

  return (
    <div className="skills__skill">
      <img className="skills__list__item" src={imageUrl} alt="Somas"
        title={skill.name} />
    </div>
  )
}

const SkillsList = (props: ISkillsListProps) => {
  const skillsToSlider = prepareSkillItemsToSlider(props.skills)
  return (
    <div className="skills__list">
      <Slider
          items={skillsToSlider as []}
          itemsPerSlide={5} />
    </div>
  )
}

const Skills = () => {
  return (
    <section className="skills">
      <h2>Competências</h2>
      <div className="skills__description">
        <p>
          Abaixo estão listadas as principais tecnologias de backend, frontend, integração contínua e deploy contínuo das quais domino.
        </p>
      </div>
      <SkillsList skills={skillsData} />
    </section>
  )
}

export default Skills
