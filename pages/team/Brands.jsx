import React from 'react';
import x from '../assets/pattern.png';
import { TbArrowRightBar } from 'react-icons/tb';


const Brands = () => {
  return (
    <div className='bg-[#fff8f6] md:h-[370px] h-[300px]'>
        <div className='absolute flex justify-between items-end w-full'>
           <img src={x} alt="" className='w-full md:h-[370px] h-[300px]'/> 
        </div>
        <div className='container mx-auto'>
            <div>
                {/* img */}
                <div className='flex flex-col justify-center items-center md:h-[370px] h-[300px]'>
                    <h2 className='md:text-[72px] text-[48px] font-ma'>Our <span className='text-[#c4704b]'>Team</span></h2>
                    <div className='flex justify-center items-center space-x-2'>
                      <h5 className='text-[20px] font-ma text-[#c4704b]'>Home</h5>
                      <TbArrowRightBar size={20}/>
                      <h5 className='text-[20px] font-ma'>Team</h5>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands