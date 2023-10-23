import React from 'react'
import { Link } from 'react-router-dom'
const ErrorPage404 = () => {
    return (
        <div className='ErrorPage404'>
            <img src="error1.png" alt="error" />
            <p>Page Not Found</p>
            <Link to="/">Go Back</Link>

        </div>
    )
}

export default ErrorPage404