import React from 'react'
import '../index.css'
import TiltText from '../components/TiltText'
import Page1Bottom from '../components/Page1Bottom'
import searchIcon from '../assets/Frame_53.avif';


const Page1 = () => {
  return (
    <div className='h-screen px-3 py-3 bg-white'>
      <div className='h-full w-full px-16 py-11 shadow-xl shadow-grey-700 bg-cover rounded-[30px] bg-[url(./assets/ANZO_bg.avif)]'>
      <img className = 'h-18' src = {searchIcon}/>
      <TiltText />
      <Page1Bottom />

      </div>
    </div>
  )
}

export default Page1