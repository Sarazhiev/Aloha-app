import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


import { Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";

const Banner = () => {
    return (
        <section>
            <Swiper

                navigation={true}
                mousewheel={false}
                pagination={{
                    clickable: true,
                }}
                keyboard={true}
                loop={true}
                loopFillGroupWithBlank={true}
                autoplay={{
                    delay: 3000
                }}
                className="mySwiper banner"
                modules={[Navigation, Pagination, Mousewheel, Keyboard, Autoplay]}
            >
                <SwiperSlide><div className='banner__bg'><h2 className='banner__title'>Новинки</h2></div></SwiperSlide>
                <SwiperSlide><div className='banner__bg'><h2 className='banner__title'>Новинки</h2></div></SwiperSlide>
                <SwiperSlide><div className='banner__bg'><h2 className='banner__title'>Новинки</h2></div></SwiperSlide>
                <SwiperSlide><div className='banner__bg'><h2 className='banner__title'>Новинки</h2></div></SwiperSlide>
                <SwiperSlide><div className='banner__bg'><h2 className='banner__title'>Новинки</h2></div></SwiperSlide>



            </Swiper>
        </section>
    );
};

export default Banner;