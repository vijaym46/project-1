import React from 'react' 
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';

const SocialMedia = () => {
  return (
    <div className='flex items-center justify-between py-2 px-6 sm:px-[2vw] md:px-[3vw] lg:px-[5vw] bg-socialbg'>
        <div className='hidden md:block'>
            <Link to='/faq' className='font-light text-gray-800'>FAQs</Link>
            <span className='font-light px-2'>|</span>
            <Link className='font-light text-gray-800'>Help</Link>
            <span className='font-light px-2'>|</span>
            <Link className='font-light text-gray-800'>Support</Link>
        </div>
        <div>
            <p>718-528-5100</p>
        </div>
        <div className='flex items-center justify-center'>
            <a className="text-dark px-2" href="https://www.facebook.com/stalbansdigitalprinting" target='blank'>
                <FaFacebookF/>
            </a>
            <a className="text-dark px-2" href="https://x.com/stalbans123" target='blank'>
                <FaXTwitter />
            </a>
            <a className="text-dark px-2" href="https://www.linkedin.com/company/st-albans-digital-printing/" target='blank'>
                <FaLinkedinIn />
            </a>
            <a className="text-dark px-2" href="https://www.instagram.com/stalbansprint/" target='blank'>
                <FaInstagram /> 
            </a>
        </div>
    </div>
  )
}

export default SocialMedia
