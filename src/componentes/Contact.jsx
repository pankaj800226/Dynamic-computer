
import React, { useState } from 'react'

const Contact = () => {
  const [login, setLogin] = useState({
    username: "",
    password: "",
    email: "",
  })

  const handleChange = (e) => {
    console.log(e.target.value, e.target.name);
    const { name, value } = e.target
    setLogin(() => {
      return {
        ...login,
        [name]: value
      }
    })
  }

  const handallSubmit = async (e) => {
    e.preventDefault();
    console.log(login);
    const response = await fetch('http://localhost:5000/login', {
      method: 'POST',
      body: JSON.stringify(login),
      headers: {
        'Content-Type': 'application/json'
      }
    })
    setLogin({
      username: "",
      password: "",
      email: "",
    })
    const data = await response.json();
    console.log(data);
  }
  return (
    <div className="booking_page">
      <div className="page">
        <img src="logo.png" alt="" />
        <h1 style={{ marginTop: "2rem" }}>Contact page</h1>
        <form onSubmit={handallSubmit}>
          <input type="text"
            name='username'
            placeholder='username'
            autoComplete='off'
            onChange={handleChange}
            value={login.username}
            required
          />
          <input type="password"
            name='password'
            placeholder='password'
            autoComplete='off'
            onChange={handleChange}
            value={login.password}
            required
          />

          <input type="text"
            name='email'
            placeholder='Email id'
            autoComplete='off'
            onChange={handleChange}
            value={login.email}
            required

          />
          <button type='submit'>Log-in</button>
        </form>
      </div>
    </div>
  )
}

export default Contact