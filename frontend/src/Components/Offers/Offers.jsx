import React from 'react'
import './Offers.css'

export const Offers = () => {
  return (
    <div className='offers'>
      <div className="offers-topbar">
        <div className="offers-topbar-top">
          <span className='offers-small-text'>NEW COLLECTION</span>
          <h2>ELEVATE</h2>
          <h2>( YOUR )</h2>
        </div>
        <div className="offers-middle">
          <h2>STYLE WITH</h2>
          <h2>OUR</h2>
          <h2>SIGNATURE</h2>
        </div>
        <div className="offers-low">
          <h2 className='offers-grey-text'> ( PINNACLE )</h2>
          <h2 className='offers-grey-text'>PUFFA JACKET</h2>
        </div>
      </div>
    </div>
  )
}
