// import React from 'react'
import React, { useState } from "react";
import { Link } from "react-router-dom"
import Fade from 'react-reveal/Fade';
import Rotate from 'react-reveal/Rotate';
import { BsCodeSlash } from 'react-icons/bs'
const Header = () => {

  const [active, setActive] = useState("nav__menu");
  const [toggleIcon, setToggleIcon] = useState("nav__toggler");
  const navToggle = () => {
    active === 'nav__menu' ? setActive('nav__menu nav__active') : setActive('nav__menu');

    toggleIcon === 'nav__toggler'
      ? setToggleIcon('nav__toggler toggle')
      : setToggleIcon("nav__toggler")
  };


  return (
    <nav className="nav">
      <Link to="/" className='nav__brand'>
        <Fade left>
          <h2> <BsCodeSlash className="path" /> Dynaimc</h2>
        </Fade>
      </Link>

      <ul className={active}>
        <Rotate top left>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/course">Courses</Link>
          <Link to="/contact">Contact</Link>
          <Link to="booknow"><button className="btn">Applay Now</button></Link>
          {/* <div className="book_now">
        
         </div> */}

        </Rotate>
      </ul>
      <div onClick={navToggle} className={toggleIcon}>
        <div className="line1"></div>
        <div className="line2"></div>
        <div className="line3"></div>
      </div>
    </nav>
  )
}

export default Header