import React, { useState } from 'react'
import { useCart } from '../contexts/CartContext'

const Announcement = () => {
  const  {hiddenAnnouncement, setHiddenAnnouncement} = useCart();

  return (
    <div className={`bg-indigo-600 ${hiddenAnnouncement ? "" : "hidden"}   w-full`}>
      <div className="px-3 py-3 mx-auto max-w-7xl ">
        <div className="flex flex-wrap items-center">
          <div className="flex items-center flex-1 w-0">
            <span className="flex p-2 bg-indigo-800 rounded-lg">
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" />
              </svg>
            </span>
            <p className="ml-3 font-medium text-white ">
              <span className="hidden lg:inline   text-[20px]"> For a short time, there is no shipping fee for purchases of 100$ or more! </span>
              <span className="lg:hidden">No shipping fee for purchases of 100$ or more! </span>
            </p>
          </div>
         
          <div className="flex-shrink-0 order-2 sm:order-3 sm:ml-3">
            <button onClick={()=>{setHiddenAnnouncement(!hiddenAnnouncement)}} type="button" className="flex p-2 -mr-1 rounded-md hover:bg-indigo-500 focus:outline-none focus:ring-2 focus:ring-white sm:-mr-2">
              <span className="sr-only">Dismiss</span>
              <svg className="w-6 h-6 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </div>
    
  )
}

export default Announcement