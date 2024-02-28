import React from 'react'
import { Hero } from '../Components/Hero/Hero'
import { Popular } from '../Components/Popular/Popular'
import { Offers } from '../Components/Offers/Offers'
import About from '../Components/About/About'
import BlockInfo from '../Components/BlockInfo/BlockInfo'
import { Navbar } from '../Components/Navbar/Navbar'
import Footer from '../Components/Footer/Footer'

export const Shop = () => {
  return (
    <div className='shop'>
      <Navbar/>
      <Hero/> 
      <About/>
      <Popular/>
      <Offers/>
      <BlockInfo/>
      <Footer/>
    </div>
  )
}
