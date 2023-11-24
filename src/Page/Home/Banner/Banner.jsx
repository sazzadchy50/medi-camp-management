import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import { Autoplay, Pagination, Navigation } from 'swiper/modules';
const Banner = () => {
    return (
        <>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-[70vh] container "
      >
        <SwiperSlide className='relative'> 
            
            <img className='w-full h-full' src="https://i.ibb.co/TbWkJ24/1000-F-503372865-Kf-SGe-ALf0iz-Xrkpe-Afdz-Dv-HKLY2-MThw-O.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full' src="https://i.ibb.co/K6Xp7XT/africa-humanitarian-aid-doctor-taking-care-patient-23-2149117859.jpg" alt="" />
        </SwiperSlide>
        <SwiperSlide>
            <img className='w-full h-full' src="https://i.ibb.co/XVQzJDy/photo-1547082688-9077fe60b8f9-q-80-w-1932-auto-format-fit-crop-ixlib-rb-4-0.jpg" alt="" />
        </SwiperSlide>
        
        <SwiperSlide>
            <img className='w-full h-full ' src="https://i.ibb.co/Np3G8Yf/1000-F-476187066-f8-CLLu-MGDd-MOabx-Nl-Bj-Aj-JS0on0-BRni-Y.jpg" alt="" />
        </SwiperSlide>
        
       
        
      </Swiper>
        </>
    );
};

export default Banner;