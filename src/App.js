import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Cards from './pages/Cards'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Navbar from './components/Navbar'
import Cart from './pages/Cart'

const App = () => {
  return (
    <div className='px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw] h-screen bg-slate-200'>
      <Navbar />
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cards' element={<Cards/>} />
        <Route path='/about' element={<About/>} />
        <Route path='/contact' element={<Contact/>} />
        <Route path='/login' element={<Login/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  ) 
}

export default App
