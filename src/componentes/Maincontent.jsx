import React, { useEffect, useState } from 'react'
import img1 from "../assets/cap.png"
import img2 from '../assets/about.png'
import OurInstructor from './OurInstructor'
import Task from './Task'
import axios from 'axios'
import { ImCross } from 'react-icons/im'
import { MdOutlineCalendarMonth } from 'react-icons/md'
const Maincontent = () => {

    const OurInstructorData = [
        //teacher data
        {
            imgUrl: "https://assets.website-files.com/640064a02bd1b696137fa468/64524db40250ed881dd49b4b_jeffery-way.jpg",
            name: "Vikash Sir",
            Qualification: "B Tech",
            star: "****",
            tital: " computer architecture "
        },

        {
            imgUrl: "https://assets.website-files.com/640064a02bd1b696137fa468/64524dc476c1e776e22dd051_justin-jackson.jpg",
            name: "Sanjay Sir",
            Qualification: "BCA-MCA",
            star: "*****",
            tital: "English"
        },

        {
            imgUrl: "https://assets.website-files.com/640064a02bd1b696137fa468/64524de1630f60d0c130b43f_rob-percival.jpg",
            name: "Rajat Sir",
            Qualification: "B Tech",
            star: "*****",
            tital: "C-language"
        },

        {
            imgUrl: "https://assets.website-files.com/640064a02bd1b696137fa468/64524df54b087778b9e31c1d_andrew-ng.jpg",
            name: "Shahnawaz Sir",
            Qualification: "B Tech",
            star: "****",
            tital: "Operating system"
        },
    ]
    //feed back logic
    const [todo, setTodo] = useState([])
    useEffect(() => {
        axios.post('http://localhost:5000/get')
            .then(result => setTodo(result.data))
            .catch(err => console.log(err))
    })

    const handledelete = (id) => {
        axios.delete('http://localhost:5000/delete/' + id)
            .then(result => console.log(result))
            .catch(err => console.log(err))
    }
    //time logic
    const t1 = "11:00:00"
    const t2 = "12:00:00"
    const t3 = "01:00:00"
    const t4 = "02:00:00"
    const t5 = "03:00:00"

    //new data logic
    const date = new Date()
    const m = date.getDate()
    //new month logic
    const monthNames = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December"
    ];
    let monthIndex = (new Date().getMonth());
    let month = monthNames[monthIndex];


    return (
        <>
            <div className='Main_contenr_text'>
                <p>Start to Success</p>
                <h1>The Learn to diffrent diffrent courses in dynamic computer</h1>
            </div>
            <div className="dynamic_system">
                <div className="dynamic_iamge">
                    <img src={img1} alt="" />
                    <div className="dynamic_text">
                        <h1>10+</h1>
                        <p>Years of  Education Experience</p>
                    </div>
                </div>

                <div className="dynamic_iamge">
                    <img src={img1} alt="" />
                    <div className="dynamic_text">
                        <h1>500K</h1>
                        <p>happy students</p>
                    </div>
                </div>

                <div className="dynamic_iamge">
                    <img src={img1} alt="" />
                    <div className="dynamic_text">
                        <h1>5+</h1>
                        <p>professional teachers</p>
                    </div>
                </div>

                <div className="dynamic_iamge">
                    <img src={img1} alt="" />
                    <div className="dynamic_text">
                        <h1>70+</h1>
                        <p>Computer are available in lab room</p>
                    </div>
                </div>
            </div>
            {/* about me  */}
            <div className="about_me">
                <div className="about_text">
                    <p>About me</p>
                    <h1>Dynamic computer is connected to  <span>Maulana Mazharul Haque Arabic & Persian University in Patna.</span></h1>
                    <div className="degree">
                        <p>Degree</p>
                        <h2>Gegree are available in Patna University.</h2>
                    </div>
                </div>
                <img src={img2} alt="" />
            </div>
            <div className='Our_Instructor_text'>
                <p>Our Instructor</p>
                <h1>Expert Instructor</h1>
            </div>


            <div className="courseTeam">
                {
                    OurInstructorData.map((e) => {
                        return (
                            <OurInstructor key={e.id} imgUrl={e.imgUrl} name={e.name} tital={e.tital} Qualification={e.Qualification} star={e.star} />
                        )
                    })
                }
            </div>
            {/* //class time */}
            <div className="class_time_text">
                <p>Class time</p>
            </div>

            <div className="class_Time_table">
                <div className="time_class">
                    <h2>Computer Organization and Architecture </h2>
                    <p>Computer organization and architecture is the study of internal working, structuring, and implementation of a computer system1...</p>
                </div>
                <div className="month">
                    <h1><MdOutlineCalendarMonth /></h1>
                    <p>{m} : {month}</p>

                </div>

                <div className="time">
                    <h1>Time Table</h1>
                    <p>Every day : {t1}</p>
                </div>
            </div>
            {/* operating system time */}
            <div className="class_Time_table">
                <div className="time_class">
                    <h2>Operating Ststem</h2>
                    <p>Operating System lies in the category of system software. It basically manages all the resources of the computer...</p>
                </div>
                <div className="month">
                    <h1><MdOutlineCalendarMonth /></h1>
                    <p>{m} : {month}</p>
                </div>

                <div className="time">
                    <h1>Time Table</h1>
                    <p>Every day : {t2}</p>
                </div>
            </div>

            {/* Ittime */}
            <div className="class_Time_table">
                <div className="time_class">
                    <h2>Information Technology</h2>
                    <p>Information technology (IT) is the field concerned with all aspects of managing and processing information, especially within a large organization or company. IT usually refers to enterprise technology rather than personal or home computing and networking. What is information technology...</p>
                </div>
                <div className="month">
                    <h1><MdOutlineCalendarMonth /></h1>
                    <p>{m} : {month}</p>
                </div>

                <div className="time">
                    <h1>Time Table</h1>
                    <p>Every day : {t3}</p>
                </div>
            </div>

            {/* c language time */}
            <div className="class_Time_table">
                <div className="time_class">
                    <h2>C language</h2>
                    <p>C is a general-purpose computer programming language...</p>
                </div>
                <div className="month">
                    <h1><MdOutlineCalendarMonth /></h1>
                    <p>{m} : {month}</p>

                </div>

                <div className="time">
                    <h1>Time Table</h1>
                    <p>Every day : {t4}</p>
                </div>
            </div>

            {/* lab time */}
            <div className="class_Time_table">
                <div className="time_class">
                    <h2>Lab Time</h2>
                    <p>C language Practical</p>
                </div>
                <div className="month">
                    <h1><MdOutlineCalendarMonth /></h1>
                    <p>{m} : {month}</p>
                </div>

                <div className="time">
                    <h1>Time Table</h1>
                    <p>Every day : {t5}</p>
                </div>
            </div>
            {/* feed_back  */}
            <div className="feed_back">
                <h1>Feed Back Section</h1>
                <Task />
                {
                    todo.length === 0
                        ?
                        <h1>Data Not Found</h1>
                        :
                        todo.map(todo => (
                            <div className="task">
                                <p className='pTag'>{todo.task}</p>
                                <ImCross className='btnDelete' onClick={() => handledelete(todo._id)} />
                            </div>
                        ))
                }
            </div>

        </>
    )
}

export default Maincontent