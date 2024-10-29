import React from 'react'
import PrintingService from './PrintingService'
import banner from '../../assets/Carousel/St Albans Banner 01.png'

const DigitOffset = () => {
   
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Digital & Offset Printing</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Digital and Offset Printing</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>We offer an extensive assortment of print solutions to our clients. With years of expertise, Constant upgrading of printing infrastructure coupled with induction of new techniques, we have become the very synonym for the finest quality printing. We have moved with the times and technology to compete and stay atop the printing industry.</li>
                <li className='sm:leading-8'>In offset and digital printing, we offer complete printing solutions and specializes in printing Books, e-Journal, Journals/Magazines, Leaflets/Flyers, Brochures, Calendars, Posters, News Letters, Wedding/Invitation Cards, Post Cards, Labels, Corporate Stationery, banners, funeral / obituary printing, obituary booklets and lots more.</li>
                <li className='sm:leading-8'>We also design customized digital journals for organizations gala events. Displayed on state-of-the-art tablets, we create an interactive experience for your guests while saving you time and money. We signify a major innovation in how fundraising events are promoted and funds are raised with its innovative and unique digital journal.</li>
                <li className='sm:leading-8'>We have a unique reputation for providing quality printing at affordable costs, on time. Whether it’s black & white or vibrant full colour, our printing machines are up to the task, providing you the best that is there! So trust us to create compelling digital and offset printing solutions that cut through the noise and generate the tangible, positive results that you need.</li>
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

export default DigitOffset
