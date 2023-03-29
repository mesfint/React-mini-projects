import React from 'react'
import { AiOutlineCloseCircle } from 'react-icons/ai'
import forgotImg from '../../assets/forgot.svg'
import "./AuthContainer.css"

const Reset = ({onReset}) => {
  return (
    <div className='main-container --flex-center'>
    <div className="form-container reset">
   
        <form className='--form-control'>
            <h2 className='--color-danger --text-center'>Reset Password</h2>
            
               
               
                <input 
                type="email" 
                className='--width-100' 
                name="email" 
                id="email" 
                placeholder="email" />

               
                <button className="--btn --btn-primary --btn-block">Reset Password</button>
                 <span className="--text-sm --block --text-center">
                     We will send you a reset link!!! <a href="#" onClick={onReset}>reset</a>
                </span>
                <span className="close">
                <AiOutlineCloseCircle size={40} color="orange" />

                </span>
                </form>
                
    </div>
    <div className="img-container">
        <img src={forgotImg} alt="logo" />
    </div>

</div>
  )
}

export default Reset