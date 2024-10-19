import React from 'react'
import offer1 from '../../assets/Offer/offer1.jpg'
import offer2 from '../../assets/Offer/offer2.png'
import product1 from '../../assets/Product/product1.jpg'
import product2 from '../../assets/Product/product2.jpg'
import product3 from '../../assets/Product/product3.jpg'
import product4 from '../../assets/Product/product4.png'
import product5 from '../../assets/Product/product5.jpg'
import product6 from '../../assets/Product/product6.jpg'
import product7 from '../../assets/Product/product7.jpg'
import product8 from '../../assets/Product/product8.jpg'
import { FaEye } from 'react-icons/fa'
import { FaCartShopping } from 'react-icons/fa6'

const Product = () => {
  return (
    <>
    
    {/* --- Offer Product --- */}
    <div className='grid grid-cols-1 lg:grid-cols-2 gap-3 lg:gap-6 w-3/4 h-[520px] lg:w-11/12 lg:h-[260px] md:px-10 py-5 md:py-10'>

    <div className='flex justify-between bg-[#EDF1FF] w-full overflow-hidden'>
        <img src={offer1} className="object-cover hidden sm:block" alt="discount product offer" />
        <div className='flex flex-col flex-grow bg-gray-500 text-center items-center 2xl:items-end justify-between md:justify-center p-5 lg:p-10'>
          <h2 className='text-orange-300 text-xl'>10% OFF ON</h2>
          <h1 className='text-4xl font-medium xl:whitespace-nowrap leading-8 text-white'>Memorial Products</h1>
          <button className='border border-orange-300 text-orange-300 px-4 py-2 mt-2'>Shop Now</button>
        </div>
    </div>

    <div className='flex flex-row-reverse justify-between bg-[#EDF1FF] w-full overflow-hidden'>
        <img src={offer2} className="object-cover hidden sm:block" alt="discount product offer" />
        <div className='flex flex-col flex-grow bg-gray-500 text-center items-center 2xl:items-end justify-between md:justify-center p-10'>
          <h2 className='text-orange-300 text-xl'>10% OFF ON</h2>
          <h1 className='text-4xl font-medium 2xl:whitespace-nowrap leading-8 text-white'>Bussiness cards</h1>
          <button className='border border-orange-300 text-orange-300 px-4 py-2 mt-2'>Shop Now</button>
        </div>
    </div>

  </div>


  {/* --- Product --- */}   
    <div className='py-5 flex flex-col items-center justify-center'>
        <div className='flex items-center gap-2'>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
            <h1 className='text-2xl sm:text-4xl font-semibold'>Popular Products</h1>
            <p className='w-8 md:w-11 h-[2px] bg-[#414141]'></p>
        </div>

        <div className='px-10 mt-8'>
            <div className='grid grid-cols-1 gap-4 sm:gap-8 sm:grid-cols-2 lg:grid-cols-4'>
                <div className='border overflow-hidden'>
                    <img src={product1} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='border overflow-hidden'>
                    <img src={product2} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='border overflow-hidden'>
                    <img src={product3} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='border overflow-hidden'>
                    <img src={product4} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='border overflow-hidden'>
                    <img src={product5} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='border overflow-hidden'>
                    <img src={product6} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='border overflow-hidden'>
                    <img src={product7} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>
                <div className='border overflow-hidden'>
                    <img src={product8} className="object-cover object-center w-full h-40 max-w-full mb-4 transition-transform duration-300 ease-in-out transform hover:scale-110" alt="" />
                    <h2 className='text-center my-6'>Post Cards</h2>
                    <div className='px-4 py-3 flex items-center gap-4 justify-between border'>
                        <div className='flex items-center gap-2'>
                            <FaEye className='text-orange-300'/>
                            <p className='text-sm'>View Detail</p>
                        </div>
                        <div className='flex items-center gap-2'>
                            <FaCartShopping className='text-orange-300'/>
                            <p className='text-sm'>Add To Cart</p>
                        </div>
                    </div>
                </div>




            </div>
        </div>
    
    </div>

  </>

  )
}

export default Product
