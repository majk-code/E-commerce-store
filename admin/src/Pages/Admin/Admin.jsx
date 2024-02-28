import React from 'react'
import './Admin.css'
import AddProduct from '../../Components/AddProduct/AddProduct'
import { ListProduct } from '../../Components/ListProduct/ListProduct'
import { Route, Routes } from 'react-router-dom'
import Sidebar from '../../Components/Sidebar/Sidebar'

export const Admin = () => {
  return (
    <div className='admin'>
      <Sidebar/>
        <Routes>
          <Route path='/addproduct' element={<AddProduct/>}/>
          <Route path='/listproduct' element={<ListProduct/>}/>
        </Routes>
    </div>
  )
}
