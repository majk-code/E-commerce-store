import React, { useEffect, useState } from 'react'
import '../Components/CSS/ShopCategory.css'
import { Link } from 'react-router-dom'
import { Item } from '../Components/Item/Item'
import { Navbar } from '../Components/Navbar/Navbar'

export const ShopCategory = () => {

  const [shopItemsAmmount, SetShopItemsAmmount] = useState(0)

  const [all, setAll] = useState([])
  const [productsCount, setProductsCount] = useState([])

  const fetchProductCount = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data) => setProductsCount(data.length))
  }

  const fetchAll = async () => {
    await fetch('http://localhost:4000/allproducts')
    .then((res) => res.json())
    .then((data) => setAll(data))
  }

  useEffect(()=> {
    fetchAll();
    fetchProductCount();
  },[])

  return (
    <div className='shop-category'>
      <Navbar/>
      <div className="shop-topbar">
        <h2 className='shopcategory-h2'>SHOP</h2>
        <div className="shop-items-counter">
          <span className='shop-items-count'>{productsCount} ITEMS</span>
        </div>
      </div>
      <div className="shop-products">
        <div className="shop-products-wrapper">
          {all.map((product, index) => {
            return (
            <Item
              key={index}
              id={product.id}
              name={product.name}
              image={product.image}
            /> )
          })}
        </div>
      </div>
    </div>
  )
}
