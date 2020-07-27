import React from 'react'

import Presentation from '../components/Presentation'
import AboutMe from '../components/AboutMe'
import Scholarity from '../components/Scholarity'
import MainExperiences from '../components/main-experiences/MainExperiences'
import Courses from '../components/courses/Courses'
import Skills from '../components/skills/Skills'
import Projects from '../components/projects/Projects'
import Contacts from '../components/Contacts'

import './Main.scss'

const Main = () => {

  return (
    <main className="main">
      <Presentation />
      <AboutMe />
      <Scholarity /> 
      <Skills />
      <Projects />
      <MainExperiences />
      <Courses />
      <Contacts />
    </main>
  )
}

export default Main
