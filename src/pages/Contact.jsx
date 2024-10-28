import React from 'react'
import contact from '../assets/Carousel/St Albans Banner 01.png'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const Contact = () => {
  return (
    <div>
      <div className='px-5 sm:px-10 flex flex-col items-center justify-center'>

        <div className='relative w-full h-full mb-5 sm:mb-10'>
          <img src={contact} alt="contact banner" className='w-full h-full'/>
          <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
            <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Contact us</h1>
          </div>
        </div>

        <div className='flex gap-1 sm:gap-3 items-center justify-center'>
          <p className='w-20 sm:w-12 h-[2px] bg-black'></p>
          <h1 className='text-3xl text-center sm:text-4xl font-semibold'>Contact For Any Queries</h1>
          <p className='w-20 sm:w-12 h-[2px] bg-black'></p>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-[55%_40%] justify-center gap-10 w-full pt-8 pb-4 sm:pb-12'>

          <div className='px-4 py-4 sm:px-8 sm:py-8 bg-neutral-50 shadow-[0_3px_20px_-4px_rgba(0,0,0,0.1)] rounded-xl'>
            <form action="" className='flex flex-col items-start justify-start gap-4'>
              <input type="text" placeholder='Your Name' className='border border-neutral-300 rounded focus:shadow-[0_0_10px_-5px_rgba(0,0,0,0.5)] transition-shadow duration-200 focus:outline-none px-3 py-2 w-full'/>
              <input type="email" placeholder='Your Email' className='border border-neutral-300 rounded focus:shadow-[0_0_10px_-5px_rgba(0,0,0,0.5)] transition-shadow duration-200 focus:outline-none px-3 py-2 w-full'/>
              <input type="text" placeholder='Subject' className='border border-neutral-300 rounded focus:shadow-[0_0_10px_-5px_rgba(0,0,0,0.5)] transition-shadow duration-200 focus:outline-none px-3 py-2 w-full'/>
              <textarea name="message" placeholder='Message' className='h-44 border border-neutral-300 rounded focus:shadow-[0_0_10px_-5px_rgba(0,0,0,0.5)] transition-shadow duration-200 focus:outline-none px-3 py-2 w-full resize-none'></textarea>
              <button className='my-auto px-4 py-2 bg-orange-400 text-neutral-600 hover:bg-orange-600 hover:text-white duration-200 rounded'>Send Message</button>
            </form>
          </div>

          <div>
            <div>
              <h2 className='text-xl font-semibold'>Get In Touch</h2>
              <p className='py-3 text-neutral-500 text-[17px]'>Reach out to us for any inquiries or assistance. We’re here to help you with any questions. Our team is dedicated to providing you with quality service and support. Connect with us and let us make your experience seamless.</p>
            </div>
            <div className='pb-4'>
              <h2 className='pb-3 text-xl font-semibold'>Store 1</h2>
              <p className='pb-2 text-neutral-500 text-[17px]'><FaMapMarkerAlt className='text-orange-600 inline relative bottom-[2px] mr-2'/> 199-12 Linden Blvd,<br/>
                St. Albans, Queens,<br/>
                NY 11412</p> 
              <p className='pb-2 text-neutral-500 text-[17px]'><IoIosMail className='text-orange-600 inline relative bottom-[2px] mr-2'/> orders@stalbansprinting.com</p> 
              <p className='text-neutral-500 text-[17px]'><FaPhoneAlt className='text-orange-600 inline relative bottom-[2px] mr-2'/> 718-528-5100,718-528-6363</p> 
            </div>
            <div className='pb-4'>
              <h2 className='pb-3 text-xl font-semibold'>Store 2</h2>
              <p className='pb-2 text-neutral-500 text-[17px]'><FaMapMarkerAlt className='text-orange-600 inline relative bottom-[2px] mr-2'/> North Carolina division,<br/>
                307 Greentown Ave,<br/>
                Warrenton, NC 27589</p> 
              <p className='pb-2 text-neutral-500 text-[17px]'><IoIosMail className='text-orange-600 inline relative bottom-[2px] mr-2'/> orders@stalbansprinting.com</p> 
              <p className='text-neutral-500 text-[17px]'><FaPhoneAlt className='text-orange-600 inline relative bottom-[2px] mr-2'/> 919-500-9648</p> 
            </div>
          </div>

        </div>

      </div>
      <div className='mt-5 mb-8 sm:mb-16 w-full'>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.121278173686!2d-73.76219942347898!3d40.69635804237906!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c267498fc4beed%3A0x65f48773c620ba8c!2s199-12%20Linden%20Blvd%2C%20St.%20Albans%2C%20NY%2011412%2C%20USA!5e0!3m2!1sen!2s!4v1698432543524!5m2!1sen!2s"
          className='border-none w-full h-96' allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </div>

    </div>
  )
}

export default Contact
