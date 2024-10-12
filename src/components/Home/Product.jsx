import React from 'react'
import offer1 from '../../assets/Offer/offer1.jpg'
import offer2 from '../../assets/Offer/offer2.png'

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
    <div className='pt-5'>
        <div>
            <h1>Popular Products</h1>
        </div>
    </div>

  </>

  )
}

export default Product
