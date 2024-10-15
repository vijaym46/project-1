import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from './NavItems';
import logo from '../../../assets/logo.svg'
import Slide from './Slide';
import { IoIosArrowDown } from 'react-icons/io';

const Menu = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Desktop Menu */}
      <div >
        <div className='hidden custom-991:flex items-center justify-between w-full '>
            <ul className='flex text-sm text-gray-700'>
              {navItems.map((item) => {
                const hasSubMenu = item?.submenu?.length > 0

              return (
                <div key={item.id} className='relative'> {/* qq */}
                <NavLink key={item.id} to={item.path} className='group flex relative flex-col items-center py-4 px-[1vw] gap-y-1 hover:bg-[#231f20] hover:text-white'>
                  <div className='flex items-center gap-x-1'>
                    <p className='font-medium text-base'>{item.title}</p>
                    {hasSubMenu && (<IoIosArrowDown className='text-orange-500 group-hover:rotate-180 duration-200'/>)}
                  </div>
                  <hr className='hidden w-2/4 border-none h-[1px] bg-gray-600 group-hover:bg-white'/>
                </NavLink>

                  {hasSubMenu && (
                    <div className='sub-menu w-[250%]'>
                      <div className='grid gap-4 grid-cols-3'>

                        { hasSubMenu && 
                          item?.submenu?.map((submenu, i) => (
                            <div key={i} className='relative'>

                              <div to={submenu.path} className='bg-white/5 w-fit p-2 rounded-md whitespace-nowrap hover:bg-white hover:text-black duration-300'>
                                <Link>{submenu.title}</Link>
                              </div>
                              
                            </div>
                          ))
                        } 
                      </div> 
                    </div>
                  )}
                </div> /* qq */
                );
              })}
            </ul>
            <ul className='flex text-gray-700'>
              <NavLink to='/login' className='hover:bg-[#231f20] pt-3 pb-4 px-[1vw] font-medium hover:text-white'>
                <p>Login</p>
              </NavLink>
              <NavLink to='/register' className='hover:bg-[#231f20] pt-3 pb-4 px-[1vw] font-medium hover:text-white'>
                <p>Register</p>
              </NavLink>
            </ul>
        </div>
            <Slide/>
      </div>

      
    {/*       {navItems.map((item) => {
      const hasSubMenu = item?.submenu?.length > 0;

      return (
        <div key={item.id} className='relative'>
          <NavLink
            to={item.path}
            className='group flex relative flex-col items-center py-4 px-[1vw] gap-y-1 hover:bg-[#231f20] hover:text-white'
          >
            <div className='flex items-center gap-x-1'>
              <p className='font-medium text-base'>{item.title}</p>
              {hasSubMenu && (
                <IoIosArrowDown className='text-orange-500 group-hover:rotate-180 duration-200' />
              )}
            </div>
            <hr className='hidden w-2/4 border-none h-[1px] bg-gray-600 group-hover:bg-white' />
          </NavLink>
          
          {hasSubMenu && (
            <div className='sub-menu'>
              <div className='grid gap-4 grid-cols-3'>
                {item.submenu.map((submenu, i) => (
                  <div key={i} className='relative'>
                    <Link
                      to={submenu.path}
                      className='bg-white/5 w-fit p-2 rounded-md whitespace-nowrap hover:bg-white hover:text-black duration-300'
                    >
                      {submenu.title}
                    </Link>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      );
    })}
 */}




















      {/* --- Mobile Menu --- */}
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

            <ul className="flex flex-col mt-3 gap-3 text-sm text-gray-700">
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