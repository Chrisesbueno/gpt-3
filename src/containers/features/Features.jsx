import React from 'react'
import './features.css'
import {CTA, Feature} from '../../components/index'
import '../../components/feature/feature.css'

const Features = () => {
  return (
    <div className='features'>
      <div className="features__title">
        <h1 className='gradientText'>The Future is Now and You Just Need To Realize It. Step into Future Today & Make it Happen.</h1>
        <CTA color='#FF8A71' />
      </div>
      <div className="features__content">
        <Feature title='Improving end distrusts instantly' text='From they fine john he give of rich he. They age and draw mrs like. Improving end distrusts may instantly was household applauded.'  />
        <Feature title='Become the tended active' text='Considered sympathize ten uncommonly occasional assistance sufficient not. Letter of on become he tended active enable to.'  />
        <Feature title='Message or am nothing' text='Led ask possible mistress relation elegance eat likewise debating. By message or am nothing amongst chiefly address.' />
        <Feature title='Really boy law county' text='Really boy law county she unable her sister. Feet you off its like like six. Among sex are leave law built now. In built table in an rapid blush.' />
      </div>
    </div>
  )
}

export default Features