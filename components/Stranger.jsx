import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';

const Stranger = () => {
  return (
    <div className='relative bg-stranger bg-repeat bg-cover bg-fixed md:h-[680px] h-[400px]'>
        <div className='container mx-auto'>
            <div>
                {/* text */}
                <div className='text-white flex flex-col justify-center items-center md:h-[680px] h-[400px] text-center'>
                    <h2 className='lg:text-[130px] md:text-[92px] text-[58px] font-di pb-4'>Don't Be A Stranger</h2>
                    <button className='font-ma text-[18px] border border-white py-3 px-8 flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="">Contact Us</a>
                    </button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Stranger