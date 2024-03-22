import React from 'react'
import './register.css'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className='signup'>
      <div className="sign1">
        <div className="signing">
          <h3>Register</h3>
          <p>Have an account? <Link to='/menu/signup'><span>Sign In</span></Link></p>
          <div className="sign2">
            <p>Email</p>
            <input type="text" placeholder='Email'/>
          </div>
          <div className="sign2">
            <p>Password</p>
            <input type="text" placeholder='Password'/>
          </div>
          <div className="sign2">
            <p>Confirm Password</p>
            <input type="text" placeholder='Confirm Password'/>
          </div>
          <div className="sig">
            <button>Register</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register