import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'

const ContactDetails = () => {
  return (
    <div className='mb-5 text-gray-700'>
        <Link to="/">
          <img
            src={logo}
            alt="brand-logo"
            className="w-32 sm:w-36 mb-5 cursor-pointer"
          />
        </Link>
        <p className='mb-2'>
        St. Albans Digital Printing Inc. – Your trusted designers and printers for memorial collages, funeral buttons, T-shirts, bookmarks, and more.
        </p>

        <div className='mb-2 flex items-center gap-4'> 
          <FaMapMarkerAlt className='text-black'/> <p>123 Street, New York, USA</p> 
        </div>

        <div className='mb-2 flex items-center gap-4'> 
          <IoIosMail className='text-black'/>
          <p>info@example.com</p> 
        </div>

        <div className='flex items-center gap-4'> 
          <FaPhoneAlt className='text-black'/>
          <p>+012 345 67890</p> 
        </div>
    </div>
  )
}

export default ContactDetails
