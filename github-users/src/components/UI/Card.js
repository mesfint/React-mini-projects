import React from 'react'
import classes from './Card.module.css'

const Card = ({children}) => {
  return (
    <div className="--card --bg-light">{children}</div>
  )
}

export default Card