import React, { useState } from 'react'

const Booknow = () => {
    const [bookDatas, setBookdata] = useState({
        username: "",
        email: "",
        password: "",
        addresh: "",
        courses: "",
        phonenumber:"",
        Pincode: "",

    })

    const handleChange = (e) => {
        console.log(e.target.value, e.target.name);
        const { name, value } = e.target;
        setBookdata(() => {
            return {
                ...bookDatas,
                [name]: value
            }
        })
    }
    const BooknowHandlar = async (e) => {
        e.preventDefault()
        const response = await fetch('http://localhost:5000/bookData', {
            method: 'POST',
            body: JSON.stringify(bookDatas),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        setBookdata({
            username: "",
            email: "",
            password: "",
            addresh: "",
            courses: "",
            phonenumber:"",
            Pincode: "",

        })
        const data = await response.json();
        console.log(data);
    }
    return (
        <div className="booking_page">
            <div className="page">
                <img src="logo.png" alt="" />
                <h1>Booking Now.</h1>
                <form onSubmit={BooknowHandlar}>
                    <input type="text"
                        name='username'
                        placeholder='username'
                        onChange={handleChange}
                        value={bookDatas.username}
                        autoComplete='off'
                        required
                    />


                    <input type="text"
                        name='email'
                        placeholder='Email id'
                        onChange={handleChange}
                        value={bookDatas.email}
                        autoComplete='off'
                        required

                    />
                    <input type="text"
                        name='password'
                        placeholder='password'
                        onChange={handleChange}
                        value={bookDatas.password}
                        autoComplete='off'
                        required

                    />

                    <input type="text"
                        name='addresh'
                        placeholder='Addresh'
                        onChange={handleChange}
                        value={bookDatas.addresh}
                        autoComplete='off'
                        required

                    />

                    <input type="text"
                        name='courses'
                        placeholder='courses'
                        onChange={handleChange}
                        value={bookDatas.courses}
                        autoComplete='off'
                        required

                    />
                    <input type="number"
                        name='phonenumber'
                        placeholder='Phone Number'
                        onChange={handleChange}
                        value={bookDatas.phonenumber}
                        autoComplete='off'
                        required

                    />

                    <input type="number"
                        name='Pincode'
                        placeholder='Pincode'
                        onChange={handleChange}
                        value={bookDatas.Pincode}
                        autoComplete='off'
                        required

                    />
                    <button type='submit'>Log-in</button>
                </form>
            </div>
        </div>
    )
}

export default Booknow