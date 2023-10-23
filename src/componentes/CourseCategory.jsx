import React from 'react'

const CourseCategory = ({HeadTital,shortTital}) => {
  return (
    <div className='CourseCategory'>
       <h1>{HeadTital}</h1>
       <p>{shortTital}</p>
    </div>
  )
}

export default CourseCategory