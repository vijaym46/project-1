import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import banner from '../assets/Carousel/St Albans Banner 02.jpg';

const FAQ = () => {
  const [faqs, setFaqs] = useState([
    {
      question: "What type of files should I send to St Albans printing?",
      answer:
        "We recommend saving as a PDF file. You may also send the file in the following types: JPG, JPEG, TIF, TIFF, and EPS. We prefer that you send PDF with embedded or outlined fonts. PDF files are easier to handle and will likely speed up your turn-around. Remember to flatten your files before uploading. For Roll Labels, we recommend designing: Vector files (e.g. EPS or PDF). 300 DPI or higher. Use black (100% K). For fine lines and text smaller than 9pt, use black (100% K) only.",
      isOpen: false,
    },
    {
      question: "What color mode should my files be?",
      answer: "Your designs should always start and finish in CMYK color mode.",
      isOpen: false,
    },
  ]);

  const toggleAnswer = (index) => {
    setFaqs((prevFaqs) =>
      prevFaqs.map((faq, i) =>
        i === index ? { ...faq, isOpen: !faq.isOpen } : faq
      )
    );
  };

  return (
    <div className='pb-20'>
      <div className='relative w-full h-full xl:h-[400px] mb-5 sm:mb-8'>
        <img src={banner} className='w-full h-full' alt="offset banner" />
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>FAQs</h1>
        </div>
      </div>

      <div className='px-5 sm:px-12 md:px-24 lg:px-44'>
        <h1 className='text-xl xs:text-2xl sm:text-3xl md:text-4xl font-medium mb-2'>Frequently Asked Questions</h1>
        <p className='text-neutral-500 text-base sm:text-lg mb-4'>Select any topic from the menu below. Click on a question to open and/or close the answer.</p>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>
          <div className='col-span-1'>
            <h1 className='mb-4 text-xl md:text-2xl lg:text-3xl sm:text-center w-2/3 sm:w-full font-medium px-4 py-2 sm:py-3 bg-neutral-700 text-white'>FAQ Topics</h1>
            <ul className='flex px-2 text-base sm:text-lg flex-col gap-4 text-blue-500'>
              <li className='cursor-pointer'>General</li>
              <li className='cursor-pointer'>Business Cards</li>
              <li className='cursor-pointer'>Marketing Products</li>
              <li className='cursor-pointer'>Majestic Products</li>
              <li className='cursor-pointer'>Boxes & Packaging</li>
              <li className='cursor-pointer'>Roll Labels & Stickers</li>
              <li className='cursor-pointer'>Signs & Banners</li>
              <li className='cursor-pointer'>Direct Mail & EDDM</li>
              <li className='cursor-pointer'>Promo Products</li>
              <li className='cursor-pointer'>Promo.4over.com</li>
              <li className='cursor-pointer'>Shipping</li>
              <li className='cursor-pointer'>Website</li>
            </ul>
          </div>

          <div className='col-span-2'>
            <h1 className='text-xl md:text-2xl lg:text-3xl font-medium px-4 py-2 sm:py-3 bg-blue-500 text-white'>General</h1>
            <ul className='text-[17px] font-light'>
              {faqs.map((faq, index) => (
                <React.Fragment key={index}>
                  <li
                    onClick={() => toggleAnswer(index)}
                    className='cursor-pointer px-2 py-3 mt-2 bg-neutral-100 shadow-[0_0.8px_0px_0px_rgba(0,0,0,0.2)]'
                  >
                    {index + 1}. {faq.question}
                  </li>
                  <AnimatePresence>
                    {faq.isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.2 }}
                        className='overflow-hidden bg-neutral-100 text-neutral-500 px-3 pb-3'
                      >
                        {faq.answer}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </React.Fragment>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;



















/* import React, { useState } from 'react'
import banner from '../assets/Carousel/St Albans Banner 02.jpg'

const FAQ = () => {
  const [showAnswer, setShowAnswer] = useState(false);

  const toggleAnswer = () => {
    !setShowAnswer();
  }

  return (
    <div className='pb-20'>
      <div className='relative w-full h-full xl:h-[400px] mb-5 sm:mb-8'>
        <img src={banner} className='w-full h-full' alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>FAQs</h1>
        </div>
      </div>

      <div className='px-5 sm:px-24 lg:px-44'>
          <h1 className='sm:text-4xl font-medium mb-2'>Frequently Asked Questions</h1>
          <p className='text-neutral-500 text-lg mb-4'>Select any topic from the menu below. Click on a question to open and/or close the answer.</p>

          <div className='grid grid-cols-1 md:grid-cols-3 gap-5 md:gap-10'>

            <div className='col-span-1'>
              <h1 className='mb-4 text-3xl text-center font-medium px-4 py-3 bg-neutral-700 text-white'>FAQ Topics</h1>
              <ul className='flex px-2 text-base sm:text-lg flex-col gap-4 text-blue-500'>
                <li>General</li>
                <li>Business Cards</li>
                <li>Marketing Products</li>
                <li>Majestic Products</li>
                <li>Boxes & Packaging</li>
                <li>Roll Labels & Stickers</li>
                <li>Signs & Banners</li>
                <li>Direct Mail & EDDM</li>
                <li>Promo Products</li>
                <li>Promo.4over.com</li>
                <li>Shipping</li>
                <li>Website</li>
              </ul>
            </div>

            <div className='col-span-2'>
              <h1 className='text-3xl font-medium px-4 py-3 bg-blue-500 text-white'>General</h1>
              <ul className='text-[17px] font-light'>
                <li onClick={() => toggleAnswer()} className='px-2 py-3 mt-2 bg-neutral-100 shadow-[0_0.8px_0px_0px_rgba(0,0,0,0.2)]'>1. What type of files should I send to stalbans printing?</li>
                { showAnswer && <p className='bg-neutral-100 text-neutral-500 px-3 pb-3'>We recommend saving as a PDF file. You may also send the file in the following types: JPG, JPEG, TIF, TIFF, and EPS. We prefer that you send PDF with embedded or outlined fonts. PDF files are easier to handle and will likely speed up your turn-around. Remember to flatten your files before uploading. For Roll Labels, we recommend designing: Vector files (e.g. EPS or PDF). 300 DPI or higher. Use black (100% K). For fine lines and text smaller than 9pt, use black (100% K) only.</p>}
                <li className='px-2 py-3 mt-2 bg-neutral-100 shadow-[0_0.8px_0px_0px_rgba(0,0,0,0.2)]'>2. What color mode should my files be?</li>
                { showAnswer && <p className='bg-neutral-100 text-neutral-500 px-3 pb-3'>Your designs should always start and finish in CMYK color mode.</p>}
              </ul>
            </div>

          </div>
      </div>
      

    </div>
  )
}

export default FAQ
 */