import React from 'react'
import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
    <h1>Page Not Found</h1>
    <p>Looks like the page you are looking for could not be found.</p>
    <br />
    <Link className='--color-primary' to="/">Home</Link>
  </div>
  )
}

export default NotFound