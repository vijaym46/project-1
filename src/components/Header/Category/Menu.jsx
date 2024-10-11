import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from './CategoryItems';
import logo from '../../../assets/logo.svg'

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <div className='hidden custom-991:flex items-center justify-between pl-8 w-5/6 '>
        <ul className='flex gap-8 text-sm text-gray-700'>
          {navItems.map((item) => (
            <NavLink key={item.id} to={item.path} className='flex flex-col items-center gap-1'>
              <p>{item.title}</p>
              <hr className='hidden w-2/4 border-none h-[1px] bg-gray-600'/>
            </NavLink>
          ))}
        </ul>

        <ul className='flex gap-8 text-grey-700'>
          <NavLink to='/login'>
            <p>Login</p>
          </NavLink>
          <NavLink to='/register'>
            <p>Register</p>
          </NavLink>
        </ul>
      </div>
      
      
      <div className='w-full custom-991:hidden'>
        <div className='flex justify-between  w-full my-2'>
          <Link to="/" className='block'>
              <img
                src={logo}
                alt="brand-logo"
                className="w-32 sm:w-36 cursor-pointer"
              />
          </Link>
          
          {/* Mobile Menu button */}
          <div
                className="z-50 text-3xl relative"
                onClick={() => setIsOpen(!isOpen)}
              >
                <ion-icon
                  name={isOpen ? "close" : "menu"}
                  className='absolute' 
                ></ion-icon>
          </div>
        </div>

        {/* Mobile Menu */}
        <div
          className={`${
            isOpen ? 'max-h-screen opacity-100 my-3' : 'max-h-0 opacity-0'
          } transition-all duration-300 ease-in-out overflow-hidden block w-full`}
        >
          <div className="flex flex-col">
            <ul className="flex flex-col gap-3 text-sm text-gray-700">
              {navItems.map((item) => (
                <NavLink
                  key={item.id}
                  to={item.path}
                  className="flex flex-col gap-1 hover:text-orange-300"
                  
                >
                  <p>{item.title}</p>
                </NavLink>
              ))}
            </ul>

            <ul className="flex flex-col mt-3 gap-3 text-sm text-grey-700">
              <NavLink
                to="/login"
                className="hover:text-orange-300"
    
              >
                <p>LOGIN</p>
              </NavLink>
              <NavLink
                to="/register"
                className="hover:text-orange-300"
                
              >
                <p>REGISTER</p>
              </NavLink>
            </ul>
          </div>
        </div>
      </div>
      

    </>
  );
};

export default Menu;