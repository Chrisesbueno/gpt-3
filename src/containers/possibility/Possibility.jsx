import React from 'react'
import './possibility.css'
import possibilityImg from '../../assets/possibility.png'
import { CTA } from '../../components'

const Possibility = () => {
  return (
    <div className='possibility'>
      <div className="possibility__image">
        <img src={possibilityImg} alt="Possibility" />
      </div>
      <div className="possibility__content">
        <CTA color='#71E5FF'/>
        <h1 className='gradientText'>The possibilities are beyond your imagination</h1>
        <p>Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <CTA color='#FF8A71'/>
      </div>
    </div>
  )
}

export default Possibility