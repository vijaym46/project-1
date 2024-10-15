import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from './NavItems';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';

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
        duration: 0.5,
      },
      display: 'block',
    },
    exit: {
      opacity: 0,
      rotateX: -15,
      transition: {
        duration: 0.5,
      },
      display: 'none',
    }
  }

  return (
    <nav className='hidden custom-991:flex justify-between w-full px-5 sm:px-[2vw] md:px-[2vw] lg:px-[3vw]'>
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
              <Link to={item.path} className='flex items-center gap-1 px-[1vw] py-4 rounded-lg hover:bg-black/5'>
                {item.title}
                {hasSubMenu && <IoIosArrowDown className='mt-[0.6px] group-hover/link:rotate-180 duration-200 text-orange-400'/>}
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
        <NavLink to='/login' className='hover:bg-[#231f20] pt-3 pb-4 px-[1vw] font-medium hover:text-white'>
          <p>Login</p>
        </NavLink>
        <NavLink to='/register' className='hover:bg-[#231f20] pt-3 pb-4 px-[1vw] font-medium hover:text-white'>
          <p>Register</p>
        </NavLink>
      </ul>
    </nav>
  )
}

export default NewMenu;