import React, {useState} from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {Navigation, Pagination, Mousewheel, Keyboard, Autoplay} from "swiper";
import {MdOutlineFavoriteBorder} from 'react-icons/md'
import img1 from "../../Home/Category/Rectangle 7.png";
import img2 from "../../Home/Category/Rectangle 9.png";
import img3 from "../../Home/Category/Rectangle 10.png";
import img4 from "../../Home/Category/Rectangle 11.png";
import {Link, useParams} from "react-router-dom";
import {useSelector} from "react-redux";
import {animateScroll} from 'react-scroll'


const Rec = () => {
    const clothes = useSelector(s => s.clothes.clothes);
    const  params = useParams();


    return (
        <div className='rec'>
            <h3 className='rec__title'>Вам может понравиться</h3>
            <Swiper
                slidesPerView={4}
                spaceBetween={10}
                speed={1000}
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
                {
                  clothes &&  clothes.filter((item, idx) => item.category === clothes.find(el => el.id == params.id).category && item.id != params.id).map((item) => (
                        <SwiperSlide key={item.id}>
                            <div className='category__content'>
                                <Link className='catalog__content-link' to={`/product/${item.id}`} onClick={() => animateScroll.scrollToTop({
                                    delay: 0,
                                    duration: 0
                                })}>
                                    <img className='category__img' src={img1} alt="img"/>
                                </Link>
                                <p className='rec__name'>{item.title}</p>
                                <p>{item.price}</p>
                            </div>
                        </SwiperSlide>
                    ))
                }
            </Swiper>
        </div>
    );
};

export default Rec;