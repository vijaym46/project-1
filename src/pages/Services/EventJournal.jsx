import React from 'react'
import banner from '../../assets/Carousel/St Albans Banner 03.png'
import PrintingService from './PrintingService'

const EventJournal = () => {
  return (
    <div>
      <div className='relative w-full h-full mb-5 sm:mb-16'>
        <img src={banner} alt="offset banner"/>
        <div className='absolute top-0 w-full h-full bg-black/40 flex items-center justify-center'>
          <h1 className='text-2xl sm:text-4xl font-medium text-white drop-shadow-md'>Event Journal</h1>
        </div>
      </div>
      <div className='px-5 sm:px-10 pb-8 sm:pb-16'>
        
        <div className='px-4 md:px-14 grid  grid-cols-1 lg:grid-cols-4 gap-3 sm:gap-8'>
          {/* --- Printing Services Start --- */}
          <PrintingService />

          {/* --- Digital Offset --- */}
          <div className='sm:px-4 py-6 lg:col-span-3 flex flex-col items-center'>
              <h1 className='text-3xl sm:text-4xl font-bold mb-4 sm:mb-8 text-neutral-800'>Event Journal</h1>
              <ul className='flex flex-col gap-y-3 sm:gap-y-6 list-disc text-neutral-700 text-base sm:text-lg'>
                <li className='sm:leading-8'>At St. Albans Digital Printing Inc., our talented and creative graphic designer designs customized digital journals for organizations gala events like awards luncheons, cocktail events, some golf outings etc.. Displayed on state-of-the-art tablets, we create an interactive experience for your guests in the event table while saving you time and money. We signify a major innovation in how fundraising events are promoted and funds are raised with its innovative and unique digital journal.</li>

                <li className='sm:leading-8'>Usually, these digital event journal feature:
                  <ul className='mt-2 flex flex-col gap-1 sm:gap-2 text-sm sm:text-base list-decimal'>
                      <li>event programs/menus/schedules</li>
                      <li>mission information about the host organization</li>
                      <li>messages from directors and chair people</li>
                      <li>event committee, board and trustee listings</li>
                      <li>biographies of honorees, award winners, celebrity hosts, etc.</li>
                      <li>ads that recognize corporate and individual donors and reflect their levels of contribution</li>
                  </ul>
                </li>

                <li className='sm:leading-8'>In order for your guests to access the digital journals at your event, we provide tablets which are set up on the tables. Typically, we display 3 tablets per table. We upload the journal onto the tablets, transport the tablets to the event and provide set up and clean up.</li>

                <li className='sm:leading-8'>Guests flip through the digital event journals during event speeches, usually skimming content and looking for their own ads. As dated methods of event fundraising fade away, digital event journals can remain viable fundraising vehicles for years to come.</li>

                <li className='list-none'>
                  <h2 className='text-2xl font-medium text-neutral-800'>The Advantages of Digital Event Journals</h2>
                  <ul className='mt-6 flex flex-col gap-3 sm:gap-6 text-base sm:text-lg'>
                    <li><span className='text-neutral-800 font-bold'>Save money</span> We have save organizations thousands of dollars on each event. We find that going digital typically saves up to 40%.</li>
                    <li><span className='text-neutral-800 font-bold'>Go Green, Go Digital</span> Printed journals are looked at once and thrown away, going digital will reduce your carbon footprint.</li>
                    <li><span className='text-neutral-800 font-bold'>Eye-Catching</span> With unlimited space for no extra cost you can add pictures, organizational highlights, brochures, interactive timelines, website and much more.</li>
                    <li><span className='text-neutral-800 font-bold'>Keep guests focused</span> Highlight your contributor’s ads in an eye-catching manner and link sponsors ads to their websites.</li>
                    <li><span className='text-neutral-800 font-bold'>Make contributors happy</span> The only thing guests will have access to is your journal.</li>
                    <li><span className='text-neutral-800 font-bold'>Free Printed journals for Honorees</span> Print perfectly bound journals for the people who will appreciate it the most.</li>
                  </ul>
                </li>
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

export default EventJournal
