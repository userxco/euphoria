import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';

const ForYou = () => {
  return (
    <div className='relative bg-fw bg-center bg-repeat bg-cover bg-fixed md:h-[600px] h-[400px] px-2'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-center md:items-start items-center md:h-[600px] h-[400px]'>
                <h2 className='md:text-[72px] text-[58px] font-di text-white text-center'>Know More About Our Deals</h2>
                <div className='py-4'>
                <button className='font-ma text-[18px] border border-white/80 py-3 px-6 bg-white/80 text-black'>FLAT 65% OFF</button>
                </div>
                <div>
                   <button className='font-ma text-[18px] border border-[#c4704b] bg-[#c4704b] text-white py-3 px-8 flex 
                    justify-center items-center gap-x-2 hover:bg-black hover:text-white hover:border-black
                    transition-all'><AiOutlineLine /><a href="">Contact Us</a>
                   </button> 
                </div>
            </div>
        </div>
    </div>
  )
}

export default ForYou