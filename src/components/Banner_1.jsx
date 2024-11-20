import React from 'react'
import { assets } from '../assets/assets'

const Banner_1 = () => {
  return (
    <div className='mt-20 bg-[#484848] h-full py-6 px-7 flex flex-col gap-7 justify-between items-center md:flex-row'>
      <div className='flex justify-center items-center gap-3'>
        <img src={assets.benefit_1} className='w-10 lg:w-12' alt="" />
        <p className='text-xl font-oswald font-semibold text-[#D7FB00] xl:text-2xl'>HIGH QUALITY EQUIPMENT</p>
      </div>

      <div className='flex justify-center items-center gap-3'>
        <img src={assets.benefit_2} className='w-10 lg:w-12' alt="" />
        <p className='text-xl font-oswald font-semibold text-[#D7FB00] xl:text-2xl'>ANYTIME TRAINING SESION </p>
      </div>

      <div className='flex justify-center items-center gap-3'>
        <img src={assets.benefit_3} className='w-10 lg:w-12' alt="" />
        <p className='text-xl font-oswald font-semibold text-[#D7FB00] xl:text-2xl'>ADVANCED CARE SUPPORT</p>
      </div>
    </div>
  )
}

export default Banner_1
