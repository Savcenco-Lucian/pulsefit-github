import React from 'react'
import { assets } from '../assets/assets'
import SmoothReveal from './SmoothReveal.tsx'

const Banner_4 = () => {
    return (
        <div className='mt-24 mx-7 flex flex-col rounded-3xl bg-[#D7FB00] py-16'>
            <SmoothReveal><h2 className='font-oswald font-semibold text-center text-black text-4xl md:text-6xl'>JOIN US TODAY</h2></SmoothReveal>
            <p className='text-center mt-7 text-xl font-poppins text-black'>Unlock your fitness journey today. Reach out to join our dynamic gym community and start your transformation.</p>
            <div className="flex justify-center items-center mt-7">
                <a
                    href="#"
                    className="px-6 py-2 text-base font-semibold text-[#1E1E1E]  border border-[#1E1E1E] rounded-full md:text-lg hover:bg-[#1E1E1E] hover:text-[#D7FB00] transition"
                >
                    JOIN NOW
                </a>
                <a href="#" className=' bg-[#1E1E1E] rounded-full p-4 text-[#D7FB00]'>
                    <img src={assets.arrow_green} className='w-full h-full' alt="" />
                </a>
            </div>
        </div>
    )
}

export default Banner_4
