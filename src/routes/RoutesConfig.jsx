import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import Cards from '../pages/Cards'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Cart from '../pages/Cart'

function RoutesConfig () {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cards' element={<Cards/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
    </Routes>
  )
}

export default RoutesConfig
