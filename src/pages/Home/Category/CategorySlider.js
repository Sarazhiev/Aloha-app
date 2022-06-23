import React from 'react';
import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
import img1 from "./Rectangle 7.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const CategorySlider = ({clothes}) => {
    return (
        <Swiper
            slidesPerView={4}
            spaceBetween={30}
            speed={1000}
            pagination={{
                clickable: true,
            }}

            autoplay={{
                delay: 3000,
                disableOnInteraction: false,
            }}
            loop={true}
            autoPlay={true}
            keyboard={true}
            navigation={true}
            breakpoints={{
                320: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                350: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                420: {
                    slidesPerView: 1,
                    spaceBetween: 20
                },
                // when window width is >= 480px
                620: {
                    slidesPerView: 2,
                    spaceBetween: 10
                },

                // when window width is >= 640px
                621: {
                    slidesPerView: 3,
                    spaceBetween: 40
                },
                1024: {
                    slidesPerView: 4,
                    spaceBetween: 20
                }
            }}
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
        >
            {
                clothes && clothes.map(item => (
                    <SwiperSlide key={item.id}>
                        <div className='category__content'>
                            <Link onClick={() => animateScroll.scrollToTop({
                                delay: 0,
                                duration: 0
                            })} className='catalog__content-link' to={`/catalog/${item.category}`}>
                                <img className='category__img' src={img1} alt="img"/>
                            </Link>
                            <p className='category__text'>{item.category}</p>
                        </div>
                    </SwiperSlide>
                ))
            }
        </Swiper>
    );
};

export default CategorySlider;