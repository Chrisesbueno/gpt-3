import React from 'react'
import './header.css'
import people from '../../assets/people.png'
import ai from '../../assets/ai.png'
import Brand from '../../components/brand/Brand'

const Header = () => {
  return (
    <div className='header'>
      <div className="header__img">
        <img src={ai} alt="AI" />
      </div>
      <div className="header__content">
        <h1 className="header__content-title gradientText">Let’s Build Something
        amazing with GPT-3 OpenAI</h1>
        <p className="header__content-text">Yet bed any for travelling assistance indulgence unpleasing. Not thoughts all exercise blessing. Indulgence way everything joy alteration boisterous the attachment. Party we years to order allow asked of.</p>
        <div className="header__content-form">
          <input 
            type="text"
            placeholder='Your Email Address'
            className='header__content-form__input'
          />
          <button
            type='button'
            className='header__content-form__button'
          >
            Get Started
          </button>
        </div>
        <div className="header__content-people">
          <img src={people} alt="People" className='header__content-people__img' />
          <p className="header__content-people__text">1,600 people requested access a visit in last 24 hours</p>
        </div>
        <div className="header__content-brand">

        </div>
      </div>
    </div>
  )
}

export default Header