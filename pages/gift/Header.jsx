import React from 'react';
import x from '../assets/logo-1.svg';
import { CgMenuRight } from 'react-icons/cg';
import { BsHandbag } from 'react-icons/bs';
import { GoHeart } from 'react-icons/go';
import { RiArrowDownSFill } from 'react-icons/ri';

const Header = ({ setNavMobile }) => {
  return (
    <div className='w-full relative md:py-[2rem] px-2'>
        <div className='md:px-4'>
            <div className='flex justify-between items-center'>
                    {/* nav */}
                    <div className='hidden xl:flex xl:w-[60%] w-full'>
                        <ul className='flex font-cc gap-x-4'>
                            <a href="/" className='flex justify-center items-center gap-x-1 hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>
                               <li>Home</li><RiArrowDownSFill size={20}/> 
                            </a>
                            <a href="team" className='flex justify-center items-center gap-x-1 hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>
                               <li>Team</li><RiArrowDownSFill size={20}/> 
                            </a>
                            <a href="gift" className='flex justify-center items-center gap-x-1 text-[#c4704b] transition-all border-b border-[#c4704b]'>
                               <li>Gift</li><RiArrowDownSFill size={20}/> 
                            </a>
                            <a href="shop" className='flex justify-center items-center gap-x-1 hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>
                               <li>Shop</li><RiArrowDownSFill size={20}/> 
                            </a>
                            <a href="contact" className='flex justify-center items-center gap-x-1 hover:text-[#c4704b] transition-all hover:border-b border-[#c4704b]'>
                               <li>Contact Us</li>
                            </a>
                        </ul>
                    </div>
                    {/* logo */}
                    <div className='w-[50%]'>
                        <a href="/">
                          <img src={x} alt="" />  
                        </a>
                    </div>
                    {/* right nav mobile */}
                    <div>
                        <ul className='flex justify-center items-center font-cc gap-x-6'>
                            <div className='hidden lg:flex justify-center items-center gap-x-2 hover:text-[#c4704b] cursor-pointer'>
                               <li>Cart</li>
                               <BsHandbag size={25}/> 
                            </div>
                            <div className='hidden lg:flex justify-center items-center gap-x-2 hover:text-[#c4704b] cursor-pointer'>
                               <li>WishList</li>
                               <GoHeart size={25}/> 
                            </div>
                            <CgMenuRight onClick={() => setNavMobile(true)} className='xl:hidden text-3xl cursor-pointer'/>
                        </ul>
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Header