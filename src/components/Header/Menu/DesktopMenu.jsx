import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from './NavItems';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const NewMenu = () => {
  const [hoverIndex, setHoverIndex] = useState(null);

  const toggleHoverMenu = (index) => {
    setHoverIndex(index);
  }

  const subMenuAnimate =  {
    enter: {
      opacity: 1,
      rotateX: 0,
      transition: {
        duration: 0.3,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.3,
      },
      display: 'none',
    }
  }

  return (
    <div className=' w-full px-5 sm:px-[3vw] bg-gray-100'>
      <nav className='hidden custom-991:flex justify-between '>
        <ul className='flex'>
          {navItems.map((item, index) => {
            const hasSubMenu = item?.submenu?.length > 0;

            return (
              <motion.li 
                onHoverStart={() => toggleHoverMenu(index)}
                onHoverEnd={() => toggleHoverMenu(null)}
                key={item.id} 
                className='group/link'
              >
                <Link to={item.path} className='SelectedOne group flex items-center gap-[2px] px-[1vw] duration-200 py-4 hover:bg-orange-200'>
                  <div className='flex flex-col whitespace-nowrap items-center gap-1'>
                    {item.title}
                    <hr className='opacity-0 w-2/4 activeLine border-none h-[1px] bg-gray-600'/>
                  </div>
                  <div className='flex justify-center'>
                    {hasSubMenu && <IoIosArrowDown className='group-hover/link:rotate-180 duration-200 text-black'/>}
                  </div>
                </Link>
                {hasSubMenu && (
                  <motion.div 
                    className='sub-menu'
                    initial='exit'
                    animate={hoverIndex === index ? 'enter' : 'exit'}
                    variants={subMenuAnimate}
                  >
                    <div 
                      className={`grid gap-x-14 gap-y-4 ${
                        item.gridCol === 3 ? 'grid-cols-3'
                        : item.gridCol === 2 ? 'grid-cols-2'
                        : 'grid-cols-1' 
                      }`}
                    >
                      {item?.submenu?.map((submenu, i) => (
                        <div key={i}>
                          <NavLink to={submenu?.path} className='hover:text-orange-400 duration-200'>
                            {submenu?.title}
                          </NavLink>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}
              </motion.li>
            );
          })}
        </ul>
        <ul className='flex text-gray-700'>
          <NavLink to='/login' className='hover:bg-black pt-3 pb-4 px-[1vw] font-medium hover:text-white'>
            <p>Login</p>
          </NavLink>
          <NavLink to='/register' className='hover:bg-black pt-3 pb-4 px-[1vw] font-medium hover:text-white'>
            <p>Register</p>
          </NavLink>
        </ul>
      </nav>
      <div className='custom-991:hidden'> 
        <MobileMenu />
      </div>
    </div>
  )
}

export default NewMenu;