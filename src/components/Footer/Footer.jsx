import React from 'react'
import ContactDetails from './ContactDetails'
import LinkandMail from './LinkandMail'

const Footer = () => {
  return (
    <footer className='pt-5 md:pt-10 px-5 bg-orange-200 text-lg'>
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-5 px-3 md:px-10 pt-10'>
        <ContactDetails/>
        <LinkandMail/>
      </div>
      <div className='border-t text-center border-white px-10 p-8'>
        <p>Copyright &copy; 2009 - 2024 All Rights Reserved</p>
      </div>
    </footer>
  )
}

export default Footer