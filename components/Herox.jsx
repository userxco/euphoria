    // core version + navigation, pagination modules:
    import { Swiper, SwiperSlide } from 'swiper/react';
    import { Navigation, Pagination, EffectCoverflow } from 'swiper';
    // import Swiper and modules styles
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
    import { FiArrowRight, FiArrowLeft } from 'react-icons/fi';


    const Slider = () => {
    return (
        <div className='container'>
            <h1 className='heading'>Gallery</h1>
            <Swiper
            effect={'coverflow'}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            slidesPerView={'auto'}
            coverflowEffect={
                {
                    rotate: 0,
                    stretch: 0,
                    depth: 100,
                    modifier: 2.5,
                }
            }
            className='swiper_container'
            >
            <SwiperSlide>
                <img src={a} alt="" />
            </SwiperSlide>
            <SwiperSlide>
                <img src={aa} alt="" />    
            </SwiperSlide> 
            <SwiperSlide>
                <img src={aaa} alt="" />    
            </SwiperSlide> 
            <SwiperSlide>
                <img src={aaaa} alt="" />    
            </SwiperSlide> 
            <SwiperSlide>
                <img src={aaaaa} alt="" />    
            </SwiperSlide>
            <div className='slider-controler'>
                <div className='swiper-button-pre sliper-arrow'>
                    <FiArrowLeft />
                </div>
                <div className='swiper-button-pre sliper-arrow'>
                    <FiArrowRight />
                </div>
            </div> 
            </Swiper>
        </div>
    )
    }

    export default Slider