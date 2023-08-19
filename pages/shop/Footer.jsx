import React from 'react';
import x from '../assets/logo-1.svg';
import { AiOutlineMinus } from 'react-icons/ai';
import { BsArrowRight } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='2xl:p-[6rem] py-[4rem] md:py-12 xl:py-32 md:pb-32 p-2 bg-[#ffece5]'>
        <div className='container mx-auto'>
            <div className='xl:flex grid md:grid-cols-2 justify-between items-center space-y-8 md:space-y-0'>
                {/* logo */}
                <div>
                    <img src={x} alt="" />
                    <p className='font-cc'>Expect the unexpected. A great <br />place to be.</p>
                </div>
                {/* text */}
                <div className='space-y-4 w-[120px] xl:w-auto md:pt-12 xl:pt-0'>
                    <h4 className='text-[24px] font-ma pb-2 border-b border-[#c4704b]'>Shopping</h4>
                    <h5 className='font-cc text-gray-600 flex justify-start items-center pt-4'><AiOutlineMinus />About Us</h5>
                    <h5 className='font-cc text-gray-600 flex justify-start items-center'><AiOutlineMinus />Contact Us</h5>
                    <h5 className='font-cc text-gray-600 flex justify-start items-center'><AiOutlineMinus />FAQ </h5>
                </div>
                {/* text */}
                <div className='space-y-4 w-[120px] xl:w-auto'>
                    <h4 className='text-[24px] font-ma pb-2 border-b border-[#c4704b]'>Company</h4>
                    <h5 className='font-cc text-gray-600 flex justify-start items-center pt-4'><AiOutlineMinus />Euphoria Shop</h5>
                    <h5 className='font-cc text-gray-600 flex justify-start items-center'><AiOutlineMinus />Look Book</h5>
                    <h5 className='font-cc text-gray-600 flex justify-start items-center'><AiOutlineMinus />Our Policy</h5>
                </div>
                {/* text */}
                <div className='space-y-2 w-[400px] xl:pb-12'>
                    <h4 className='text-[24px] font-ma pb-2 border-b border-[#c4704b] w-[150px]'>Newsletter</h4>
                    <div className='flex justify-center items-center pt-6'>
                        <input name='email' type="text" placeholder='Your email address' className='bg-transparent w-full  border-none'/>
                        <BsArrowRight size={30} className='text-[#c4704b]'/>
                    </div>
                    <div className='border-b border-[#c4704b] h-[4px] w-[400px]'/>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer