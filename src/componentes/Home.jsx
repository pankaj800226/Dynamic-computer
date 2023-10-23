import React from 'react'
import Fade from 'react-reveal/Fade';
import OurCourse from './OurCourse'
import CourseCategory from './CourseCategory';
import Flip from 'react-reveal/Flip';
import img1 from "../assets/frontpage2.png"
import { Link } from "react-router-dom"

const Home = () => {
  const OurCoursData = [
    {
      imgUrl: "c1.jpg",
      tital: "C Programming Language Foundations."
    },

    {
      imgUrl: "c2.jpg",
      tital: "C++ Programming Language Foundations."
    },

    {
      imgUrl: "c3.jpg",
      tital: "Java Programming Language Foundations."
    },

  ]

  const CourseCategoryData = [
    {
      HeadTital: "BCA",
      shortTital: "BCA Full Form is Bachelor of Computer Applications. BCA is a 3 year UG course that trains students in Operating Systems, Best Course in dynamic computer"
    },

    {
      HeadTital: "BBA",
      shortTital: "BBA is the most popular undergraduate programme among all the management courses. BBA degree gives you a head start to pursue a Masters in Business Administration (MBA) for sure."
    },

    {
      HeadTital: "BLIS",
      shortTital: "BLIS stands for Bachelor of Library Science and Information is a UG-level degree program that is completed in a duration of 1 year."
    },

  ]
  return (
    <>

      <div className="home">
        <div className="home_text">
          <Fade left>
            <p>The best
              online learning
              platform.</p>
            <h1>Dynamic Computer Arrah <span>Best education</span> Institute in bihar </h1>
            {/* <Link to="Maincontent"><button>Get Start</button></Link> */}
            <Link to="/Maincontent"><button>Get start</button></Link>
          </Fade>

        </div>
        <Flip left>
          <img src={img1} alt="" />
        </Flip>
      </div>

      {/* Courses categorie  */}
      <div className="CourseCategory_text">
        <p>All courses categories</p>
        <h1>Courses categories</h1>
      </div>

      <Fade left>
        <div className='course_details'>

          {
            CourseCategoryData.map((e) => {
              return (
                <CourseCategory key={e.id}
                  HeadTital={e.HeadTital}
                  shortTital={e.shortTital} />
              )
            })
          }

        </div>
      </Fade>


      <div className="course_skills_text">
        <p>Best courses</p>
        <h1>Our Courses</h1>
      </div>
      {/* <Fade left> */}
      <div className="our_course">
        {
          OurCoursData.map((e) => {
            return (
              <OurCourse key={e.id}
                imgUrl={e.imgUrl}
                tital={e.tital} />
            )
          })
        }
      </div>
      {/* </Fade> */}
    </>

  )
}

export default Home