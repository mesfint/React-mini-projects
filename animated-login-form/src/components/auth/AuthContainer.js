import React,{useState} from 'react'
import Login from './Login'
import Register from './Register'
import Reset from './Reset'

const AuthContainer = () => {
  const [auth, setAuth] = useState({
    isLogin: true,
    isRegister: false,
    isReset: false
  })

  // const [isLogin, setIsLogin] = useState(true);
  // const [isRegister, setIsRegister] = useState(false);
  // const [isReset, setIsReset] = useState(false);

  const handleLogin = () => {
    setAuth({
      isLogin: true,
      isRegister: false,
      isReset: false
    })
    // setIsLogin(true)
    // setIsRegister(false)
    // setIsReset(false)
  }

  const handleRegister = () => {
    setAuth({
      isLogin: false,
      isRegister: true,
      isReset: false
    })

    // setIsLogin(false)
    // setIsRegister(true)
  }
  const handleReset = () => {
    setAuth({
      isLogin: false,
      isRegister: false,
      isReset: true
    })
    // setIsLogin(false)
    // setIsReset(true)
  }

  return (
    <section className='--flex-center --100vh '>
    <div className="container box">
    {auth.isLogin &&  <Login onRegister={handleRegister} onReset={handleReset} />} 
    {auth.isRegister &&  <Register onLogin={handleLogin} /> } 
    {auth.isReset && <Reset onReset={handleReset} />} 

    </div>
    </section>
  )
}

export default AuthContainer