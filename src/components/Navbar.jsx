import React, { useState } from 'react'
import logo from '../assets/logo.svg'
import search from '../assets/search_icon.png'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className='flex items-center justify-between py-5  font-medium'>
      
      {/* --- 1 --- */}

        <img src={logo} alt="brand-logo" className='w-40 sm:w-36 z-50' />   


      {/* --- 2 --- */}
      <ul className='hidden sm:flex gap-8 text-sm text-gray-700'>

        <NavLink to='/' className='flex flex-col items-center gap-1'>
          <p>HOME</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/cards' className='group relative flex flex-col items-center gap-1'>
          <p>CARDS</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
          <div className='group-hover:block hidden absolute dropdown-menu pt-12 '>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='hover:text-black'>Construction</p>
              <p className='hover:text-black'>Bakery</p>
              <p className='hover:text-black'>Barber</p>
              <p className='hover:text-black'>Restaurant</p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/about' className='flex flex-col items-center gap-1'>
          <p>ABOUT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
        <NavLink to='/contact' className='flex flex-col items-center gap-1'>
          <p>CONTACT</p>
          <hr className='w-2/4 border-none h-[1.5px] bg-gray-700 hidden'/>
        </NavLink>
      </ul>
      
      {/* --- 3 --- */}
      <div className='flex items-center gap-6'>
        <img src={search} alt="search-icon" className='w-5 cursor-pointer' />

        <div className='z-50 text-3xl flex items-center sm:hidden' onClick={() => setOpen(!open)}>
          <ion-icon name={`${open ? 'close' : 'menu'}`}></ion-icon>
      </div>

      </div>

      

      {/* mobile nav */}
        
      <ul className= {`sm:hidden absolute bg-white w-full h-full bottom-0 py-24 pl-4 text-gray-700 duration-500 ${open ? 'left-0' : 'left-[-100%]'}`}>
        

        <NavLink to='/' className='block items-center py-7'>
          <p>HOME</p>
        </NavLink>
        <NavLink to='/cards' className='block items-center py-7'>
          <p>CARDS</p>
          <div className='group-hover:block hidden absolute dropdown-menu pt-12 '>
            <div className='flex flex-col gap-2 w-36 py-3 px-5 bg-slate-100 text-gray-500 rounded'>
              <p className='hover:text-black'>Construction</p>
              <p className='hover:text-black'>Bakery</p>
              <p className='hover:text-black'>Barber</p>
              <p className='hover:text-black'>Restaurant</p>
            </div>
          </div>
        </NavLink>
        <NavLink to='/about' className='block items-center py-7'>
          <p>ABOUT</p>
        </NavLink>
        <NavLink to='/contact' className='block items-center py-7'>
          <p>CONTACT</p>
        </NavLink>
      </ul>

    </div>
  )
}

export default Navbar
