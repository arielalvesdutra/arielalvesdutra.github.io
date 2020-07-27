import React from 'react'
import coursesData from '../../assets/data/courses.json'
import './Courses.scss'
import ICourse from '../../interfaces/ICourse'
import IImage from '../../interfaces/IImage'


interface CoursesListProps {
  courses: ICourse[]
}

interface CourseItemProps {
  course: ICourse
}

const courseLocalImageLoader = (image: IImage) => {
  return require(`../../assets/img/courses/${image.url}`)
}

const Courses = ({
  courses = coursesData,
  localImageLoader = courseLocalImageLoader }) => {

  const CourseItem = ({ course }: CourseItemProps) => {
    const { title, link, institutionLogo } = course
    const imageUrl = institutionLogo.isLocal
      ? localImageLoader(institutionLogo)
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

  const CoursesList = (props: CoursesListProps) => {
    const { courses } = props

    if (!courses || !courses.length) {
      return <div className="courses__list">Nenhum curso encontrado.</div>
    }

    return (
      <ul className="courses__list">
        {courses.map((course, key) => (
          <CourseItem course={course} key={key} />
        ))}
      </ul>
    )
  }

  return (
    <section className="courses">
      <h2>Cursos realizados</h2>
      <CoursesList courses={courses} />
    </section>
  )
}

export default Courses
