import React from 'react'
import coursesData from '../assets/data/courses.json'
import './Courses.scss'

interface ICourse {
  title: string
  institutionLogo: {
    url: string
    isLocal: boolean
  }
  link: string
}

interface ICoursesListProps {
  courses: ICourse[]
}

interface ICourseItemProps {
  course: ICourse
}

const CourseItem = ({ course }: ICourseItemProps) => {
  const { title, link, institutionLogo } = course
  const imageUrl = institutionLogo.isLocal
    ? require(`../assets/img/${institutionLogo.url}`)
    : institutionLogo.url

  return (
    <li className="courses__course">
      <a href={link} className="courses__course__link"
        target="_blank" rel="noopener noreferrer">
        <img className="courses__course__institutionLogo" src={imageUrl}
          alt={`${title} Logo`} />
        <span className="courses__course__description">{title}</span>
      </a>
    </li>
  )
}

const CoursesList = (props: ICoursesListProps) => {
  return (
    <ul className="courses__list">
      {props.courses.map((course, key) => (
        <CourseItem course={course} key={key} />
      ))}
    </ul>
  )
}

const Courses = () => {
  return (
    <section className="courses">
      <h2>Cursos realizados</h2>
      <CoursesList courses={coursesData} />
    </section>
  )
}

export default Courses
