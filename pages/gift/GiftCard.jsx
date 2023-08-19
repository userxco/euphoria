import React from 'react';
import a from '../assets/pexels-anna-nekrashevich-6202036-1.jpg';
import aa from '../assets/pexels-karolina-grabowska-4022210-1.jpg';
import aaa from '../assets/pexels-lisa-3147131-1.jpg';
import { AiOutlineLine } from 'react-icons/ai';

const GiftCard = () => {
  return (
    <div className='md:py-[10rem] py-12 2xl:px-[14rem] px-8'>
        <div className='container mx-auto'>
            <div className='md:flex justify-center items-center'>
                {/* img */}
                <div className='w-full xl:w-[80%] mr-6 xl:mr-20 flex justify-center items-center'>
                    <img src={a} alt="" />
                </div>
                {/* text */}
                <div className='w-full lg:w-auto'>
                    <h5 className='text-[23px] font-ma pt-8'>Gift Card</h5>
                    <h2 className='lg:text-[72px] text-[38px] leading-[50px] font-ma'>Online <span className='text-[#c4704b]'>Gift Card</span></h2>
                    <p className='font-cc md:py-8 py-4'>Get upto 30% discount on your order and enjoy other benefits with this 
                        gift card. Shop anytime, anywhere and at any branch of our brand. Our 
                        managers will help you throughout the process- at the time of purchase 
                        as well as at the time of use.
                    </p>
                    <div>
                    <button className='font-ma text-[18px] mt-4 border border-white bg-[#c4704b] text-white py-3 px-8 flex 
                    justify-center items-center gap-x-2 hover:bg-black  
                    transition-all'><AiOutlineLine /><a href="">Contact Us</a>
                    </button>
                    </div>
                </div>
            </div>
            <div className='md:flex justify-center items-center py-12'>
                {/* img */}
                <div className='lg:w-[45%] flex md:hidden'>
                    <img src={aa} alt="" />
                </div>
                {/* text */}
                <div className='w-full 2xl:pr-52'>
                    <h5 className='text-[23px] font-ma pt-8'>Gift Card</h5>
                    <h2 className='lg:text-[72px] text-[38px] md:leading-[70px] font-ma'>Birthday <span className='text-[#c4704b]'>Gift Card</span></h2>
                    <p className='font-cc md:py-8 py-4'>Get upto 30% discount on your order and enjoy other benefits with this 
                        gift card. Shop anytime, anywhere and at any branch of our brand. Our 
                        managers will help you throughout the process- at the time of purchase 
                        as well as at the time of use.
                    </p>
                    <div>
                    <button className='font-ma text-[18px] mt-4 border border-white bg-[#c4704b] text-white py-3 px-8 flex 
                    justify-center items-center gap-x-2 hover:bg-black  
                    transition-all'><AiOutlineLine /><a href="">Contact Us</a>
                    </button>
                    </div>
                </div>
                {/* img */}
                <div className='lg:w-[45%] hidden md:flex ml-6 lg:ml-20'>
                    <img src={aa} alt="" />
                </div>
            </div>
            <div className='md:flex justify-center items-center'>
                {/* img */}
                <div className='lg:w-[80%] 2xl:pr-52 mr-6 xl:mr-20'>
                    <img src={aaa} alt="" />
                </div>
                {/* text */}
                <div className='w-full lg:w-auto ml-6 lg:ml-0'>
                    <h5 className='text-[23px] font-ma pt-8'>Gift Card</h5>
                    <h2 className='lg:text-[72px] text-[38px] xl:leading-[50px] md:leading-[70px] font-ma'>Platinum <span className='text-[#c4704b]'>Gift Card</span></h2>
                    <p className='font-cc md:py-8 py-4'>Get upto 30% discount on your order and enjoy other benefits with this 
                        gift card. Shop anytime, anywhere and at any branch of our brand. Our 
                        managers will help you throughout the process- at the time of purchase 
                        as well as at the time of use.
                    </p>
                    <div>
                    <button className='font-ma text-[18px] mt-4 border border-white bg-[#c4704b] text-white py-3 px-8 flex 
                    justify-center items-center gap-x-2 hover:bg-black  
                    transition-all'><AiOutlineLine /><a href="">Contact Us</a>
                    </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default GiftCard