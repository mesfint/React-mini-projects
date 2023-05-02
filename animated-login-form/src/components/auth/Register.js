import React, { useEffect } from 'react'
import registerImg from '../../assets/register.svg'
import "./AuthContainer.css"
import {AiOutlineEye,AiOutlineEyeInvisible} from 'react-icons/ai'
import {GoPrimitiveDot} from 'react-icons/go'
import {FaCheck} from 'react-icons/fa'


const Register = ({onLogin,onShowPassword,onTogglePassword}) => {
 
  const[showIndicator, setShowIndicator] = React.useState(false)
  const[passwordValue, setPasswordValue] = React.useState("")
  
  const[passwordLetter, setPasswordLetter] = React.useState(false)
  const[passwordNumber, setPasswordNumber] = React.useState(false)
  const[passwordSpecialCharacter, setPasswodSpecialCharacter] = React.useState(false)
  const[passwordlength, setPasswordLength] = React.useState(false)
  const[passComplete, setPassComplete] = React.useState(false)
 




  const handleShowIndicator = () => {
    setShowIndicator(true)
  }
  const handlePasswordChange = (e) => {
     setPasswordValue(e.target.value)
     console.log(passwordValue)
  }

  useEffect(()=>{
    if(passwordValue.match(/[a-z]/g) && passwordValue.match(/[A-Z]/g)){
      setPasswordLetter(true)
  }else{
    setPasswordLetter(false)
  }
  if(passwordValue.match(/[0-9]/g)){
    setPasswordNumber(true)
}else {
  setPasswordNumber(false)
}
if(passwordValue.match(/[!,%,&,@,#,$,^,*,?,_,~]/g)){
  setPasswodSpecialCharacter(true)
}else{
  setPasswodSpecialCharacter(false)
}
if(passwordValue.length >= 8){
  setPasswordLength(true)
}else{
  setPasswordLength(false)
}
if(passwordLetter && passwordNumber && passwordSpecialCharacter && passwordlength){
  setPassComplete(true)
}else{
  setPassComplete(false)
 
}
  },[passwordValue,passwordLetter,passwordNumber,passwordSpecialCharacter,passwordlength])

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
                     {/* PASSWORD FIELD */}
                    <div className="password-input">
                    <input 
                    type={onShowPassword ? "text" : "password"} 
                    className='--width-100 ' 
                    name="password" 
                    id="password" 
                    onFocus={handleShowIndicator}
                    value={passwordValue}
                    onChange={handlePasswordChange}                    
                    placeholder="password"  />
                    <span className='eye' onClick={onTogglePassword}>{onShowPassword ? <AiOutlineEyeInvisible />  : <AiOutlineEye />  }</span>

                    </div>
                     {/* PASSWORD FIELD */}
                    <button disabled={passComplete}  className={passComplete ? "--btn --btn-primary --btn-block" : "--btn --btn-primary --btn-block btn-disabled"}>Sign up</button>
                     <span className="--text-sm --block">
                         Have an account? <a href="#" onClick={onLogin}> Sign In</a>
                    </span>
                    {/* password strength indicator*/}
                    
                    <div className= {showIndicator ? 'show-indicator ' : 'hide-indicator' }>
                      <ul className='--list-style-none --card --bg-grey --text-sm --p'>
                      <p className='--text-sm'>Password Strength Indicator</p>
                        <li className={passwordLetter ? "pass-green" :"pass-red"}><span className='--align-center'>{passwordLetter ? <FaCheck color={"#00ff00"}  /> :<GoPrimitiveDot />}&nbsp; Lowercase & Uppercase</span></li>
                        <li className={passwordNumber ? "pass-green" :"pass-red"}><span className='--align-center'>{passwordNumber ?  <FaCheck color={"#00ff00"}  /> :<GoPrimitiveDot />}&nbsp; Numbers (0-9)</span></li>
                        <li className={passwordSpecialCharacter ? "pass-green" :"pass-red"}> <span className='--align-center'>{passwordSpecialCharacter ?<FaCheck color={"#00ff00"}  /> :<GoPrimitiveDot />}&nbsp; Special Character(!@#$%^&*")</span></li>
                        <li className={passwordlength ? "pass-green" :"pass-red"}><span className='--align-center'>{passwordlength ? <FaCheck color={"#00ff00"}  /> :<GoPrimitiveDot />}&nbsp; At least 8 Character</span></li>
                      </ul>
                    </div>
                    

                    </form>
                    
        </div>
        <div className="img-container">
            <img src={registerImg} alt="logo" />
        </div>

    </div>
  )
}

export default Register