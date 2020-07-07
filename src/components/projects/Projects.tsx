import React from 'react'
import projectsData from '../../assets/data/projects.json'
import './Projects.scss'
import Slider from '../shared/Slider'


interface IProject {
  title: string
  description: string
  image: {
    url: string
    isLocal: boolean
  }
  repositories: IRepository[]
}

interface IRepository {
  name: string
  url: string
}

interface IProjectsListProps {
  projects: IProject[]
}

interface IProjectsItemProps {
  project: IProject
}

const prepareProjectItemsToSlider = (projects: IProject[]) => {
  return projects.map((project, key) => (
    <ProjectsItem project={project} key={key} />
  ))
}

const ProjectsItem = (props: IProjectsItemProps) => {
  const { project } = props
  const { repositories, title, image, description } = project
  const imageUrl = image.isLocal
    ? require(`../../assets/img/projects/${image.url}`)
    : image.url

  return (
    <div className="projects__project">
      <img className="projects__project__img" src={imageUrl} alt={`${title} Logo`} />
      <div>
        <h3 className="projects__project__title">{project.title}</h3>
        <p className="projects__project__description" dangerouslySetInnerHTML={{ __html: description }} />
        {repositories && repositories.map((repository, key) =>
          <div key={key}>
            <a href={repository.url} target="_blank" rel="noopener noreferrer">
              {repository.name}
              </a>
          </div>
        )}
      </div>
    </div>
  )
}

const ProjectsList = (props: IProjectsListProps) => {
  const projectsToSlider = prepareProjectItemsToSlider(props.projects)
  return (
    <div className="projects__list">
      <Slider
          items={projectsToSlider as []}
          itemsPerSlide={2} />
    </div>
  )
}

const ProjectsDescription = () => {
  const myGitHubUrl = 'http://github.com/arielalvesdutra'

  return (
    <div className="projects__description">
      <p>Ao longo do tempo, vou criando projetos privados ou públicos no meu <a href={myGitHubUrl} target="_blank" rel="noopener noreferrer">GitHub</a> para praticar os conteúdos que vou aprendendo. Abaixo eu listo os principais projeto públicos que desenvolvi a nível pessoal.</p>
    </div>
  )
}

const Projects = () => {
  return (
    <section className="projects">
      <h2>Projetos</h2>
      <ProjectsDescription />
      <ProjectsList projects={projectsData} />
    </section>
  )
}

export default Projects
