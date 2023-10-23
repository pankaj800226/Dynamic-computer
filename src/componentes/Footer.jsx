import React from 'react'

const Footer = () => {
  const year = new Date().getFullYear()
  return (
    <div className="footer">
        <p>copyright @ {year}CodeWithPankaj</p>
       <h4>Developer by CodeWithPankaj</h4>
    </div>
    
  )
}

export default Footer