import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 02.jpg'
import PrintingService from './PrintingService'

const ChurchDirectory = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Church Directory</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-2 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Church Directory</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>We are pleased to introduce, Pure Pixel Photography Studio, a division of St. Albans Digital Printing Inc. We capture the smiling faces of all ages. We produce directories of church members and families. This is a treasured keepsake, a useful resource, and a powerful tool for attracting new members. When you become part of our Church Directory Program, Pure Pixel provides complimentary printed directories for your church, we also give all members who purchase a product a directory as well. Let us help you all connect; with beautiful, studio-quality portraits that families love. Showcase what makes your congregation special… You’re Families…</li>

                <li className='sm:leading-8'>Individuals and groups can be professionally photographed at the church location conveniently where you can instantly view your portraits to make your selection and choose whatever photographs that best suit your needs. Our Consultant is available to guide you through all the possibilities. Take advantage of this great offer to exhibit your portraits and keepsakes.</li>

                <li className='sm:leading-8'>Pure Pixel also provides:
                  <ul className='mt-2 flex flex-col gap-1 sm:gap-2 text-sm sm:text-base list-decimal'>
                      <li>Commercial Printing</li>
                      <li>Video Production Services</li>
                      <li>Commemorative Books</li>
                      <li>Single Portraits</li>
                      <li>Catalogs</li>
                      <li>Photo Restoration</li>
                      <li>Portfolios</li>
                      <li>Event Photography</li>
                      <li>Tithing Envelopes</li>
                      <li>Outreach Materials</li>
                  </ul>
                </li>

                <li className='sm:leading-8'>We are looking forward to working with you on your next directory. Please Visit the website www.3pstudio.us for more details or Call us at 718-528-5100.</li>
                <ul className='flex flex-col gap-y-1 sm:gap-y-3 '>
                  <li className='list-disc sm:leading-8'>i. Member Profiles: Individual entries for each member or family, including names, contact information, and a short biography.</li>
                  <li className='list-none sm:leading-8'>ii. Groups & Ministries: Information on various church groups, committees, and ministries to help members find ways to engage.</li>
                  <li className='list-none sm:leading-8'>iii. Events Calendar: A calendar of upcoming events, services, and gatherings for easy reference.</li>
                  <li className='list-none sm:leading-8'>iv. Contact Information: Important contacts such as the church office, pastoral staff, and ministry leaders.</li>
                </ul>

              </ul>

              {/* --- Images from APi  */}
              <div>
                {/* ImageX3 in grid */}
              </div>
          </div>  
        </div>

      </div>
    </div>
  )
}

export default ChurchDirectory
