import React from 'react'
import ContactDetails from './ContactDetails'
import LinkandMail from './LinkandMail'

const Footer = () => {
  return (
    <footer className='pt-10 sm:pt-14 px-1 bg-orange-200 text-lg'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 md:px-10'>
        <ContactDetails/>
        <LinkandMail/>
      </div>
      <div className='border-t text-center border-white px-10 py-4 sm:py-6'>
        <p>Copyright &copy; 2009 - 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer