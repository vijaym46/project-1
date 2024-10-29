import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Contact from '../pages/Contact'
import Login from '../pages/Login'
import Cart from '../pages/Cart'
import ShopDetails from '../pages/ShopDetails'
import Shop from '../pages/Shop'
import DigitOffset from '../pages/Services/DigitOffset'
import DocumentScan from '../pages/Services/DocumentScan'
import Photography from '../pages/Services/Photography'
import PhotoRestoration from '../pages/Services/PhotoRestoration'

function RoutesConfig () {
  return (
    <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/shop' element={<Shop/>} />
        <Route path='/shopdetails' element={<ShopDetails/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
        <Route path='/digitaloffset' element={<DigitOffset/>} />
        <Route path='/documentscan' element={<DocumentScan/>} />
        <Route path='/photography' element={<Photography/>} />
        <Route path='/photo-restoration' element={<PhotoRestoration/>} />
    </Routes>
  )
}

export default RoutesConfig
