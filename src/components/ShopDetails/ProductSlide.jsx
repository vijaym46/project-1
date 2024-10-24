import React,{  useState } from 'react';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import product1 from '../../assets/Product/product1.jpg';
import product2 from '../../assets/Product/product2.jpg';
import { FaEye } from 'react-icons/fa'
import { FaArrowCircleRight, FaArrowCircleLeft } from 'react-icons/fa';

// Arrow components for navigation
const PrevArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ display: 'block' }}>
      <FaArrowCircleLeft className="text-3xl active:text-orange-200 hover:text-gray-700 text-gray-500 duration-200" />
    </div>
  );
};

const NextArrow = (props) => {
  const { className, onClick } = props;
  return (
    <div className={className} onClick={onClick} style={{ display: 'block' }}>
      <FaArrowCircleRight className="text-3xl active:text-orange-200 hover:text-gray-700 text-gray-500 duration-200" />
    </div>
  );
};
// Arrow End

const ProductSlide = () => {
  
  const products = [
    { id: 1, img: product1, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 2, img: product2, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 3, img: product1, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 4, img: product2, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 5, img: product1, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 6, img: product2, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 7, img: product1, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
    { id: 8, img: product2, title: "Colorful Stylish Shirt", price: "$123.00", oldPrice: "$123.00" },
  ];

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 7,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />, 
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  /* Smooth transition for Image */
  const [isZoomed, setIsZoomed] = useState(false);

  // Toggle zoom on click
  const handleImageClick = () => {
    setIsZoomed(!isZoomed);
  };

  return (
    <div className="mx-10 mt-10 mb-20">

      <Slider {...settings}>
        {products.map((product) => (
          <div key={product.id} className="px-2">
            <div>
              <div
                className='relative overflow-hidden bg-transparent border p-0 cursor-pointer'
                onClick={() => handleImageClick}
              >
                <img 
                  className={`w-full transition-transform duration-500 ease-in-out hover:scale-125 ${isZoomed ? 'scale-125' : ''}`}
                  src={product.img} alt={product.title} />
              </div>
              <div className="card-body border-l border-r text-center p-0 pt-4 pb-3">
                <h6 className="text-truncate mb-3">{product.title}</h6>
                <div className="flex justify-center">
                  <h6>{product.price}</h6>
                  <h6 className="text-gray-500 ml-2 line-through">{product.oldPrice}</h6>
                </div>
              </div>
              <div className="flex py-3 justify-center items-center text-gray-700 gap-1 bg-gray-100 border">
                <FaEye />
                <button>
                  View Detail
                </button>
              </div>
            </div>
          </div>
        ))}
      </Slider>

    </div>
  );
};

export default ProductSlide;