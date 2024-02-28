import React from 'react'
import '../Hero/Hero.css'
import uparrow_icon from '../Assets/up-right-arrow.png'
import { Link } from 'react-router-dom';

export const Hero = () => {
  return (
    <>
    <div className="hero-wrapper">
      <div className="hero">
        <h1 className='hero-title'>AETHER THIRE</h1>
      </div>
      <div className="header">
        <div className="header-wrapper">
          <div className="header-top-tags">FW'24</div>
          <div className="see-new-collection-btn">
            <Link to="/fw2024"><span>SEE NEW COLLECTION</span></Link>
            <img className='see-new-collection-btn-icon' src={uparrow_icon} alt="" />
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
