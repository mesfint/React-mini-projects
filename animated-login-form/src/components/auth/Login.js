import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import loginImg from '../../assets/login.svg'
import "./AuthContainer.css"

const Login = ({onRegister, onReset,onShowPassword,onTogglePassword}) => {
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
                     {/* PASSWORD FIELD */}
                     <div className="password-input">
                    <input 
                  type={onShowPassword ? "text" : "password"} 
                    className='--width-100' 
                    name="password" 
                    id="password" 
                    placeholder="password" />
                     <span className='eye' onClick={onTogglePassword}>{onShowPassword ? <AiOutlineEyeInvisible />  : <AiOutlineEye />  }</span>
                    </div>
                     {/* PASSWORD FIELD */}
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