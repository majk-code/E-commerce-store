import React, { useContext, useEffect, useState } from 'react'
import './About.css'
import logo from '../Assets/logo-white.png'
import about_image from '../Assets/About-image.webp'
import about_more_icon from '../Assets/about-add.png'
import { Link } from 'react-router-dom'
import { ShopContext } from '../../Context/ShopContext';

const About = () => {
    const {getTotalCartItems, addToCart} = useContext(ShopContext)
    const [secoundProduct, setSecoundProduct] = useState([])
    const [hoverElementOpacity, setHoverElementOpacity] = useState('0')
    const [hoverElementLeftPos, setHoverElementLeftPos] = useState('-2000px')
    const [hoverElementZIndex, setHoverElementZIndex] = useState('-1')

   const handleVisibility = () => {
    setHoverElementOpacity('1')
    setHoverElementLeftPos('0px')
    setHoverElementZIndex('1')
   }

   const hideMenu = () => {
    setHoverElementOpacity('0')
    setHoverElementLeftPos('-2000px')
    setHoverElementZIndex('-1')
   }

    const fetchSecoundProduct = async () => {
        await fetch('http://localhost:4000/shopsecond')
        .then((res) => res.json())
        .then((data) => setSecoundProduct(data))
    }

    useEffect(() => {
        fetchSecoundProduct();
    },[])

  return (
    <>
    <div className='about'>
        <span className='about-small-top-text'>( ABOUT )</span>
        <h2 className='about-info-text'>OUR FUTURISTIC CLOTHING COLLECTION IS A CELEBRATION OF MINIMALISM, SOPHISTICATION, AND CUTTING-EDGE DESIGN STEP INFO A WORLD</h2>
        <img onClick={handleVisibility} src={about_image} alt="" className="about-main-image"/>
        <h2 className='about-info-text'>WHERE<h2 className='about-info-text-gray'>BEIGE, WHITE AND ORANGE HUES MERGE SEAMLESSLY, CREATING A PALETTE THAT EMBODIES BOTH SIMPLICITY AND BOLDNESS.</h2></h2>
    </div>
    <div style={{opacity: hoverElementOpacity,left: hoverElementLeftPos, zIndex: hoverElementZIndex}} className="about-hover">
        <div className="about-hover-wrapper">
            <div className="about-topbar">
                <img onClick={() => {window.location.replace('/')}} className='about-logo' src={logo} alt="" />
                <ul className='about-nav-menu'>
                    <li><Link style={{textDecoration:"none"}} to="/">HOME</Link></li>
                </ul>
                {localStorage.getItem('auth-token')
                    ? <button className='nav-logout-btn' onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                    : <Link to="/login"><button className='nav-login-btn'>Login</button></Link>}
                <div className="cart-elements">
                    <Link style={{textDecoration:"none"}} to="/cart"><span className='about-nav-login-cart-span'>CART</span></Link>
                <div className="about-nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>
        </div>
        <div className="about-left-info">
            <span onClick={hideMenu} className='return-span'>&lt; GO BACK</span>
            <span className="about-price">${secoundProduct.new_price}</span>
            <span className='about-pricetag'>PRICE</span>
        </div>
        <span className="about-product-title">{secoundProduct.name}</span>
        <div className="about-product-details">
            <div className="product-details-container">
                <button onClick={()=> {addToCart(secoundProduct.id)}} className="about-add-to-cart">ADD TO CART</button>
                <button className='about-checkout'>CHECKOUT</button>
            </div>
        </div>
    </div>
</>
  )
}

export default About