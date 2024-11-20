import React, { useState } from 'react'
import { assets } from '../assets/assets'
import SmoothReveal from './SmoothReveal.tsx'

const Classes = () => {

    const [currentImage, setCurrentImage] = useState(assets.class_2);
    const [activeLink, setActiveLink] = useState(null);

    const handleImageChange = (newImage, link) => {
        setCurrentImage(newImage);
        setActiveLink(link);
    }

    return (
        <div className='mt-24'>
            <div className='flex items-center justify-between px-7'>
                <div className='flex'>
                    <div className='w-1 h-1 border bg-[#D7FB00] opacity-60 md:w-2 md:h-2'></div>
                    <p className='text-xs font-oswald text-[#D7FB00] opacity-60 md:text-base'>GYM CLASSES</p>
                </div>

                <div className='border border-[#D7FB00] opacity-60 px-2 py-1 rounded-full'>
                    <p className='text-xs text-center font-oswald text-[#D7FB00] opacity-60 md:text-base'>02</p>
                </div>
            </div>

        <SmoothReveal><h1 className='text-white py-4 font-oswald font-semibold text-4xl text-center md:text-6xl'>OUR <span className='text-[#D7FB00]'>CLASSES</span></h1></SmoothReveal>
        <div className='flex px-7 py-6'>
            <div className='py-5 w-full'>
                <img src={currentImage} className='w-3/4 h-auto rounded-xl hidden md:block' alt="" />
            </div>

            <div className='py-6 flex flex-col gap-8 w-full mr-10'>
                <div> <h3 style={{backgroundColor: activeLink === 'strength' ? '#D7FB00' : '', color: activeLink === 'strength' ? 'black' : ''}} onClick={()=>handleImageChange(assets.class_2, 'strength')} className='font-oswald font-semibold text-white text-4xl md:text-2xl lg:text-2xl xl:text-4xl p-3 border-b cursor-pointer'>STRENGTH</h3> </div>
                <div> <h3 style={{backgroundColor: activeLink === 'aerobic' ? '#D7FB00' : '', color: activeLink === 'aerobic' ? 'black' : ''}} onClick={()=>handleImageChange(assets.class_1, 'aerobic')} className='font-oswald font-semibold text-white text-4xl md:text-2xl lg:text-2xl xl:text-4xl p-3 border-b cursor-pointer'>AEROBIC</h3> </div>
                <div> <h3 style={{backgroundColor: activeLink === 'conditioning' ? '#D7FB00' : '', color: activeLink === 'conditioning' ? 'black' : ''}} onClick={()=>handleImageChange(assets.class_3, 'conditioning')} className='font-oswald font-semibold text-white text-4xl md:text-2xl lg:text-2xl xl:text-4xl p-3 border-b cursor-pointer'>CONDITIONING</h3> </div>
                <div> <h3 style={{backgroundColor: activeLink === 'lifting' ? '#D7FB00' : '', color: activeLink === 'lifting' ? 'black' : ''}} onClick={()=>handleImageChange(assets.class_4, 'lifting')} className='font-oswald font-semibold text-white text-4xl md:text-2xl lg:text-2xl xl:text-4xl p-3 border-b cursor-pointer'>LIFTING</h3> </div>
                <div> <h3 style={{backgroundColor: activeLink === 'stretching' ? '#D7FB00' : '', color: activeLink === 'stretching' ? 'black' : ''}} onClick={()=>handleImageChange(assets.class_5, 'stretching')} className='font-oswald font-semibold text-white text-4xl md:text-2xl lg:text-2xl xl:text-4xl p-3 border-b cursor-pointer'>BOXING</h3> </div>
            </div>
        </div>

        </div>
    )
}

export default Classes
