import React from 'react'
import './brand.css'
import {google, slack, atlassian, dropbox, shopify} from './imports'

const Brand = () => {
  // const arrayBrand = [google, slack, atlassian, dropbox, shopify]
  
  return (
    <div className='brand'>
      {/* {arrayBrand.map((brand, index) => (
        <div key={index}>
          <img src={brand}/>
        </div>
      ))} */}
    </div>
  )
}

export default Brand