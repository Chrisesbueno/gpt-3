import React from 'react'
import './cta.css'

const CTA = ({color}) => {
  return (
      <a href='/' className='cta' style={{color: color}}>Request Early Access to Get Started</a>
  )
}

export default CTA