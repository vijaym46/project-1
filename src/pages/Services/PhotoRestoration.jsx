import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 01.png'
import PrintingService from './PrintingService'

const PhotoRestoration = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Photo Restoration</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Photo Restoration</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>Photo Restoration for Damaged, Scratched, Blurry, Torn, Raw, Historic, Black & White or Faded Photographs/Documents/Posters/Paintings can look as good as new, Natural, Flawless or even better by Digitizing, Colorizing, Repairing or Retouching. St. Albans Digital Printing Inc. offers the following professional photo restoration services using advanced photo restoration techniques and 20 years of experience in photo restoration business.</li>

                <li className='sm:leading-8'>Restore and enhance the life in your photos! Through the use of modern digital technique, it is now possible to repair old photographs without damaging the original. St. Albans Digital Printing Inc, photo restoration or photo repair is always done by hand, using Photoshop (photo restoration software).</li>

                <li className='sm:leading-8'>We specialize in repair stained, spotted, torn, cracked, bleached and faded photos like yours every day. Just take a look at some of our photo restoration work.</li>

                <li className='sm:leading-8'>Reviving Black & White Photos: Old black-and-white photos hold timeless charm. We restore their contrast and detail, and for those interested, we offer colorization services to bring them to life in full color.</li>

                <li className='sm:leading-8'>Photo Reconstruction: If parts of a photo are missing or severely damaged, we can recreate the missing details using advanced techniques, allowing a complete and whole version of the image.</li>
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

export default PhotoRestoration
