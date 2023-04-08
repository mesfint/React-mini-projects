import React,{useEffect} from 'react'
import "./Alert.css"
import {FaExclamationCircle,FaTimes} from "react-icons/fa"

const Alert = ({alertContent, alertClass,onAlertClose}) => {


    useEffect(()=>{
        //will make disappear the alert after 3 seconds
        const timeout = setTimeout(()=>{
            onAlertClose()
        },3000)
        return ()=> clearTimeout(timeout)
    })

  return (
    <div className={`alert ${alertClass}`}> 
    <FaExclamationCircle size={16} className='icon-x' />

    <span className="msg">{alertContent}</span>
    <div className="close-btn" onClick={onAlertClose}>
        <FaTimes  size={19} className="icon-x"/>
    </div>

    </div>
  )
}

export default Alert
