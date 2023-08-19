import React from 'react';
import { AiOutlineLine } from 'react-icons/ai';

const MapStyle = {
    width: '100%',
    height: 600
};

const SendMessage = () => {
  return (
    <div className='py-[4rem] xl:px-[6rem] px-4 w-full'>
        <div className='lg:container mx-auto'>
            <div className='lg:flex justify-center items-center'>
                {/* text */}
                <div className='w-full'>
                    <div>
                       <h5 className='font-ma font-bold'>CONTACT US</h5>
                       <h2 className='md:text-[78px] text-[38px] font-ma pb-4 md:pb-12'>Send <span className='text-[#c4704b]'>Message</span></h2> 
                    </div>
                    <div className='flex justify-between items-center gap-x-12 md:w-[72%]'>
                        <div className='flex flex-col w-[52%]'>
                            <span>Full Name*</span>
                            <input type="text" placeholder='Search products...' className='bg-transparent hover:text-[#c4704b] focus:outline-none w-full border-b border-gray-500 pb-2'/>
                        </div>
                        <div className='flex flex-col'>
                            <span>Email Address*</span>
                            <input type="text" placeholder='Search products...' className='bg-transparent hover:text-[#c4704b] focus:outline-none w-full border-b border-gray-500 pb-2'/>
                        </div>
                    </div>
                    <div className='flex flex-col pt-12'>
                        <span>Message*</span>
                        <input type="text" placeholder='Search products...' className='bg-transparent hover:text-[#c4704b] focus:outline-none w-[72%] border-b border-gray-500 md:pb-32 pb-12'/>
                        <div className='pt-12'>
                           <button className='font-ma text-[18px] w-[35%] md:w-[20%] text-white  border border-[#c4704b] bg-[#c4704b] py-3 px-4 flex 
                               justify-center items-center gap-x-2 hover:bg-black  hover:border-black
                               transition-all'><AiOutlineLine /><a href="">Contact Us</a>
                           </button> 
                        </div>
                    </div>
                </div>
                {/* map */}
                <div className='w-full pt-12 md:pt-0'>
                <iframe
                     src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.1222073449103!2d106.77590781537452!3d-6.2476228629146675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f11b12c11ab7%3A0xcd48f5c775249316!2sHumanity%20First%20Indonesia!5e0!3m2!1sid!2sid!4v1605684563677!5m2!1sid!2sid"
                     width={MapStyle.width}
                     height={MapStyle.height}
                     frameBorder="0"
                     style={{ border: 0 }}
                     allowFullScreen=""
                     aria-hidden="false"
                     tabIndex="0"
                     title="Humanity First Indonesia"
                />
                </div>
            </div>
        </div>
    </div>
  )
}

export default SendMessage