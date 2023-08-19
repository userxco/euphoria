import React from 'react';
import x from '../assets/01-8.jpg';
import a from '../assets/woman-posing-floral-dresses-high-heels-4-1.jpg';

const Hero = () => {
  return (
    <div className='w-full xl:px-[1rem] md:pb-52'>
      <div className=' mx-auto'>
        <div className='md:flex justify-start items-start'>
          {/* text */}
          <div className='xl:w-[90%] 2xl:pl-32 sm:pl-4 pl-2 w-full py-[4rem]'>
            <h3 className='xl:text-[38px] md:text-[30px] text-[23px] font-ma'>lET'S LOVE FASHION</h3>
            <h1 className='xl:text-[88px] md:text-[70px] text-[48px] font-ma xl:leading-[90px] md:leading-[70px] leading-[60px]'>Stylish Closethes,</h1>
            <h1 className='xl:text-[88px] md:text-[70px] text-[48px] font-ma text-[#c4704b] xl:leading-[90px] md:leading-[70px] mb-4'>Stylish Life</h1>
            <p className='font-cc text-gray-500 w-[80%]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere 
              necessitatibus est aliquid voluptates aliquam ex, iste asperiores 
              tempore commodi voluptatibus.</p>
            
          </div>
          {/* img */}
          <div className='px-2 md:px-0 h-full w-full'>
              <img src={a} alt="" className='h-[400px] md:h-[500px] lg:h-auto'/>  
          </div>
          {/* text & img */}
          <div className='flex md:absolute xl:w-[50%] md:w-[60%] md:ml-44 lg:pl-32 md:mt-96 xl:pt-32 2xl:pt-0'>
              <div className='flex flex-col justify-center items-center md:mt-44 2xl:mt-0 xl:w-[50%] w-full font-ma md:text-[25px] text-[20px] mr-4'>
                <span>Men's Jecket</span>
                <span>$10 - $25</span>
                <button className='border-y-2 px-4 py-3 bg-[#c4704b] text-white mt-2 hover:text-black hover:bg-white hover:border-[#c4704b]'>Buy Now</button>
              </div>
              <div className='xl:w-[80%] w-full md:w-auto'>
                <img src={x} alt="" />
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Hero