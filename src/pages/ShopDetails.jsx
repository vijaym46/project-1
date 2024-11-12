import React, { useState, useEffect } from 'react';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs';
import { FaFacebookF, FaLinkedinIn, FaPinterest, FaRegStar, FaShoppingCart, FaStar } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import DescriReview from '../components/ShopDetails/DescriReview';
import ProductSlide from '../components/ShopDetails/ProductSlide';
import { Link, useParams } from 'react-router-dom';
import { IoClose, IoCloudUploadOutline } from "react-icons/io5";
import { MdOutlineCloudUpload } from "react-icons/md";
import { getCategoryMenuData } from '../serverApi/server';

const ShopDetails = () => {
  const { id } = useParams();
  const [slides, setSlides] = useState([]);
  const [subTitle, setSubTitle] = useState('');
  const [formFields, setFormFields] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
        try {
            const data = await getCategoryMenuData(id);

            if (data?.category_menu_serilizer?.image_file) {
                setSlides([data.category_menu_serilizer.image_file]);
            }
            if (data?.category_name) {
                setSubTitle(data.category_name);
            }
            if (data?.form_fields_serializer) {
                setFormFields(data.form_fields_serializer);
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    };

    fetchData();
  }, [id]);

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showUploadPopup, setShowUploadPopup] = useState(false); // Popup state

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

  /* useEffect(() => {
    const autoSlide = setInterval(() => {
      nextSlide();
    }, 2000);

    return () => clearInterval(autoSlide);
  }, [currentIndex]); */


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

  const togglePopup = () => {
    setShowUploadPopup(!showUploadPopup);
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
        { slides => 1 && (
          <div
          onClick={prevSlide}
          className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] left-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
        >
          <BsChevronCompactLeft size={30} />
        </div>
        ) }
        

        {/* Right Arrow */}
        { slides >= 1 && (
          <div
            onClick={nextSlide}
            className='absolute top-[50%] -translate-x-0 -translate-y-[-50%] right-5 text-2xl rounded-full p-2 bg-black/20 text-white cursor-pointer'
          >
            <BsChevronCompactRight size={30} />
          </div>
         )}
      </div>


      {/* Grid col 2 */}
      <div className=' flex custom-991:block px-4 py-2 sm:py-6'>
        <div className='px-5 sm:px-10 flex flex-col items-center justify-center w-full'>
          <div className='flex w-full flex-col gap-3'>
            <h1 className='text-2xl sm:text-3xl font-semibold'>{subTitle}</h1>
            <div className='flex text-orange-400 text-[15px] gap-1'><FaStar /> <FaStar /> <FaStar /> <FaStar /> <FaStar /></div>
          </div>
        <div className="w-full py-6">

          {/* <form>
             
            {formFields && formFields.map((field) => (
              <div className="flex items-center mb-4" key={field.id}>
                <label htmlFor={field.field_name} className="block w-[200px] text-left mr-5 text-gray-500 font-semibold">
                  {field.field_name}:
                </label>
                <select
                  name={field.field_name}
                  value={formData[field.field_name] || ''}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded"
                >
                  <option value="">Choose an option</option>
                  {field.options && field.options.map(option => (
                    <option key={option.id}>
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <p className="text-lg font-bold text-gray-700 mb-4">
              Total Price: $<span>{totalPrice}</span>
            </p>
          </form> */}

          <form>

            {formFields && formFields.map((field) => (
              <div className="flex items-center mb-4" key={field.id}>
                <label
                  htmlFor={field.field_name}
                  className="block w-[200px] text-left mr-5 text-gray-500 font-semibold"
                >
                  {field.field_name}:
                </label>
                <select
                  name={field.field_name}
                  value={formData[field.field_name] || ''}
                  onChange={handleChange}
                  className="block w-full p-2 border border-gray-300 rounded bg-white shadow-sm hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-400 duration-200"
                  style={{
                    maxHeight: '150px', // Controls the height of the dropdown
                    overflowY: 'auto', // Enables scrolling
                  }}
                >
                  <option value="">Choose an option</option>
                  {field.options && field.options.map(option => (
                    <option
                      key={option.id}
                      className="py-2 px-4 hover:bg-orange-100"
                      value={option.name} // Ensures each option has a value
                    >
                      {option.name}
                    </option>
                  ))}
                </select>
              </div>
            ))}

            <p className="text-lg font-bold text-gray-700 mb-4">
              Total Price: $<span>{totalPrice}</span>
            </p>
          </form>


            {/* Upload PDF button */}
            <button
              onClick={togglePopup}
              className='flex items-center gap-2 bg-orange-300 text-black px-5 py-2 duration-200 hover:bg-orange-400 mb-4'
            >
              <IoCloudUploadOutline /> Upload PDF
            </button>

            <Link
              to={`/login/${id}`}
              className="inline-flex items-center gap-2 bg-orange-300 text-black px-5 py-2 duration-200 hover:bg-orange-400"
            >
              <FaShoppingCart /> Add To Cart
            </Link>

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

      {/* Upload PDF Popup */}
      {showUploadPopup && (
        <>
          <div className='fixed inset-0 bg-black opacity-50 z-40' onClick={togglePopup}></div>
          <div className='fixed w-1/5 top-[40%] overflow-hidden left-1/2 transform -translate-x-1/2 -translate-y-1/2 shadow-lg flex flex-col items-center justify-center bg-white rounded-lg z-50'>
            <div className="px-4 pt-2 flex items-center justify-between w-full">
              <p className='text-center font-semibold'>UPLOAD YOUR FILE</p>
              <button onClick={togglePopup} className="text-gray-500 hover:text-gray-800">
                <IoClose />
              </button>
            </div>
            <div className='grid w-full grid-cols-1 sm:grid-cols-2'>
              <div className="h-32 bg-neutral-300 w-full mt-4 relative">
                <input
                  type="file"
                  className="opacity-0 absolute w-full h-full cursor-pointer"
                />
                <label className="mt-4 text-black px-5 py-2 duration-200 cursor-pointer">
                  <MdOutlineCloudUpload />Upload
                </label>
              </div>

              <div className="h-32 bg-neutral-300 w-full mt-4 relative">
                <input
                  type="file"
                  className="opacity-0 absolute w-full h-full cursor-pointer"
                />
                <label className="mt-4 text-black px-5 py-2 duration-200 cursor-pointer">
                  <MdOutlineCloudUpload />Upload
                </label>
              </div>
            </div>
          </div>
        </>
      )}

    </div>
  )
}

export default ShopDetails