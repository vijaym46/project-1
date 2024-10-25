import React from 'react'
import carousel1 from '../../assets/Carousel/St Albans Banner 01.png'
import carousel2 from '../../assets/Carousel/St Albans Banner 02.jpg'
import carousel3 from '../../assets/Carousel/St Albans Banner 03.png'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

const Slide = () => {
  return (
    <div className="w-full block relative px-5 sm:px-[2vw] md:px-[2vw] lg:px-[3vw]">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        transitionTime={1000}
        className="relative"
      >
        <div className="h-[410px]">
          <img
            src={carousel1}
            alt="St. Albans Digital Printing Inc"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="h-[410px]">
          <img
            src={carousel2}
            alt="Customized Web Banners"
            className="object-cover w-full h-full"
          />
        </div>

        <div className="h-[410px]">
          <img
            src={carousel3}
            alt="Customized Web Banners"
            className="object-cover w-full h-full"
          />
        </div>
      </Carousel>
    </div>
  )
}

export default Slide
