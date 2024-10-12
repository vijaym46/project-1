import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { categoryDropdown } from './CategoryItems';
import { IoIosArrowDown } from 'react-icons/io';
import Slide from './Slide';

const Category = () => {
  const [isOpen, setIsOpen] = useState(true);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsOpen(false);
    }
  };

  useEffect(() => {

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };

  }, []);

  return (
    <nav className='flex items-center justify-normal px-5 sm:px-[2vw] md:px-[3vw] lg:px-[4vw]' ref={dropdownRef}>
      <div className="hidden relative custom-991:inline-block text-left" >
        
          <div>
            <button
              onClick={toggleDropdown}
              className="flex items-center justify-normal gap-x-[100px] bg-orange-200 hover:bg-orange-300 duration-200 px-8 py-4 text-lg prata-regular"
            >
              Categories
              <IoIosArrowDown className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : 'rotate-0'}`} />
            </button>
          </div>

          {/* Dropdown */}
          <div
            className={`absolute w-full z-10 bg-white border overflow-hidden transition-all duration-500 ease-out ${
              isOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
          >
            <div>
              {categoryDropdown.map((item) => (
                <Link
                  key={item.id}
                  className="flex items-center justify-normal gap-x-[100px] duration-200 px-8 py-2 hover:text-orange-300 border-b-[1px] text-lg font-light"
                  onClick={toggleDropdown}
                  to={item.path}
                >
                  {item.title}
                </Link>
              ))}
            </div>
          </div>

      </div>

      <Menu />
    </nav>
  );
};

export default Category;