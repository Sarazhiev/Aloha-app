import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";
import img1 from './Rectangle 7.png'
import img2 from './Rectangle 9.png'
import img3 from './Rectangle 10.png'
import img4 from './Rectangle 11.png'
const Category = () => {

    return (

        <section className='category'>
            <div className="container">
                <h2 className='category__title'>Категории</h2>

            <Swiper
                slidesPerView={4}
                spaceBetween={30}
                pagination={{
                    clickable: true,
                }}

                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                loop={true}
                autoPlay={true}
                keyboard={true}
                navigation={true}
                modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                className="mySwiper"
            >
                <SwiperSlide><div className='category__content'><img className='category__img' src={img1} alt="img"/><p className='category__text'>Шубы</p></div></SwiperSlide>
                <SwiperSlide><div className='category__content'><img className='category__img' src={img2} alt="img"/><p className='category__text'>Парки</p></div></SwiperSlide>
                <SwiperSlide><div className='category__content'><img className='category__img' src={img3} alt="img"/><p className='category__text'>Пальто</p></div></SwiperSlide>
                <SwiperSlide><div className='category__content'><img className='category__img' src={img4} alt="img"/><p className='category__text'>Куртки</p></div></SwiperSlide>
            </Swiper>
            </div>
        </section>
    );
};

export default Category;