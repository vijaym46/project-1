import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import carousel1 from '../../assets/Carousel/St Albans Banner 01.png';
import carousel2 from '../../assets/Carousel/St Albans Banner 02.jpg';
import carousel3 from '../../assets/Carousel/St Albans Banner 03.png';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Slide = () => {
  const slides = [
    { id: 1, image: carousel1 },
    { id: 2, image: carousel2 },
    { id: 3, image: carousel3 }
  ];

  return (
    <div className='home-carousel w-full h-full px-0 sm:px-[2vw] lg:px-[3vw]'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          dynamicBullets: true,
        }}
        navigation={false}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id} className='w-full h-full'>
            <img src={slide.image} alt="carousel" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slide;