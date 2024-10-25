import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';

const Shop = () => {
  const printingServices = [ 'Banners', 'Bookmarks', 'Book Printing', 'Brochures', 'Business Cards', 'Buttons', 'Calendars', 'Car Magnets', 'Canvas Printing & Giclee', 'Customized Greeting Cards', 'E-Journal', 'Event Journal', 'Flyers', 'Funeral Buttons', 'Journals', 'Logo Designing' ]

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

  return (
    <div>
      <div className='w-full h-80 bg-indigo-50 flex flex-col items-center gap-y-4 justify-center'>
        <h1 className='text-4xl font-semibold'>OUR SHOP</h1>
        <p><Link to={'/shop'} className='text-lg hover:underline text-orange-500'>Home</Link>&nbsp; - &nbsp;Shop</p>
      </div>

      <div className='px-4 md:px-14 py-12 md:py-16 grid  grid-cols-1 lg:grid-cols-4 gap-8'>

        {/* --- Printing Services Start --- */}
        <div className='lg:col-span-1'>
          <h1 className='text-xl font-semibold'>PRINTING SERVICES</h1>
          <div className='flex flex-col gap-y-[10px] mt-8'>
            {printingServices.map((pService) => {

              return (
                <Link className='px-4 py-3 text-gray-800  border border-gray-300 bg-neutral-100 hover:border-opacity-0 hover:text-white hover:bg-orange-400'>{pService}</Link>
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

        </div>
        {/* --- Produts End --- */}

      </div>

    </div>
  )
}

export default Shop