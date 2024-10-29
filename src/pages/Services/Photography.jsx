import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 03.png'
import PrintingService from './PrintingService'

const Photography = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Photography</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Photography</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>St. Albans Digital Printing Inc. is proud to offer you photography and photo directory services to help you connect better. From professionally made church directory to striking, studio-quality family portraits, we help you cherish and showcase special occasions and relationships forever. We have a professional photographer to take photographs and state-of-the-art printing machines to print a magnificent photo directory that you can treasure for years.</li>

                <li className='sm:leading-8'>Capturing authentic expressions and personalities in professional, family, and individual portraits. Our sessions are designed to make you feel comfortable and confident, resulting in timeless images.</li>

                <li className='sm:leading-8'>From intimate gatherings to large-scale events, we capture the special moments of each celebration. With a focus on genuine emotions and candid moments, our team ensures every highlight is preserved.</li>

                <li className='sm:leading-8'>Helping brands stand out with high-quality product images. Our goal is to showcase the details, texture, and quality of each item, ideal for e-commerce, catalogs, and social media.</li>

                <li className='sm:leading-8'>Showcasing breathtaking landscapes and locations, whether for commercial, travel, or fine art purposes. Our images aim to bring the viewer directly into the scene.</li>
              </ul>

              {/* --- Images from APi  */}
              <div>
                {/* ImageX3 in grid */}
              </div>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default Photography
