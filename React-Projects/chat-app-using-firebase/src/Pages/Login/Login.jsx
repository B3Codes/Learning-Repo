import React from 'react'
import './Login.css'
import assest from '../../assets/assest'
// import {pic1} from '../../assets/images'
import assets from '../../assets/assest'

const Login = () => {
  return (
    <div className='login'>
      <div className='chat_div'>
        <img src={assets.logoBig} alt='logo' className='logo'/> 
        <h2>Chat App</h2>
      </div>
      <form className="login-form">
        <h2>Signup</h2>
        <input type="text" className="form-input" placeholder='username' required/>
        <input type="email" className="form-input" placeholder='Email address' required/>
        <input type="password" className="form-input" placeholder='password' required/>
        <button type='submit'>Signup</button>
        <div className="login-term">
          <input type="checkbox" />
          <p>Agree to the terms of use & privacy policy.</p>
        </div>
        <div className="login-forget">
          <p className="login-toggle">Already have an account <span>click here</span></p>
        </div>
      </form>
    </div>
  )
}

export default Login