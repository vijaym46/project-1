import React from 'react'
import carousel1 from '../../../assets/Carousel/slide1.jpg'
import carousel2 from '../../../assets/Carousel/slide2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slide = () => {
  return (
    <div className="w-full hidden custom-991:block pl-8 relative">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        className="relative"
      >
        <div className="h-[410px]">
          <img
            src={carousel1}
            alt="St. Albans Digital Printing Inc"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="p-3 max-w-lg text-center">
              <h4 className="text-light text-uppercase font-weight-medium mb-3 text-white text-lg">
                St. Albans Digital Printing Inc
              </h4>
              <a href="#" className="btn bg-white text-black py-2 px-3 rounded shadow">
                Shop Now
              </a>
            </div>
          </div>
        </div>

        <div className="h-[410px]">
          <img
            src={carousel2}
            alt="Customized Web Banners"
            className="object-cover w-full h-full"
          />
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-50">
            <div className="p-3 max-w-lg text-center">
              <h4 className="text-light text-uppercase font-weight-medium mb-3 text-white text-lg">
                Customized Web Banners
              </h4>
              <a href="#" className="btn bg-white text-black py-2 px-3 rounded shadow">
                Shop Now
              </a>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

/* <div className="w-full custom-991:w-3/5 px-5 sm:px-[2vw] md:px-[3vw] lg:px-[4vw] relative custom-991:left-6"> */

export default Slide
