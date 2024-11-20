import React from 'react'
import { assets } from '../assets/assets'
import SmoothReveal from './SmoothReveal.tsx'

const Hero = () => {
  return (
    <div className='mt-20'>
        <div className='relative z-50 flex flex-col gap-3'>
            <div className='bg-[#111] relative m-auto top-9 w-full h-1 md:top-12 md:h-2 lg:top-14 xl:top-20'></div>
            <SmoothReveal><h1 className="text-center text-3xl text-white font-oswald font-bold md:text-6xl lg:text-7xl xl:text-8xl">FITNESS ISN'T A HOBBY</h1></SmoothReveal>
            <SmoothReveal><h1 className="text-center text-4xl text-[#D7FB00] font-oswald font-bold md:text-6xl lg:text-7xl xl:text-8xl"> IT'S A LIFESTYLE</h1></SmoothReveal>
        </div>
      
      <img className='relative bottom-4 md:bottom-6 lg:bottom-7 xl:bottom-12' src={assets.hero} alt="" />
    </div>
  )
}

export default Hero
/* slider -> nextjs components; smooth reveal -> uibeats */