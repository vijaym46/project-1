import React from 'react'
import carousel1 from '../../../assets/Carousel/slide1.jpg'
import carousel2 from '../../../assets/Carousel/slide2.jpg'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { Link } from 'react-router-dom';

const Slide = () => {
  return (
    <div className="w-full block relative px-5 sm:px-[2vw] md:px-[2vw] lg:px-[3vw]">
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
              <Link to='/cards' className="btn bg-white text-black py-2 px-3 rounded shadow">
                Shop Now
              </Link>
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
              <Link to='/cards' className="btn bg-white text-black py-2 px-3 rounded shadow">
                Shop Now
              </Link>
            </div>
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default Slide
