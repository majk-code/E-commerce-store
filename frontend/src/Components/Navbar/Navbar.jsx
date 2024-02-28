import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom';
import './Navbar.css'
import logo from '../Assets/logo.png'
import { ShopContext } from '../../Context/ShopContext';

export const Navbar = () => {
    const {getTotalCartItems} = useContext(ShopContext)
    
    const [menuIsVisible, setMenuIsVisible] = useState(false);

    const handleDisplayMenu = () => {
        setMenuIsVisible(!menuIsVisible);
    }

    return (
    <div className='navbar-wrapper'>
        <div className="navbar">
            <div className="nav-logo">
                <img src={logo} alt="" />
            </div>
            <ul className='nav-menu'>
                <li><Link style={{textDecoration:"none"}} to="/">HOME</Link> </li>
                <li><Link style={{textDecoration:"none"}} to="/fw2024">FW24COLLECTION</Link></li>
            </ul>
            <div className="nav-login-cart">
                <div onClick={handleDisplayMenu} className="mobile-menu">
                    <span>MENU</span>
                </div>
                {localStorage.getItem('auth-token')
                ? <button className='nav-logout-btn' onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                : <Link to="/login"><button className='nav-login-btn'>Login</button></Link>}
                <div className="cart-elements">
                    <Link style={{textDecoration:"none"}} to="/cart"><span className='nav-login-cart-span'>CART</span></Link>
                    <div className="nav-cart-count">{getTotalCartItems()}</div>
                </div>
            </div>

            {/* NAVIGATION FOR MOBILE MENU */}
            <div style={{display: menuIsVisible ? 'flex' : 'none'}} className="nav-mobile-menu">
                <li onClick={menuIsVisible ? 'none' : 'flex'}><Link style={{textDecoration:"none"}} to="/">HOME</Link> </li>
                <li><Link style={{textDecoration:"none"}} to="/fw2024">SHOP</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/contact">CONTACT</Link></li>
                <li><Link style={{textDecoration:"none"}} to="/about">ABOUT</Link></li>
                {localStorage.getItem('auth-token')
                ? <button className='nav-logout-btn' onClick={() => {localStorage.removeItem('auth-token'); window.location.replace('/')}}>Logout</button>
                : <Link to="/login"><button className='nav-login-btn'>Login</button></Link>}
            </div>
        </div>
    </div>
  )
}
