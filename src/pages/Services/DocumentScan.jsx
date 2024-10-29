import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 02.jpg'
import PrintingService from './PrintingService'

const DocumentScan = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Document Scanning</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Document Scanning</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>St. Albans Digital Printing is one of New York’s leading scanning agency, Scan Conversion Services specialises in developing document management solutions to suit a variety of needs. We have Hi-Speed document scanners for document image processing solutions. We deliver solutions and services to go beyond your expectations. to compete and stay atop the printing industry.</li>
                <li className='sm:leading-8'>Document Scanning is cost effective, efficient, reduces risk of loss of documents, instant retrieval, helps you reclaim your office space from ugly filing cabinets and storage boxes, preserves longevity of valuable documents, perfect for all of your organization to share information easier and our agency can offer ongoing scanning service all year round whenever required.</li>
                <li className='sm:leading-8'>St. Albans scanning services cover all major scanning requirements under one roof. We offer:
                    <ul className='mt-2 flex flex-col gap-1 sm:gap-2 text-sm sm:text-base list-disc'>
                        <li>Document Scanning</li>
                        <li>Book Scanning</li>
                        <li>Drawing Scanning</li>
                        <li>Photograph Scanning</li>
                    </ul>
                </li>
                <li className='sm:leading-8'>St. Albans Digital Printing helps you meet your deadlines. We have well trained staff that can work around the clock to meet your organizations scanning needs.</li>
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

export default DocumentScan
