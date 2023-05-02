import React from 'react'
import classes from './Profile.module.css'
import  {FiTrash2}  from 'react-icons/fi'
import Card from './UI/Card/Card'


const Profile = ({name,job,img,deleteProfile,id}) => {


  return (
    <Card>
    <div className={classes.profile}>
    <div className={classes["profile-img"]}>
        <img className={classes.img} src={img} alt="" />
    </div>
        <div className={classes["profile-details"]}>
        <h3>Name: {name}</h3>
        <p>Job: {job}</p>

        </div>
        <FiTrash2 size={25} color={"#fff"}  className="delete-icon " onClick={()=>deleteProfile(id)}/>
       
      

    </div>
    </Card>
  )
}

export default Profile