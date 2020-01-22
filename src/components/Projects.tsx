import React from 'react'
import projectsData from '../assets/data/projects.json'
import './Projects.scss'

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

const ProjectsItem = (props: IProjectsItemProps) => {
  const { project } = props
  const { repositories, title, image, description } = project
  const imageUrl = image.isLocal 
      ? require(`../assets/img/projects/${image.url}`)
      : image.url

  return (
    <li className="projects__project">
      <img className="projects__project__img" src={imageUrl} alt={`${title} Logo`}/>
      <div>
        <h3 className="projects__project__title">{project.title}</h3>
        <p className="projects__project__description" dangerouslySetInnerHTML={{__html: description}} />
        {repositories && repositories.map((repository, key) => 
          <div key={key}>
            <a href={repository.url}>{repository.name}</a>
          </div>
        )}
      </div>
    </li>
  )
}

const ProjectsList = (props: IProjectsListProps) => (
  <ul className="projects__list">
    {props.projects.map((project, key) => (
      <ProjectsItem project={project} key={key} /> 
    ))}
  </ul>
)

const ProjectsDescription = () =>{
  const myGitHubUrl = 'http://github.com/arielalvesdutra'

  return (
    <div className="projects__description">
      <p>Ao longo do tempo, os conteúdos que eu vou aprendendo, eu crio projetos privados e públicos no meu GitHub para praticar o conteúdo. Abaixo eu listo os principais projeto que eu desenvolvi a nível pessoal e que estão com visibilidade pública no meu <a href={myGitHubUrl}>GitHub</a>.</p>
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
