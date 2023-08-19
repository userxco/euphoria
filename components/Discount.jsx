import React, { useRef, useState } from 'react';
import x from '../assets/stylish-beautiful-woman-wearing-blue-scarf-with-yellow-handbag-fashion-model-1-1536x749.jpg';
import z from '../assets/pexels-rafael-barros-1716539-1-1536x749.jpg';


const Discount = () => {
  return (
    <div className='xl:py-[1rem] md:px-[6rem] lg:mb-32 md:pb-32 lg:pb-0'>
        <div className='container mx-auto'>
            <div className='flex justify-center items-center md:pt-44 pt-20'>
                {/* img */}
                <div className='lg:flex absolute shadow-xl px-2'>
                    <a href="">
                        <img src={z} alt="" />
                    </a>
                    <div className='py-32 lg:py-0'/>
                    <a href="">
                        <img src={x} alt="" />
                    </a>
                </div>
                {/* text */}
                <div className='relative z-10 lg:text-white text-center mt-12'>
                    <h2 className='md:text-[72px] text-[48px] font-di mb-4'>Just For You</h2>
                    <button className='font-ma text-[18px] border border-white/80 py-3 px-6 bg-white/80 text-black'>FLAT 40% OFF</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Discount