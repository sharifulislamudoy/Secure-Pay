import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import 'swiper/css/effect-fade';
import SlidePage1 from './SlidePage1';
import SlidePage2 from './SlidePage2';
import SlidePage3 from './SlidePage3';
import SlidePage4 from './SlidePage4';



const Home = () => {
    return (
        <>
            <Swiper
                modules={[Autoplay, Pagination]}
                autoplay={{ delay: 3000 }}
                loop
                speed={1000}
                dir="ltr"
                pagination={{ clickable: true}}
                spaceBetween={0}
                className='relative'
            >
                <SwiperSlide>
                    <SlidePage1></SlidePage1>
                </SwiperSlide>
                <SwiperSlide>
                    <SlidePage2></SlidePage2>
                </SwiperSlide>
                <SwiperSlide>
                    <SlidePage3></SlidePage3>
                </SwiperSlide>
                <SwiperSlide>
                    <SlidePage4></SlidePage4>
                </SwiperSlide>
            </Swiper>

        </>
    );
};

export default Home;