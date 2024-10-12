import React, { useState, useEffect, useRef } from 'react';
import Menu from './Menu';
import { Link } from 'react-router-dom';
import { categoryDropdown } from './CategoryItems';
import { IoIosArrowDown } from 'react-icons/io';
import carousel1 from '../../../assets/Carousel/slide1.jpg'
import carousel2 from '../../../assets/Carousel/slide2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

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
    <>
    <nav className='flex px-5 sm:px-[2vw] md:px-[3vw] lg:px-[4vw]' ref={dropdownRef}>
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
          
    <div className="w-full px-5 sm:px-[2vw] md:px-[3vw] pt-4 lg:px-[4vw] relative custom-991:hidden">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="relative"
      >
        <div className="h-[410px]">
          <img
            src={carousel1}
            alt="St. Albans Digital Printing Inc"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="p-3 max-w-lg text-center">
              <h4 className="text-light text-uppercase font-weight-medium mb-3 text-white text-lg">
                St. Albans Digital Printing Inc
              </h4>
              <a href="#" className="btn bg-white text-black py-2 px-3 rounded shadow">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="h-[410px]">
          <img
            src={carousel2}
            alt="Customized Web Banners"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="p-3 max-w-lg text-center">
              <h4 className="text-light text-uppercase font-weight-medium mb-3 text-white text-lg">
                Customized Web Banners
              </h4>
              <a href="#" className="btn bg-white text-black py-2 px-3 rounded shadow">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>

    </>
  );
};

export default Category;