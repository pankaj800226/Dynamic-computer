import React from 'react'
import FullCourses from './FullCourses'
const Courses = () => {
  const FullCoursesData = [
    {
      imgUrl: "cou1.jpg",
      textDetels: "Java Programming Language Foundations."
    },
    {
      imgUrl: "cou2.jpg",
      textDetels: "Python Programming Language Foundations."
    },
    {
      imgUrl: "cou3.jpg",
      textDetels: "JavaScript Programming Language Foundations."
    },
    {
      imgUrl: "cou4.jpg",
      textDetels: "Learn html."
    },
    {
      imgUrl: "cou5.jpg",
      textDetels: "Learn css."
    },
    {
      imgUrl: "cou6.jpg",
      textDetels: "Learn React Js."
    },
  ]
  return (
    <>
      <div className='cources_text'>
        <p>Courses List</p>
        <h1>Best courses in 2023</h1>
      </div>
      <div className="courses">
        {
          FullCoursesData.map((e) => {
            return (
              <FullCourses
                key={e.id}
                imgUrl={e.imgUrl}
                textDetels={e.textDetels}
              />
            )
          })
        }
      </div>
    </>
  )
}

export default Courses