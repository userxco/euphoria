import React from 'react';
import a from '../assets/1-3.jpg';
import aa from '../assets/2.jpg';
import aaa from '../assets/3.jpg';
import aaaa from '../assets/4.jpg';
import aaaaa from '../assets/5-1.jpg';
import aaaaaa from '../assets/6.jpg';

const OurTeam = () => {
  return (
    <div className='py-[4rem] xl:px-[6rem] px-8 md:px-4 md:pb-52 pb-32'>
      <div className='container mx-auto'>
        <div>
          {/* text */}
          <div className='xl:leading-[55px] leading-[72px] xl:pb-32 md:pb-20 pb-12 flex flex-col justify-center items-start xl:pl-64'>
            <h5 className='text-[23px] font-ma'>OUR TEAM</h5>
            <h2 className='text-[72px] font-ma'>Experts Behind <span className='text-[#c4704b]'>Your Euphoria</span></h2>
          </div>
          {/* img */}
          <div className='grid lg:grid-cols-3 md:grid-cols-2 gap-8'>
            <div className='flex flex-col justify-center items-center '>
              <img src={a} alt="" className='hover:scale-105 duration-300 cursor-pointer'/>
              <h4 className='text-[25px] font-ma border-b border-[#c4704b] 3xl:w-[30%] pb-2 pt-6'>Sofie Debrov</h4>
              <span className='font-cc text-[#c4704b] pt-2'>Designer</span>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <img src={aa} alt="" className='hover:scale-105 duration-300 cursor-pointer'/>
              <h4 className='text-[25px] font-ma border-b border-[#c4704b] 3xl:w-[26%] pb-2 pt-6'>Xiao Zhang</h4>
              <span className='font-cc text-[#c4704b] pt-2'>Photographer</span>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <img src={aaa} alt="" className='hover:scale-105 duration-300 cursor-pointer'/>
              <h4 className='text-[25px] font-ma border-b border-[#c4704b] 3xl:w-[40%] pb-2 pt-6'>Kristine Molatov</h4>
              <span className='font-cc text-[#c4704b] pt-2'>Designer</span>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <img src={aaaa} alt="" className='hover:scale-105 duration-300 cursor-pointer'/>
              <h4 className='text-[25px] font-ma border-b border-[#c4704b] 3xl:w-[30%] pb-2 pt-6'>Eleanor Mist  </h4>
              <span className='font-cc text-[#c4704b] pt-2'>Blogger</span>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <img src={aaaaa} alt="" className='hover:scale-105 duration-300 cursor-pointer'/>
              <h4 className='text-[25px] font-ma border-b border-[#c4704b] 3xl:w-[31%] pb-2 pt-6'>Link Steward</h4>
              <span className='font-cc text-[#c4704b] pt-2'>Model</span>
            </div>
            <div className='flex flex-col justify-center items-center '>
              <img src={aaaaaa} alt="" className='hover:scale-105 duration-300 cursor-pointer'/>
              <h4 className='text-[25px] font-ma border-b border-[#c4704b] 3xl:w-[43%] pb-2 pt-6'>Daphney Laughlin</h4>
              <span className='font-cc text-[#c4704b] pt-2'>Model</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OurTeam