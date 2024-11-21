import React from 'react'
import { Carousel } from "@material-tailwind/react";
import { assets } from '../assets/assets';
import SmoothReveal from './SmoothReveal.tsx'

const Gym_Spaces = () => {
    return (
        <div id='link4' className='mt-24 h-[600px] px-7 gyms'>
            <div className='flex items-center justify-between px-7'>
                <div className='flex'>
                    <div className='w-1 h-1 border bg-[#D7FB00] opacity-60 md:w-2 md:h-2'></div>
                    <p className='text-xs font-oswald text-[#D7FB00] opacity-60 md:text-base'>Spaces, Gym</p>
                </div>

                <div className='border border-[#D7FB00] opacity-60 px-2 py-1 rounded-full'>
                    <p className='text-xs text-center font-oswald text-[#D7FB00] opacity-60 md:text-base'>03</p>
                </div>
            </div>

            <SmoothReveal><h1 className='text-white py-7 font-oswald font-semibold text-4xl text-center md:text-6xl'>GYM <span className='text-[#D7FB00]'>SNAPSHOTS</span></h1></SmoothReveal>
            <Carousel
                className="rounded-xl"
                navigation={({ setActiveIndex, activeIndex, length }) => (
                    <div className="absolute mt-10 top-full left-2/4 z-50 flex -translate-x-2/4 gap-2">
                        {new Array(length).fill("").map((_, i) => (
                            <span
                                key={i}
                                className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${activeIndex === i ? "w-8 bg-white" : "w-4 bg-white/50"
                                    }`}
                                onClick={() => setActiveIndex(i)}
                            />
                        ))}
                    </div>
                )}
            >
                <img
                    src={assets.slider_1}
                    alt="image 1"
                    className="h-full w-full object-cover"
                />
                <img
                    src={assets.slider_2}
                    alt="image 2"
                    className="h-full w-full object-cover"
                />
                <img
                    src={assets.slider_3}
                    alt="image 3"
                    className="h-full w-full object-cover"
                />
            </Carousel>
        </div>
    )
}

export default Gym_Spaces
