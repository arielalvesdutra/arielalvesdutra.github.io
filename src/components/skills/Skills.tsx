import React from 'react'
import skillsData from '../../assets/data/skills.json'
import './Skills.scss'
import Slider from '../shared/slider/Slider'
import { useImageWithLoader } from '../shared/image-with-loader/ImageWithLoader'
import IImage from '../../interfaces/IImage'
import ISkill from '../../interfaces/ISkill'


interface SkillsListProps {
  skills: ISkill[]
}

interface SkillsItemProps {
  skill: ISkill
}

const skillLocalImageLoader = (image: IImage) => {
  return require(`../../assets/img/skills/${image.url}`)
}

const Skills = ({ 
    skills = skillsData, 
    localImageLoader = skillLocalImageLoader, 
    useLoaderOnImages =  true }) => {

  const prepareSkillItemsToSlider = (skills: ISkill[]) => {
    return skills.map((skill, key) => <SkillsItem skill={skill} key={key} />)
  }

  const SkillsItem =  ({ skill }: SkillsItemProps) => {
    const { image, name } = skill
    const imageUrl = image.isLocal
      ? localImageLoader(image)
      : image.url

    const ImageWithLoader = () => useImageWithLoader({
      alt: name, url: imageUrl, title: name,
      className: 'skills__list__skill__image',
    })

    const Image = () => useLoaderOnImages
      ? <ImageWithLoader />
      : <img className="skills__list__skill__image" src={imageUrl} alt={name} title={name} />

    return (
      <div className="skills__list__skill">
        <Image />
        <div className="skills__list__skill__name">{name}</div>
      </div>
    )
  }

  const SkillsList = ({ skills }: SkillsListProps) => {
    const contentToShow = skills && skills.length
      ? <Slider
            items={prepareSkillItemsToSlider(skills) as []}
            itemsPerSlide={5} />
      : <p><strong>Nenhuma habilidade para ser listada.</strong></p>      

    return (
      <div className="skills__list">
        {contentToShow}
      </div>
    )
  }

  return (
    <section className="skills">
      <h2>Competências</h2>
      <div className="skills__description">
        <p>
          Abaixo estão listadas as principais tecnologias de backend, frontend, integração contínua e deploy contínuo das quais domino.
        </p>
      </div>
      <SkillsList skills={skills} />
    </section>
  )
}

export default Skills
