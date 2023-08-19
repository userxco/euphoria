import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import a from '../assets/9.jpg';
import aa from '../assets/8.jpg';
import aaa from '../assets/7.jpg';
import aaaa from '../assets/6-1.jpg';
import aaaaa from '../assets/5-3.jpg';
import aaaaaa from '../assets/3-2.jpg';
import aaaaaaa from '../assets/2-2.jpg';
import aaaaaaaa from '../assets/1-4 (1).jpg';
import aaaaaaaaa from '../assets/4-2.jpg';
import { RxDividerVertical } from 'react-icons/rx';
import { AiOutlineLine } from 'react-icons/ai';
import { useRef } from 'react';

const Update = () => {
  const progressContent = useRef(null);
  return (
    <div className='container mx-auto py-[4rem] xl:px-[6rem] px-8'>
      <div className='flex flex-col justify-center items-center'>
        <h4 className='md:text-[23px] text-[18px] font-ma'>LATEST ARTICLES</h4>
        <h2 className='md:text-[72px] text-[48px] font-ma mb-12'>Update <span className='text-[#c4704b]'>With Blogs</span></h2>
      </div>
      <div className='hidden lg:flex'>
      <Swiper
      grabCursor={ true }
      autoplay= {{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
      slidesPerView={3} 
      spaceBetween={30} 
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div>
            <div>
              <img src={a} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className='autoplay-progress pt-20'>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
      <div className='container mx-auto hidden md:flex lg:hidden'>
      <Swiper
      grabCursor={ true }
      autoplay= {{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
      slidesPerView={2} 
      spaceBetween={30} 
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div>
            <div>
              <img src={a} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className='autoplay-progress pt-20'>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
      <div className='md:hidden'>
      <Swiper
      grabCursor={ true }
      autoplay= {{
        delay: 2500,
        disableOnInteraction: false,
      }}
      
      slidesPerView={1} 
      spaceBetween={30} 
      pagination={{
        clickable: true,
      }}
      modules={[Pagination, Autoplay, Navigation]}
      >
        <SwiperSlide>
          <div>
            <div>
              <img src={a} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div>
            <div>
              <img src={aaaaaaaaa} alt="" />
            </div>
            <div>
              <div className='space-x-4 flex justify-start items-center font-cc text-gray-500 pt-8'>
                <a href="">09.10.2023</a>
                <RxDividerVertical className='text-red-700'/>
                <a href="">Lifestyle</a>
              </div>
              <h3 className='text-[23px] font-ma py-2 cursor-pointer hover:text-[#c4704b]'>Clothes Are The Spirit Of Fashion.</h3>
              <a href="">
                <button className='font-ma text-[18px] border border-white flex 
                    justify-center items-center gap-x-2 hover:bg-white hover:text-black 
                    transition-all'><AiOutlineLine /><a href="" className='cursor-pointer'>Read More</a>
                </button>
              </a>
            </div>
          </div>
        </SwiperSlide>
        <div className='autoplay-progress pt-20'>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
      </div>
    </div>
  )
}

export default Update