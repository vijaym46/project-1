import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import product1 from '../assets/Product/product1.jpg'
import product2 from '../assets/Product/product2.jpg'
import { FaCartArrowDown, FaEye } from 'react-icons/fa'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';

const Shop = () => {
  const printingServices = [ 'Banners', 'Bookmarks', 'Book Printing', 'Brochures', 'Business Cards', 'Buttons', 'Calendars', 'Car Magnets', 'Canvas Printing & Giclee', 'Customized Greeting Cards', 'E-Journal', 'Event Journal', 'Flyers', 'Funeral Buttons', 'Journals', 'Logo Designing' ]

  const products = [
    { id: 1, img: product1, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 2, img: product2, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 3, img: product1, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 4, img: product2, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 5, img: product1, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 6, img: product2, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
  ];

  const [dropdownOpen, setDropdownOpen] = useState(false);

  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [dropdownOpen]);

  /* Image Zoom EF*/
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom on click
  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div>
      <div className='w-full h-80 bg-indigo-50 flex flex-col items-center gap-y-4 justify-center'>
        <h1 className='text-4xl font-semibold'>OUR SHOP</h1>
        <p><Link to={'/shop'} className='text-lg hover:underline text-orange-500'>Home</Link>&nbsp; - &nbsp;Shop</p>
      </div>

      <div className='px-4 md:px-14 py-20 md:py-24 grid  grid-cols-1 lg:grid-cols-4 gap-8'>

        {/* --- Printing Services Start --- */}
        <div className='lg:col-span-1'>
          <h1 className='text-xl font-semibold'>PRINTING SERVICES</h1>
          <div className='flex flex-col gap-y-[10px] mt-8'>
            {printingServices.map((pService) => {

              return (
                <Link className='px-4 py-4 text-gray-800  border border-gray-300 bg-neutral-50 hover:border-opacity-0 hover:text-white hover:bg-orange-400'>{pService}</Link>
              )
            })}
          </div>
        </div>
        {/* --- Printing Services End --- */}


        {/* --- Products Start --- */}
        <div className='mt-5 lg:mt-0 lg:col-span-3'>

          {/* --- Search Start --- */}  
          <div className='flex items-center justify-between w-full gap-8'>
            <form action="">
              <div className="flex items-center border rounded">
                <input 
                  type="text" 
                  className="w-full p-2 focus:outline-none" 
                  placeholder="Search by name" 
                />
                <span className="p-2 border-l w-12 text-orange-600">
                  <CiSearch className='h-full w-full'/>
                </span>
              </div>
            </form>

            {/* Dropdown */}
            <div className="relative" ref={dropdownRef}>
              <button 
                className="border flex items-center justify-between w-24 lg:w-36 p-2 rounded" 
                onClick={() => setDropdownOpen(!dropdownOpen)} 
                aria-haspopup="true" 
                aria-expanded={dropdownOpen}
              >
                Sort by <IoMdArrowDropdown className={`inline duration-200 ${dropdownOpen && 'rotate-180'}`}/>
              </button>
              
              {dropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Latest</a>
                  <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Popularity</a>
                  <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Best Rating</a>
                </div>
              )}
            </div>

          </div>
          {/* --- Search End --- */}
          

          {/* --- Product --- */}
          <div className='mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10'>
            {products.map((product) => (
              <div key={product.id} >
                <div>
                  <div
                    className='relative overflow-hidden bg-transparent border p-0 cursor-pointer'
                    onClick={() => handleImageClick}
                  >
                    <img 
                      className={`w-full transition-transform duration-500 ease-in-out hover:scale-125 ${isZoomed ? 'scale-125' : ''}`}
                      src={product.img} alt={product.title} />
                  </div>
                  <div className="card-body border-l border-r text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{product.title}</h6>
                    <div className="flex justify-center">
                      <h6>{product.price}</h6>
                      <h6 className="text-gray-500 ml-2 line-through">{product.oldPrice}</h6>
                    </div>
                  </div>
                  <div className="flex py-2 px-6 text-sm justify-between items-center text-gray-700 gap-1 bg-gray-100 border">
                    <button className='flex items-center justify-center gap-1'>
                      <FaEye className='text-orange-700'/>
                      View Detail
                    </button>
                    <button className='flex items-center justify-center gap-1'>
                      <FaCartArrowDown className='text-orange-700'/>
                      Add To Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>


          {/* --- Nav no. for page --- */}
          <div className='flex items-center justify-center mt-8'>
            <nav>
              <ul className='flex items-center justify-center'>
                <li className='px-2 py-3 border border-r-0'><MdKeyboardDoubleArrowLeft /></li>
                <li className='px-3 py-2 border bg-orange-300 text-white border-r-0'>1</li>
                <li className='px-3 py-2 border border-r-0'>2</li>
                <li className='px-3 py-2 border border-r-0'>3</li>
                <li className='px-2 py-3 border'><MdKeyboardDoubleArrowRight /></li>
              </ul>
            </nav>
          </div>

        </div>
        {/* --- Produts End --- */}

      </div>

    </div>
  )
}

export default Shop