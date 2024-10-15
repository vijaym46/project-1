import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/logo.svg'
import { FaMapMarkerAlt, FaPhoneAlt } from 'react-icons/fa'
import { IoIosMail } from 'react-icons/io'
import { HiPrinter } from 'react-icons/hi'

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
          <FaMapMarkerAlt className='text-black'/> 
          <p>St. Albans Digital Printing Inc. 199-12 Linden Blvd.<br/>
          St. Albans, NY 11412
          </p> 
        </div>

        <div className='mb-2 flex items-center gap-4'> 
          <IoIosMail className='text-black'/>
          <p>orders@stalbansprinting.com</p> 
        </div>

        <div className='mb-2 flex items-center gap-4'> 
          <FaPhoneAlt className='text-black'/>
          <p>718-528-5100,  718-528-6363</p> 
        </div>

        <div className='flex items-center gap-4'  >
          <HiPrinter className='text-black' />
          <p>718-528-5151</p>
        </div>
    </div>
  )
}

export default ContactDetails
