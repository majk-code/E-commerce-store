import React, { useContext } from 'react'
import '../Components/CSS/Product.css'
import logo from '../Components/Assets/logo-white.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../Context/ShopContext'
import { useParams } from 'react-router-dom'
import about_more_icon from '../Components/Assets/about-add.png'

export const Product = () => {

  const {getTotalCartItems} = useContext(ShopContext)

  const {all_product, addToCart} = useContext(ShopContext)
  const {productId} = useParams();
  const product = all_product.find((e) => e.id === Number(productId));

  return (
    <div className="product">
    <div className="product-hover-shop">
        <div className="product-hover-wrapper">
            <div className="product-topbar">
                <img onClick={() => {window.location.replace('/')}} className='product-logo-black' src={logo} alt="" />
                <div className="login-btns">
                  {localStorage.getItem('auth-token')
                      ? <button className='nav-logout-btn' onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                      : <Link to="/login"><button className='nav-login-btn'>Login</button></Link>}
                  <div className="cart-elements">
                      <Link style={{textDecoration:"none"}} to="/cart"><span className='product-nav-login-cart-span'>CART</span></Link>
                  <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
              </div>
            </div>
        </div>
        <div className="product-left-info">
            <Link style={{textDecoration: 'none'}} to='/'><span className='return-span'>&lt; GO BACK</span></Link>
            <span className="product-price-black">${product.old_price}</span>
            <span className='product-pricetag-black'>PRICE</span>
        </div>
        <img src={product.image} alt="" className="product-image" />
        <span className="product-product-title-black">{product.name}</span>
        <div className="product-product-details">
            <div className="product-details-container">
                <button onClick={()=> {addToCart(product.id)}} className="product-add-to-cart">ADD TO CART</button>
                <button className='product-checkout'>CHECKOUT</button>
            </div>
        </div>
    </div>
    </div>
  )
}
