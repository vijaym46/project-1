import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 01.png'
import PrintingService from './PrintingService'

const WebDesigning = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Website Designing</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Website Designing</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>Your website is your sole equipment to portray your competence and a stunning design of your web page sets the vehicle of your business in motion. Whether you have a new web site to develop or want to redesign your existing one, our Website Design Expert will ensure that your Web Development will be finished to the highest standard, within the agreed time frame and to the budget.</li>

                <li className='sm:leading-8'>Responsive Design: In today's mobile-driven world, having a responsive website is crucial. We ensure your site looks and functions seamlessly across all devices, including desktops, tablets, and smartphones, providing a great user experience no matter where your visitors are.</li>

                <li className='sm:leading-8'>E-Commerce Solutions: Launch your online store with our e-commerce website design services. We develop user-friendly platforms that make it easy for customers to browse, shop, and complete transactions, all while ensuring secure payment options and effective inventory management.</li>

                <li className='sm:leading-8'>Website Maintenance and Support: Launching your website is just the beginning. We offer ongoing maintenance and support to ensure your site remains up-to-date, secure, and optimized for performance.</li>

                <li className='sm:leading-8'>Integration of Advanced Features: Whether you need contact forms, booking systems, chat functionality, or social media integration, we can enhance your website with the features that best suit your business needs.</li>
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

export default WebDesigning
