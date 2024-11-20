import React from 'react'
import { assets } from '../assets/assets'
import SmoothReveal from './SmoothReveal.tsx'

const OurTeam = () => {
    return (
        <div className='mt-28'>
            <div className='flex items-center justify-between px-7'>
                <div className='flex'>
                    <div className='w-1 h-1 border bg-[#D7FB00] opacity-60 md:w-2 md:h-2'></div>
                    <p className='text-xs font-oswald text-[#D7FB00] opacity-60 md:text-base'>Our Team</p>
                </div>

                <div className='border border-[#D7FB00] opacity-60 px-2 py-1 rounded-full'>
                    <p className='text-xs text-center font-oswald text-[#D7FB00] opacity-60 md:text-base'>05</p>
                </div>
            </div>

            <SmoothReveal><h1 className='text-white py-7 font-oswald font-semibold text-4xl text-center md:text-6xl'>MEET THE <span className='text-[#D7FB00]'>TEAM</span></h1></SmoothReveal>
        
            <div className='flex flex-wrap flex-col gap-14 justify-center items-center px-7 py-4 md:flex-row'>
                <div>
                    <img className='w-80 h-full rounded-2xl' src={assets.team_1} alt="" />
                    <h4 className='font-poppins pt-4 text-lg text-[#D7FB00]'>FOUNDER</h4>
                    <h3 className='font-oswald text-xl text-white font-semibold'>JOHN CHIRIAC</h3>
                </div>
                <div>
                    <img className='w-80 h-full rounded-3xl' src={assets.team_2} alt="" />
                    <h4 className='font-poppins pt-4 text-lg text-[#D7FB00]'>HEAD COACH</h4>
                    <h3 className='font-oswald text-xl text-white font-semibold'>LEILA TROPEZ</h3>
                </div>
                <div>
                    <img className='w-80 h-full rounded-3xl' src={assets.team_3} alt="" />
                    <h4 className='font-poppins pt-4 text-lg text-[#D7FB00]'>GENERAL MANAGER</h4>
                    <h3 className='font-oswald text-xl text-white font-semibold'>MIHAIL ANDREI</h3>
                </div>
                <div>
                    <img className='w-80 h-full rounded-3xl' src={assets.team_4} alt="" />
                    <h4 className='font-poppins pt-4 text-lg text-[#D7FB00]'>PERSONAL TRAINER</h4>
                    <h3 className='font-oswald text-xl text-white font-semibold'>ANNA WATFORD</h3>
                </div>
            </div>
        </div>
    )
}

export default OurTeam
