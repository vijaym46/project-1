import React from 'react'
import { SiAltiumdesigner } from 'react-icons/si'
import { FaTools } from 'react-icons/fa'
import { CgTemplate } from 'react-icons/cg'
import { RiAdvertisementLine } from 'react-icons/ri'
import Slide from '../components/Home/Slide'
import ProductSlide from '../components/ShopDetails/ProductSlide'
import offer1 from '../assets/Offer/offer1.jpg'
import offer2 from '../assets/Offer/offer2.png'
import Template from '../components/Home/Template'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Slide />

      {/* serives start */}
      <div className='grid sm:hidden grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 py-5 px-8 md:py-10 mt-10 w-full'>

        <div className='flex items-center sm:justify-center border pl-5 sm:pl-0 sm:px-10 py-5 mb-5'>
          <div className='w-12 sm:w-16'>
            <SiAltiumdesigner className='text-4xl text-orange-300 sm:text-4xl md:text-6xl ' />
          </div>
          <p className='text-xl font-bold text-gray-600'>Free Online Designing</p>
        </div>

        <div className='flex items-center sm:justify-center border pl-5 sm:pl-0 py-5 mb-5'>
          <div className='w-12 sm:w-24'>
            <CgTemplate className='text-3xl text-orange-300  sm:text-4xl md:text-6xl '/>
          </div>
          <p className='text-xl font-bold text-gray-600'>Free Designing Templates</p>
        </div>

        <div className='flex items-center sm:justify-center border pl-5 sm:pl-0 py-5 mb-5'>
          <div className='w-12 sm:w-24'>
            <FaTools className='text-3xl text-orange-300 sm:text-4xl md:text-6xl '/>
          </div>
          <p className='text-xl font-bold text-gray-600'>Free Tools and Resources</p>
        </div>

        <div className='flex items-center sm:justify-center border pl-5 sm:pl-0 py-5 mb-5'>
          <div className='w-12 sm:w-24'>
            <RiAdvertisementLine className='text-3xl text-orange-300 sm:text-4xl md:text-6xl '/>
          </div>
          <p className='text-xl font-bold text-gray-600'>Free Bussiness Promo</p>
        </div>
      </div>
        
        
      <div className='hidden sm:grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4 lg:gap-6 py-5 px-8 md:py-10 mt-10 w-full'>

        <div className='hidden sm:flex items-center sm:justify-center border px-5 py-5 mb-5'>
          <SiAltiumdesigner className='text-4xl text-orange-300 sm:text-4xl md:text-6xl mr-2' />
          <p className='text-xl font-bold text-gray-600'>Free Online Designing</p>
        </div>
        <div className='flex items-center sm:justify-center border px-5 py-5 mb-5'>
          <CgTemplate className='text-3xl text-orange-300  sm:text-4xl md:text-6xl mr-3'/>
          <p className='text-xl font-bold text-gray-600'>Free Designing Templates</p>
        </div>
        <div className='flex items-center sm:justify-center border px-5 py-5 mb-5'>
          <FaTools className='text-3xl text-orange-300 sm:text-4xl md:text-6xl mr-5'/>
          <p className='text-xl font-bold text-gray-600'>Free Tools and Resources</p>
        </div>
        <div className='flex items-center sm:justify-center border px-5 py-5 mb-5'>
          <RiAdvertisementLine className='text-3xl text-orange-300 sm:text-4xl md:text-6xl mr-4'/>
          <p className='text-xl font-bold text-gray-600'>Free Bussiness Promo</p>
        </div>

      </div>
      {/* services end */}


      {/* Para */}
      <div className='flex flex-col sm:text-center w-4/5 sm:w-11/12 lg:w-3/5'>
        <p className='text-2xl sm:text-4xl text-[#1C1C1C] leading-snug font-semibold mb-6'>Digital printing company for all your Bussiness
        and marketing needs</p>
        <p className='text-[#6F6F6F] text-lg leading-relaxed mb-6'>A dependable printing company that manages prints, business cards, brochures, brands, and custom items is invaluable in the fast-paced world of business. We are aware of how crucial it is to have premium print materials from online printing services, like brochures and business cards, to distinguish your brand and prints. A lasting impression on your audience may be made with high-quality printing on anything from business cards to banners, brochures, postcards, posters, and prints.</p>
      </div>
      {/* Para end*/}

      <div className='px-5 md:px-10'>
        <div className='flex gap-3 items-center justify-center'>
          <p className='w-10 h-[1.5px] bg-black'></p>
          <h1 className='text-3xl font-semibold whitespace-nowrap'>Popular Products</h1>
          <p className='w-10 h-[1.5px] bg-black'></p>
        </div>
        {/* <ProductSlide /> --- Error-1 --- */}
      </div>

      {/* --- Two Offer Products start --- */}
      <div className='grid grid-cols-1 md:grid-cols-2 gap-8 px-5 my-10 sm:px-[2vw] md:px-[2vw] lg:px-[3vw]'>
        <div className='flex max-[510px]:flex-row-reverse items-center gap-5 sm:gap-10 justify-between bg-[#EDF1FF]'>
          <div className='h-40'>
            <img src={offer1} alt="offer product 1" className='h-full w-full'/>
          </div>
          <div className='flex flex-col max-[510px]:items-start items-end justify-center py-5 sm:py-3 gap-1 sm:gap-2 pl-5 min-[510px]:pr-8'>
            <h2 className='text-orange-400 font-medium text-lg'>10% OFF ON</h2>
            <h1 className='text-2xl sm:text-3xl font-semibold whitespace-break-spaces'>Memorial Products</h1>
            <button className='border border-spacing-1 mt-2 px-4 py-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black duration-200'>Shop Now</button>
          </div>
        </div>
 
        <div className='flex flex-row-reverse items-center gap-5 sm:gap-10 justify-between bg-[#EDF1FF]'>
          <div className='h-40'>
            <img src={offer2} alt="offer product 2" className='h-full'/>
          </div>
          <div className='flex flex-col items-start justify-center py-5 sm:py-3 gap-1 sm:gap-2 pl-5 min-[510px]:pl-8'>
            <h2 className='text-orange-400 font-medium text-lg'>10% OFF ON</h2>
            <h1 className='text-2xl sm:text-3xl font-semibold'>Bussiness cards</h1>
            <button className='border border-spacing-1 mt-2 px-4 py-2 text-orange-400 border-orange-400 hover:bg-orange-400 hover:text-black duration-200'>Shop Now</button>
          </div>
        </div>
      </div>
      {/* --- Two Offer Products end --- */}

      <Template />

    </div>
  )
}

export default Home
