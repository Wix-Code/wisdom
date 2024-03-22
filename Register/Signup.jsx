import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Signup = () => {
  return (
    <div className='signup'>
      <div className="sign1">
       <div className="signing">
        <h3>Sign In</h3>
          <p>Don't have an account? <Link to='/menu/register'><span>Register</span></Link></p>
          <div className="sign2">
            <p>Email</p>
            <input type="text" placeholder='Email'/>
          </div>
          <div className="sign2">
            <p>Password</p>
            <input type="text" placeholder='Password'/>
            <span>Forgot password?</span>
          </div>
          <div className="sig">
            <button>Sign In</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Signup