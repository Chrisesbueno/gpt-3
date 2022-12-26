import React from 'react'
import { CTA } from '../../components'
import './register.css'

const Register = () => {
  return (
    <div className='register'>
        <div className="register__content">
            <div className="register__content-text">
                <CTA color='#0E0E0E' />
                <h1>Register today & start exploring the endless possiblities.</h1>
            </div>
            <div className="register__content-button">
                <a>Get Started</a>
            </div>
        </div>
    </div>
  )
}

export default Register