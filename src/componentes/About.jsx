import React from 'react'
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/d1.jpg"
import img2 from "../assets/d2.jpg"
import img3 from "../assets/d3.jpg"
import img4 from "../assets/d4.jpg"
import img5 from "../assets/d5.jpg"
import img6 from "../assets/d6.jpg"

const About = () => {
  return (
    <>
    <div className='about'>
      <Carousel
        infiniteLoop
        autoPlay
        interval={1000}
        showThumbs={false}
        showStatus={false}
        showIndicators={false}
      >
        <div className='pic'>
          <img src={img1} alt="item1" />
          <p>Dynamic Computer</p>
        </div>

        <div className='pic'>
          <img src={img2} alt="item1" />
          <p>Dynamic Computer</p>

        </div>

        <div className='pic'>
          <img src={img3} alt="item1" />
          <p>Dynamic Computer</p>

        </div>

        <div className='pic'>
          <img src={img4} alt="item1" />
          <p>Dynamic Computer</p>

        </div>

        <div className='pic'>
          <img src={img5} alt="item1" />
          <p>Dynamic Computer</p>

        </div>

        <div className='pic'>
          <img src={img6} alt="item1" />
          <p>Dynamic Computer</p>

        </div>

      </Carousel>
    </div>
   <div className="about_heading">
    <h1>"Thank You for big opportunity in dynamic computer arrah bihar"</h1>
    <h2>******</h2>
   </div>
    </>
  )
}

export default About