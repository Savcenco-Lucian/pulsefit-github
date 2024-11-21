import React from 'react'
import { assets } from '../assets/assets'
import SmoothReveal from './SmoothReveal.tsx'

const About = () => {
    return (
        <div id='link1' className='mt-5 about'>
            <div className='flex items-center justify-between px-7'>
                <div className='flex'>
                    <div className='w-1 h-1 border bg-[#D7FB00] opacity-60 md:w-2 md:h-2'></div>
                    <p className='text-xs font-oswald text-[#D7FB00] opacity-60 md:text-base'>ABOUT US</p>
                </div>

                <div className='border border-[#D7FB00] opacity-60 px-2 py-1 rounded-full'>
                    <p className='text-xs text-center font-oswald text-[#D7FB00] opacity-60 md:text-base'>01</p>
                </div>
            </div>
            <div className='flex flex-col mt-4 gap-8'>
            <SmoothReveal><h1 className="text-white font-oswald font-semibold text-4xl text-center md:text-6xl">BERLIN'S <span className="text-[#D7FB00]">HEALTH SANCTUARY</span></h1></SmoothReveal>
                <p className='font-poppins px-2 text-sm text-center text-[#CECECE] md:text-base lg:w-2/4 lg:m-auto'>Our gym is more than just a place to work out; it's a haven where fitness meets community,
                    and goals become achievements. Whether you're looking to sculpt your physique, boost your
                    strength, or simply enhance your overall well-being, PulseFit Gym provides the perfect
                    environment to thrive.
                </p>
                <div className="flex justify-center items-center">
                  <a
                    href="#"
                    className="px-4 py-2 text-base font-semibold text-[#D7FB00] bg-[#1E1E1E] border border-[#D7FB00] rounded-full md:text-lg hover:bg-[#D7FB00] hover:text-[#1E1E1E] transition"
                  >
                    GET STARTED NOW
                  </a>
                  <a href="#" className=' bg-[#D7FB00] rounded-full p-4 text-black'>
                    <img src={assets.arrow_right} className='w-full h-full' alt="" />
                  </a>
                </div>
            </div>

            

        </div>
    )
}

export default About
