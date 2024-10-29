import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 02.jpg'
import PrintingService from './PrintingService'

const Flyers = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Flyers</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Flyers</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>Flyers evoke instant response and it takes only a fraction of a second to judge its quality. Either they get immediate attention or they get thrown away. So don’t make your flyers go to waste. Our professional print service will make your flyers look seductively good. Send us your design or tell us your idea, we will turn it into brilliant print communication. Our flyer printing will suit your budget and exceed your expectations – every time.</li>

                <li className='sm:leading-8'>Our expert printing services are designed to create visually striking flyers that demand attention. Whether you have a finished design or just a spark of an idea, our team will collaborate with you to produce print materials that truly shine.</li>

                <li className='sm:leading-8'>Experience high-quality flyer printing that fits your budget without compromising on excellence. We promise to deliver results that not only meet but exceed your expectations, making your flyers irresistible every time.</li>

                <li className='sm:leading-8'>Memory updated Here’s some content crafted in a similar style, promoting a flyer printing service: Capture Attention with Stunning Flyers! In a world where first impressions matter, your flyers must stand out! With just a quick glance, potential customers will decide whether to engage or toss aside your message. Don’t let your hard work go unnoticed!</li>

                <li className='sm:leading-8'>Let’s turn your vision into reality and create eye-catching flyers that drive responses. Contact us today!</li>
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

export default Flyers
