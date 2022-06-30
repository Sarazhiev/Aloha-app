import React from 'react';
import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
import img1 from "../Category/Rectangle 7.png";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const NewClothesSlider = ({clothes}) => {
    return (
        <Swiper
            slidesPerView={4}
            speed={1000}
            spaceBetween={30}
            pagination={{
                clickable: true,
            }}
            breakpoints={{
                120: {
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
            autoplay={{
                delay: 3500,
                disableOnInteraction: false,
            }}
            loop={true}
            autoPlay={true}
            keyboard={true}
            navigation={true}
            modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
            className="mySwiper"
        >
            {
                clothes && clothes.filter((item, idx, array) => idx > array.length - 5).map(item => (
                    <SwiperSlide key={item.id + item.title}>
                        <div className='category__content'>
                            <Link onClick={() => animateScroll.scrollToTop({
                                delay: 0,
                                duration: 0
                            })} className='catalog__content-link' to={`/product/${item._id}`}>
                                <img className='category__img' src={`http://localhost:4444${item.images[0]}`} alt="img"/>
                            </Link>
                            <p className='category__text'>{item.title}</p>
                        </div>
                    </SwiperSlide>
                ))
            }

        </Swiper>
    );
};

export default NewClothesSlider;