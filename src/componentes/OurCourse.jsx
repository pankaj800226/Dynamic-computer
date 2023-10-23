import React from 'react'
import {Link} from 'react-router-dom'
const OurCourse = ({imgUrl,tital}) => {
  return (
    <div className='OurCourse'>
        <img src={imgUrl} alt="" />
        <h3>{tital}</h3>
       <Link to="/">Get Start</Link>
    </div>
  )
}

export default OurCourse