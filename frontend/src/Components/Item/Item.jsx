import React from 'react'
import { Link } from 'react-router-dom'
import './Item.css'

export const Item = (props) => {
  return (
    <div className='item'>
      <div className="item-container">
        <Link to={`/product/${props.id}`}><img className='item-image' onClick={window.scrollTo(0,0)} src={props.image} alt="" /></Link>
      </div>
        <p>{props.name}</p>
    </div>
  )
}
