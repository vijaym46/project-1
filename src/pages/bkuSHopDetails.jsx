import React, { useState, useEffect } from 'react';
import product1 from '../assets/Product/product1.jpg';
import product2 from '../assets/Product/product2.jpg';
import product3 from '../assets/Product/product3.jpg';
import product4 from '../assets/Product/product4.png';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';
import { FaRegStarHalfStroke, FaXTwitter } from 'react-icons/fa6';
import DescriReview from '../components/ShopDetails/DescriReview';
import ProductSlide from '../components/ShopDetails/ProductSlide';
import { useParams } from 'react-router-dom';
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";

const ShopDetails = () => {
  const { id } = useParams();

  const slides = [product1, product2, product3, product4];
  const [currentIndex, setCurrentIndex] = useState(0);

  const [isLoggedIn, setIsLoggedIn] = useState(false);

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

  const calculateTotal = () => {
    let basePrice = 5; 
    let quantity = parseInt(formData.quantity || 0, 10);
    let total = basePrice * quantity;
    setTotalPrice(total.toFixed(2));
  };


  return (
    /* form start */
    <div>
    <section className=' grid grid-cols-1 lg:grid-cols-2 w-full'>

      {/* Grid col 1 */}
      <div className='px-5 sm:px-8 md:px-16 lg:px-20 py-6 h-[400px] sm:h-[600px] w-full relative group'>
        <div className='relative overflow-hidden w-full h-full'>
          <img src={slides[currentIndex]} alt="" className='w-full h-full bg-center bg-cover duration-500 transition-transform hover:scale-125'/>
        </div>

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


      {/* Grid col 2 */}
      <div className=' flex custom-991:block px-4 py-2 sm:py-6'>
        <div className='px-5 sm:px-10 flex flex-col items-center justify-center w-full'>
          <div className='flex w-full flex-col gap-3'>
            <h1 className='text-2xl sm:text-3xl font-semibold'>Book Marks</h1>
            <div className='flex text-orange-400 text-[15px] gap-1'><FaStar /> <FaStar /> <FaStar /> <FaRegStarHalfStroke /> <FaRegStar /></div>
          </div>
        <div className="w-full py-6">
          <form>
          {/* Paper Type */}
            <div className="flex items-center justify-center mb-4">
              <label htmlFor="paperType" className="block  w-[200px] text-left mr-5 text-gray-500 whitespace-nowrap font-semibold mb-2">
                Paper Type:
              </label>
              <select
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
          <div className="flex items-center justify-center mb-4">
            <label htmlFor="size" className="block w-[200px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Size:
            </label>
            <select
              name="size"
              value={formData.size}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="2.25x8.9">2.25 x 8.9</option>
              <option value="3x9">3 x 9</option>
            </select>
          </div>

            {/* Ink Color */}
            <div className="flex items-center justify-center mb-4">
            <label htmlFor="tasselColor" className="block w-[200px] text-left mr-5 text-gray-500 whitespace-nowrap font-semibold mb-2">
              Ink Color:
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

          {/* Finish */}
          <div className="flex items-center justify-center mb-4">
            <label htmlFor="quantity" className="block w-[200px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Finish: 
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Choose an option</option>
              <option value="standard-finish">Standard Finish</option>
              <option value="gloss-uv-finish">High gloss uv coating</option>
            </select>
          </div>

          {/* Rounded corners */}
          <div className="flex items-center justify-center mb-4">
            <label htmlFor="quantity" className="block w-[200px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Rounded corners: 
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Choose an option</option>
              <option value="no-corner">No rounded corners</option>
              <option value="1/8-inch-corner">Yes 1/8 inch radius</option>
              <option value="3/8-inch-corner">Yes 3/8 inch radius</option>
            </select>
          </div>
          {/* Quantity */}
          <div className="flex items-center justify-center mb-4">
            <label htmlFor="quantity" className="block w-[200px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Quantity: 
            </label>
            <select
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
          {/* Tassel color */}
          <div className="flex items-center justify-center mb-4">
            <label htmlFor="quantity" className="block w-[200px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Tassel color: 
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Choose an option</option>
              <option value="red">Red</option>
              <option value="blue">Blue</option>
              <option value="green">Green</option>
            </select>
          </div>
          {/* Proof Options: */}
          <div className="flex items-center justify-center mb-4">
            <label htmlFor="quantity" className="block w-[200px] text-left mr-5 text-gray-500 font-semibold mb-2">
              Proof Options:: 
            </label>
            <select
              name="quantity"
              value={formData.quantity}
              onChange={handleChange}
              className="block w-full p-2 border border-gray-300 rounded"
            >
              <option value="">Choose an option</option>
              <option value="straight-production">Straight to production</option>
              <option value="online-copy">online copy</option>
              <option value="nextday-hardcopy">Nextday Hard copy</option>
            </select>
          </div>

          {/* Total Price */}
          <p className="text-lg font-bold text-gray-700 mb-4">
            Total Price: $<span>{totalPrice}</span>
          </p>
          </form>

          <div className="mb-4 pt-2">

            {/* Upload PDF button */}
            <button className='flex items-center gap-2 bg-orange-300 text-black px-5 py-2 duration-200 hover:bg-orange-400 mb-4'>
              <IoCloudUploadOutline /> Upload PDF
            </button>

            <button className="flex items-center gap-2 bg-orange-300 text-black px-5 py-2 duration-200 hover:bg-orange-400">
            <FaShoppingCart /> Add To Cart
            </button>
          </div>

          {/* Share Social media */}
          <div className='flex items-center pt-2'>
            <p className='font-light'>Share on:</p>
            <div className='flex pl-2 items-center gap-x-2'>
              <a href="#"><FaFacebookF /></a>
              <a href="#"><FaXTwitter /></a>
              <a href="#"><FaLinkedinIn /></a>
              <a href="#"><FaPinterest /></a>       
            </div>
          </div>

          </div>
        </div>
      </div>
      
    </section>
    {/* form end */}

      <DescriReview />
      <div className='px-5 md:px-10'>
        <div className='flex gap-3 items-center justify-center'>
          <p className='w-10 h-[1.5px] bg-black'></p>
          <h1 className='text-3xl font-semibold'>You May Also Like</h1>
          <p className='w-10 h-[1.5px] bg-black'></p>
        </div>
        <ProductSlide />  {/* --- Same comp(Error-1) Work fine here --- */}
      </div>

      {/* Upload PDF section */}
      <div className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg flex flex-col items-center justify-center p-4 bg-white rounded-lg'>
          <div>
            <p className='flex justify-center'>UPLOAD YOUR ARTWORK</p>
            <button className=''><IoClose /></button>
          </div>
          <input type="file" />
      </div>

    </div>
  )
}

export default ShopDetails