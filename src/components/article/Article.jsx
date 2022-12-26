import React from 'react'
import './article.css'

const Article = ({img, date, title}) => {
  return (
    <div className='article'>
      <div className="article__img">
        <img src={img} alt='article-img'/>
      </div>
      <div className="article__info">
        <div className="article__info-content">
          <p> {date} </p>
          <h2> {title} </h2>
        </div>
        <div className="article__info-link">
          <a href='/'>Read Full Article</a>
        </div>
      </div>
    </div>
  )
}

export default Article

