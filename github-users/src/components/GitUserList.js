import React, { useEffect, useState } from 'react'
import User from './User'
import classes from './GitUsers.module.css'
import spinner from '../assets/spinner1.jpg'


const GitUserList = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(false);


    const fetchGitUsers= async()=>{
        try {

            setLoading(true);
            setError(false);
                const response = await fetch('https://api.github.com/users')
                console.log(response)
                if(!response.ok){
                    throw new Error('Something went wrong')

                }
                const data = await response.json();
                setUsers(data)
                setLoading(false);
    
            
        } catch (error) {
            console.log(error.message)
            setError(true)
            setLoading(false);
            
        }

    }

    useEffect(() => {
        // fetch('https://api.github.com/users')
        // .then(res => res.json())
        // .then(data => setUsers(data))
        fetchGitUsers();
    }, [])

  return (
    <div className="container   --bg-primary">
    <h1 className="--text-center --py2 --text-light">Git Users</h1>
    <div className="--line"></div>
    {loading &&<p className='--center-all'>Loading...</p>}
    <div className="--grid-25 --py">

    {error ? (<p className="--text-center --text-light">Something went wrong</p>) : (
        users.map(user => (
        <User key={user.id} user={user}/>

    ))

    )}
    
       
       
    </div>

    </div>
  )
}

export default GitUserList