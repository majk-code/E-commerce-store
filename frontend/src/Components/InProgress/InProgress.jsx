import React from 'react'
import './InProgress.css'
import { Link } from 'react-router-dom'

const InProgress = () => {
  return (
    <div className='inprogress'>
        <h1>// PAYMENT METHODS IN PROGRESS...</h1>
        <h1>GO BACK TO SHOP SITE</h1>
        <Link to='/'><button className='return-btn'>Home page</button></Link>
    </div>
  )
}

export default InProgress