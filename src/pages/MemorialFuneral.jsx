import React, { useEffect, useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import { CiSearch } from 'react-icons/ci';
import { IoMdArrowDropdown } from 'react-icons/io';
import { FaCartArrowDown, FaEye } from 'react-icons/fa'
import { MdKeyboardDoubleArrowLeft, MdKeyboardDoubleArrowRight } from 'react-icons/md';
import { GetCategoryImagesAPI } from '../serverApi/server'
import { printingServices } from '../components/Helper/Helpers'
import { CONNECTION_REFUSED, memorialFuneralMenus } from '../components/Helper/Helpers'

const MemorialFuneral = ({ title, additionalName}) => {
  console.log('title ---------------------------->: ', title)
  console.log('additionalName ----------------->:', additionalName)

  const [products, setProducts] = useState('')
  const [showPopup, setShowPopup] = useState(false);
  const [popupMessage, setPopupMessage] = useState('');
  const [showPopupRefused, setShowPopupRefused] = useState(false);
  const [popupRefusedMessage, setPopupRefusedMessage] = useState('');

  const GetOurProductsCategoryImages = async (additionalName) => {
    console.log('memorialFuneralMenus', memorialFuneralMenus)
    var category_menu = memorialFuneralMenus[additionalName];
    console.log('category_menu', category_menu)
    try {
      const GetCategoryImagesApiResponse = await GetCategoryImagesAPI(category_menu);
      console.log('GetCategoryImagesApiResponse', GetCategoryImagesApiResponse)
      if (GetCategoryImagesApiResponse.status === 200 && GetCategoryImagesApiResponse.data && GetCategoryImagesApiResponse.data.category_serializer.length !== 0) {
        console.log('GetCategoryImagesApiResponse.data.category_serializer', GetCategoryImagesApiResponse.data.category_serializer)
        setProducts(GetCategoryImagesApiResponse.data.category_serializer);
      } else {
        setPopupMessage(GetCategoryImagesApiResponse.response.data.message);
        setShowPopup(true);
        setTimeout(() => setShowPopup(false), 2000);
      }
    } catch (error) {
      setPopupRefusedMessage(CONNECTION_REFUSED);
      setShowPopupRefused(true);
      setTimeout(() => setShowPopupRefused(false), 2000);
    }
  };

  useEffect(() => {
    GetOurProductsCategoryImages(additionalName)
  }, [additionalName]);

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
      {/* <div className='w-full h-80 bg-indigo-50 flex flex-col items-center gap-y-4 justify-center'>
        <h1 className='text-4xl font-semibold'>OUR SHOP</h1>
      </div> */}

      <div className='px-4 md:px-14 py-5 md:py-24 grid grid-cols-1 lg:grid-cols-4 gap-8'>

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
                <div className="absolute z-50 right-0 mt-2 w-48 bg-white border rounded shadow-lg">
                  <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Latest</a>
                  <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Popularity</a>
                  <a className="block px-4 py-2 hover:bg-gray-200" href="#" onClick={() => setDropdownOpen(!dropdownOpen)}>Best Rating</a>
                </div>
              )}
            </div>

          </div>
          {/* --- Search End --- */}
          

          {/* --- Product --- */}
          <div className='mt-10 grid grid-cols-1 min-[535px]:grid-cols-2 md:grid-cols-3 gap-3 sm:gap-4 md:gap-10'>

            { products && products.map((product) => (
              // <Link to={`/login/?productId=${product.id}`} key={product.id} >
              <Link to={`/shopdetails/${product.id}`} key={product.id} >
                <div className='h-2/5 md:h-auto'>
                  <div
                    className='relative md:h-auto overflow-hidden flex justify-center bg-transparent border cursor-pointer'
                    onClick={() => handleImageClick}
                  >
                    <img
                      className={`w-40 md:w-full h-full transition-transform duration-500 ease-in-out hover:scale-125 ${isZoomed ? 'scale-125' : ''}`}
                      src={product.image_file} alt={product.image_name} />
                  </div>
                  <div className="card-body border-l border-r text-center p-0 pt-4 pb-3">
                    <h6 className="text-truncate mb-3">{product.image_name.replace('.jpg', '').replace('.png', '')}</h6>
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
              </Link>
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

export default MemorialFuneral