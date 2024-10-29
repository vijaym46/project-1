import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 03.png'
import PrintingService from './PrintingService'

const Signs = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Signs</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Signs</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>We offer a wide range of design services including: Vehicle Graphics, 3-Dimensional Signage & Lettering, print design, illustrations, A-Frame Sandwich Boards, Large Format Printing, Floor Graphics, Interior & Exterior Menuboards, signs of all kinds and so much more.</li>

                <li className='sm:leading-8'>Print Design: From brochures and flyers to business cards and posters, our print design services ensure your marketing materials are not only visually appealing but also effectively convey your brand message.</li>

                <li className='sm:leading-8'>A-Frame Sandwich Boards: Perfect for drawing attention to your business, our A-frame sandwich boards are customizable and portable, making them ideal for both indoor and outdoor use.</li>

                <li className='sm:leading-8'>Large Format Printing: Make a big impact with our large format printing services. From banners and signs to wall graphics, we produce high-quality prints that capture attention and enhance your space.</li>
                
                <li className='sm:leading-8'>Digital Design: Our digital design services include web graphics, social media content, and digital marketing materials, helping you maintain a cohesive online presence.</li>
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

export default Signs
