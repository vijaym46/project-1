import React, { useState } from 'react'
import { IoIosArrowDown, IoIosMenu } from 'react-icons/io';
import { IoClose } from 'react-icons/io5';
import { Link } from 'react-router-dom';
import logo from '../../../assets/Stalbanslogo.png'
import { navItems } from './NavItems';
import { motion } from 'framer-motion';

const MobileMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);

  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  }

  const subMenuDrawer = {
    enter: {
      height: 'auto',
      overflow: 'hidden',
    },
    exit: {
      height: 0,
      overflow: 'hidden',
    },
  }

  return (
    <div className='flex justify-between py-4'>
      <div>
        <Link to="/" className=' custom-991:hidden'>
          <img
            src={logo}
            alt="brand-logo"
            className="w-32 sm:w-36 cursor-pointer"
          />
        </Link>
      </div>
      <button onClick={toggleDrawer} className={`text-3xl  z-[999] ${isOpen ? 'fixed top-7 right-6' : 'relative'}`}>
        {isOpen ? <IoClose /> : <IoIosMenu />}
      </button>

      <motion.div 
      initial={{ x : '-100%' }}
      animate={{ x : isOpen ? '-0%' : '-100%' }}
      className='fixed left-0 right-0 top-0 overflow-y-auto h-full bg-white backdrop-blur text-[#18181A] p-6  z-50'>
        <ul>
          {
            navItems.map(({id, title, path, submenu}, i) => {
              const hasSubMenu = submenu?.length > 0
              const isClicked = clicked === i;

              return(
                <li key={id} className='w-11/12'>
                  <Link 
                    to={path}
                    className='flex font-semibold items-center justify-between p-2 sm:p-4 hover:bg-black/5 rounded-md    relative'
                    onClick={() => {
                      setClicked(isClicked ? null : i)
                      !hasSubMenu && toggleDrawer();
                    }}
                  >
                    {title}
                    {hasSubMenu && (
                      <IoIosArrowDown
                        className={` ml-auto ${isClicked && 'rotate-180'} duration-200 `}
                      />) }
                  </Link>
                  {
                    hasSubMenu && (
                      <motion.ul 
                        initial='exit'
                        animate={isClicked ? 'enter' : 'exit'}
                        variants={subMenuDrawer}
                        className='ml-5'>
                        {
                          submenu?.map(({title, path}) => (
                            <li
                              key={title}
                              onClick={toggleDrawer}
                            >
                              <Link to={path} className='p-2 flex items-center hover:bg-black/5'>{title}</Link>
                            </li>
                          ))
                        }
                      </motion.ul>
                    )
                  }
                </li>
              )
            })
          }
        </ul>
        {/* <ul className='flex md:hidden flex-col text-gray-700 w-11/12'>
          <Link onClick={toggleDrawer} to='/login' className='p-2 sm:p-4 font-medium hover:bg-black/5'>
            <p>Login & Register</p>
          </Link>
        </ul> */}
        <div className='p-2 sm:p-4'>
            <Link to='/faq' onClick={toggleDrawer} className='font-light text-gray-800'>FAQs</Link>
            <span className='font-light px-2'>|</span>
            <Link onClick={toggleDrawer} className='font-light text-gray-800'>Help</Link>
            <span className='font-light px-2'>|</span>
            <Link onClick={toggleDrawer} className='font-light text-gray-800'>Support</Link>
        </div>
      </motion.div>
    </div>
  )
}

export default MobileMenu