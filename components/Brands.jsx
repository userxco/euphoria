import React from 'react';
import x from '../assets/pattern.png';
import a from '../assets/Frame-105.svg';
import aa from '../assets/Frame-106.svg';
import aaa from '../assets/Frame-107.svg';
import aaaa from '../assets/Frame-108.svg';
import aaaaa from '../assets/Frame-109.svg';

const Brands = () => {
  return (
    <div className='bg-[#fff8f6] md:h-[500px] h-[700px] mb-52 sm:mb-72 lg:mb-0'>
        <div className='absolute flex justify-between items-end w-full'>
           <img src={x} alt="" className='w-full h-[500px]'/> 
        </div>
        <div className='container mx-auto'>
            <div>
                {/* img */}
                <div className='grid xl:grid-cols-5 md:grid-cols-3 grid-cols-2 justify-center pl-12 items-center md:h-[500px] h-[700px] md:gap-x-32 w-full relative z-10'>
                    <img src={a} alt="" className='md:w-full mt- md:mt-0 cursor-pointer hover:text-black'/>
                    <img src={aa} alt="" className='md:w-full cursor-pointer hover:text-black'/>
                    <img src={aaa} alt="" className='md:w-full cursor-pointer hover:text-black'/>
                    <img src={aaaa} alt="" className='md:w-full cursor-pointer hover:text-black'/>
                    <img src={aaaaa} alt="" className='md:w-full cursor-pointer hover:text-black'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Brands