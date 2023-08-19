import React from 'react';
import x from '../assets/Frame-93-450x550 (1).jpg';
import z from '../assets/jewellery1.jpg';
import { AiOutlineLine } from 'react-icons/ai';

const Ring = () => {
  return (
    <div className='bg-[#f5f5f5] py-[4rem] sm:px-[6rem] md:px-0 px-4'>
        <div className='container mx-auto'>
            <div className='md:flex justify-center items-center xl:gap-x-32 gap-x-4'>
                {/* img */}
                <div className='xl:w-[45%] hidden md:flex'>
                    <img src={z} alt="" />
                </div>
                {/* text */}
                <div>
                    <div className='flex flex-col xl:flex-row gap-y-8'>
                        <div className='hover:scale-105 duration-300 cursor-pointer'>
                           <img src={x} alt="" /> 
                        </div>
                        <div className='flex flex-col justify-center items-center pl-8'>
                           <span className='text-[25px] font-ma w-[165px] text-[#c4704b]'>Diamond Ring</span>
                           <h6 className='font-ma text-[25px]'>$125</h6>
                           <a href="" className='flex justify-center items-center gap-x-2 font-ma text-[20px] hover:text-[#c4704b] transition-all'><AiOutlineLine />Shop Now</a> 
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Ring