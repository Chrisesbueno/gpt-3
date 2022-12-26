import React from 'react' 
import './footer.css'
import logo from '../../assets/logo.svg'

const Footer = () => {
  return (
    <div className='footer'>
      <div className="footer__resquest">
        <h1 className='gradientText'>Do you want to step in to the future before others</h1>
        <a href='/'>Request Early Access</a>
      </div>
      <div className="footer__contact">
        <div className="footer__contact-gpt3">
          <img src={logo} alt="logo" />
          <p>Crechterwoord K12 182 DK Alknjkcb, All Rights Reserved</p>
        </div>
        <div className="footer__contact-links">
          <p>Links</p>
          <a href='/'>Overons</a>
          <a href="/">Social Media</a>
          <a href="/">Counters</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer__contact-company">
          <p>Company</p>
          <a href="/">Terms & Conditions</a>
          <a href="/">Privacy Policy</a>
          <a href="/">Contact</a>
        </div>
        <div className="footer__contact-get">
          <p>Get in touch</p>
          <a href="/">Crechterwoord K12 182 DK Alknjkcb</a>
          <a href="/">085-132567</a>
          <a href="/">info@payme.net</a>
        </div>
      </div>
      <div className='credits'>© 2021 GPT-3. All rights reserved.</div>
    </div>
  )
}

export default Footer