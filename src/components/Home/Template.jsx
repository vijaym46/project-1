import React, { useState } from 'react'
import product1 from '../../assets/Product/product1.jpg'
import product2 from '../../assets/Product/product2.jpg'
import { FaCartArrowDown, FaEye } from 'react-icons/fa'

const Template = () => {
  const products = [
      { id: 1, img: product1, title: "Colorful Stylish Shirt" },
      { id: 2, img: product2, title: "Colorful Stylish Shirt" },
      { id: 3, img: product1, title: "Colorful Stylish Shirt" },
      { id: 4, img: product2, title: "Colorful Stylish Shirt" },
      { id: 5, img: product1, title: "Colorful Stylish Shirt" },
      { id: 6, img: product2, title: "Colorful Stylish Shirt" },
      { id: 1, img: product1, title: "Colorful Stylish Shirt" },
      { id: 2, img: product2, title: "Colorful Stylish Shirt" }
    ];
  /* Image Zoom EF*/
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom on click
  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };    

  return (
    <div className='w-full flex flex-col items-center justify-center'>

      {/* --- Template heading --- */}
      <div className='flex flex-col w-5/6 items-center justify-center shadow-[5px_0px_20px_0px_rgb(0,0,0,0.1);] rounded-xl py-5 gap-5'>
        <div className='flex gap-3 items-center justify-center'>
          <p className='w-10 h-[2px] bg-black'></p>
          <h1 className='text-4xl font-semibold whitespace-nowrap'>Templates</h1>
          <p className='w-10 h-[2px] bg-black'></p>
        </div>
        <p className='text-neutral-400 text-[17px]'>Choose From Our Ready-made Templates Lists</p>
        <div className='flex gap-4'>
          <button className='px-4 py-2 bg-orange-400 border-2 border-spacing-2 rounded'>Design Templates</button>
          <button className='px-4 py-2 border-2 rounded hover:bg-orange-400 hover:text-white duration-200'>Blank Templates</button>
        </div>
      </div>

      {/* --- Template start --- */}
      <div className='my-10 w-11/12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 lg:gap-8'>
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
      {/* --- Template end --- */}

    </div>
  )
}

export default Template
