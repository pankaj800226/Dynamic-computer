import React from 'react'
import { Link } from "react-router-dom"
const FullCourses = ({ imgUrl, textDetels, }) => {
  return (
    <div className='fullCourses'>
      <img src={imgUrl} alt="" />
      <p>{textDetels}</p>
      <Link to="/">Get Start</Link>
    </div>
  )
}

export default FullCourses