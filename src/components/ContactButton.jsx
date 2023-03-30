import React from 'react'
import Fly from "../assets/fly.svg"

const ContactButton = () => {
  return (
        <div className='border border-primary-500 rounded-3xl'>
            <button className='text-primary-500  font-medium flex items-center justify-center gap-2 px-5 py-2'
                href= "#contact"
            >Contact Now
            <img src={Fly} alt="fly" className='h-4 w-4' />
            </button>
         </div>
  )
}

export default ContactButton