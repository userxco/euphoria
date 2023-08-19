import React from 'react';
import x from '../assets/quote.svg';
import { AiOutlineLine } from 'react-icons/ai';

const Quote = () => {
  return (
    <div className='py-[4rem] md:px-[6rem] px-2'>
        <div className='container mx-auto'>
            <div className='flex flex-col justify-between items-end space-y-8'>
                <div>
                   <div>
                     <img src={x} alt="" className='w-[120px]'/>
                   </div>
                   <h3 className='xl:text-[72px] text-[38px] xl:leading-[75px] leading-[50px] font-xma text-gray-600'>We Design With Love And Care And Present To You The Best That Can Be Offered</h3>
               </div>
                  <div>
                    <span className='flex justify-center items-center gap-x-1'><AiOutlineLine />SOFIE DEBROV</span>
                  </div>
            </div>
        </div>
    </div>
  )
}

export default Quote