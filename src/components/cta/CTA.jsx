import React from 'react'
import './cta.css'

const CTA = ({color}) => {
  return (
      <a className='cta' style={{color: color}}>Request Early Access to Get Started</a>
  )
}

export default CTA