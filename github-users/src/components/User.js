import React from 'react'
import Card from './UI/Card'
import classes from './User.module.css'

const User = ({user}) => {
  return (
    <Card>
    <div className={classes.user}>
    <div>
        <img src={user.avatar_url} alt="user-image" className={classes.img}/>
    </div>
    <div>
        <h3>{user.login}</h3>
        <a href={user.html_url}>View profile</a>
    </div>

    </div>

    </Card>
  )
}

export default User