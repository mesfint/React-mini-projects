import React, { useEffect, useState } from 'react'
import User from './User'
import classes from './GitUsers.module.css'
import spinner from '../assets/spinner1.jpg'
import useFetch from './hooks/useFetch'


const url = 'https://api.github.com/users'

const GitUserList = () => {
  const {data,error, loading} = useFetch(url)
   

  return (
    <div className="container   --bg-primary">
    <h1 className="--text-center --py2 --text-light">Git Users</h1>
    <div className="--line"></div>
    {loading &&<p className='--center-all'>Loading...</p>}
    <div className="--grid-25 --py">

    {error ? (<p className="--text-center --text-light">Something went wrong</p>) : (
        data.map(user => (
        <User key={user.id} user={user}/>

    ))

    )}
    
       
       
    </div>

    </div>
  )
}

export default GitUserList