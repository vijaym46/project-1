import React, { useState, useEffect } from 'react';
import product1 from '../assets/Product/product1.jpg';
import product2 from '../assets/Product/product2.jpg';
import product3 from '../assets/Product/product3.jpg';
import product4 from '../assets/Product/product4.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { div } from 'framer-motion/client';
import { FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke } from 'react-icons/fa6';

const Cards = () => {
  const slides = [product1, product2, product3, product4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]);


  /* Form */

  const [formData, setFormData] = useState({
    paperType: 'laminated',
    size: '2.25x8.9',
    quantity: '',
    tasselColor: '',
  });

  const [totalPrice, setTotalPrice] = useState(0.00);

  // Handle form input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    calculateTotal();
  };

  // Function to calculate total price (example logic)
  const calculateTotal = () => {
    let basePrice = 5; // Example base price per item
    let quantity = parseInt(formData.quantity || 0, 10);
    let total = basePrice * quantity;
    setTotalPrice(total.toFixed(2)); // Set the total price with 2 decimal places
  };


  return (
    /* form start */
    <section className='grid grid-cols-1 justify-center items-center custom-991:grid-cols-2 py-6'>
      <div className='max-w-[450px] sm:max-w-[500px] h-[400px] sm:h-[600px] w-full m-auto border py-6 px-4 relative group'>
        <div
          style={{ backgroundImage: `url(${slides[currentIndex]})` }}
          className='w-full h-full bg-center bg-cover duration-500'
        ></div>

        {/* Left Arrow */}
        <div
          onClick={prevSlide}
          className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        >
          <BsChevronCompactLeft size={30} />
        </div>

        {/* Right Arrow */}
        <div
          onClick={nextSlide}
          className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        >
          <BsChevronCompactRight size={30} />
        </div>
      </div>
      <div className='flex custom-991:block items-center justify-center'>
        <div className='max-w-[380px] sm:max-w-[500px] flex flex-col items-center justify-center w-full py-6'>
          <div className='flex w-full flex-col gap-3'>
            <h1 className='text-3xl font-semibold'>Book Marks</h1>
            <div className='flex text-orange-400 gap-1'><FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> <FaRegStar /></div>
            <h2 className='text-2xl font-semibold py-2'>$10.00-150.00</h2>
            <p className='text-gray-500 text-lg'>Volup erat ipsum diam elitr rebum et dolor. Est nonumy elitr erat diam stet sit clita ea.</p>
          </div>
        <div className="w-full py-6 bg-white rounded-lg">
          <form>
          {/* Paper Type */}
            <div className="form-group flex items-center justify-center mb-4">
              <label htmlFor="paperType" className="block  w-[150px] text-left mr-5 text-gray-500 whitespace-nowrap font-semibold mb-2">
                Paper Type:
              </label>
              <select
                id="paperType"
                name="paperType"
                value={formData.paperType}
                onChange={handleChange}
                className="block w-full p-2 border border-gray-300 rounded"
              >
                <option value="laminated">Laminated</option>
                <option value="matte">Matte</option>
              </select>
            </div>

          {/* Size */}
          <div className="form-group flex items-center justify-center mb-4">
            <label htmlFor="size" className="block w-[150px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Size:
            </label>
            <select
              id="size"
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="2.25x8.9">2.25 x 8.9</option>
              <option value="3x9">3 x 9</option>
            </select>
          </div>

          {/* Quantity */}
          <div className="form-group flex items-center justify-center mb-4">
            <label htmlFor="quantity" className="block w-[150px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Quantity: 
            </label>
            <select
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Choose an option</option>
              <option value="1">1</option>
              <option value="5">5</option>
              <option value="10">10</option>
            </select>
          </div>

          {/* Tassel Color */}
          <div className="form-group flex items-center justify-center mb-4">
            <label htmlFor="tasselColor" className="block  w-[150px] text-left mr-5 text-gray-500 whitespace-nowrap font-semibold mb-2">
              Tassel Color:
            </label>
            <select
              id="tasselColor"
              name="tasselColor"
              value={formData.tasselColor}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Choose an option</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>

          {/* Total Price */}
          <p className="total-price text-lg font-bold text-gray-700 mb-4">
            Total Price: $<span id="totalPrice">{totalPrice}</span>
          </p>
          </form>

          <div className="mb-4 pt-2">
            <button className="flex items-center gap-2 bg-orange-300 text-black px-5 py-2 duration-200 hover:bg-orange-400">
            <FaShoppingCart /> Add To Cart
            </button>
          </div>
      </div>
        </div>
      </div>
    </section>
    /* form end */
  );
};

export default Cards;