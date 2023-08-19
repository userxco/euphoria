import React from 'react';
import { FiMapPin } from 'react-icons/fi';
import { LuPhoneCall } from 'react-icons/lu';

const Navbar = () => {
  return (
    <div className='bg-[#ffece5] w-full h-[55px] px-4 font-cc'>
        <div className='flex justify-between items-center h-[55px]'>
            <div className='flex justify-center items-center gap-x-4'>
                <FiMapPin size={25}/>
                <span>Street 67, California</span>
            </div>
            <div className='flex justify-center items-center gap-x-4'>
                <LuPhoneCall size={25}/>
                <span>+24 (1) 458 3566</span>
            </div>
        </div>
    </div>
  )
}

export default Navbar