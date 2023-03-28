import React from 'react'
import classes from './ProfileList.module.css'
import {profileData as data} from '../data/profile-data.js'
import Profile from './Profile'

const ProfileList = () => {
  const[profiles, setProfiles] = React.useState(data)


  const deleteProfile = (id) => {
    const updatedProfile =  profiles.filter((profile)=>profile.id !== id)
    setProfiles(updatedProfile)
  }

  const deleteAll=()=>{
    setProfiles([])

  }

  return (
    <div className={classes.container}>
    <div className={classes.list}>
    {profiles.map((profile)=>(
      <Profile 
      key={profile.id}
        name={profile.name}
        job={profile.job}
         img={profile.img}
         deleteProfile ={deleteProfile} 
         id={profile.id}
         

         />
    ))}

    <button className={classes["delete-all"] } onClick={()=>deleteAll()}>Clear All</button>
    </div>
      
    </div>
  )
}

export default ProfileList