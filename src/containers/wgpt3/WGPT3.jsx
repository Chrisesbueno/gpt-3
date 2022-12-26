import React from 'react'
import Feature from '../../components/feature/Feature'
import './wgpt3.css'

const WGPT3 = () => {
  return (
    <div className='wgpt3' id='wgpt3'>
      <div className="wgpt3__section gradientSection">
        <div className="wgpt3__section-head">
          <h1>What is GPT-3</h1>
          <p>We so opinion friends me message as delight. Whole front do of plate heard oh ought. His defective nor convinced residence own. Connection has put impossible own apartments boisterous. At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by.</p>
        </div>
        <div className="wgpt3__section-medium ">
          <h1 className='gradientText'>The possibilities are beyond your imagination</h1>
          <a href="#">Explore The Library</a>
        </div>
        <div className="wgpt3__section-foot">
          <Feature title='Chatbots' text='We so opinion friends me message as delight. Whole front do of plate heard oh ought. ' />
          <Feature title='Knowledgbase' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
          <Feature title='Education' text='At jointure ladyship an insisted so humanity he. Friendly bachelor entrance to on by. As put impossible own apartments b' />
        </div>
      </div>
    </div>
  )
}

export default WGPT3