import React, { useEffect, useState } from 'react'
import './Popular.css'
import { Item } from '../Item/Item'
import uparrow_icon from '../Assets/up-right-arrow-black.png'
import { Link } from 'react-router-dom'

export const Popular = () => {

  const [mainItem, SetMainItem] = useState([])
  const [newarrivalItems, SetNewarrivalItems] = useState([])

  const fetchFirstItem = async () => {
    await fetch('http://localhost:4000/newarrivalsmain')
    .then((res) => res.json())
    .then((data) => SetMainItem(data))
  }

  const fetchNewArrivals = async () => {
    await fetch('http://localhost:4000/newarrivals')
    .then((res) => res.json())
    .then((data) => SetNewarrivalItems(data))
  }

  useEffect(()=> {
    fetchFirstItem();
    fetchNewArrivals();
  },[])

  return (
    <div className='popular'>
        <h1>NEW ARRIVALS</h1>
        <div className="popular-items-wrapper">
          <div className="popular-item-main">
            <div className="popular-item-container">
              <Link to={`/product/${mainItem.id}`}><img src={mainItem.image} className='popular-item-main-img' onClick={window.scrollTo(0,0)} alt="" /></Link>
            </div>
          <span className="popular-item-main-name">{mainItem.name}</span>
          </div>
          <div className="popular-item">
            {newarrivalItems.map((item, index) => (
              <Item
                key={index} 
                id={item.id} 
                name={item.name} 
                image={item.image}
              />
            ))}
          </div>
          <div className='popular-see-all-btn'>
            <Link style={{textDecoration: 'none', color: 'black'}} to="/fw2024"><span>SEE ALL</span></Link>
            <img src={uparrow_icon} alt="" />
          </div>
        </div>
    </div>
  )
}
