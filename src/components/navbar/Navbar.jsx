import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/logo.svg'
import {HiMenu} from 'react-icons/hi'
import {CgClose} from 'react-icons/cg'

const Menu = () => (
  <div>
    <a href="#home">Home</a>
    <a href="#wgpt3">What is GPT?</a>
    <a href="#features">Open Ai</a>
    <a href="#posibility">Case Studies</a>
    <a href="#blog">Library</a>
  </div>
)


const Navbar = () => {
  const [toggle, setToggle] = useState(false)

  return (
    <div className='navbar'>
      <div className="navbar__links">
        <div className="navbar__logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="navbar__links-container">
          <Menu />
        </div>
      </div>
      <div className="navbar__cta">
        <div className="navbar__cta-login">
          <a href='/' className="navbar__cta-login__sign-in">Sign in</a>
          <a href='/' className="navbar__cta-login__sign-up">Sign up</a>
        </div>
        <div className="navbar__cta-menu">
          {toggle 
            ? <CgClose cursor='pointer' onClick={() => setToggle(false)}/>
            : <HiMenu cursor='pointer' onClick={() => setToggle(true)}/>
          } 
          {toggle ? (
            <div className="navbar__cta-menu__container scale-up-center
            ">
              <div className="navbar__cta-menu__open">
                <Menu />
              </div>
              <div className="navbar__login">
                <a href='/' className="navbar__login-sign-in">Sign in</a>
                <a href='/' className="navbar__login-sign-up">Sign up</a>
              </div>
            </div>
          ) : (
            <div className="navbar__cta-menu__container scale-out-center
            ">
              <Menu />
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default Navbar