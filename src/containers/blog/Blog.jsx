import React from 'react'
import './blog.css'
import {blog01, blog02, blog03, blog04, blog05} from '../../assets/blog'
import { Article } from '../../components'


const Blog = () => {
  return (
    <div className='blog'>
      <h1 className="blog__title gradientText">
        A lot is happening, 
        We are blogging about it.
      </h1>
      <div className="blog__articles">
        <div className='blog__article first-article'>
          <Article title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 26, 2021' img={blog01} />
        </div>
        <div className='blog__article'>
          <Article title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 30, 2021' img={blog02} />
        </div>
        
        <div className='blog__article'>
          <Article title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 29, 2021' img={blog03} />
        </div>
        <div className='blog__article'>
          <Article title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 28, 2021' img={blog04} />
        </div>
        <div className='blog__article'>
          <Article title='GPT-3 and Open  AI is the future. Let us exlore how it is?' date='Sep 27, 2021' img={blog05} />
        </div>
      </div>
    </div>
  )
}

export default Blog