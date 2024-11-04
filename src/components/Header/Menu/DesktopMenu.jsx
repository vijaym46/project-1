import React, { useRef, useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { navItems } from './NavItems';
import { IoIosArrowDown } from 'react-icons/io';
import { motion } from 'framer-motion';
import MobileMenu from './MobileMenu';

const NewMenu = () => {
  const [horizLine, setHorizLine] = useState(null);

  const [hoverIndex, setHoverIndex] = useState(null);

  const toggleHoverMenu = (index) => {
    setHoverIndex(index);
  }

  const dropdownRef = useRef(null);

 /*  const handleToggle = (index) => {
    if (hoverIndex === null) {
      toggleHoverMenu(index);
    } else {
      toggleHoverMenu(null);
    }
  }

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setHoverIndex(null);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleToggle]); */

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
    <div className='w-full px-5 sm:px-[3vw]'>
      <nav className='hidden custom-991:flex justify-between '>
        <ul className='flex justify-center w-full'>
          {navItems.map((item, index) => {
            const hasSubMenu = item?.submenu?.length > 0;

            return (
              <motion.li 
                onHoverStart={() => toggleHoverMenu(index)}
                onHoverEnd={() => toggleHoverMenu(null)}
                /* onClick={() => handleToggle(index)} */
                ref={dropdownRef}
                key={item.id}
                className='group/link'
              >
                <Link to={item.path} onClick={() => setHorizLine(index)} className='SelectedOne group h-full flex items-center gap-[2px] px-2 [@media(min-width:1130px)]:px-[1vw] duration-200 py-2 [@media(min-width:1130px)]:py-4 hover:bg-orange-200'>
                  <div className='flex flex-col justify-center items-center text-center gap-1'>
                    {item.title}
                    <hr className={`${horizLine === index ? 'opacity-100' : 'opacity-0'} w-2/4 activeLine border-none h-[1px] bg-gray-600`}/>
                  </div>
                  <div className='flex justify-start'>
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
                      className={`grid gap-x-12 gap-y-2 ${
                        item.gridCol === 3 ? 'grid-cols-3'
                        : item.gridCol === 2 ? 'grid-cols-2'
                        : 'grid-cols-1' 
                      }`}
                    >
                      {item?.submenu?.map((submenu, i) => (
                        <div key={i} className='flex flex-col justify-center'>
                          <NavLink to={submenu?.path} className='px-2 py-1 rounded hover:text-orange-700 hover:bg-neutral-100 duration-200'>
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
      </nav>
      <div className='custom-991:hidden'> 
        <MobileMenu />
      </div>
    </div>
  )
}

export default NewMenu;