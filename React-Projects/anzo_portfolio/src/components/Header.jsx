import React from 'react'
import 'remixicon/fonts/remixicon.css'
import '../index.css'


const Header = () => {
  return (
    <div className='fixed w-full flex items-center justify-end z-10 p-8'>
      <button className='bg-black border-4 text-white text-md px-4 py-2 hover:bg-gray-500 rounded-full '>
        Hire Me
      </button>
      <i className="ri-more-2-fill text-white text-2xl ml-3"></i>
    </div>
  )
}

export default Header