import React from 'react'
import './BlockInfo.css'
import blockinfo_img from '../Assets/blockinfo-img.png'

const BlockInfo = () => {
  return (
    <div className='blockinfo'>
        <div className="blockinfo-wrapper">
            <div className="blockinfo-text">
                <div className="blockinfo-text-container">
                    <h2>AETHER THIRE</h2>
                    <p>FW 2024</p>
                </div>
            </div>
            <div className="blockinfo-image">
                <img src={blockinfo_img} alt="" />
            </div>
        </div>
    </div>
  )
}

export default BlockInfo