import React from 'react';
import x from '../assets/Mask-Group-5.jpg';
import { GrLocation } from 'react-icons/gr';
import { BsTelephonePlus } from 'react-icons/bs';

const OurOffices = () => {
  return (
    <div className='py-[1rem] md:py-[4rem] xl:px-[6rem] px-[1rem] md:px-6 text-[#575757]'>
        <div className='lg:container mx-auto'>
            <div className='lg:flex justify-center items-center'>
                {/* img */}
                <div className='w-full flex justify-start items-center lg:pr-12 xl:pr-0'>
                    <img src={x} alt="" className='xl:w-[75%] md:w-full'/>
                </div>
                {/* text */}
                <div className='pt-8 lg:pt-0'>
                    <h5 className='font-ma font-bold'>ADDRESS</h5>
                    <h2 className='md:text-[72px] text-[48px] font-ma text-black'>Our <span className='text-[#c4704b]'>Offices</span></h2>
                    <p className='font-cc'>Sit nunc et nec tincidunt etiam sit vitae. A mauris fermentum lorem
                         senectus eget etiam sit vitae. A mauris fermentum lorem senectus 
                         eget platea id arcu
                    </p>
                    <div className='md:flex'>
                        <div className='flex flex-col pr-12 gap-y-4'>
                            <h3 className='md:text-[48px] text-[28px] font-ma text-[#c4704b] py-4'>London</h3>
                            <div className='flex justify-start items-center gap-x-2'>
                               <GrLocation size={25}/>
                               <span>1 Sandal Road, London, N18 2AW</span>
                            </div>
                            <div className='flex justify-start items-center gap-x-2'>
                              <BsTelephonePlus size={25}/>
                              <span>070 4099 2620</span>
                            </div>
                        </div>
                        <div className='flex flex-col gap-y-4'>
                            <h3 className='md:text-[48px] text-[28px] font-ma text-[#c4704b] py-4'>California</h3>
                            <div className='flex justify-start items-center gap-x-2'>
                               <GrLocation size={25}/>
                               <span>3891 Ranchview, California 62639</span>
                            </div>
                            <div className='flex justify-start items-center gap-x-2'>
                              <BsTelephonePlus size={25}/>
                              <span>+24 (1) 458 3566</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default OurOffices