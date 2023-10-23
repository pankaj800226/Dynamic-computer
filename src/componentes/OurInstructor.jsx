import React from 'react'

const OurInstructor = ({ imgUrl, name, tital, Qualification, star }) => {

  return (
    <>
      <div className="instructor">
        <img src={imgUrl} alt="" />
        <h2>{name}</h2>
        <p>{tital}</p>
        <h3>{star}</h3>
        <p>{Qualification}</p>
      </div>



    </>
  )
}

export default OurInstructor