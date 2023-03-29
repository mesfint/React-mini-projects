import React from 'react'
import registerImg from '../../assets/register.svg'
import "./AuthContainer.css"

const Register = ({onLogin}) => {
  return (
    <div className='main-container --flex-center'>
        <div className="form-container">
            <form className='--form-control'>
                <h2 className='--color-danger --text-center'>Sign up</h2>
                
                 
                    <input 
                    type="text" 
                    className='--width-100' 
                    name="username" 
                    id="username" 
                    placeholder="username" />
                    <label htmlFor="username">Email</label>
                    <input 
                    type="email" 
                    className='--width-100' 
                    name="email" 
                    id="email" 
                    placeholder="email" />

                    <input 
                    type="password" 
                    className='--width-100' 
                    name="password" 
                    id="password" 
                    placeholder="password" />
                    <button className="--btn --btn-primary --btn-block">Sign up</button>
                     <span className="--text-sm --block">
                         Have an account? <a href="#" onClick={onLogin}> Sign In</a>
                    </span>
                    </form>
                    
        </div>
        <div className="img-container">
            <img src={registerImg} alt="logo" />
        </div>

    </div>
  )
}

export default Register