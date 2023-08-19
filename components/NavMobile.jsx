import React from 'react';
import { IoClose } from 'react-icons/io';
import z from '../assets/logo-1.svg';
import { MdOutlineClose } from 'react-icons/md';
import { RiArrowDownSLine } from 'react-icons/ri';

const NavbarMobile = ({ setNavMobile }) => {
  return (
    <nav className='xl:hidden absolute z-10 w-full h-full bg-[#ffece5] text-black'>
        <div className='flex justify-between items-center space-x-24 py-4 border-b border-white'>
            <div onClick={() => setNavMobile(false)} className='cursor-pointer'>
                <MdOutlineClose  className='text-3xl absolute left-4 top-[54px] cursor-pointer'/>
                <span className='ml-12 font-cc text-[18px]'>Close</span>
            </div>
            
            <img src={z} alt="" />
        </div>
        <div className='pt-8 text-[30px] '>
                        <ul className='flex flex-col font-cc gap-x-4 space-y-6'>
                            <a href="/" className='flex justify-center items-center gap-x-1'>
                               <li className='hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>Home</li><RiArrowDownSLine size={20} />
                            </a>
                            <a href="team" className='flex justify-center items-center gap-x-1'>
                               <li className='hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>Team</li><RiArrowDownSLine size={20} />
                            </a>
                            <a href="gift" className='flex justify-center items-center gap-x-1'>
                               <li className='hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>Gift</li><RiArrowDownSLine size={20} />
                            </a>
                            <a href="shop" className='flex justify-center items-center gap-x-1'>
                               <li className='hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>Shop</li><RiArrowDownSLine size={20} />
                            </a>
                            <a href="" className='flex justify-center items-center gap-x-1'>
                               <li className='hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>Contact Us</li><RiArrowDownSLine size={20} />
                            </a>
                        </ul>
                    </div>
    </nav>
  )
}

export default NavbarMobile