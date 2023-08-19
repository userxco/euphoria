import React, { useRef } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';
import a from '../assets/6-3.jpg';
import aa from '../assets/1-2.jpg';
import aaa from '../assets/4-3.jpg';
import aaaa from '../assets/3-3.jpg';
import aaaaa from '../assets/2-3.jpg';
import x from '../assets/quote.svg';

const Reviews = () => {
  return (
    <div className='bg-[#f7f7f7] py-[6rem] md:px-[6rem] px-2 mt-96 lg:mt-0'>
        <div className='container mx-auto'>
          <Swiper pagination={true} modules={[Pagination, Autoplay]} grabCursor={ true } autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}>
            <SwiperSlide>
                <div className='flex flex-col md:flex-row justify-center items-center w-full pb-12 xl:pb-0'>
                    <div className='w-full'>
                       <img src={aaaaa} alt="" className='md:w-[80%]'/> 
                    </div>
                    <div className=''>
                        <img src={x} alt="" className='w-[120px]'/>
                        <p className='font-cc py-8'>Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Eligendi molestiae praesentium reprehenderit iste, 
                        tempora autem quibusdam dolorum, numquam ab quo, magni nemo dolor sequi 
                        voluptatum perferendis excepturi enim. Rerum, aliquam a? Minus corporis 
                        veniam sint ad exercitationem quidem earum quaerat..
                        </p>
                        <h5 className='font-ma text-[23px]'>Saige <span className='text-[#c4704b]'>Fuentes</span></h5>
                        <span className='font-cc text-[18px] text-[#aaaaaa]'>Fashion Designer</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center w-full pb-12 md:pb-0'>
                    <div className='w-full'>
                       <img src={a} alt="" className='md:w-[80%]'/> 
                    </div>
                    <div className=''>
                        <img src={x} alt="" className='w-[120px]'/>
                        <p className='font-cc py-8'>Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Eligendi molestiae praesentium reprehenderit iste, 
                        tempora autem quibusdam dolorum, numquam ab quo, magni nemo dolor sequi 
                        voluptatum perferendis excepturi enim. Rerum, aliquam a? Minus corporis 
                        veniam sint ad exercitationem quidem earum quaerat..
                        </p>
                        <h5 className='font-ma text-[23px]'>Saige <span className='text-[#c4704b]'>Fuentes</span></h5>
                        <span className='font-cc text-[18px] text-[#aaaaaa]'>Fashion Designer</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center w-full pb-12 md:pb-0'>
                    <div className='w-full'>
                       <img src={aa} alt="" className='md:w-[80%]'/> 
                    </div>
                    <div className=''>
                        <img src={x} alt="" className='w-[120px]'/>
                        <p className='font-cc py-8'>Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Eligendi molestiae praesentium reprehenderit iste, 
                        tempora autem quibusdam dolorum, numquam ab quo, magni nemo dolor sequi 
                        voluptatum perferendis excepturi enim. Rerum, aliquam a? Minus corporis 
                        veniam sint ad exercitationem quidem earum quaerat..
                        </p>
                        <h5 className='font-ma text-[23px]'>Saige <span className='text-[#c4704b]'>Fuentes</span></h5>
                        <span className='font-cc text-[18px] text-[#aaaaaa]'>Fashion Designer</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center w-full pb-12 md:pb-0'>
                    <div className='w-full'>
                       <img src={aaa} alt="" className='md:w-[80%]'/> 
                    </div>
                    <div className=''>
                        <img src={x} alt="" className='w-[120px]'/>
                        <p className='font-cc py-8'>Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Eligendi molestiae praesentium reprehenderit iste, 
                        tempora autem quibusdam dolorum, numquam ab quo, magni nemo dolor sequi 
                        voluptatum perferendis excepturi enim. Rerum, aliquam a? Minus corporis 
                        veniam sint ad exercitationem quidem earum quaerat..
                        </p>
                        <h5 className='font-ma text-[23px]'>Saige <span className='text-[#c4704b]'>Fuentes</span></h5>
                        <span className='font-cc text-[18px] text-[#aaaaaa]'>Fashion Designer</span>
                    </div>
                </div>
            </SwiperSlide>
            <SwiperSlide>
            <div className='flex flex-col md:flex-row justify-center items-center w-full pb-12 md:pb-0'>
                    <div className='w-full'>
                       <img src={aaaa} alt="" className='md:w-[80%]'/> 
                    </div>
                    <div className=''>
                        <img src={x} alt="" className='w-[120px]'/>
                        <p className='font-cc py-8'>Lorem ipsum, dolor sit amet consectetur 
                        adipisicing elit. Eligendi molestiae praesentium reprehenderit iste, 
                        tempora autem quibusdam dolorum, numquam ab quo, magni nemo dolor sequi 
                        voluptatum perferendis excepturi enim. Rerum, aliquam a? Minus corporis 
                        veniam sint ad exercitationem quidem earum quaerat..
                        </p>
                        <h5 className='font-ma text-[23px]'>Saige <span className='text-[#c4704b]'>Fuentes</span></h5>
                        <span className='font-cc text-[18px] text-[#aaaaaa]'>Fashion Designer</span>
                    </div>
                </div>
            </SwiperSlide>
          </Swiper>  
        </div>
    </div>
  )
}

export default Reviews