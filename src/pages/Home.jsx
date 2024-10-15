import React from 'react'
import { SiAltiumdesigner } from 'react-icons/si'
import { FaTools } from 'react-icons/fa'
import { CgTemplate } from 'react-icons/cg'
import { RiAdvertisementLine } from 'react-icons/ri'
import Product from '../components/Home/Product'
import Slide from '../components/Header/Category/Slide'

const Home = () => {
  return (
    <div className='flex flex-col items-center justify-center'>
      <Slide />

      {/* serives start */}
      <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2 md:gap-3 lg:gap-6 px-10 py-5 md:py-10 mt-10 w-full'>

        <div className='flex items-center sm:justify-center border px-5 py-5 mb-5'>
          <SiAltiumdesigner className='text-2xl text-orange-300 sm:text-3xl md:text-6xl mr-2' />
          <p className='text-xl font-bold text-gray-600'>Free Online Designing</p>
        </div>
        <div className='flex items-center sm:justify-center border px-5 py-5 mb-5'>
          <CgTemplate className='text-2xl text-orange-300  sm:text-3xl md:text-6xl mr-3'/>
          <p className='text-xl font-bold text-gray-600'>Free Designing Templates</p>
        </div>
        <div className='flex items-center sm:justify-center border px-5 py-5 mb-5'> 
          <FaTools className='text-2xl text-orange-300 sm:text-3xl md:text-6xl mr-4'/>
          <p className='text-xl font-bold text-gray-600'>Free Tools and Resources</p>
        </div>
        <div className='flex items-center sm:justify-center border px-5 py-5 mb-5'>
          <RiAdvertisementLine className='text-2xl text-orange-300 sm:text-3xl md:text-6xl mr-3'/>
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
      {/* Para */}


      <Product/>


    </div>
  )
}

export default Home

