import React from 'react'
import loginImg from '../../assets/login.svg'
import "./AuthContainer.css"

const Login = ({onRegister, onReset}) => {
  return (
    <div className='main-container --flex-center'>
        <div className="img-container">
            <img src={loginImg} alt="logo" />
        </div>
        <div className="form-container">
            <form className='--form-control'>
                <h2 className='--color-danger --text-center'>Sign In</h2>
                
                  
                    <input 
                    type="text" 
                    className='--width-100' 
                    name="username" 
                    id="username" 
                    placeholder="username" />

                    <input 
                    type="password" 
                    className='--width-100' 
                    name="password" 
                    id="password" 
                    placeholder="password" />
                    <button className="--btn --btn-primary --btn-block">Login</button>
                    <a href="#" className='--text-sm' onClick={onReset}>Forgot Password</a>
                    <span className="--text-sm --block">
                        Don't have an account? <a href="#" onClick={onRegister}>Sign Up</a>
                    </span>
                    </form>
                    
        </div>

    </div>
    
  )
}

export default Login