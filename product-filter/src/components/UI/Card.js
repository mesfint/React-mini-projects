import React from 'react'
import './Card.css'


const Card = ({children}) => {
  return (
    <div className='card card-style'>{children}</div>
  )
}

export default Card