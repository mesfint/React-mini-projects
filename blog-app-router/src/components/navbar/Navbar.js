import React from 'react'
import  "../navbar/Navbar.css";
import { Link, NavLink } from 'react-router-dom';


const Navbar = () => {
    //isActive is a boolean value. coming from NavLink
    //className={(state)=>console.log(state)}, you will get isActive value a
    //in console
  return (
    <div className='--flex-center --p2 --bg-primary'>
        <nav>
            <NavLink  className={({isActive})=>(isActive ? "active" : "")} to="/">Home</NavLink>
            <NavLink to="/about">About</NavLink>
            <NavLink to="/blogs">Blogs</NavLink>
        </nav>
    </div>
  )
}

export default Navbar