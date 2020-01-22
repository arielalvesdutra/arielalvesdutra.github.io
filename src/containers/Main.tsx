import React from 'react'

import Presentation from '../components/Presentation'
import AboutMe from '../components/AboutMe'
import Scholarity from '../components/Scholarity'
import MainExperiences from '../components/MainExperiences'
import Courses from '../components/Courses'
import Technologies from '../components/Technologies'
import Projects from '../components/Projects'
import Contacts from '../components/Contacts'

import './Main.scss'

const Main = () => {

  return (
    <main className="main">
      <Presentation />
      <AboutMe />
      <Scholarity /> 
      <MainExperiences />
      <Courses />
      <Technologies />
      <Projects /> 
      <Contacts />
    </main>
  )
}

export default Main
