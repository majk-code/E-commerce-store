import React from 'react'
import { Admin } from './Pages/Admin/Admin'
import { Navbar } from './Components/Navbar/Navbar'

export const App = () => {
  return (
    <div>
      <Navbar/>
      <Admin/>
    </div>
  )
}
