import {Autoplay, Keyboard, Mousewheel, Navigation} from "swiper";
import img1 from "../Category/Rectangle 7.png";
import {useSelector} from "react-redux";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import React, {useState} from "react";
import SliderCard from "../../../Components/SliderCard";


const Slider = ({category, title, color, delay}) => {
    const clothes = useSelector(s =>  s.clothes.clothes);

    return (
        <section>
            <div className="container">
                <h2 className='category__title'>{title}</h2>
                <Swiper
                    slidesPerView={4}
                    spaceBetween={30}
                    speed={1000}
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
                        delay: delay,
                        disableOnInteraction: false,
                    }}
                    loop={true}
                    autoPlay={true}
                    keyboard={true}
                    navigation={true}
                    modules={[Navigation, Mousewheel, Keyboard, Autoplay]}
                    className="mySwiper category"
                >
                    {
                        clothes && clothes.filter((item) => item.category === category).map((item, idx) => (
                            <SwiperSlide key={idx}>
                                <div className='category__content'>
                                    <SliderCard item={item}/>
                                    <p style={{background: color }} className='category__text'>{item.title}</p>
                                </div>
                            </SwiperSlide>
                        ))
                    }

                </Swiper>
            </div>
        </section>
    );
};

export default Slider;