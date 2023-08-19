import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-coverflow';
import a from '../assets/Frame-100-1-450x550.jpg';
import aa from '../assets//Frame-103-1-450x550.jpg';
import aaa from '../assets/Frame-107-450x550.jpg';
import aaaa from '../assets/Frame-93-450x550.jpg';
import aaaaa from '../assets/Frame-98-450x550.jpg';
import aaaaaa from '../assets/Frame-99-450x550.jpg';
import x from '../assets/01-6-450x550.jpg';
import z from '../assets/04-2-450x550.jpg';
import vv from '../assets/01-9-450x550.jpg';
import vvv from '../assets/04-7-450x550.jpg';
import vvvv from '../assets/01-7-450x550.jpg';
import vvvvv from '../assets/01-4-450x550.jpg';
import c from '../assets/01-8-450x550.jpg';
import { PiStarFill, PiStarHalfFill } from 'react-icons/pi';




const Slider = () => {
  return (
    <div className='relative md:py-[4rem] lg:px-[6rem] px-2 md:mt-44 lg:mt-0'>
      <div className='container mx-auto flex flex-col justify-center items-start py-12 sm:pl-20 md:pl-0'>
          <h4 className='font-ma md:text-[48px] text-[23px]'>BESTSELLER</h4>
          <h2 className='font-ma md:text-[72px] text-[48px] leading-[59px] md:leading-[72px] lg:leading-normal text-[#c4704b]'>Find The Best Picks</h2>
        </div>
        <div className='container mx-auto md:hidden sm:pl-20 md:pl-0 text-center'>
          
          <Swiper 
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={1}
          loop={true}
          spaceBetween={30}
          pagination={{
              clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          >
              <SwiperSlide >
                <div>
                  <img src={a} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={x} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={z} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvvvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mb-12'>
              <div>
                  <img src={c} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
      </div>
      <div className='container mx-auto hidden md:flex lg:hidden'>
          
          <Swiper 
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={2}
          loop={true}
          spaceBetween={30}
          
          className=''
          >
              <SwiperSlide >
                <div>
                  <img src={a} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={x} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={z} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvvvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mb-12'>
              <div>
                  <img src={c} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
      </div>
      <div className='container mx-auto hidden lg:flex'>
          
          <Swiper 
          grabCursor={true}
          autoplay={{
            delay: 2500,
            disableOnInteraction: false,
          }}
          slidesPerView={3}
          loop={true}
          spaceBetween={30}
          pagination={{
              clickable: true,
          }}
          modules={[Pagination, Autoplay]}
          className=''
          >
              <SwiperSlide >
                <div>
                  <img src={a} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={aaaaaa} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={x} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={z} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide>
              <div>
                  <img src={vvvvv} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
              <SwiperSlide className='mb-12'>
              <div>
                  <img src={c} alt=""/>
                  <div className='2xl:w-[450px] flex justify-between items-center font-ma'>
                    <div className=''>
                        <h5 className='font-semibold text-[18px]'>Denim Dress</h5>
                        <h5>Clothing</h5>
                    </div>
                    <div className='flex flex-col justify-end items-end'>
                        <h5 className='text-[20px]'>$125</h5>
                        <div className='flex'>
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarFill />
                           <PiStarHalfFill />
                        </div>
                    </div>
                  </div>
                </div>
              </SwiperSlide>
          </Swiper>
      </div>
      
    </div>
  )
}

export default Slider